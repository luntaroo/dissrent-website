"use client";

import React from "react";
import {
  Card,
  Media,
  Bg,
  MediaOverlay,
  TopRow,
  StatusBadge,
  PriceBadge,
  Bottom,
  TitleRow,
  Title,
  AvailabilityText,
  PricingGrid,
  PricingCard,
  PricingLabel,
  PricingValue,
  BenefitRow,
  Benefit,
  ActionRow,
  GhostButton,
  BookBtn,
} from "./styles";
import type { Car, BookingContext, CarAvailabilitySummary } from "@/lib/types";

interface Props {
  car: Car;
  onBook: (ctx: BookingContext) => void;
  onPreview: (ctx: BookingContext) => void;
  availability?: CarAvailabilitySummary;
}

export default function CarCard({ car, onBook, onPreview, availability }: Props) {
  const isAvailableNow = availability?.isAvailableForWindow ?? true;
  const availabilityText = isAvailableNow
    ? "Dostupno za prvi naredni termin."
    : availability?.firstAvailableLabel
      ? `Prvi slobodan termin: ${availability.firstAvailableLabel}`
      : "Provjerite prvi slobodan termin.";

  const previewContext: BookingContext = {
    carName: car.name,
    carImg: car.img,
    price1: car.price1,
    price2: car.price2,
  };

  return (
    <Card>
      <Media>
        <Bg $img={car.img} />
        <MediaOverlay />

        <TopRow>
          <StatusBadge $available={isAvailableNow}>
            <i className={`fa-solid ${isAvailableNow ? "fa-circle-check" : "fa-hourglass-half"}`} />
            {isAvailableNow ? "Spremno za rezervaciju" : "Provjerite termin"}
          </StatusBadge>
          <PriceBadge>od {car.price1} KM / dan</PriceBadge>
        </TopRow>
      </Media>

      <Bottom>
        <TitleRow>
          <Title>{car.name}</Title>
          <AvailabilityText $available={isAvailableNow}>{availabilityText}</AvailabilityText>
        </TitleRow>

        <PricingGrid>
          <PricingCard>
            <PricingLabel>1-3 dana</PricingLabel>
            <PricingValue>{car.price1} KM / dan</PricingValue>
          </PricingCard>
          <PricingCard>
            <PricingLabel>4-7 dana</PricingLabel>
            <PricingValue>{car.price2} KM / dan</PricingValue>
          </PricingCard>
          <PricingCard>
            <PricingLabel>8+ dana</PricingLabel>
            <PricingValue>Po dogovoru</PricingValue>
          </PricingCard>
        </PricingGrid>

        <BenefitRow>
          <Benefit>
            <i className="fa-solid fa-shield-heart" />
            Bez depozita
          </Benefit>
          <Benefit>
            <i className="fa-solid fa-envelope-circle-check" />
            Email potvrda
          </Benefit>
          <Benefit>
            <i className="fa-solid fa-percent" />
            Transparentne tarife
          </Benefit>
        </BenefitRow>

        <ActionRow>
          <GhostButton type="button" onClick={() => onPreview(previewContext)}>
            Detalji
          </GhostButton>
          <BookBtn type="button" onClick={() => onBook(previewContext)}>
            Provjeri dostupnost
          </BookBtn>
        </ActionRow>
      </Bottom>
    </Card>
  );
}
