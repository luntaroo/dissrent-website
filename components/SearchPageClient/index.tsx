"use client";

import React, { useState } from "react";
import SearchResultsOverview from "../SearchResultsOverview";
import BookingFlowModal from "../BookingFlowModal";
import Footer from "../Footer";
import Navbar from "../Navbar";
import BookingSearchBar from "../BookingSearchBar";
import VehicleSpotlightModal from "../VehicleSpotlightModal";
import styled from "styled-components";
import type { Car, SearchResult, BookingContext, CarAvailabilityMap } from "@/lib/types";
import { bodyFont, heavyFont } from "../shared/mixins";

interface Props {
  result: SearchResult;
  cars: Car[];
  blockedImgs: string[];
  availabilityByCar: CarAvailabilityMap;
}

const PageShell = styled.div`
  position: relative;
`;

const HeroBand = styled.section`
  background:
    radial-gradient(circle at top left, rgba(var(--gold-rgb), 0.18), transparent 26%),
    linear-gradient(180deg, var(--bg-dark-strong) 0%, #10151e 100%);
  padding: calc(var(--nav-h) + 16px) 0 74px;

  @media (max-width: 900px) {
    padding: calc(var(--nav-h) + 10px) 0 60px;
  }
`;

const PageContainer = styled.div`
  width: min(100% - 24px, var(--max-w));
  margin: 0 auto;
`;

const Intro = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
  gap: 14px;
  align-items: end;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const IntroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const IntroEyebrow = styled.span`
  ${bodyFont}
  width: fit-content;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-light);
`;

const IntroTitle = styled.h1`
  ${heavyFont}
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 0.94;
  color: var(--text-inverse);
  max-width: 10ch;
`;

const IntroText = styled.p`
  ${bodyFont}
  max-width: 700px;
  color: rgba(247, 248, 251, 0.66);
  font-size: 0.76rem;
  line-height: 1.46;
`;

const IntroStats = styled.div`
  display: grid;
  gap: 8px;
`;

const StatCard = styled.div`
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
`;

const StatLabel = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247, 248, 251, 0.46);
  margin-bottom: 6px;
`;

const StatValue = styled.div`
  ${heavyFont}
  color: var(--text-inverse);
  font-size: 1rem;
  line-height: 1;
`;

const ContentSection = styled.section`
  position: relative;
  margin-top: -48px;
  padding-bottom: 48px;

  @media (max-width: 900px) {
    margin-top: -36px;
    padding-bottom: 36px;
  }
`;

const SearchBarWrap = styled.div`
  margin-bottom: 18px;
`;

export default function SearchPageClient({ result, cars, blockedImgs, availabilityByCar }: Props) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingCtx, setBookingCtx] = useState<BookingContext | undefined>();
  const [previewCtx, setPreviewCtx] = useState<BookingContext | undefined>();

  function handleBook(ctx: BookingContext) {
    setBookingCtx(ctx);
    setBookingOpen(true);
  }

  const previewCar = previewCtx?.carImg ? cars.find((car) => car.img === previewCtx.carImg) : undefined;

  return (
    <PageShell>
      <Navbar />

      <HeroBand>
        <PageContainer>
          <Intro>
            <IntroCopy>
              <IntroEyebrow>Rezultati pretrage</IntroEyebrow>
              <IntroTitle>Pronadjite vozilo za svoj termin.</IntroTitle>
              <IntroText>
                Ispod su vozila dostupna za vase datume, sa jasnim cijenama, popustima i svim vaznim
                informacijama prije rezervacije.
              </IntroText>
            </IntroCopy>

            <IntroStats>
              <StatCard>
                <StatLabel>Dostupna vozila</StatLabel>
                <StatValue>
                  {cars.length - blockedImgs.length} / {cars.length}
                </StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>Trajanje</StatLabel>
                <StatValue>{result.days > 0 ? `${result.days} dana` : "Odaberite termin"}</StatValue>
              </StatCard>
            </IntroStats>
          </Intro>
        </PageContainer>
      </HeroBand>

      <ContentSection>
        <PageContainer>
          <SearchBarWrap>
            <BookingSearchBar key={`${result.pickupDate}-${result.returnDate}`} initialResult={result} />
          </SearchBarWrap>

          <SearchResultsOverview
            result={result}
            cars={cars}
            blockedImgs={blockedImgs}
            availabilityByCar={availabilityByCar}
            onBook={handleBook}
            onPreview={(ctx) => setPreviewCtx(ctx)}
          />
        </PageContainer>
      </ContentSection>

      <BookingFlowModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        bookingContext={bookingCtx}
      />

      <VehicleSpotlightModal
        isOpen={Boolean(previewCtx)}
        onClose={() => setPreviewCtx(undefined)}
        onBook={handleBook}
        car={previewCar}
        availability={previewCar ? availabilityByCar[previewCar.img] : undefined}
        bookingContext={previewCtx}
      />

      <Footer />
    </PageShell>
  );
}
