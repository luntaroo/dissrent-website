"use client";

import React, { useEffect, useState } from "react";
import DatePicker from "../DatePicker";
import type { BookingContext } from "@/lib/types";
import { findFirstAvailableStartDate, formatAvailabilityDateLabel } from "@/lib/availability";
import {
  EMAIL_RE,
  calculateBookingPrice,
  diffDays,
  formatDate,
  getTodayDateString,
  hasBlockedDates,
  isDateRangeValid,
  isValidPhone,
  normalizeEmail,
  normalizeName,
  normalizePhone,
  shiftDate,
} from "@/lib/booking";
import {
  Overlay,
  Modal,
  MobileBar,
  ScrollArea,
  CloseX,
  Shell,
  SummaryPane,
  SummaryVisual,
  SummaryOverlay,
  SummaryContent,
  SummaryEyebrow,
  Title,
  Subtitle,
  Steps,
  Step,
  SummaryBox,
  SummaryLine,
  Notice,
  FormPane,
  MobileCarTitle,
  SectionTitle,
  DateRow,
  Field,
  Label,
  Input,
  ContactLabel,
  RadioGroup,
  RadioOption,
  RadioInput,
  RadioIcon,
  RadioText,
  ErrorText,
  ConfirmButton,
  SuccessBox,
  SuccessTitle,
  SuccessText,
} from "./styles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  bookingContext?: BookingContext;
}

function getPriceSummary(ctx?: BookingContext, pickupDate?: string, returnDate?: string) {
  if (!ctx?.price1 || !ctx?.price2 || !pickupDate || !returnDate || !isDateRangeValid(pickupDate, returnDate)) {
    return { days: 0, totalPrice: null as number | null, pricingMode: "quote" as const };
  }

  const days = diffDays(pickupDate, returnDate);
  const quote = calculateBookingPrice(
    { name: ctx.carName ?? "", img: ctx.carImg ?? "", price1: ctx.price1, price2: ctx.price2 },
    days
  );

  return {
    days,
    totalPrice: quote.totalPrice,
    pricingMode: quote.pricingMode,
  };
}

export default function BookingFlowModal({ isOpen, onClose, bookingContext }: Props) {
  const [contact, setContact] = useState("viber");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [blockedDates, setBlockedDates] = useState<string[]>([]);

  const today = getTodayDateString();
  const needsDates = !bookingContext?.pickupDate || !bookingContext?.returnDate;
  const effectivePickupDate = bookingContext?.pickupDate ?? pickupDate;
  const effectiveReturnDate = bookingContext?.returnDate ?? returnDate;
  const priceSummary = getPriceSummary(bookingContext, effectivePickupDate, effectiveReturnDate);
  const firstBlockedAfterPickup = pickupDate ? blockedDates.find((date) => date > pickupDate) : undefined;
  const returnMaxDate = firstBlockedAfterPickup ? shiftDate(firstBlockedAfterPickup, -1) ?? undefined : undefined;
  const returnMinDate = pickupDate ? shiftDate(pickupDate, 1) ?? today : today;
  const liveConflict =
    effectivePickupDate &&
    effectiveReturnDate &&
    hasBlockedDates(blockedDates, effectivePickupDate, effectiveReturnDate);
  const requestedDaysForAvailability = priceSummary.days > 0 ? priceSummary.days : 1;
  const hasValidSelectedRange =
    !!effectivePickupDate &&
    !!effectiveReturnDate &&
    isDateRangeValid(effectivePickupDate, effectiveReturnDate);
  const showContactFields = !needsDates || (hasValidSelectedRange && !liveConflict);
  const firstAvailableAfterConflict = liveConflict
    ? formatAvailabilityDateLabel(
        findFirstAvailableStartDate(
          blockedDates,
          requestedDaysForAvailability,
          shiftDate(effectivePickupDate, 1) ?? effectivePickupDate
        )
      )
    : null;
  const modalTitle = needsDates ? "Provjerite termin i nastavite rezervaciju" : "Zavrsite rezervaciju";
  const modalSubtitle = needsDates
    ? "Odaberite slobodan termin za ovo vozilo, zatim unesite kontakt podatke i posaljite rezervaciju."
    : "Provjerite detalje, ostavite kontakt podatke i potvrdu rezervacije dobijate na email.";

  useEffect(() => {
    if (!isOpen || !bookingContext?.carImg) {
      setBlockedDates([]);
      return;
    }

    fetch(`/api/availability?carImg=${encodeURIComponent(bookingContext.carImg)}`)
      .then((response) => response.json() as Promise<{ blockedDates?: string[] }>)
      .then((data) => setBlockedDates(data.blockedDates ?? []))
      .catch(() => setBlockedDates([]));
  }, [isOpen, bookingContext?.carImg]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setContact("viber");
        setName("");
        setPhone("");
        setEmail("");
        setSubmitting(false);
        setSuccess(false);
        setError("");
        setPickupDate("");
        setReturnDate("");
        setBlockedDates([]);
      }, 250);
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  async function handleSubmit() {
    const normalizedName = normalizeName(name);
    const normalizedPhone = normalizePhone(phone);
    const normalizedEmail = normalizeEmail(email);

    if (!bookingContext?.carImg) {
      setError("Automobil nije pravilno odabran. Zatvorite prozor i pokusajte ponovo.");
      return;
    }

    if (!effectivePickupDate || !effectiveReturnDate || !isDateRangeValid(effectivePickupDate, effectiveReturnDate)) {
      setError("Odaberite ispravan datum preuzimanja i datum povratka.");
      return;
    }

    if (liveConflict) {
      setError(
        firstAvailableAfterConflict
          ? `Ovaj termin je u medjuvremenu zauzet. Prvi slobodan termin je ${firstAvailableAfterConflict}.`
          : "Ovaj termin je u medjuvremenu zauzet. Izaberite drugi period."
      );
      return;
    }

    if (normalizedName.length < 2) {
      setError("Unesite ime i prezime.");
      return;
    }

    if (!isValidPhone(normalizedPhone)) {
      setError("Unesite ispravan broj telefona.");
      return;
    }

    if (!EMAIL_RE.test(normalizedEmail)) {
      setError("Unesite ispravnu email adresu.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: normalizedName,
          customerPhone: normalizedPhone,
          customerEmail: normalizedEmail,
          contactPreference: contact,
          carImg: bookingContext.carImg,
          pickupDate: effectivePickupDate,
          returnDate: effectiveReturnDate,
        }),
      });

      if (response.ok) {
        const data = (await response.json().catch(() => ({}))) as { emailWarning?: string };
        if (data.emailWarning) {
          setError(data.emailWarning);
        }
        setSuccess(true);
        return;
      }

      const data = (await response.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? "Doslo je do greske. Pokusajte ponovo.");
    } catch {
      setError("Doslo je do greske. Provjerite internet vezu.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Overlay
      $open={isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <Modal $open={isOpen}>
        {/* Desktop close button — absolutely positioned, stays put */}
        <CloseX onClick={onClose} aria-label="Zatvori rezervaciju">
          <i className="fa-solid fa-xmark" />
        </CloseX>

        {/* Mobile close bar — sits above scroll area so it never scrolls away */}
        <MobileBar>
          <CloseX
            as="button"
            onClick={onClose}
            aria-label="Zatvori rezervaciju"
            style={{ position: "static", transform: "none" }}
          >
            <i className="fa-solid fa-xmark" />
          </CloseX>
        </MobileBar>

        <ScrollArea>
        {success ? (
          <SuccessBox>
            <SuccessTitle>Rezervacija je primljena.</SuccessTitle>
            <SuccessText>
              Poslali smo email na <strong>{email}</strong>. Rezervacija postaje vazeca tek nakon
              potvrde linka iz email poruke.
            </SuccessText>
          </SuccessBox>
        ) : (
          <Shell>
            <SummaryPane>
              <SummaryVisual $img={bookingContext?.carImg ?? "/1.jpg"}>
                <SummaryOverlay />
              </SummaryVisual>

              <SummaryContent>
                <SummaryEyebrow>{needsDates ? "Provjera dostupnosti" : "Rezervacija"}</SummaryEyebrow>
                <Title>{modalTitle}</Title>
                <Subtitle>{modalSubtitle}</Subtitle>

                <Steps>
                  <Step $active>{bookingContext?.carName ?? "Auto"}</Step>
                  <Step $active={!needsDates || pickupDate !== ""}>Termin</Step>
                  <Step $active={name !== "" || phone !== "" || email !== ""}>Kontakt</Step>
                </Steps>

                <SummaryBox>
                  <SummaryLine>
                    <span>Automobil</span>
                    <strong>{bookingContext?.carName ?? "-"}</strong>
                  </SummaryLine>
                  <SummaryLine>
                    <span>Termin</span>
                    <strong>
                      {effectivePickupDate && effectiveReturnDate
                        ? `${formatDate(effectivePickupDate)} - ${formatDate(effectiveReturnDate)}`
                        : "Odaberite datume"}
                    </strong>
                  </SummaryLine>
                  <SummaryLine>
                    <span>Trajanje</span>
                    <strong>{priceSummary.days > 0 ? `${priceSummary.days} dana` : "-"}</strong>
                  </SummaryLine>
                  <SummaryLine>
                    <span>Cijena</span>
                    <strong>
                      {priceSummary.days === 0
                        ? "-"
                        : priceSummary.totalPrice == null
                          ? "Cijena po dogovoru"
                          : `${priceSummary.totalPrice} KM`}
                    </strong>
                  </SummaryLine>
                </SummaryBox>

                <Notice>
                  {liveConflict && firstAvailableAfterConflict
                    ? `Ovaj termin je zauzet. Prvi slobodan termin za ovo vozilo je ${firstAvailableAfterConflict}.`
                    : "Ako se termin u medjuvremenu popuni, odmah cete dobiti obavjestenje i moci odabrati prvi naredni slobodan datum."}
                </Notice>
              </SummaryContent>
            </SummaryPane>

            <FormPane>
              <MobileCarTitle>{bookingContext?.carName ?? "Rezervacija"}</MobileCarTitle>
              {needsDates && (
                <>
                  <SectionTitle>1. Odaberite termin</SectionTitle>
                  <DateRow>
                    <div>
                      <Label as="span">Datum preuzimanja</Label>
                      <DatePicker
                        key={`modal-pickup-${pickupDate || today}`}
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
                        blockedDates={blockedDates}
                      />
                    </div>
                    <div>
                      <Label as="span">Datum povratka</Label>
                      <DatePicker
                        key={`modal-return-${returnDate || returnMinDate}`}
                        value={returnDate}
                        onChange={(date) => {
                          setReturnDate(date);
                          setError("");
                        }}
                        placeholder="Odaberite datum"
                        minDate={returnMinDate}
                        maxDate={returnMaxDate}
                        rangeStart={pickupDate}
                        rangeEnd={returnDate}
                        blockedDates={blockedDates}
                      />
                    </div>
                  </DateRow>
                </>
              )}

              {!showContactFields && needsDates && (
                <Notice>
                  Odaberite slobodan termin za ovo vozilo. Cim unesete validan period, mozete nastaviti
                  sa slanjem rezervacije.
                </Notice>
              )}

              {showContactFields && (
                <>
                  <SectionTitle>{needsDates ? "2. Kontakt podaci" : "Kontakt podaci"}</SectionTitle>

                  <Field>
                    <Label htmlFor="booking-name">Ime i prezime</Label>
                    <Input
                      id="booking-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="booking-phone">Broj telefona</Label>
                    <Input
                      id="booking-phone"
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </Field>

                  <Field>
                    <Label htmlFor="booking-email">Email</Label>
                    <Input
                      id="booking-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Field>

                  <ContactLabel>Nacin kontakta</ContactLabel>
                  <RadioGroup>
                    <RadioOption>
                      <RadioInput
                        type="radio"
                        name="contact"
                        value="viber"
                        checked={contact === "viber"}
                        onChange={() => setContact("viber")}
                      />
                      <RadioIcon className="fa-brands fa-viber" />
                      <RadioText>Viber</RadioText>
                    </RadioOption>
                    <RadioOption>
                      <RadioInput
                        type="radio"
                        name="contact"
                        value="sms"
                        checked={contact === "sms"}
                        onChange={() => setContact("sms")}
                      />
                      <RadioIcon className="fa-regular fa-comment-dots" />
                      <RadioText>SMS</RadioText>
                    </RadioOption>
                  </RadioGroup>
                </>
              )}

              {error && <ErrorText>{error}</ErrorText>}

              {showContactFields && (
                <ConfirmButton type="button" onClick={handleSubmit} disabled={submitting}>
                  {submitting
                    ? "Saljem..."
                    : priceSummary.totalPrice == null && priceSummary.days > 7
                      ? "Posalji upit"
                      : "Posalji rezervaciju"}
                </ConfirmButton>
              )}
            </FormPane>
          </Shell>
        )}
        </ScrollArea>
      </Modal>
    </Overlay>
  );
}
