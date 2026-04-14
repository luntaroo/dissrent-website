"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Nav,
  NavInner,
  Brand,
  BrandMark,
  BrandText,
  BrandTagline,
  NavLinks,
  NavLink,
  RightSide,
  CtaLink,
  PhoneLink,
  PhoneIconWrap,
  PhoneIcon,
  PhoneText,
  PhoneLabel,
  PhoneNum,
} from "./styles";

const LOGO_URL = "https://i.ibb.co/5W1fm00q/logobw.webp";

export default function Navbar() {
  const pathname = usePathname();
  const bookingHref = pathname === "/" ? "#search-bar" : "/#search-bar";

  return (
    <Nav>
      <NavInner>
        <Brand as={Link} href="/" aria-label="DISS RENT - Pocetna">
          <BrandMark>
            <Image
              src={LOGO_URL}
              alt="DISS RENT"
              priority
              sizes="(max-width: 640px) 116px, 152px"
            />
          </BrandMark>
          <BrandText>
            <BrandTagline>Rent a car Banjaluka</BrandTagline>
          </BrandText>
        </Brand>

        <NavLinks>
          <NavLink as={Link} href="/" $active={pathname === "/"}>
            Pocetna
          </NavLink>
          <NavLink as={Link} href={bookingHref} $active={pathname === "/search"}>
            Rezervacija
          </NavLink>
          <NavLink as={Link} href="/about" $active={pathname === "/about"}>
            O nama
          </NavLink>
          <NavLink as={Link} href="/faq" $active={pathname === "/faq"}>
            FAQ
          </NavLink>
        </NavLinks>

        <RightSide>
          <CtaLink as={Link} href={bookingHref}>
            Rezervisi
          </CtaLink>
          <PhoneLink href="tel:+38765626444">
            <PhoneIconWrap>
              <PhoneIcon className="fa-solid fa-phone" />
            </PhoneIconWrap>
            <PhoneText>
              <PhoneLabel>Pozovite nas</PhoneLabel>
              <PhoneNum>065 626 444</PhoneNum>
            </PhoneText>
          </PhoneLink>
        </RightSide>
      </NavInner>
    </Nav>
  );
}
