import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FooterEl,
  Container,
  TopRow,
  BrandBlock,
  BrandEyebrow,
  BrandLogoLink,
  BrandText,
  ContactCard,
  ContactLabel,
  ContactValue,
  LinksGrid,
  Column,
  ColTitle,
  FooterLink,
  SocialIcons,
  SocialLink,
  BottomBar,
  BottomText,
} from "./styles";

const LOGO_URL = "https://i.ibb.co/5W1fm00q/logobw.webp";

export default function Footer() {
  return (
    <FooterEl>
      <Container>
        <TopRow>
          <BrandBlock>
            <BrandEyebrow>Rent a car Banjaluka</BrandEyebrow>
            <BrandLogoLink as={Link} href="/" aria-label="DISS RENT - Pocetna">
              <Image
                src={LOGO_URL}
                alt="DISS RENT"
                sizes="(max-width: 900px) 220px, 320px"
              />
            </BrandLogoLink>
            <BrandText>
              Pouzdan rent a car u Banjaluci sa jednostavnom online rezervacijom, potvrdom emailom i
              jasnim uslovima preuzimanja vozila.
            </BrandText>
          </BrandBlock>

          <ContactCard>
            <ContactLabel>Pozovite nas</ContactLabel>
            <ContactValue href="tel:+38765626444">+387 65 626 444</ContactValue>
            <ContactLabel>Email</ContactLabel>
            <ContactValue href="mailto:info@dissrent.com">info@dissrent.com</ContactValue>
            <ContactLabel>Lokacija</ContactLabel>
            <ContactValue as="span">Banjaluka, Republika Srpska</ContactValue>
          </ContactCard>
        </TopRow>

        <LinksGrid>
          <Column>
            <ColTitle>Navigacija</ColTitle>
            <FooterLink as={Link} href="/">
              Pocetna
            </FooterLink>
            <FooterLink as={Link} href="/#search-bar">
              Rezervacija
            </FooterLink>
            <FooterLink as={Link} href="/about">
              O nama
            </FooterLink>
            <FooterLink as={Link} href="/faq">
              FAQ
            </FooterLink>
          </Column>

          <Column>
            <ColTitle>Pravni linkovi</ColTitle>
            <FooterLink as={Link} href="/terms">
              Uslovi koristenja
            </FooterLink>
            <FooterLink as={Link} href="/privacy">
              Politika privatnosti
            </FooterLink>
          </Column>

          <Column>
            <ColTitle>Brzi kontakt</ColTitle>
            <SocialIcons>
              <SocialLink href="tel:+38765626444" aria-label="Pozovite nas">
                <i className="fa-solid fa-phone" />
              </SocialLink>
              <SocialLink href="mailto:info@dissrent.com" aria-label="Posaljite email">
                <i className="fa-solid fa-envelope" />
              </SocialLink>
              <SocialLink
                href="viber://chat?number=%2B38765626444"
                aria-label="Kontaktirajte nas na Viberu"
              >
                <i className="fa-brands fa-viber" />
              </SocialLink>
            </SocialIcons>
          </Column>
        </LinksGrid>

        <BottomBar>
          <BottomText>&copy; 2026 DISS RENT. Sva prava zadrzana.</BottomText>
          <BottomText>Rezervacije, potvrde i korisnicka podrska dostupni su svaki dan.</BottomText>
        </BottomBar>
      </Container>
    </FooterEl>
  );
}
