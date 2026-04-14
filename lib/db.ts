import { getCloudflareContext } from "@opennextjs/cloudflare";
import { enumerateDateStrings } from "./booking";

export interface Booking {
  id: string;
  car_name: string | null;
  car_img: string | null;
  pickup_date: string | null;
  return_date: string | null;
  days: number | null;
  pickup_location: string | null;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  contact_preference: string;
  total_price: number | null;
  status: string;
  confirm_token: string | null;
  cancel_token: string | null;
  created_at: string;
}

export interface BlockedDate {
  car_img: string;
  date: string;
}

async function getD1(): Promise<D1Database> {
  const { env } = await getCloudflareContext();
  return env.DB;
}

const dbHelpers = {
  async createBooking(booking: Omit<Booking, "status">) {
    const db = await getD1();
    await db
      .prepare(
        `INSERT INTO bookings (id, car_name, car_img, pickup_date, return_date, days, pickup_location, customer_name, customer_phone, customer_email, contact_preference, total_price, status, confirm_token, cancel_token, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)`
      )
      .bind(
        booking.id,
        booking.car_name,
        booking.car_img,
        booking.pickup_date,
        booking.return_date,
        booking.days,
        booking.pickup_location,
        booking.customer_name,
        booking.customer_phone,
        booking.customer_email,
        booking.contact_preference,
        booking.total_price,
        booking.confirm_token,
        booking.cancel_token,
        booking.created_at
      )
      .run();
  },

  async getBookingByToken(token: string): Promise<Booking | null> {
    const db = await getD1();
    return db
      .prepare("SELECT * FROM bookings WHERE confirm_token = ?")
      .bind(token)
      .first<Booking>();
  },

  async getBookingByCancelToken(token: string): Promise<Booking | null> {
    const db = await getD1();
    return db
      .prepare("SELECT * FROM bookings WHERE cancel_token = ?")
      .bind(token)
      .first<Booking>();
  },

  async confirmBookingIfAvailable(
    id: string
  ): Promise<{ success: boolean; reason?: "not_found" | "not_pending" | "conflict" }> {
    const db = await getD1();

    const booking = await db
      .prepare("SELECT * FROM bookings WHERE id = ?")
      .bind(id)
      .first<Booking>();

    if (!booking) {
      return { success: false, reason: "not_found" };
    }

    if (booking.status !== "pending") {
      return { success: false, reason: "not_pending" };
    }

    if (
      booking.car_img &&
      booking.pickup_date &&
      booking.return_date &&
      (await dbHelpers.hasBlockingConflict(booking.car_img, booking.pickup_date, booking.return_date))
    ) {
      return { success: false, reason: "conflict" };
    }

    await db
      .prepare("UPDATE bookings SET status = 'confirmed', confirm_token = NULL WHERE id = ?")
      .bind(id)
      .run();

    if (booking.car_img && booking.pickup_date && booking.return_date) {
      const dates = enumerateDateStrings(booking.pickup_date, booking.return_date);
      const stmts = dates.map((date) =>
        db
          .prepare("INSERT OR IGNORE INTO car_blocked_dates (car_img, date) VALUES (?, ?)")
          .bind(booking.car_img, date)
      );
      if (stmts.length > 0) {
        await db.batch(stmts);
      }
    }

    return { success: true };
  },

  async getAllBookings(): Promise<Booking[]> {
    const db = await getD1();
    const result = await db
      .prepare("SELECT * FROM bookings ORDER BY created_at DESC")
      .all<Booking>();
    return result.results;
  },

  async getBlockedCarsForRange(start: string, end: string): Promise<string[]> {
    const db = await getD1();
    const result = await db
      .prepare("SELECT DISTINCT car_img FROM car_blocked_dates WHERE date >= ? AND date <= ?")
      .bind(start, end)
      .all<{ car_img: string }>();
    return result.results.map((r: { car_img: string }) => r.car_img);
  },

  async getBlockedDates(start: string, end: string): Promise<BlockedDate[]> {
    const db = await getD1();
    const result = await db
      .prepare("SELECT car_img, date FROM car_blocked_dates WHERE date >= ? AND date <= ? ORDER BY date")
      .bind(start, end)
      .all<BlockedDate>();
    return result.results;
  },

  async getBookingById(id: string): Promise<Booking | null> {
    const db = await getD1();
    return db.prepare("SELECT * FROM bookings WHERE id = ?").bind(id).first<Booking>();
  },

  async hasBlockingConflict(carImg: string, pickupDate: string, returnDate: string): Promise<boolean> {
    const db = await getD1();
    const row = await db
      .prepare(
        "SELECT 1 FROM car_blocked_dates WHERE car_img = ? AND date >= ? AND date <= ? LIMIT 1"
      )
      .bind(carImg, pickupDate, returnDate)
      .first();
    return Boolean(row);
  },

  async blockDatesForBooking(
    carImg: string | null,
    pickupDate: string | null,
    returnDate: string | null
  ): Promise<void> {
    if (!carImg || !pickupDate || !returnDate) return;
    const db = await getD1();
    const dates = enumerateDateStrings(pickupDate, returnDate);
    const stmts = dates.map((date) =>
      db
        .prepare("INSERT OR IGNORE INTO car_blocked_dates (car_img, date) VALUES (?, ?)")
        .bind(carImg, date)
    );
    if (stmts.length > 0) {
      await db.batch(stmts);
    }
  },

  async cancelBooking(id: string): Promise<void> {
    const db = await getD1();

    const booking = await db
      .prepare("SELECT * FROM bookings WHERE id = ?")
      .bind(id)
      .first<Booking>();
    if (!booking) return;

    await db
      .prepare(
        "UPDATE bookings SET status = 'cancelled', confirm_token = NULL, cancel_token = NULL WHERE id = ?"
      )
      .bind(id)
      .run();

    if (booking.car_img && booking.pickup_date && booking.return_date) {
      await db
        .prepare(
          "DELETE FROM car_blocked_dates WHERE car_img = ? AND date >= ? AND date <= ?"
        )
        .bind(booking.car_img, booking.pickup_date, booking.return_date)
        .run();
    }
  },

  async getBlockedDatesForCar(carImg: string): Promise<string[]> {
    const db = await getD1();
    const result = await db
      .prepare("SELECT date FROM car_blocked_dates WHERE car_img = ? ORDER BY date")
      .bind(carImg)
      .all<{ date: string }>();
    return result.results.map((r: { date: string }) => r.date);
  },

  async isDateReservedByConfirmedBooking(carImg: string, date: string): Promise<boolean> {
    const db = await getD1();
    const row = await db
      .prepare(
        "SELECT 1 FROM bookings WHERE status = 'confirmed' AND car_img = ? AND pickup_date <= ? AND return_date >= ? LIMIT 1"
      )
      .bind(carImg, date, date)
      .first();
    return Boolean(row);
  },

  async toggleBlockedDate(carImg: string, date: string): Promise<"blocked" | "unblocked" | "reserved"> {
    if (await dbHelpers.isDateReservedByConfirmedBooking(carImg, date)) {
      return "reserved";
    }

    const db = await getD1();
    const existing = await db
      .prepare("SELECT id FROM car_blocked_dates WHERE car_img = ? AND date = ?")
      .bind(carImg, date)
      .first();

    if (existing) {
      await db
        .prepare("DELETE FROM car_blocked_dates WHERE car_img = ? AND date = ?")
        .bind(carImg, date)
        .run();
      return "unblocked";
    } else {
      await db
        .prepare("INSERT INTO car_blocked_dates (car_img, date) VALUES (?, ?)")
        .bind(carImg, date)
        .run();
      return "blocked";
    }
  },
};

export default dbHelpers;
