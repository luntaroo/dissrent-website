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
`;

const SearchSection = styled.section`
  position: relative;
  margin-top: -56px;
  padding: 0 20px 18px;

  @media (max-width: 900px) {
    margin-top: -44px;
    padding: 0 12px 16px;
  }
`;

const SearchContainer = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

const HighlightsGrid = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
`;

const HighlightLabel = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gold-strong);
  margin-bottom: 10px;
`;

const HighlightTitle = styled.div`
  ${heavyFont}
  font-size: 0.9rem;
  line-height: 1.02;
  color: var(--text);
  margin-bottom: 8px;
`;

const HighlightText = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.72rem;
  line-height: 1.45;
`;

const FleetSection = styled.section`
  padding: 10px 20px 56px;

  @media (max-width: 900px) {
    padding: 6px 12px 44px;
  }
`;

const FleetContainer = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

const FleetIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.4fr);
  gap: 14px;
  align-items: end;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FleetCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FleetEyebrow = styled.span`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold-strong);
`;

const FleetTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.45rem, 2.8vw, 2rem);
  line-height: 0.95;
  color: var(--text);
  max-width: 10ch;
`;

const FleetText = styled.p`
  ${bodyFont}
  font-size: 0.76rem;
  line-height: 1.5;
  color: var(--text-muted);
  max-width: 620px;
`;

const FleetAside = styled.div`
  padding: 14px;
  border-radius: 18px;
  background: rgba(16, 24, 40, 0.92);
  color: var(--text-inverse);
  box-shadow: 0 28px 72px rgba(9, 12, 17, 0.2);
`;

const FleetAsideLabel = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 10px;
`;

const FleetAsideText = styled.p`
  ${bodyFont}
  color: rgba(247, 248, 251, 0.7);
  font-size: 0.72rem;
  line-height: 1.48;
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
