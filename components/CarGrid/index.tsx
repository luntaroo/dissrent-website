"use client";

import React from "react";
import { Grid } from "./styles";
import CarCard from "../CarCard";
import { CAR_DATA } from "@/lib/carData";
import type { BookingContext, CarAvailabilityMap } from "@/lib/types";

interface Props {
  onBook: (ctx: BookingContext) => void;
  onPreview: (ctx: BookingContext) => void;
  availabilityByCar: CarAvailabilityMap;
}

export default function CarGrid({ onBook, onPreview, availabilityByCar }: Props) {
  return (
    <Grid>
      {CAR_DATA.map((car) => (
        <CarCard
          key={car.img}
          car={car}
          onBook={onBook}
          onPreview={onPreview}
          availability={availabilityByCar[car.img]}
        />
      ))}
    </Grid>
  );
}
