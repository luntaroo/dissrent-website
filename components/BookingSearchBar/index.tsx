"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Wrapper,
  Header,
  HeaderCopy,
  Eyebrow,
  Title,
  Description,
  Logo,
  FieldsGrid,
  FormGroup,
  Label,
  InputContainer,
  TextInput,
  InputIcon,
  SearchButton,
  MetaRow,
  MetaInfo,
  MetaPill,
  HelperText,
  ErrorText,
} from "./styles";
import DatePicker from "../DatePicker";
import type { SearchResult } from "@/lib/types";
import {
  BOOKING_LOCATION,
  diffDays,
  formatDate,
  getTodayDateString,
  isDateRangeValid,
  shiftDate,
} from "@/lib/booking";

interface Props {
  initialResult?: Partial<SearchResult>;
}

export default function BookingSearchBar({ initialResult }: Props) {
  const router = useRouter();
  const [pickupLocation] = useState(BOOKING_LOCATION);
  const [pickupDate, setPickupDate] = useState(initialResult?.pickupDate ?? "");
  const [returnDate, setReturnDate] = useState(initialResult?.returnDate ?? "");
  const [error, setError] = useState("");

  const today = getTodayDateString();
  const returnMinDate = pickupDate ? shiftDate(pickupDate, 1) ?? today : today;
  const hasValidRange = pickupDate !== "" && returnDate !== "" && isDateRangeValid(pickupDate, returnDate);
  const tripDays = hasValidRange ? diffDays(pickupDate, returnDate) : 0;

  function handleSearch() {
    if (!pickupDate || !returnDate) {
      setError("Odaberite datum preuzimanja i datum povratka.");
      return;
    }

    if (!isDateRangeValid(pickupDate, returnDate)) {
      setError("Datum povratka mora biti poslije datuma preuzimanja.");
      return;
    }

    setError("");

    const params = new URLSearchParams({
      pickupDate,
      returnDate,
      pickupLocation,
      days: String(diffDays(pickupDate, returnDate)),
    });
    router.push(`/search?${params.toString()}`);
  }

  return (
    <Wrapper id="search-bar">
      <Header>
        <HeaderCopy>
          <Eyebrow>Online rezervacija</Eyebrow>
          <Title>Provjerite dostupnost za zeljeni termin.</Title>
          <Description>
            Odaberite lokaciju i datume, a mi vam odmah prikazujemo vozila dostupna za vas termin.
            Pregledno, brzo i bez nepotrebnog cekanja.
          </Description>
        </HeaderCopy>

        <Logo>
          <span>{pickupLocation}</span>
          <strong>{hasValidRange ? `${tripDays} dana` : "Odaberi termin"}</strong>
          <small>{hasValidRange ? "dostupna vozila za vas termin" : "odaberite datume za provjeru"}</small>
        </Logo>
      </Header>

      <FieldsGrid>
        <FormGroup>
          <Label>Lokacija preuzimanja</Label>
          <InputContainer>
            <TextInput type="text" value={pickupLocation} readOnly />
            <InputIcon className="fa-solid fa-location-dot" />
          </InputContainer>
        </FormGroup>

        <FormGroup>
          <Label>Datum preuzimanja</Label>
          <DatePicker
            key={`pickup-${pickupDate || today}`}
            value={pickupDate}
            onChange={(date) => {
              setPickupDate(date);
              setError("");
              if (returnDate && returnDate <= date) {
                setReturnDate("");
              }
            }}
            placeholder="Odaberite datum"
            minDate={today}
            rangeStart={pickupDate}
            rangeEnd={returnDate}
          />
        </FormGroup>

        <FormGroup>
          <Label>Datum povratka</Label>
          <DatePicker
            key={`return-${returnDate || returnMinDate}`}
            value={returnDate}
            onChange={(date) => {
              setReturnDate(date);
              setError("");
            }}
            placeholder="Odaberite datum"
            minDate={returnMinDate}
            rangeStart={pickupDate}
            rangeEnd={returnDate}
          />
        </FormGroup>

        <FormGroup>
          <Label>&nbsp;</Label>
          <SearchButton type="button" onClick={handleSearch}>
            Pretrazi vozila
            <i className="fa-solid fa-arrow-right" />
          </SearchButton>
        </FormGroup>
      </FieldsGrid>

      <MetaRow>
        <MetaInfo>
          {hasValidRange ? (
            <>
              <MetaPill>{tripDays} dana</MetaPill>
              <MetaPill>
                {formatDate(pickupDate)} - {formatDate(returnDate)}
              </MetaPill>
              <MetaPill>Transparentna cijena za termin</MetaPill>
            </>
          ) : (
            <HelperText>Odaberite termin i pogledajte dostupna vozila sa cijenom za vas period.</HelperText>
          )}
        </MetaInfo>

        {!error && hasValidRange && (
          <HelperText>Izaberite vozilo, ostavite kontakt i potvrdu rezervacije dobijate na email.</HelperText>
        )}
      </MetaRow>

      {error && <ErrorText role="alert">{error}</ErrorText>}
    </Wrapper>
  );
}
