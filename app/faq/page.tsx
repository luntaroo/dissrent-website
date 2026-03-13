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
  FaqItem,
  FaqQuestion,
  FaqAnswer,
  BackLink,
} from "@/components/InfoPage/styles";

const FAQ_DATA = [
  {
    q: "KAKO MOGU REZERVISATI VOZILO?",
    a: "Jednostavno odaberite željene datume na našoj početnoj stranici, izaberite vozilo i popunite kratki formular za rezervaciju. Dobićete email sa linkom za potvrdu — kliknite na link i rezervacija je gotova!",
  },
  {
    q: "DA LI TREBAM PLATITI DEPOZIT?",
    a: "Ne. DISS RENT ne naplaćuje depozit. Cijena koju vidite je konačna cijena bez ikakvih dodatnih troškova.",
  },
  {
    q: "KOLIKO KOŠTA IZNAJMLJIVANJE?",
    a: "Cijene počinju od 60 KM dnevno. Za period od 4 do 7 dana ostvarujete popust, a za duže periode cijena se dogovara individualno.",
  },
  {
    q: "KOJE DOKUMENTE TREBAM PONIJETI?",
    a: "Potrebna Vam je važeća vozačka dozvola i lična karta ili pasoš. Vozač mora imati najmanje 21 godinu.",
  },
  {
    q: "DA LI JE MOGUĆE OTKAZATI REZERVACIJU?",
    a: "Da. Rezervaciju možete otkazati besplatno kontaktiranjem naše službe putem telefona, Viber-a ili email-a. Otkazivanje je moguće do 24 sata prije preuzimanja vozila.",
  },
  {
    q: "GDJE PREUZIMAM VOZILO?",
    a: "Preuzimanje vozila vrši se u Banjaluci na dogovorenoj lokaciji. Moguća je i dostava vozila na adresu — kontaktirajte nas za detalje.",
  },
  {
    q: "DA LI SU VOZILA OSIGURANA?",
    a: "Da. Sva naša vozila imaju obavezno osiguranje. Detalje o pokriću možete dobiti prilikom preuzimanja vozila.",
  },
  {
    q: "KAKO VAS MOGU KONTAKTIRATI?",
    a: "Možete nas kontaktirati putem telefona (+387 65 000 000), Viber-a ili email-a (rent@diss.com). Dostupni smo svakog dana.",
  },
];

export default function FaqPage() {
  return (
    <PageWrap>
      <Navbar />
      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> NAZAD NA POČETNU
        </BackLink>

        <PageTitle>ČESTA PITANJA</PageTitle>
        <TitleAccent />

        {FAQ_DATA.map((item) => (
          <FaqItem key={item.q}>
            <FaqQuestion>{item.q}</FaqQuestion>
            <FaqAnswer>{item.a}</FaqAnswer>
          </FaqItem>
        ))}
      </Container>
      <Footer />
    </PageWrap>
  );
}
