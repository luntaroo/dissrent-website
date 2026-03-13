"use client";

import React, { useState } from "react";
import {
  Overlay,
  Content,
  ImageContainer,
  ImagePlaceholder,
  Body,
  Title,
  Subtitle,
  CloseBtn,
  CloseX,
} from "./styles";

export default function AdPopup() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  function close() {
    setHidden(true);
    setTimeout(() => setMounted(false), 400);
  }

  if (!mounted) return null;

  return (
    <Overlay $hidden={hidden} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <Content $hidden={hidden}>
        <CloseX onClick={close}>&times;</CloseX>
        <ImageContainer>
          {/* To add an ad image: replace ImagePlaceholder with <img src="/ad.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
          <ImagePlaceholder>
            <i className="fa-solid fa-image" />
            <span>Postavi reklamu (zamijeni src na img ispod)</span>
          </ImagePlaceholder>
        </ImageContainer>
        <Body>
          <Title>POSEBNA PONUDA!</Title>
          <Subtitle>
            Rezerviši sada i ostvari popust do 30% na sve premium automobile.
            Ponuda traje ograničeno!
          </Subtitle>
          <CloseBtn onClick={close}>POGLEDAJ PONUDU</CloseBtn>
        </Body>
      </Content>
    </Overlay>
  );
}
