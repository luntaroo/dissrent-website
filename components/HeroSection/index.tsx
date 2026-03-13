"use client";

import React from "react";
import Image from "next/image";
import {
  Hero,
  HeroBgImage,
  DarkOverlay,
  Accent,
  AccentRight,
  AccentBottom,
  Spotlight,
  Content,
  TopRow,
  LocationTag,
  LocationIcon,
  PriceBadge,
  PriceNumber,
  PriceUnit,
  Headline,
  Separator,
  TrustRow,
  TrustItem,
  TrustCheck,
  TrustText,
  CtaButton,
} from "./styles";

export default function HeroSection() {
  function scrollToSearch() {
    const el =
      document.getElementById("search-bar") ??
      document.querySelector("[class*='SearchWrapper']");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Hero>
      <HeroBgImage>
        <Image
          src="/1.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
      </HeroBgImage>
      <DarkOverlay />
      <Accent />
      <AccentRight />
      <AccentBottom />
      <Spotlight />
      <Content>
        <TopRow>
          <LocationTag>
            <LocationIcon className="fa-solid fa-location-dot" />
            BANJALUKA
          </LocationTag>
          <PriceBadge>
            <span>OD</span>
            <PriceNumber>60</PriceNumber>
            <PriceUnit>KM/DAN</PriceUnit>
          </PriceBadge>
        </TopRow>

        <Headline>
          IZNAJMI<br />
          <span>AUTOMOBIL</span><br />
          DANAS.
        </Headline>

        <Separator />

        <TrustRow>
          <TrustItem>
            <TrustCheck className="fa-solid fa-check" />
            <TrustText>Bez depozita</TrustText>
          </TrustItem>
          <TrustItem>
            <TrustCheck className="fa-solid fa-check" />
            <TrustText>Bez skrivenih troškova</TrustText>
          </TrustItem>
          <TrustItem>
            <TrustCheck className="fa-solid fa-check" />
            <TrustText>6 vozila na raspolaganju</TrustText>
          </TrustItem>
        </TrustRow>

        <CtaButton onClick={scrollToSearch}>
          REZERVIŠI ODMAH
        </CtaButton>
      </Content>
    </Hero>
  );
}
