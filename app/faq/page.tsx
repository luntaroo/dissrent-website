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
  FaqItem,
  FaqQuestion,
  FaqAnswer,
  BackLink,
} from "@/components/InfoPage/styles";

const FAQ_DATA = [
  {
    q: "Kako mogu rezervisati vozilo?",
    a: "Odaberite datume, izaberite vozilo i popunite formular. Nakon toga stize email sa linkom za potvrdu rezervacije.",
  },
  {
    q: "Da li trebam platiti depozit?",
    a: "Ne. DISS RENT ne naplacuje depozit. Cijena koju vidite je cijena koju rezervisete.",
  },
  {
    q: "Koliko kosta iznajmljivanje?",
    a: "Cijene pocinju od 60 KM dnevno. Za 4 do 7 dana postoji popust, a za duze termine cijena ide po dogovoru.",
  },
  {
    q: "Koje dokumente trebam ponijeti?",
    a: "Potrebna je vazeca vozacka dozvola i licna karta ili pasos. Vozac mora imati najmanje 21 godinu.",
  },
  {
    q: "Da li je moguce otkazati rezervaciju?",
    a: "Da. Rezervaciju mozete otkazati prije preuzimanja vozila, a potvrda i otkazivanje su povezani sa email linkovima.",
  },
  {
    q: "Gdje preuzimam vozilo?",
    a: "Preuzimanje vozila se dogovara u Banjaluci. Za posebne lokacije ili isporuku potrebno je kontaktirati nas direktno.",
  },
  {
    q: "Da li su vozila osigurana?",
    a: "Da. Sva vozila imaju osnovno osiguranje, a detalje najma i pokrica dobijate prije preuzimanja.",
  },
  {
    q: "Kako vas mogu kontaktirati?",
    a: "Dostupni smo putem telefona, Viber-a i email-a svakog dana.",
  },
];

export const metadata: Metadata = {
  title: "FAQ rent a car Banjaluka",
  description:
    "Najcesca pitanja za rent a car u Banjaluci: rezervacija, depozit, cijene, dokumenti i otkazivanje.",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <PageWrap>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <Container>
        <BackLink as={Link} href="/">
          <i className="fa-solid fa-arrow-left" /> Nazad na pocetnu
        </BackLink>

        <PageTitle>Cesta pitanja</PageTitle>
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
