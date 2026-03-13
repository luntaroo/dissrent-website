"use client";

import React from "react";
import Link from "next/link";
import {
  FooterEl,
  Container,
  Cols,
  ColTitle,
  ColText,
  LinksList,
  LinksItem,
  FooterLink,
  SocialIcons,
  SocialLink,
  BottomBar,
  BottomText,
} from "./styles";

export default function Footer() {
  return (
    <FooterEl>
      <Container>
        <Cols>
          <div>
            <ColTitle>KONTAKT</ColTitle>
            <ColText>
              Telefon: +387 65 000 000
              <br />
              Email: rent@diss.com
              <br />
              Adresa: Banjaluka, Republika Srpska
            </ColText>
          </div>

          <div>
            <ColTitle>KORISNI LINKOVI</ColTitle>
            <LinksList>
              <LinksItem><FooterLink as={Link} href="/about">O nama</FooterLink></LinksItem>
              <LinksItem><FooterLink as={Link} href="/terms">Uslovi korištenja</FooterLink></LinksItem>
              <LinksItem><FooterLink as={Link} href="/privacy">Politika privatnosti</FooterLink></LinksItem>
              <LinksItem><FooterLink as={Link} href="/faq">Česta pitanja</FooterLink></LinksItem>
            </LinksList>
          </div>

          <div>
            <ColTitle>DRUŠTVENE MREŽE</ColTitle>
            <SocialIcons>
              <SocialLink href="#"><i className="fa-brands fa-instagram" /></SocialLink>
              <SocialLink href="#"><i className="fa-brands fa-facebook" /></SocialLink>
              <SocialLink href="#"><i className="fa-brands fa-viber" /></SocialLink>
            </SocialIcons>
          </div>
        </Cols>

        <BottomBar>
          <BottomText>&copy; 2026 DISS RENT. SVA PRAVA ZADRŽANA.</BottomText>
        </BottomBar>
      </Container>
    </FooterEl>
  );
}
