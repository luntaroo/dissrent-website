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
  title: "Uslovi koristenja",
  description:
    "Uslovi koristenja i najma za DISS RENT rent a car u Banjaluci, ukljucujuci rezervaciju, cijene i otkazivanje.",
};

export default function TermsPage() {
  return (
    <PageWrap>
      <Navbar />

      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> Nazad na pocetnu
        </BackLink>

        <PageTitle>Uslovi koristenja</PageTitle>
        <TitleAccent />

        <Section>
          <Text>
            Koristenjem usluga <strong style={{ color: "var(--primary)" }}>DISS RENT</strong> prihvatate
            osnovne uslove najma, rezervacije i povrata vozila.
          </Text>
        </Section>

        <Section>
          <SectionTitle>1. Uslovi najma</SectionTitle>
          <List>
            <ListItem>Najmoprimac mora imati najmanje 21 godinu</ListItem>
            <ListItem>Potrebna je vazeca vozacka dozvola</ListItem>
            <ListItem>Potrebna je vazeca licna karta ili pasos</ListItem>
            <ListItem>Preuzimanje i vracanje vozila se dogovara u Banjaluci</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Placanje i cijene</SectionTitle>
          <List>
            <ListItem>Cijene su izrazene u KM</ListItem>
            <ListItem>Osnovno osiguranje je ukljuceno u cijenu</ListItem>
            <ListItem>Za termine duze od 7 dana cijena ide po dogovoru</ListItem>
            <ListItem>Popusti za 4 do 7 dana se primjenjuju automatski</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Rezervacija i otkazivanje</SectionTitle>
          <List>
            <ListItem>Rezervacija je potvrdjena nakon klika na email link</ListItem>
            <ListItem>Otkazivanje je moguce prije preuzimanja vozila</ListItem>
            <ListItem>DISS RENT zadrzava pravo izmjene termina u slucaju nedostupnosti</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Koristenje vozila</SectionTitle>
          <List>
            <ListItem>Vozilo se koristi u skladu sa zakonom i pravilima saobracaja</ListItem>
            <ListItem>Najmoprimac je odgovoran za prekrsaje tokom trajanja najma</ListItem>
            <ListItem>Svako ostecenje ili incident potrebno je odmah prijaviti</ListItem>
          </List>
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
