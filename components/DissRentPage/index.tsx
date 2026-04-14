"use client";

import React, { useState } from "react";
import styled from "styled-components";
import AdPopup from "../AdPopup";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import BookingSearchBar from "../BookingSearchBar";
import CarGrid from "../CarGrid";
import BookingFlowModal from "../BookingFlowModal";
import HomeReadySection from "../HomeReadySection";
import Footer from "../Footer";
import VehicleSpotlightModal from "../VehicleSpotlightModal";
import { CAR_DATA } from "@/lib/carData";
import type { BookingContext, CarAvailabilityMap } from "@/lib/types";
import { bodyFont, heavyFont } from "../shared/mixins";

const PageShell = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SearchSection = styled.section`
  position: relative;
  margin-top: -48px;
  padding: 0 20px 24px;
  z-index: 100;

  @media (max-width: 900px) {
    margin-top: -40px;
    padding: 0 12px 20px;
  }
`;

const SearchContainer = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

const HighlightsGrid = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const HighlightLabel = styled.div`
  ${bodyFont}
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
  margin-bottom: 10px;
`;

const HighlightTitle = styled.div`
  ${heavyFont}
  font-size: 0.95rem;
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 8px;
`;

const HighlightText = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.76rem;
  line-height: 1.5;
`;

const FleetSection = styled.section`
  padding: 16px 20px 64px;

  @media (max-width: 900px) {
    padding: 12px 12px 52px;
  }
`;

const FleetContainer = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

const FleetIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.4fr);
  gap: 16px;
  align-items: end;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FleetCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FleetEyebrow = styled.span`
  ${bodyFont}
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--primary);
`;

const FleetTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.5rem, 2.8vw, 2.1rem);
  line-height: 1.05;
  color: var(--text-heading);
  max-width: 10ch;
`;

const FleetText = styled.p`
  ${bodyFont}
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 620px;
`;

const FleetAside = styled.div`
  padding: 18px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--text-inverse);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);
`;

const FleetAsideLabel = styled.div`
  ${bodyFont}
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
`;

const FleetAsideText = styled.p`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.78rem;
  line-height: 1.55;
`;

interface Props {
  availabilityByCar: CarAvailabilityMap;
}

export default function DissRentPage({ availabilityByCar }: Props) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingCtx, setBookingCtx] = useState<BookingContext | undefined>();
  const [previewCtx, setPreviewCtx] = useState<BookingContext | undefined>();

  function handleBook(ctx: BookingContext) {
    setBookingCtx(ctx);
    setBookingOpen(true);
  }

  const previewCar = previewCtx?.carImg ? CAR_DATA.find((car) => car.img === previewCtx.carImg) : undefined;

  return (
    <PageShell>
      <AdPopup />
      <Navbar />
      <HeroSection />

      <SearchSection>
        <SearchContainer>
          <BookingSearchBar />

          <HighlightsGrid>
            <HighlightCard>
              <HighlightLabel>Bez depozita</HighlightLabel>
              <HighlightTitle>Rezervacija brzo i jednostavno.</HighlightTitle>
              <HighlightText>
                Odaberite termin, pregledajte cijenu i posaljite rezervaciju u svega nekoliko koraka.
              </HighlightText>
            </HighlightCard>
            <HighlightCard>
              <HighlightLabel>Jasne cijene</HighlightLabel>
              <HighlightTitle>Tacna ponuda za odabrani period.</HighlightTitle>
              <HighlightText>
                Dnevne tarife, popusti i uslovi najma prikazani su pregledno prije potvrde rezervacije.
              </HighlightText>
            </HighlightCard>
            <HighlightCard>
              <HighlightLabel>Podrska svaki dan</HighlightLabel>
              <HighlightTitle>Uvijek znate kome se javiti.</HighlightTitle>
              <HighlightText>
                Za dodatna pitanja dostupni su telefon, Viber i SMS, uz potvrdu rezervacije putem
                emaila.
              </HighlightText>
            </HighlightCard>
          </HighlightsGrid>
        </SearchContainer>
      </SearchSection>

      <FleetSection>
        <FleetContainer>
          <FleetIntro>
            <FleetCopy>
              <FleetEyebrow>Vozni park</FleetEyebrow>
              <FleetTitle>Izaberite vozilo koje odgovara vasem putovanju.</FleetTitle>
              <FleetText>
                Od gradskih modela do vozila za duze relacije, svako vozilo dolazi sa jasnom tarifom,
                osnovnim detaljima i dostupnoscu za odabrani termin.
              </FleetText>
            </FleetCopy>

            <FleetAside>
              <FleetAsideLabel>Zasto DISS RENT</FleetAsideLabel>
              <FleetAsideText>
                Pouzdana vozila, brza online rezervacija i fleksibilan kontakt cine da najam zavrsite
                jednostavno i bez neizvjesnosti.
              </FleetAsideText>
            </FleetAside>
          </FleetIntro>

          <CarGrid
            onBook={handleBook}
            onPreview={(ctx) => setPreviewCtx(ctx)}
            availabilityByCar={availabilityByCar}
          />
        </FleetContainer>
      </FleetSection>

      <HomeReadySection />

      <VehicleSpotlightModal
        isOpen={Boolean(previewCtx)}
        onClose={() => setPreviewCtx(undefined)}
        onBook={handleBook}
        car={previewCar}
        availability={previewCar ? availabilityByCar[previewCar.img] : undefined}
        bookingContext={previewCtx}
      />

      <BookingFlowModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        bookingContext={bookingCtx}
      />

      <Footer />
    </PageShell>
  );
}
