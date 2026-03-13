"use client";

import React from "react";
import { Nav, Brand, BrandDiss, BrandRent, RightSide, PhoneLink, PhoneIcon, PhoneNum } from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <Brand>
        <BrandDiss>DISS</BrandDiss>
        <BrandRent>RENT</BrandRent>
      </Brand>
      <RightSide>
        <PhoneLink href="tel:+38765000000">
          <PhoneIcon className="fa-solid fa-phone" />
          <PhoneNum>065 000 000</PhoneNum>
        </PhoneLink>
      </RightSide>
    </Nav>
  );
}
