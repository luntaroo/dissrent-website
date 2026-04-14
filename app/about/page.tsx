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
  title: "O nama",
  description:
    "Saznajte vise o DISS RENT rent a car usluzi u Banjaluci, nasem pristupu rezervaciji i kontakt podacima.",
};

export default function AboutPage() {
  return (
    <PageWrap>
      <Navbar />

      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> Nazad na pocetnu
        </BackLink>

        <PageTitle>O nama</PageTitle>
        <TitleAccent />

        <Section>
          <Text>
            <strong style={{ color: "var(--primary)" }}>DISS RENT</strong> je rent-a-car agencija iz
            Banjaluke koja nudi provjerena vozila, jasne cijene i brzu online rezervaciju bez depozita.
          </Text>
          <Text>
            Bez obzira da li vam je vozilo potrebno za poslovni put, gradsku voznju ili duzi boravak,
            cilj nam je da najam zavrsite jednostavno i uz pouzdanu podrsku od prvog kontakta do
            preuzimanja kljuceva.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Zasto mi</SectionTitle>
          <List>
            <ListItem>Konkurentne cijene od 60 KM dnevno</ListItem>
            <ListItem>Bez depozita i bez skrivenih troskova</ListItem>
            <ListItem>Brza online rezervacija sa email potvrdom</ListItem>
            <ListItem>Flota od 6 uredno predstavljenih vozila</ListItem>
            <ListItem>Popusti za periode od 4 do 7 dana</ListItem>
            <ListItem>Fleksibilna komunikacija putem telefona, Viber-a i email-a</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Nasa vizija</SectionTitle>
          <Text>
            Zelimo biti prvi izbor za rent a car u Banjaluci zahvaljujuci pouzdanoj usluzi,
            transparentnim uslovima i vozilima spremnim za svaki plan puta.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Kontakt</SectionTitle>
          <List>
            <ListItem>Telefon / Viber: +387 65 626 444</ListItem>
            <ListItem>Email: rent@diss.com</ListItem>
            <ListItem>Lokacija: Banjaluka, Republika Srpska</ListItem>
          </List>
        </Section>
      </Container>

      <Footer />
    </PageWrap>
  );
}
