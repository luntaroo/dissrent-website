import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  const cancelToken = req.nextUrl.searchParams.get("token");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  if (!cancelToken || typeof cancelToken !== "string" || cancelToken.length < 10) {
    return NextResponse.redirect(`${baseUrl}/confirm?status=invalid`);
  }

  // Look up by cancel_token, NOT by booking id
  const booking = db.getBookingByCancelToken(cancelToken);

  if (!booking || booking.status !== "confirmed") {
    return NextResponse.redirect(`${baseUrl}/confirm?status=invalid`);
  }

  db.cancelBooking(booking.id);

  return NextResponse.redirect(`${baseUrl}/confirm?status=cancelled`);
}
