import React from "react";
import db from "@/lib/db";
import { CAR_DATA } from "@/lib/carData";
import SearchPageClient from "@/components/SearchPageClient";
import type { SearchResult } from "@/lib/types";

interface PageProps {
  searchParams: Promise<{ pickupDate?: string; returnDate?: string; pickupLocation?: string; days?: string }>;
}

export default async function SearchPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const pickupDate = params.pickupDate ?? "";
  const returnDate = params.returnDate ?? "";
  const pickupLocation = params.pickupLocation ?? "Banjaluka";
  const days = parseInt(params.days ?? "0", 10);

  const blockedImgs =
    pickupDate && returnDate
      ? db.getBlockedCarsForRange(pickupDate, returnDate)
      : [];

  const result: SearchResult = { pickupLocation, pickupDate, returnDate, days };

  return <SearchPageClient result={result} cars={CAR_DATA} blockedImgs={blockedImgs} />;
}
