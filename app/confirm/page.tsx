import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BackLink,
  Card,
  PageWrap,
  StatusIcon,
  Text,
  Title,
} from "@/components/StatusPage/styles";

interface PageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function ConfirmPage({ searchParams }: PageProps) {
  const { status } = await searchParams;
  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";

  return (
    <>
      <Navbar />

      <PageWrap>
        <Card>
          {isSuccess ? (
            <>
              <StatusIcon $tone="success">
                <i className="fa-solid fa-check" />
              </StatusIcon>
              <Title>Rezervacija potvrdjena</Title>
              <Text>
                Vasa rezervacija je uspjesno potvrdjena. Uskoro cete biti kontaktirani sa dodatnim
                detaljima preuzimanja i najma vozila.
              </Text>
            </>
          ) : isCancelled ? (
            <>
              <StatusIcon $tone="warning">
                <i className="fa-solid fa-xmark" />
              </StatusIcon>
              <Title>Rezervacija otkazana</Title>
              <Text>
                Rezervacija je otkazana i odabrani datumi su ponovo slobodni za naredne upite.
              </Text>
            </>
          ) : (
            <>
              <StatusIcon $tone="danger">
                <i className="fa-solid fa-link-slash" />
              </StatusIcon>
              <Title>Nevazeci link</Title>
              <Text>
                Link koji ste otvorili vise nije vazeci ili je vec prethodno iskoristen.
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
