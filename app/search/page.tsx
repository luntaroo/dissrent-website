import db from "@/lib/db";
import { CAR_DATA } from "@/lib/carData";
import SearchPageClient from "@/components/SearchPageClient";
import type { SearchResult } from "@/lib/types";
import { buildCarAvailabilityMap } from "@/lib/availability";
import { BOOKING_LOCATION, diffDays, getTodayDateString, isDateRangeValid } from "@/lib/booking";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dostupna vozila za rezervaciju",
  description:
    "Pregledajte dostupna vozila, cijene i termine za rent a car u Banjaluci i nastavite rezervaciju online.",
};

interface PageProps {
  searchParams: Promise<{ pickupDate?: string; returnDate?: string; pickupLocation?: string; days?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const pickupDate = typeof params.pickupDate === "string" ? params.pickupDate : "";
  const returnDate = typeof params.returnDate === "string" ? params.returnDate : "";
  const isValidRange =
    isDateRangeValid(pickupDate, returnDate) &&
    pickupDate >= getTodayDateString();

  const blockedImgs =
    isValidRange
      ? await db.getBlockedCarsForRange(pickupDate, returnDate)
      : [];

  const result: SearchResult = {
    pickupLocation: BOOKING_LOCATION,
    pickupDate: isValidRange ? pickupDate : "",
    returnDate: isValidRange ? returnDate : "",
    days: isValidRange ? diffDays(pickupDate, returnDate) : 0,
  };

  const availabilityByCar = await buildCarAvailabilityMap(
    CAR_DATA,
    (carImg) => db.getBlockedDatesForCar(carImg),
    result.days > 0 ? result.days : 1,
    result.pickupDate || getTodayDateString()
  );

  return (
    <SearchPageClient
      result={result}
      cars={CAR_DATA}
      blockedImgs={blockedImgs}
      availabilityByCar={availabilityByCar}
    />
  );
}
