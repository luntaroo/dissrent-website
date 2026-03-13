import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  const carImg = req.nextUrl.searchParams.get("carImg");
  if (!carImg) {
    return NextResponse.json({ blockedDates: [] });
  }
  const blockedDates = db.getBlockedDatesForCar(carImg);
  return NextResponse.json({ blockedDates });
}
