"use client";

import React, { useState } from "react";
import ResultsSection from "../ResultsSection";
import BookingModal from "../BookingModal";
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import styled from "styled-components";
import type { Car, SearchResult, BookingContext } from "@/lib/types";

interface Props {
  result: SearchResult;
  cars: Car[];
  blockedImgs: string[];
}

const PageContainer = styled.div`
  width: 96%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px 0;
`;

export default function SearchPageClient({ result, cars, blockedImgs }: Props) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingCtx, setBookingCtx] = useState<BookingContext | undefined>();

  function handleBook(ctx: BookingContext) {
    setBookingCtx(ctx);
    setBookingOpen(true);
  }

  return (
    <>
      <PageContainer>
        <SearchBar />
        <ResultsSection result={result} cars={cars} blockedImgs={blockedImgs} onBook={handleBook} />
      </PageContainer>
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        bookingContext={bookingCtx}
      />
      <Footer />
    </>
  );
}
