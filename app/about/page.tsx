"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PageWrap,
  Container,
  PageTitle,
  TitleAccent,
  Section,
  SectionTitle,
  Text,
  List,
  ListItem,
  BackLink,
} from "@/components/InfoPage/styles";

export default function AboutPage() {
  return (
    <PageWrap>
      <Navbar />
      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> NAZAD NA POČETNU
        </BackLink>

        <PageTitle>O NAMA</PageTitle>
        <TitleAccent />

        <Section>
          <Text>
            <strong style={{ color: "var(--yellow-bar)" }}>DISS RENT</strong> je
            pouzdana rent-a-car agencija sa sjedištem u Banjaluci. Naša misija je
            jednostavna — pružiti Vam kvalitetno, pouzdano i pristupačno
            iznajmljivanje automobila bez skrivenih troškova i komplikacija.
          </Text>
        </Section>

        <Section>
          <SectionTitle>ZAŠTO MI?</SectionTitle>
          <List>
            <ListItem>Konkurentne cijene — već od 60 KM dnevno</ListItem>
            <ListItem>Bez depozita i skrivenih troškova</ListItem>
            <ListItem>Brza i jednostavna online rezervacija</ListItem>
            <ListItem>Flota od 6 kvalitetnih i održavanih vozila</ListItem>
            <ListItem>Fleksibilni uslovi najma — od jednog dana do više sedmica</ListItem>
            <ListItem>Popusti za duže periode (4+ dana)</ListItem>
            <ListItem>Personalizovana usluga — dostupni smo na Viber, telefon i email</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>NAŠA VIZIJA</SectionTitle>
          <Text>
            Želimo biti prvi izbor za iznajmljivanje automobila u Banjaluci i
            široj regiji. Fokusirani smo na transparentnost, kvalitet usluge i
            zadovoljstvo klijenata. Svako vozilo u našoj floti prolazi redovne
            tehničke preglede i održava se po najvišim standardima.
          </Text>
        </Section>

        <Section>
          <SectionTitle>KONTAKTIRAJTE NAS</SectionTitle>
          <Text>
            Imate pitanje ili želite posebnu ponudu? Javite nam se direktno:
          </Text>
          <List>
            <ListItem>Telefon / Viber: +387 65 000 000</ListItem>
            <ListItem>Email: rent@diss.com</ListItem>
            <ListItem>Lokacija: Banjaluka, Republika Srpska</ListItem>
          </List>
        </Section>
      </Container>
      <Footer />
    </PageWrap>
  );
}
