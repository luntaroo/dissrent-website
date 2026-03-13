"use client";

import React, { useState } from "react";
import styled from "styled-components";
import AdPopup from "../AdPopup";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import SearchBar from "../SearchBar";
import CarGrid from "../CarGrid";
import BookingModal from "../BookingModal";
import Footer from "../Footer";
import type { BookingContext } from "@/lib/types";

const PageContainer = styled.div`
  width: 96%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px 0;
`;

export default function DissRentPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingCtx, setBookingCtx] = useState<BookingContext | undefined>();

  function handleBook(ctx: BookingContext) {
    setBookingCtx(ctx);
    setBookingOpen(true);
  }

  return (
    <>
      <AdPopup />
      <Navbar />
      <HeroSection />
      <PageContainer>
        <SearchBar />
        <CarGrid onBook={handleBook} />
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
