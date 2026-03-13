import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = path.join(process.cwd(), "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(path.join(DATA_DIR, "rentacar.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id TEXT PRIMARY KEY,
    car_name TEXT,
    car_img TEXT,
    pickup_date TEXT,
    return_date TEXT,
    days INTEGER,
    pickup_location TEXT,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    contact_preference TEXT NOT NULL,
    total_price INTEGER,
    status TEXT DEFAULT 'pending',
    confirm_token TEXT UNIQUE,
    cancel_token TEXT UNIQUE,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS car_blocked_dates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    car_img TEXT NOT NULL,
    date TEXT NOT NULL,
    UNIQUE(car_img, date)
  );
`);

// Migrate existing DB: add cancel_token column if it doesn't exist yet
try {
  db.exec("ALTER TABLE bookings ADD COLUMN cancel_token TEXT UNIQUE");
} catch {
  // Column already exists — safe to ignore
}

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

const dbHelpers = {
  createBooking(booking: Omit<Booking, "status">) {
    db.prepare(`
      INSERT INTO bookings (id, car_name, car_img, pickup_date, return_date, days, pickup_location, customer_name, customer_phone, customer_email, contact_preference, total_price, status, confirm_token, cancel_token, created_at)
      VALUES (@id, @car_name, @car_img, @pickup_date, @return_date, @days, @pickup_location, @customer_name, @customer_phone, @customer_email, @contact_preference, @total_price, 'pending', @confirm_token, @cancel_token, @created_at)
    `).run(booking);
  },

  getBookingByToken(token: string): Booking | undefined {
    return db.prepare("SELECT * FROM bookings WHERE confirm_token = ?").get(token) as Booking | undefined;
  },

  getBookingByCancelToken(token: string): Booking | undefined {
    return db.prepare("SELECT * FROM bookings WHERE cancel_token = ?").get(token) as Booking | undefined;
  },

  confirmBooking(id: string) {
    db.prepare("UPDATE bookings SET status = 'confirmed', confirm_token = NULL WHERE id = ?").run(id);
  },

  getAllBookings(): Booking[] {
    return db.prepare("SELECT * FROM bookings ORDER BY created_at DESC").all() as Booking[];
  },

  getBlockedCarsForRange(start: string, end: string): string[] {
    const rows = db.prepare(`
      SELECT DISTINCT car_img FROM car_blocked_dates
      WHERE date >= ? AND date <= ?
    `).all(start, end) as { car_img: string }[];
    return rows.map((r) => r.car_img);
  },

  getBlockedDates(start: string, end: string): BlockedDate[] {
    return db.prepare(`
      SELECT car_img, date FROM car_blocked_dates
      WHERE date >= ? AND date <= ?
      ORDER BY date
    `).all(start, end) as BlockedDate[];
  },

  getBookingById(id: string): Booking | undefined {
    return db.prepare("SELECT * FROM bookings WHERE id = ?").get(id) as Booking | undefined;
  },

  blockDatesForBooking(carImg: string | null, pickupDate: string | null, returnDate: string | null): void {
    if (!carImg || !pickupDate || !returnDate) return;
    const insert = db.prepare("INSERT OR IGNORE INTO car_blocked_dates (car_img, date) VALUES (?, ?)");
    const run = db.transaction(() => {
      const current = new Date(pickupDate);
      const end = new Date(returnDate);
      while (current <= end) {
        insert.run(carImg, current.toISOString().slice(0, 10));
        current.setDate(current.getDate() + 1);
      }
    });
    run();
  },

  cancelBooking(id: string): void {
    const booking = db.prepare("SELECT * FROM bookings WHERE id = ?").get(id) as Booking | undefined;
    if (!booking) return;
    const run = db.transaction(() => {
      db.prepare("UPDATE bookings SET status = 'cancelled' WHERE id = ?").run(id);
      if (booking.car_img && booking.pickup_date && booking.return_date) {
        db.prepare(
          "DELETE FROM car_blocked_dates WHERE car_img = ? AND date >= ? AND date <= ?"
        ).run(booking.car_img, booking.pickup_date, booking.return_date);
      }
    });
    run();
  },

  getBlockedDatesForCar(carImg: string): string[] {
    const rows = db.prepare(
      "SELECT date FROM car_blocked_dates WHERE car_img = ? ORDER BY date"
    ).all(carImg) as { date: string }[];
    return rows.map((r) => r.date);
  },

  toggleBlockedDate(carImg: string, date: string): "blocked" | "unblocked" {
    const existing = db.prepare(
      "SELECT id FROM car_blocked_dates WHERE car_img = ? AND date = ?"
    ).get(carImg, date);
    if (existing) {
      db.prepare("DELETE FROM car_blocked_dates WHERE car_img = ? AND date = ?").run(carImg, date);
      return "unblocked";
    } else {
      db.prepare("INSERT INTO car_blocked_dates (car_img, date) VALUES (?, ?)").run(carImg, date);
      return "blocked";
    }
  },
};

export default dbHelpers;
