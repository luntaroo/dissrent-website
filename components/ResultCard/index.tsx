"use client";

import React from "react";
import {
  Card,
  Media,
  Bg,
  MediaOverlay,
  BadgeRow,
  StatusBadge,
  Content,
  CarName,
  Summary,
  PricingPanel,
  PricingRow,
  PricingLabel,
  PricingValue,
  Notice,
  ActionRow,
  GhostButton,
  PrimaryButton,
} from "./styles";
import type { Car, BookingContext, CarAvailabilitySummary } from "@/lib/types";

interface Props {
  car: Car;
  days: number;
  pickupDate: string;
  returnDate: string;
  isBlocked?: boolean;
  availability?: CarAvailabilitySummary;
  onBook: (ctx: BookingContext) => void;
  onPreview: (ctx: BookingContext) => void;
}

export default function ResultCard({
  car,
  days,
  pickupDate,
  returnDate,
  isBlocked,
  availability,
  onBook,
  onPreview,
}: Props) {
  const discounted = days >= 4 && days <= 7;
  const negotiable = days > 7;
  const isAvailable = !isBlocked;
  const dailyRate = discounted ? car.price2 : car.price1;
  const totalPrice = days > 0 && !negotiable && !isBlocked ? dailyRate * days : negotiable ? null : undefined;
  const previewContext: BookingContext = {
    carName: car.name,
    carImg: car.img,
    price1: car.price1,
    price2: car.price2,
    days,
    pickupDate,
    returnDate,
    totalPrice: totalPrice ?? null,
    pricingMode: negotiable ? "quote" : discounted ? "discount" : "standard",
  };

  const summaryText = isBlocked
    ? "Vozilo trenutno nije dostupno za odabrani termin, ali mozete pregledati detalje i prvi naredni slobodan datum."
    : negotiable
      ? "Za duzi najam pripremamo ponudu prema trajanju i uslovima rezervacije."
      : days > 0
        ? `Ukupna cijena za ${days} ${days === 1 ? "dan" : "dana"} prikazana je unaprijed kako biste odmah znali trosak najma.`
        : "Odaberite datume i odmah pogledajte cijenu i dostupnost za svoj termin.";

  const noticeText = isBlocked
    ? availability?.firstAvailableLabel
      ? `Prvi slobodan termin: ${availability.firstAvailableLabel}`
      : "Termin nije slobodan za odabrani period."
    : negotiable
      ? "Za duzi najam saljete upit, a ponudu dobijate direktno."
      : discounted
        ? `Aktivan popust za ${days} dana.`
        : "Termin je raspoloziv za online rezervaciju.";

  return (
    <Card>
      <Media>
        <Bg $img={car.img} />
        <MediaOverlay />

        <BadgeRow>
          <StatusBadge $tone={isBlocked ? "blocked" : negotiable ? "warning" : "available"}>
            <i
              className={`fa-solid ${
                isBlocked ? "fa-ban" : negotiable ? "fa-comments" : "fa-circle-check"
              }`}
            />
            {isBlocked ? "Nedostupno" : negotiable ? "Upit za duzi najam" : "Dostupno"}
          </StatusBadge>

          <StatusBadge $tone="neutral">
            {negotiable ? `${days} dana` : `od ${car.price1} KM / dan`}
          </StatusBadge>
        </BadgeRow>
      </Media>

      <Content>
        <CarName>{car.name}</CarName>
        <Summary>{summaryText}</Summary>

        <PricingPanel>
          <PricingRow>
            <PricingLabel>Odabrani period</PricingLabel>
            <PricingValue>{days > 0 ? `${days} dana` : "Nije odabran"}</PricingValue>
          </PricingRow>
          <PricingRow>
            <PricingLabel>Dnevna tarifa</PricingLabel>
            <PricingValue>{negotiable ? "Po dogovoru" : `${dailyRate} KM / dan`}</PricingValue>
          </PricingRow>
          <PricingRow>
            <PricingLabel>Ukupno</PricingLabel>
            <PricingValue>
              {days === 0 ? "-" : totalPrice == null ? "Cijena po dogovoru" : `${totalPrice} KM`}
            </PricingValue>
          </PricingRow>
        </PricingPanel>

        <Notice $available={isAvailable}>{noticeText}</Notice>

        <ActionRow>
          <GhostButton type="button" onClick={() => onPreview(previewContext)}>
            Detalji
          </GhostButton>

          <PrimaryButton
            type="button"
            disabled={isBlocked}
            onClick={() => onBook(previewContext)}
          >
            {isBlocked
              ? "Nedostupno"
              : totalPrice == null && days > 7
                ? "Posalji upit"
                : totalPrice == null && days === 0
                  ? "Provjeri dostupnost"
                  : `Rezervisi${typeof totalPrice === "number" ? ` za ${totalPrice} KM` : ""}`}
          </PrimaryButton>
        </ActionRow>
      </Content>
    </Card>
  );
}
