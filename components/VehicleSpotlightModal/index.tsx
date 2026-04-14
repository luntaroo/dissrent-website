"use client";

import React, { useEffect } from "react";
import type { BookingContext, Car, CarAvailabilitySummary } from "@/lib/types";
import {
  Overlay,
  Panel,
  Visual,
  VisualOverlay,
  VisualBadgeRow,
  VisualBadge,
  CloseButton,
  Copy,
  Eyebrow,
  Title,
  Subtitle,
  Section,
  SectionTitle,
  PricingTable,
  PricingRow,
  PricingLabel,
  PricingValue,
  InsightGrid,
  InsightCard,
  InsightLabel,
  InsightValue,
  TripBox,
  TripRow,
  FeatureList,
  FeatureItem,
  ActionRow,
  SecondaryButton,
  PrimaryButton,
} from "./styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onBook: (ctx: BookingContext) => void;
  car?: Car;
  availability?: CarAvailabilitySummary;
  bookingContext?: BookingContext;
}

function getAvailabilityText(availability?: CarAvailabilitySummary) {
  if (!availability) {
    return "Dostupnost se provjerava po odabranom terminu.";
  }

  if (availability.isAvailableForWindow) {
    return "Vozilo je spremno za prvi naredni slobodan termin.";
  }

  if (availability.firstAvailableLabel) {
    return `Prvi slobodan termin: ${availability.firstAvailableLabel}.`;
  }

  return "Kontaktirajte nas za naredni raspoloziv termin.";
}

export default function VehicleSpotlightModal({
  isOpen,
  onClose,
  onBook,
  car,
  availability,
  bookingContext,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!car) {
    return null;
  }

  const previewContext: BookingContext = {
    carName: car.name,
    carImg: car.img,
    price1: car.price1,
    price2: car.price2,
    days: bookingContext?.days,
    pickupDate: bookingContext?.pickupDate,
    returnDate: bookingContext?.returnDate,
    totalPrice: bookingContext?.totalPrice,
    pricingMode: bookingContext?.pricingMode,
  };

  return (
    <Overlay
      $open={isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <Panel $open={isOpen}>
        <CloseButton type="button" onClick={onClose} aria-label="Zatvori detalje vozila">
          <i className="fa-solid fa-xmark" />
        </CloseButton>

        <Visual $img={car.img}>
          <VisualOverlay />
          <VisualBadgeRow>
            <VisualBadge>{car.name}</VisualBadge>
            <VisualBadge>{getAvailabilityText(availability)}</VisualBadge>
          </VisualBadgeRow>
        </Visual>

        <Copy>
          <Eyebrow>Pregled vozila</Eyebrow>
          <Title>{car.name}</Title>
          <Subtitle>
            Pregledajte cijene, dostupnost i osnovne uslove najma prije nego sto posaljete rezervaciju.
          </Subtitle>

          <Section>
            <SectionTitle>Cijene najma</SectionTitle>
            <PricingTable>
              <PricingRow>
                <PricingLabel>1-3 dana</PricingLabel>
                <PricingValue>{car.price1} KM / dan</PricingValue>
              </PricingRow>
              <PricingRow>
                <PricingLabel>4-7 dana</PricingLabel>
                <PricingValue>{car.price2} KM / dan</PricingValue>
              </PricingRow>
              <PricingRow>
                <PricingLabel>8+ dana</PricingLabel>
                <PricingValue>Po dogovoru</PricingValue>
              </PricingRow>
            </PricingTable>
          </Section>

          <InsightGrid>
            <InsightCard>
              <InsightLabel>Status</InsightLabel>
              <InsightValue>
                {availability?.isAvailableForWindow ? "Spremno za rezervaciju" : "Provjerite termin"}
              </InsightValue>
            </InsightCard>
            <InsightCard>
              <InsightLabel>Dodatne pogodnosti</InsightLabel>
              <InsightValue>Bez depozita i bez skrivenih troskova</InsightValue>
            </InsightCard>
          </InsightGrid>

          {bookingContext?.days ? (
            <TripBox>
              <TripRow>
                <span>Odabrani period</span>
                <strong>{bookingContext.days} dana</strong>
              </TripRow>
              <TripRow>
                <span>Procijenjena cijena</span>
                <strong>
                  {bookingContext.totalPrice == null ? "Cijena po dogovoru" : `${bookingContext.totalPrice} KM`}
                </strong>
              </TripRow>
            </TripBox>
          ) : null}

          <Section>
            <SectionTitle>Sta je ukljuceno</SectionTitle>
            <FeatureList>
              <FeatureItem>
                <i className="fa-solid fa-circle-check" />
                Online dostupnost i cijena za odabrani termin
              </FeatureItem>
              <FeatureItem>
                <i className="fa-solid fa-circle-check" />
                Potvrda rezervacije preko email linka
              </FeatureItem>
              <FeatureItem>
                <i className="fa-solid fa-circle-check" />
                Kontakt putem telefona, Vibera ili SMS-a
              </FeatureItem>
            </FeatureList>
          </Section>

          <ActionRow>
            <SecondaryButton type="button" onClick={onClose}>
              Nazad na pregled
            </SecondaryButton>
            <PrimaryButton
              type="button"
              onClick={() => {
                onClose();
                onBook(previewContext);
              }}
            >
              Rezervisi ovo vozilo
            </PrimaryButton>
          </ActionRow>
        </Copy>
      </Panel>
    </Overlay>
  );
}
