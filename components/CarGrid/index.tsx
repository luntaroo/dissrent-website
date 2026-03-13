"use client";

import React from "react";
import { Grid } from "./styles";
import CarCard from "../CarCard";
import { CAR_DATA } from "@/lib/carData";
import type { BookingContext } from "@/lib/types";

interface Props {
  onBook: (ctx: BookingContext) => void;
}

export default function CarGrid({ onBook }: Props) {
  return (
    <Grid>
      {CAR_DATA.map((car, i) => (
        <CarCard key={i} car={car} onBook={onBook} />
      ))}
    </Grid>
  );
}
