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

export default function TermsPage() {
  return (
    <PageWrap>
      <Navbar />
      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> NAZAD NA POČETNU
        </BackLink>

        <PageTitle>USLOVI KORIŠTENJA</PageTitle>
        <TitleAccent />

        <Section>
          <Text>
            Korištenjem usluga <strong style={{ color: "var(--yellow-bar)" }}>DISS RENT</strong> prihvatate
            sljedeće uslove korištenja. Molimo Vas da ih pažljivo pročitate prije rezervacije vozila.
          </Text>
        </Section>

        <Section>
          <SectionTitle>1. USLOVI NAJMA</SectionTitle>
          <List>
            <ListItem>Najmoprimac mora imati najmanje 21 godinu</ListItem>
            <ListItem>Potrebna je važeća vozačka dozvola (minimalno 2 godine)</ListItem>
            <ListItem>Potrebna je važeća lična karta ili pasoš</ListItem>
            <ListItem>Vozilo se preuzima i vraća na dogovorenu lokaciju u Banjaluci</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. PLAĆANJE I CIJENE</SectionTitle>
          <List>
            <ListItem>Cijene su izražene u konvertibilnim markama (KM)</ListItem>
            <ListItem>Cijena uključuje osnovno osiguranje vozila</ListItem>
            <ListItem>Gorivo nije uključeno u cijenu — vozilo se vraća sa istom količinom goriva</ListItem>
            <ListItem>Za periode duže od 7 dana cijena se dogovara individualno</ListItem>
            <ListItem>Popusti za periode od 4 do 7 dana primjenjuju se automatski</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. REZERVACIJA I OTKAZIVANJE</SectionTitle>
          <List>
            <ListItem>Rezervacija se smatra potvrđenom nakon klika na link za potvrdu u email-u</ListItem>
            <ListItem>Besplatno otkazivanje je moguće do 24 sata prije preuzimanja</ListItem>
            <ListItem>U slučaju nepojave bez prethodnog otkazivanja, DISS RENT zadržava pravo naplate naknade</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. KORIŠTENJE VOZILA</SectionTitle>
          <List>
            <ListItem>Vozilo se smije koristiti isključivo na teritoriji Bosne i Hercegovine, osim uz prethodni dogovor</ListItem>
            <ListItem>Zabranjeno je korištenje vozila za takmičenja, pod-iznajmljivanje ili prevoz opasnih materija</ListItem>
            <ListItem>Najmoprimac je odgovoran za sve saobraćajne prekršaje tokom perioda najma</ListItem>
            <ListItem>U slučaju nesreće ili oštećenja, najmoprimac je dužan odmah obavijestiti DISS RENT</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. VRAĆANJE VOZILA</SectionTitle>
          <List>
            <ListItem>Vozilo se vraća u istom stanju u kakvom je preuzeto</ListItem>
            <ListItem>Kašnjenje u vraćanju se naplaćuje po dnevnoj tarifi</ListItem>
            <ListItem>Oštećenja koja nisu prijavljena pri preuzimanju padaju na teret najmoprimca</ListItem>
          </List>
        </Section>

        <Section>
          <Text style={{ color: "#777", fontSize: 13 }}>
            Posljednje ažuriranje: Mart 2026. DISS RENT zadržava pravo izmjene uslova korištenja.
          </Text>
        </Section>
      </Container>
      <Footer />
    </PageWrap>
  );
}
