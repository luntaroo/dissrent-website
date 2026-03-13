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

export default function PrivacyPage() {
  return (
    <PageWrap>
      <Navbar />
      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> NAZAD NA POČETNU
        </BackLink>

        <PageTitle>POLITIKA PRIVATNOSTI</PageTitle>
        <TitleAccent />

        <Section>
          <Text>
            <strong style={{ color: "var(--yellow-bar)" }}>DISS RENT</strong> poštuje
            Vašu privatnost. Ova politika objašnjava koje podatke prikupljamo, zašto
            ih prikupljamo i kako ih koristimo.
          </Text>
        </Section>

        <Section>
          <SectionTitle>1. KOJE PODATKE PRIKUPLJAMO</SectionTitle>
          <Text>Prilikom rezervacije vozila prikupljamo sljedeće podatke:</Text>
          <List>
            <ListItem>Ime i prezime</ListItem>
            <ListItem>Broj telefona</ListItem>
            <ListItem>Email adresu</ListItem>
            <ListItem>Željeni datume najma</ListItem>
            <ListItem>Preferirani način kontakta (Viber ili SMS)</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. ZAŠTO PRIKUPLJAMO PODATKE</SectionTitle>
          <Text>Vaše podatke koristimo isključivo u sljedeće svrhe:</Text>
          <List>
            <ListItem>Obrada i potvrda Vaše rezervacije</ListItem>
            <ListItem>Komunikacija vezana za Vaš najam</ListItem>
            <ListItem>Slanje potvrde putem email-a</ListItem>
            <ListItem>Kontaktiranje putem odabranog kanala (Viber/SMS)</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. DIJELJENJE PODATAKA</SectionTitle>
          <Text>
            Vaše lične podatke <strong style={{ color: "#fff" }}>ne dijelimo</strong> sa
            trećim stranama, ne prodajemo ih niti koristimo u marketinške svrhe
            bez Vaše izričite saglasnosti.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. ČUVANJE PODATAKA</SectionTitle>
          <Text>
            Vaši podaci se čuvaju u našoj lokalnoj bazi podataka na zaštićenom
            serveru. Podaci o rezervacijama se čuvaju tokom trajanja poslovnog
            odnosa i u skladu sa zakonskim obavezama.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. VAŠA PRAVA</SectionTitle>
          <Text>Imate pravo na:</Text>
          <List>
            <ListItem>Uvid u Vaše lične podatke koje čuvamo</ListItem>
            <ListItem>Ispravku netačnih podataka</ListItem>
            <ListItem>Brisanje Vaših podataka (uz zakonska ograničenja)</ListItem>
            <ListItem>Prigovor na obradu podataka</ListItem>
          </List>
          <Text>
            Za ostvarivanje ovih prava, kontaktirajte nas putem email-a:
            rent@diss.com
          </Text>
        </Section>

        <Section>
          <SectionTitle>6. KOLAČIĆI (COOKIES)</SectionTitle>
          <Text>
            Naša web stranica koristi samo tehničke kolačiće neophodne za
            funkcionisanje sajta. Ne koristimo kolačiće za praćenje ili
            oglašavanje.
          </Text>
        </Section>

        <Section>
          <Text style={{ color: "#777", fontSize: 13 }}>
            Posljednje ažuriranje: Mart 2026. DISS RENT zadržava pravo izmjene
            politike privatnosti.
          </Text>
        </Section>
      </Container>
      <Footer />
    </PageWrap>
  );
}
