import React from "react";
import Image from "next/image";
import {
  Hero,
  HeroInner,
  Content,
  Eyebrow,
  Headline,
  Lead,
  Actions,
  PrimaryAction,
  SecondaryAction,
  TrustRow,
  TrustItem,
  Showcase,
  ImageCard,
  ImageOverlay,
  FloatingBadge,
  FloatingBadgeLabel,
  FloatingBadgeValue,
  InfoPanel,
  InfoLabel,
  InfoValue,
} from "./styles";

export default function HeroSection() {
  return (
    <Hero>
      <HeroInner>
        <Content>
          <Eyebrow>Rent a car Banjaluka</Eyebrow>

          <Headline>
            Premium vozila.
            <span>Jasna cijena. Brza rezervacija.</span>
          </Headline>

          <Lead>
            DISS RENT nudi provjerena vozila u Banjaluci bez depozita, uz jasne cijene, brzu potvrdu
            rezervacije i podrsku kada vam je potrebna.
          </Lead>

          <Actions>
            <PrimaryAction href="#search-bar">Provjeri dostupnost</PrimaryAction>
            <SecondaryAction href="tel:+38765626444">
              <i className="fa-solid fa-phone" />
              Pozovi odmah
            </SecondaryAction>
          </Actions>

          <TrustRow>
            <TrustItem>
              <i className="fa-solid fa-circle-check" />
              Bez depozita
            </TrustItem>
            <TrustItem>
              <i className="fa-solid fa-envelope-circle-check" />
              Potvrda emailom
            </TrustItem>
            <TrustItem>
              <i className="fa-solid fa-location-dot" />
              Preuzimanje u Banjaluci
            </TrustItem>
          </TrustRow>
        </Content>

        <Showcase>
          <ImageCard>
            <Image
              src="/1.jpg"
              alt="Premium rent a car vozilo u Banjaluci"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center 56%" }}
            />
            <ImageOverlay />
            <FloatingBadge>
              <FloatingBadgeLabel>Lokacija</FloatingBadgeLabel>
              <FloatingBadgeValue>Banjaluka</FloatingBadgeValue>
            </FloatingBadge>
          </ImageCard>

          <InfoPanel>
            <div>
              <InfoLabel>Pocetna cijena</InfoLabel>
              <InfoValue>od 60 KM / dan</InfoValue>
            </div>
            <div>
              <InfoLabel>Popust</InfoLabel>
              <InfoValue>4-7 dana automatski</InfoValue>
            </div>
            <div>
              <InfoLabel>Kontakt</InfoLabel>
              <InfoValue>Telefon, Viber, SMS</InfoValue>
            </div>
          </InfoPanel>
        </Showcase>
      </HeroInner>
    </Hero>
  );
}
