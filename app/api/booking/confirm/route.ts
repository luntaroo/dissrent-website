import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { sendAdminEmail } from "@/lib/email";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  if (!token) {
    return NextResponse.redirect(`${baseUrl}/confirm?status=invalid`);
  }

  const booking = db.getBookingByToken(token);

  if (!booking || booking.status !== "pending") {
    return NextResponse.redirect(`${baseUrl}/confirm?status=invalid`);
  }

  db.confirmBooking(booking.id);

  // Auto-block the car's dates in the availability calendar
  db.blockDatesForBooking(booking.car_img, booking.pickup_date, booking.return_date);

  await sendAdminEmail({ ...booking, status: "confirmed" });

  return NextResponse.redirect(`${baseUrl}/confirm?status=success`);
}
