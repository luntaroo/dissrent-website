"use client";

import React from "react";
import { Card, Bg, Top, Title, Price, Bottom, BookBtn, CursorIcon } from "./styles";
import type { Car, BookingContext } from "@/lib/types";

interface Props {
  car: Car;
  onBook: (ctx: BookingContext) => void;
}

export default function CarCard({ car, onBook }: Props) {
  return (
    <Card>
      <Bg $img={car.img} />
      <Top>
        <Title>{car.name}</Title>
        <Price>{car.price1} KM/DAN</Price>
      </Top>
      <Bottom>
        <BookBtn
          type="button"
          onClick={() => onBook({ carName: car.name, carImg: car.img, price1: car.price1, price2: car.price2 })}
        >
          REZERVIŠI
          <CursorIcon>
            <i className="fa-solid fa-arrow-pointer" />
            <span>KLIKNI</span>
          </CursorIcon>
        </BookBtn>
      </Bottom>
    </Card>
  );
}
