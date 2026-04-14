"use client";

import React, { useState } from "react";
import ResultCard from "../ResultCard";
import type { Car, SearchResult, BookingContext, CarAvailabilityMap } from "@/lib/types";
import { formatDate } from "@/lib/booking";
import {
  Section,
  OverviewGrid,
  SummaryCard,
  SummaryEyebrow,
  SummaryTitle,
  SummaryText,
  SummaryList,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
  StepList,
  StepItem,
  StepNumber,
  StepText,
  ResultsColumn,
  Toolbar,
  ToolbarCopy,
  Heading,
  Subtext,
  FilterRow,
  FilterButton,
  EmptyState,
  Grid,
} from "./styles";

interface Props {
  result: SearchResult;
  cars: Car[];
  blockedImgs?: string[];
  availabilityByCar: CarAvailabilityMap;
  onBook: (ctx: BookingContext) => void;
  onPreview: (ctx: BookingContext) => void;
}

type FilterMode = "all" | "available" | "deals";

export default function SearchResultsOverview({
  result,
  cars,
  blockedImgs = [],
  availabilityByCar,
  onBook,
  onPreview,
}: Props) {
  const [filterMode, setFilterMode] = useState<FilterMode>("all");
  const { pickupLocation, pickupDate, returnDate, days } = result;
  const availableCount = cars.length - blockedImgs.length;
  const hasDates = pickupDate !== "" && returnDate !== "" && days > 0;
  const datesText = hasDates
    ? `${formatDate(pickupDate)} - ${formatDate(returnDate)}`
    : "Termin nije ispravno odabran";

  const visibleCars = cars
    .filter((car) => {
      if (filterMode === "available") {
        return !blockedImgs.includes(car.img);
      }

      if (filterMode === "deals") {
        return days >= 4 ? !blockedImgs.includes(car.img) : car.price2 < car.price1;
      }

      return true;
    })
    .sort((a, b) => {
      const aBlocked = blockedImgs.includes(a.img) ? 1 : 0;
      const bBlocked = blockedImgs.includes(b.img) ? 1 : 0;

      if (aBlocked !== bBlocked) {
        return aBlocked - bBlocked;
      }

      return a.price1 - b.price1;
    });

  return (
    <Section>
      <OverviewGrid>
        <SummaryCard>
          <SummaryEyebrow>Vas termin</SummaryEyebrow>
          <SummaryTitle>Pregled vase rezervacije.</SummaryTitle>
          <SummaryText>
            Na jednom mjestu vidite lokaciju, trajanje najma i broj vozila dostupnih za odabrani
            termin.
          </SummaryText>

          <SummaryList>
            <SummaryItem>
              <SummaryLabel>Preuzimanje</SummaryLabel>
              <SummaryValue>{pickupLocation}</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Period</SummaryLabel>
              <SummaryValue>{datesText}</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Dostupna vozila</SummaryLabel>
              <SummaryValue>
                {availableCount} / {cars.length}
              </SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Trajanje</SummaryLabel>
              <SummaryValue>{days > 0 ? `${days} dana` : "Odaberite validan termin"}</SummaryValue>
            </SummaryItem>
          </SummaryList>

          <StepList>
            <StepItem>
              <StepNumber>1</StepNumber>
              <StepText>Odaberite vozilo koje vam najvise odgovara i otvorite detalje po potrebi.</StepText>
            </StepItem>
            <StepItem>
              <StepNumber>2</StepNumber>
              <StepText>Provjerite cijenu za svoj termin ili posaljite upit za duzi najam.</StepText>
            </StepItem>
            <StepItem>
              <StepNumber>3</StepNumber>
              <StepText>Posaljite rezervaciju, a potvrdu dobijate na email.</StepText>
            </StepItem>
          </StepList>
        </SummaryCard>

        <ResultsColumn>
          <Toolbar>
            <ToolbarCopy>
              <Heading>Vozila za odabrani termin</Heading>
              <Subtext>
                Ispod su vozila za vas termin, sa prikazom dostupnosti, cijene i osnovnih uslova
                rezervacije.
              </Subtext>
            </ToolbarCopy>

            <FilterRow>
              <FilterButton type="button" $active={filterMode === "all"} onClick={() => setFilterMode("all")}>
                Sva vozila
              </FilterButton>
              <FilterButton
                type="button"
                $active={filterMode === "available"}
                onClick={() => setFilterMode("available")}
              >
                Samo dostupna
              </FilterButton>
              <FilterButton
                type="button"
                $active={filterMode === "deals"}
                onClick={() => setFilterMode("deals")}
              >
                Najbolje ponude
              </FilterButton>
            </FilterRow>
          </Toolbar>

          {visibleCars.length === 0 && (
            <EmptyState>
              Trenutno nema vozila za izabrani filter. Promijenite filter ili termin i provjerite ponudu
              ponovo.
            </EmptyState>
          )}

          <Grid>
            {visibleCars.map((car) => (
              <ResultCard
                key={car.img}
                car={car}
                days={days}
                pickupDate={pickupDate}
                returnDate={returnDate}
                isBlocked={blockedImgs.includes(car.img)}
                availability={availabilityByCar[car.img]}
                onBook={onBook}
                onPreview={onPreview}
              />
            ))}
          </Grid>
        </ResultsColumn>
      </OverviewGrid>
    </Section>
  );
}
