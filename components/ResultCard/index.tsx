"use client";

import React from "react";
import {
  Card,
  Bg,
  Top,
  CarName,
  PriceLine,
  TotalPrice,
  NegotiableText,
  DiscountBadge,
  Bottom,
  ReserveBtn,
  BlockedOverlay,
  ZauzetoBadge,
  UnavailableBtn,
} from "./styles";
import type { Car, BookingContext } from "@/lib/types";

interface Props {
  car: Car;
  days: number;
  pickupDate: string;
  returnDate: string;
  isBlocked?: boolean;
  onBook: (ctx: BookingContext) => void;
}

export default function ResultCard({ car, days, pickupDate, returnDate, isBlocked, onBook }: Props) {
  if (isBlocked) {
    return (
      <Card>
        <Bg $img={car.img} />
        <BlockedOverlay>
          <ZauzetoBadge>ZAUZETO</ZauzetoBadge>
        </BlockedOverlay>
        <Top>
          <CarName>{car.name}</CarName>
          <PriceLine>
            od <strong>{car.price1} KM/DAN</strong>
          </PriceLine>
        </Top>
        <Bottom>
          <UnavailableBtn disabled>NEDOSTUPNO ZA OVAJ PERIOD</UnavailableBtn>
        </Bottom>
      </Card>
    );
  }

  const negotiable = days > 7;
  const discounted = days >= 4 && days <= 7;

  if (negotiable) {
    return (
      <Card>
        <Bg $img={car.img} />
        <Top>
          <CarName>{car.name}</CarName>
          <PriceLine>Period duži od 7 dana</PriceLine>
          <NegotiableText>CIJENA PO DOGOVORU</NegotiableText>
        </Top>
        <Bottom>
          <ReserveBtn
            $contact
            type="button"
            onClick={() => onBook({ carName: car.name, carImg: car.img, price1: car.price1, price2: car.price2, days, pickupDate, returnDate, totalPrice: null })}
          >
            KONTAKTIRAJ NAS
          </ReserveBtn>
        </Bottom>
      </Card>
    );
  }

  if (discounted) {
    const ppu = car.price2;
    const total = ppu * days;
    const discount = Math.round(((car.price1 - car.price2) / car.price1) * 100);
    return (
      <Card>
        <Bg $img={car.img} />
        <Top>
          <CarName>{car.name}</CarName>
          <PriceLine>
            - <strong>{ppu} KM/DAN</strong> | UKUPNO ZA {days} DANA:
          </PriceLine>
          <TotalPrice>{total} KM</TotalPrice>
          <DiscountBadge>▼ -{discount}% POPUST</DiscountBadge>
        </Top>
        <Bottom>
          <ReserveBtn
            type="button"
            onClick={() => onBook({ carName: car.name, carImg: car.img, price1: car.price1, price2: car.price2, days, pickupDate, returnDate, totalPrice: total })}
          >
            REZERVIŠI ZA {total} KM
          </ReserveBtn>
        </Bottom>
      </Card>
    );
  }

  if (days > 0) {
    const ppu = car.price1;
    const total = ppu * days;
    return (
      <Card>
        <Bg $img={car.img} />
        <Top>
          <CarName>{car.name}</CarName>
          <PriceLine>
            - <strong>{ppu} KM/DAN</strong> | UKUPNO ZA {days} DANA:
          </PriceLine>
          <TotalPrice>{total} KM</TotalPrice>
        </Top>
        <Bottom>
          <ReserveBtn
            type="button"
            onClick={() => onBook({ carName: car.name, carImg: car.img, price1: car.price1, price2: car.price2, days, pickupDate, returnDate, totalPrice: total })}
          >
            REZERVIŠI ZA {total} KM
          </ReserveBtn>
        </Bottom>
      </Card>
    );
  }

  return (
    <Card>
      <Bg $img={car.img} />
      <Top>
        <CarName>{car.name}</CarName>
        <PriceLine>
          od <strong>{car.price1} KM/DAN</strong>
        </PriceLine>
        <TotalPrice>{car.price1} KM/DAN</TotalPrice>
      </Top>
      <Bottom>
        <ReserveBtn
          type="button"
          onClick={() => onBook({ carName: car.name, carImg: car.img })}
        >
          REZERVIŠI SADA
        </ReserveBtn>
      </Bottom>
    </Card>
  );
}
