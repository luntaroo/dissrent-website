"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Wrapper,
  Logo,
  FormGroup,
  Label,
  InputContainer,
  TextInput,
  InputIcon,
  SearchButton,
} from "./styles";
import DatePicker from "../DatePicker";

function todayStr(): string {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}

export default function SearchBar() {
  const router = useRouter();
  const [pickupLocation] = useState("Banjaluka");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  function handleSearch() {
    if (!pickupDate || !returnDate) {
      alert("Molimo odaberite datume preuzimanja i povratka!");
      return;
    }
    const days = Math.round(
      (new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / 86400000
    );
    if (days <= 0) {
      alert("Datum povratka mora biti poslije datuma preuzimanja!");
      return;
    }
    const params = new URLSearchParams({
      pickupDate,
      returnDate,
      pickupLocation,
      days: String(days),
    });
    router.push(`/search?${params}`);
  }

  return (
    <Wrapper id="search-bar">
      <Logo>
        <span>DISS</span>
        <span>RENT</span>
      </Logo>

      <FormGroup>
        <Label>LOKACIJA PREUZIMANJA</Label>
        <InputContainer>
          <TextInput type="text" value={pickupLocation} readOnly />
          <InputIcon className="fa-solid fa-location-dot" />
        </InputContainer>
      </FormGroup>

      <FormGroup>
        <Label>DATUM PREUZIMANJA</Label>
        <DatePicker
          value={pickupDate}
          onChange={(d) => {
            setPickupDate(d);
            if (returnDate && returnDate <= d) setReturnDate("");
          }}
          placeholder="Odaberite datum"
          minDate={todayStr()}
          rangeStart={pickupDate}
          rangeEnd={returnDate}
        />
      </FormGroup>

      <FormGroup>
        <Label>DATUM POVRATKA</Label>
        <DatePicker
          value={returnDate}
          onChange={setReturnDate}
          placeholder="Odaberite datum"
          minDate={pickupDate || todayStr()}
          rangeStart={pickupDate}
          rangeEnd={returnDate}
        />
      </FormGroup>

      <SearchButton type="button" onClick={handleSearch}>
        PRETRAŽI SADA
      </SearchButton>
    </Wrapper>
  );
}
