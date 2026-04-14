import React from "react";
import Link from "next/link";
import db from "@/lib/db";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { formatDate } from "@/lib/booking";
import {
  ActionStack,
  BackLink,
  Card,
  PageWrap,
  PrimaryButton,
  SecondaryButton,
  StatusIcon,
  SummaryBox,
  SummaryLine,
  Text,
  Title,
} from "@/components/StatusPage/styles";

interface PageProps {
  searchParams: Promise<{ status?: string; action?: string; token?: string }>;
}

export default async function BookingActionPage({ searchParams }: PageProps) {
  const { status, action, token } = await searchParams;

  const booking =
    action === "confirm" && token
      ? await db.getBookingByToken(token)
      : action === "cancel" && token
        ? await db.getBookingByCancelToken(token)
        : undefined;

  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";
  const isUnavailable = status === "unavailable";
  const canConfirm = action === "confirm" && booking?.status === "pending";
  const canCancel = action === "cancel" && booking?.status === "confirmed";
  const showActionCard = !status && token && (canConfirm || canCancel);
  const priceText =
    booking?.total_price != null ? `${booking.total_price} KM` : "Cijena po dogovoru";
  const actionEndpoint = canConfirm ? "/api/booking/confirm" : "/api/booking/cancel";

  return (
    <>
      <Navbar />

      <PageWrap>
        <Card>
          {showActionCard && booking ? (
            <>
              <StatusIcon $tone="info">
                <i className={`fa-solid ${canConfirm ? "fa-envelope-open-text" : "fa-calendar-xmark"}`} />
              </StatusIcon>
              <Title>{canConfirm ? "Potvrdite rezervaciju" : "Otkazite rezervaciju"}</Title>
              <Text>
                {canConfirm
                  ? "Pregledajte detalje rezervacije i finalno je potvrdite jednim klikom."
                  : "Otkazivanje odmah oslobadja termin i zaustavlja ovu rezervaciju."}
              </Text>

              <SummaryBox>
                <SummaryLine>
                  <strong>Auto:</strong> {booking.car_name ?? "-"}
                </SummaryLine>
                <SummaryLine>
                  <strong>Period:</strong>{" "}
                  {formatDate(booking.pickup_date)} - {formatDate(booking.return_date)} ({booking.days ?? 0} dana)
                </SummaryLine>
                <SummaryLine>
                  <strong>Cijena:</strong> {priceText}
                </SummaryLine>
                <SummaryLine>
                  <strong>Kontakt:</strong> {booking.customer_name} /{" "}
                  {booking.customer_phone}
                </SummaryLine>
              </SummaryBox>

              <form action={actionEndpoint} method="post">
                <ActionStack>
                  <input type="hidden" name="token" value={token} />
                  {canConfirm ? (
                    <PrimaryButton type="submit">Potvrdi rezervaciju</PrimaryButton>
                  ) : (
                    <SecondaryButton type="submit">Otkazi rezervaciju</SecondaryButton>
                  )}
                </ActionStack>
              </form>
            </>
          ) : isSuccess ? (
            <>
              <StatusIcon $tone="success">
                <i className="fa-solid fa-check" />
              </StatusIcon>
              <Title>Rezervacija potvrdjena</Title>
              <Text>
                Vasa rezervacija je uspjesno potvrdjena. Uskoro cete biti kontaktirani sa dodatnim
                detaljima.
              </Text>
            </>
          ) : isCancelled ? (
            <>
              <StatusIcon $tone="warning">
                <i className="fa-solid fa-xmark" />
              </StatusIcon>
              <Title>Rezervacija otkazana</Title>
              <Text>
                Rezervacija je otkazana i termin je ponovo slobodan za nove upite.
              </Text>
            </>
          ) : isUnavailable ? (
            <>
              <StatusIcon $tone="warning">
                <i className="fa-solid fa-triangle-exclamation" />
              </StatusIcon>
              <Title>Termin vise nije dostupan</Title>
              <Text>
                Neko je u medjuvremenu potvrdio isti period. Vratite se na pocetnu stranu i odaberite
                drugi termin.
              </Text>
            </>
          ) : (
            <>
              <StatusIcon $tone="danger">
                <i className="fa-solid fa-link-slash" />
              </StatusIcon>
              <Title>Nevazeci link</Title>
              <Text>
                Ovaj link vise nije vazeci ili je vec prethodno iskoristen.
              </Text>
            </>
          )}

          <BackLink as={Link} href="/">
            Nazad na pocetnu
          </BackLink>
        </Card>
      </PageWrap>

      <Footer />
    </>
  );
}
