"use client";

import React, { useState, useEffect } from "react";
import {
  Overlay,
  Modal,
  ModalTitle,
  ContextBar,
  DateRow,
  Field,
  FieldLabel,
  FieldInput,
  ContactLabel,
  RadioGroup,
  RadioOption,
  RadioInput,
  RadioIcon,
  RadioText,
  ConfirmBtn,
  CloseX,
  SuccessBox,
  SuccessTitle,
  SuccessText,
} from "./styles";
import DatePicker from "../DatePicker";
import type { BookingContext } from "@/lib/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  bookingContext?: BookingContext;
}

function todayStr(): string {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}

function fmtDate(s?: string): string {
  if (!s) return "—";
  const [y, m, d] = s.split("-");
  return `${d}.${m}.${y}.`;
}

function calcDays(from: string, to: string): number {
  return Math.round(
    (new Date(to).getTime() - new Date(from).getTime()) / 86400000
  );
}

function prevDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function BookingModal({ isOpen, onClose, bookingContext }: Props) {
  const [contact, setContact] = useState("viber");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Date pickers used when no dates in context (home page flow)
  const [modalPickupDate, setModalPickupDate] = useState("");
  const [modalReturnDate, setModalReturnDate] = useState("");

  // Blocked dates for this specific car (fetched from API)
  const [carBlockedDates, setCarBlockedDates] = useState<string[]>([]);

  // Whether we need the user to pick dates in the modal
  const needsDates = !bookingContext?.pickupDate;

  const effectivePickupDate = bookingContext?.pickupDate ?? modalPickupDate;
  const effectiveReturnDate = bookingContext?.returnDate ?? modalReturnDate;

  // Calculate days and price dynamically when modal date pickers are used
  let effectiveDays = bookingContext?.days ?? 0;
  let effectiveTotalPrice: number | null | undefined = bookingContext?.totalPrice;

  if (needsDates && effectivePickupDate && effectiveReturnDate) {
    const d = calcDays(effectivePickupDate, effectiveReturnDate);
    if (d > 0) {
      effectiveDays = d;
      const p1 = bookingContext?.price1 ?? 0;
      const p2 = bookingContext?.price2 ?? 0;
      if (d > 7) {
        effectiveTotalPrice = null;
      } else if (d >= 4) {
        effectiveTotalPrice = p2 * d;
      } else {
        effectiveTotalPrice = p1 * d;
      }
    }
  }

  // First blocked date strictly after the selected pickup — constrains the return picker
  const firstBlockedAfterPickup = modalPickupDate
    ? carBlockedDates.find(d => d > modalPickupDate)
    : undefined;
  // Return date must be before that blocked date (the range [pickup, return] is inclusive)
  const returnMaxDate = firstBlockedAfterPickup ? prevDay(firstBlockedAfterPickup) : undefined;

  // Fetch blocked dates for this car when the modal opens (home page flow only)
  useEffect(() => {
    if (!isOpen || !needsDates || !bookingContext?.carImg) {
      setCarBlockedDates([]);
      return;
    }
    fetch(`/api/availability?carImg=${encodeURIComponent(bookingContext.carImg)}`)
      .then(r => r.json())
      .then(data => setCarBlockedDates(data.blockedDates ?? []))
      .catch(() => setCarBlockedDates([]));
  }, [isOpen, needsDates, bookingContext?.carImg]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSuccess(false);
        setError("");
        setName("");
        setPhone("");
        setEmail("");
        setContact("viber");
        setSubmitting(false);
        setModalPickupDate("");
        setModalReturnDate("");
        setCarBlockedDates([]);
      }, 400);
    }
  }, [isOpen]);

  async function handleConfirm() {
    if (needsDates && (!effectivePickupDate || !effectiveReturnDate || effectiveDays <= 0)) {
      setError("Molimo odaberite datume preuzimanja i povratka.");
      return;
    }
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Molimo popunite sva polja.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name.trim(),
          customerPhone: phone.trim(),
          customerEmail: email.trim(),
          contactPreference: contact,
          carName: bookingContext?.carName ?? null,
          carImg: bookingContext?.carImg ?? null,
          days: effectiveDays || null,
          pickupDate: effectivePickupDate || null,
          returnDate: effectiveReturnDate || null,
          totalPrice: effectiveTotalPrice ?? null,
          pickupLocation: "Banjaluka",
        }),
      });
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.emailWarning) setError(data.emailWarning);
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Greška. Pokušajte ponovo.");
      }
    } catch {
      setError("Greška. Provjerite internet vezu.");
    } finally {
      setSubmitting(false);
    }
  }

  const showContextBar = !!(bookingContext?.carName || (effectivePickupDate && effectiveReturnDate && effectiveDays > 0));

  const discountPct =
    bookingContext?.price1 && bookingContext?.price2 && effectiveDays >= 4 && effectiveDays <= 7
      ? Math.round(((bookingContext.price1 - bookingContext.price2) / bookingContext.price1) * 100)
      : 0;

  return (
    <Overlay
      $open={isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Modal $open={isOpen}>
        <CloseX onClick={onClose}>&times;</CloseX>

        {success ? (
          <SuccessBox>
            <SuccessTitle>REZERVACIJA PRIMLJENA!</SuccessTitle>
            <SuccessText>
              Email potvrde je poslan na <strong>{email}</strong>.
              <br />
              Kliknite na link u emailu da potvrdite rezervaciju.
            </SuccessText>
          </SuccessBox>
        ) : (
          <>
            <ModalTitle>ZAVRŠI REZERVACIJU</ModalTitle>

            {showContextBar && (
              <ContextBar>
                {bookingContext?.carName && <strong>{bookingContext.carName}</strong>}
                {effectivePickupDate && effectiveDays > 0 && (
                  <> &nbsp;·&nbsp; {fmtDate(effectivePickupDate)} – {fmtDate(effectiveReturnDate)} ({effectiveDays} dana)</>
                )}
                {effectiveTotalPrice != null && effectiveDays > 0 && (
                  <> &nbsp;·&nbsp; <span style={{ color: "var(--yellow-bar)" }}>{effectiveTotalPrice} KM</span></>
                )}
                {effectiveTotalPrice === null && effectiveDays > 7 && (
                  <> &nbsp;·&nbsp; <span style={{ color: "var(--yellow-bar)" }}>Cijena po dogovoru</span></>
                )}
                {discountPct > 0 && (
                  <> &nbsp;<span style={{ color: "#ff3333", fontWeight: "bold" }}>▼ -{discountPct}% POPUST</span></>
                )}
              </ContextBar>
            )}

            {needsDates && (
              <DateRow>
                <div>
                  <FieldLabel as="span">DATUM PREUZIMANJA</FieldLabel>
                  <DatePicker
                    value={modalPickupDate}
                    onChange={(d) => {
                      setModalPickupDate(d);
                      // Clear return date if it's no longer valid after pickup change
                      if (modalReturnDate && modalReturnDate <= d) {
                        setModalReturnDate("");
                      } else if (modalReturnDate) {
                        // Also clear if the new range would cross a blocked date
                        const firstBlocked = carBlockedDates.find(bd => bd > d);
                        if (firstBlocked && modalReturnDate >= firstBlocked) {
                          setModalReturnDate("");
                        }
                      }
                    }}
                    placeholder="Odaberite datum"
                    minDate={todayStr()}
                    rangeStart={modalPickupDate}
                    rangeEnd={modalReturnDate}
                    blockedDates={carBlockedDates}
                  />
                </div>
                <div>
                  <FieldLabel as="span">DATUM POVRATKA</FieldLabel>
                  <DatePicker
                    value={modalReturnDate}
                    onChange={setModalReturnDate}
                    placeholder="Odaberite datum"
                    minDate={modalPickupDate || todayStr()}
                    maxDate={returnMaxDate}
                    rangeStart={modalPickupDate}
                    rangeEnd={modalReturnDate}
                    blockedDates={carBlockedDates}
                  />
                </div>
              </DateRow>
            )}

            <Field>
              <FieldLabel>IME I PREZIME</FieldLabel>
              <FieldInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel>BROJ TELEFONA</FieldLabel>
              <FieldInput
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel>EMAIL</FieldLabel>
              <FieldInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>

            <ContactLabel>NAČIN KONTAKTA</ContactLabel>
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

            {error && (
              <p style={{ color: "#ff4444", fontFamily: "Arial, sans-serif", fontSize: 14, marginBottom: 12 }}>
                {error}
              </p>
            )}

            <ConfirmBtn type="button" onClick={handleConfirm} disabled={submitting}>
              {submitting ? "ŠALJEM..." : "POTVRDI REZERVACIJU"}
            </ConfirmBtn>
          </>
        )}
      </Modal>
    </Overlay>
  );
}
