"use client";

import React from "react";
import { Section, InfoBar, InfoItem, InfoLabel, InfoSep, Heading, Grid } from "./styles";
import ResultCard from "../ResultCard";
import type { Car, SearchResult, BookingContext } from "@/lib/types";

interface Props {
  result: SearchResult;
  cars: Car[];
  blockedImgs?: string[];
  onBook: (ctx: BookingContext) => void;
}

function fmtDate(s: string): string {
  if (!s) return "—";
  const [y, m, d] = s.split("-");
  return `${d}.${m}.${y}.`;
}

export default function ResultsSection({ result, cars, blockedImgs = [], onBook }: Props) {
  const { pickupLocation, pickupDate, returnDate, days } = result;

  const datesText = pickupDate
    ? `${fmtDate(pickupDate)} – ${fmtDate(returnDate)}  (${days} DANA)`
    : "Nije odabrano";

  return (
    <Section>
      <InfoBar>
        <InfoItem>
          <InfoLabel>PICK-UP</InfoLabel>
          {pickupLocation.toUpperCase()}
        </InfoItem>
        <InfoSep>|</InfoSep>
        <InfoItem>
          <InfoLabel>DATES</InfoLabel>
          {datesText}
        </InfoItem>
      </InfoBar>

      <Heading>AVAILABLE CARS FOR YOUR TRIP</Heading>

      <Grid>
        {cars.map((car, i) => (
          <ResultCard
            key={i}
            car={car}
            days={days}
            pickupDate={pickupDate}
            returnDate={returnDate}
            isBlocked={blockedImgs.includes(car.img)}
            onBook={onBook}
          />
        ))}
      </Grid>
    </Section>
  );
}
