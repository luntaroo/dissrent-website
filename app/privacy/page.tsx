import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Politika privatnosti za DISS RENT rent a car u Banjaluci: podaci o rezervaciji, kontakt informacije i korisnicka prava.",
};

export default function PrivacyPage() {
  return (
    <PageWrap>
      <Navbar />

      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> Nazad na pocetnu
        </BackLink>

        <PageTitle>Politika privatnosti</PageTitle>
        <TitleAccent />

        <Section>
          <Text>
            <strong style={{ color: "var(--primary)" }}>DISS RENT</strong> postuje privatnost korisnika.
            Ova stranica objasnjava koje podatke prikupljamo i kako ih koristimo tokom procesa rezervacije.
          </Text>
        </Section>

        <Section>
          <SectionTitle>1. Koje podatke prikupljamo</SectionTitle>
          <List>
            <ListItem>Ime i prezime</ListItem>
            <ListItem>Broj telefona</ListItem>
            <ListItem>Email adresu</ListItem>
            <ListItem>Odabrane datume najma</ListItem>
            <ListItem>Preferirani nacin kontakta</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Zasto koristimo podatke</SectionTitle>
          <List>
            <ListItem>Za obradu i potvrdu rezervacije</ListItem>
            <ListItem>Za komunikaciju o najmu i dostupnosti</ListItem>
            <ListItem>Za slanje email potvrde i eventualnog otkazivanja</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Dijeljenje podataka</SectionTitle>
          <Text>
            Licne podatke ne prodajemo niti koristimo za marketinske kampanje bez posebne saglasnosti
            korisnika.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. Cuvanje podataka</SectionTitle>
          <Text>
            Podaci o rezervacijama cuvaju se u internoj bazi i koriste se iskljucivo za operativne potrebe
            najma i evidenciju rezervacija.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Vasa prava</SectionTitle>
          <List>
            <ListItem>Uvid u podatke koje cuvamo</ListItem>
            <ListItem>Ispravka netacnih podataka</ListItem>
            <ListItem>Zahtjev za brisanje podataka uz zakonska ogranicenja</ListItem>
          </List>
          <Text>Za sva pitanja mozete se javiti na rent@diss.com.</Text>
        </Section>

        <Section>
          <Text style={{ color: "var(--text-soft)", fontSize: "0.92rem", marginBottom: 0 }}>
            Posljednje azuriranje: april 2026.
          </Text>
        </Section>
      </Container>

      <Footer />
    </PageWrap>
  );
}
