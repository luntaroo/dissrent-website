"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Overlay,
  Content,
  Visual,
  VisualOverlay,
  VisualBadge,
  VisualTitle,
  Body,
  BodyTop,
  Kicker,
  Title,
  Subtitle,
  FeatureRow,
  Feature,
  CloseBtn,
  CloseX,
} from "./styles";

export default function AdPopup() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const close = () => setOpen(false);
  const scrollToSearch = () => {
    document.getElementById("search-bar")?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <Overlay>
      <Content>
        <Visual>
          <Image
            src="/009.jpeg"
            alt="Posebna DISS RENT ponuda"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <VisualOverlay />
          <VisualBadge>Online rezervacija</VisualBadge>
          <VisualTitle>Popust do 30%</VisualTitle>
        </Visual>

        <Body>
          <BodyTop>
            <Kicker>Posebna ponuda</Kicker>
            <CloseX type="button" onClick={close} aria-label="Zatvori ponudu">
              &times;
            </CloseX>
          </BodyTop>

          <Title>Rezervisi ranije i vozi po boljoj cijeni.</Title>
          <Subtitle>
            Premium vozila po najboljim cijenama. Rezervisite online i ustedite do 30% na
            visedevni najam.
          </Subtitle>

          <FeatureRow>
            <Feature>
              <i className="fa-solid fa-check" />
              Bez depozita
            </Feature>
            <Feature>
              <i className="fa-solid fa-check" />
              Potvrda emailom
            </Feature>
            <Feature>
              <i className="fa-solid fa-check" />
              4-7 dana popust
            </Feature>
          </FeatureRow>

          <CloseBtn type="button" onClick={scrollToSearch}>
            Pogledaj vozila
          </CloseBtn>
        </Body>
      </Content>
    </Overlay>
  );
}
