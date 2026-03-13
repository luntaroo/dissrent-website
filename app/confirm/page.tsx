import React from "react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ status?: string }>;
}

export default async function ConfirmPage({ searchParams }: PageProps) {
  const { status } = await searchParams;
  const isSuccess = status === "success";
  const isCancelled = status === "cancelled";

  const borderColor = isSuccess ? "var(--yellow-bar)" : isCancelled ? "#ff6600" : "#ff4444";

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        background: "#111114",
        border: `3px solid ${borderColor}`,
        borderRadius: 10,
        padding: "48px 40px",
        maxWidth: 520,
        width: "90%",
        textAlign: "center",
      }}>
        {isSuccess ? (
          <>
            <div style={{ fontSize: 64, marginBottom: 16 }}>✓</div>
            <h1 style={{
              fontFamily: "Impact, sans-serif",
              fontSize: 42,
              color: "var(--yellow-bar)",
              letterSpacing: 1,
              transform: "scaleX(0.88)",
              display: "inline-block",
              marginBottom: 16,
            }}>
              REZERVACIJA POTVRĐENA!
            </h1>
            <p style={{
              fontFamily: "Arial, sans-serif",
              color: "#ccc",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 28,
            }}>
              Vaša rezervacija je uspješno potvrđena.
              <br />
              Kontaktiraćemo Vas uskoro sa detaljima.
            </p>
          </>
        ) : isCancelled ? (
          <>
            <div style={{ fontSize: 64, marginBottom: 16 }}>✗</div>
            <h1 style={{
              fontFamily: "Impact, sans-serif",
              fontSize: 42,
              color: "#ff6600",
              letterSpacing: 1,
              transform: "scaleX(0.88)",
              display: "inline-block",
              marginBottom: 16,
            }}>
              REZERVACIJA OTKAZANA
            </h1>
            <p style={{
              fontFamily: "Arial, sans-serif",
              color: "#ccc",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 28,
            }}>
              Rezervacija je uspješno otkazana i datumi su automatski oslobođeni.
            </p>
          </>
        ) : (
          <>
            <div style={{ fontSize: 64, marginBottom: 16 }}>✗</div>
            <h1 style={{
              fontFamily: "Impact, sans-serif",
              fontSize: 42,
              color: "#ff4444",
              letterSpacing: 1,
              transform: "scaleX(0.88)",
              display: "inline-block",
              marginBottom: 16,
            }}>
              NEVAŽEĆI LINK
            </h1>
            <p style={{
              fontFamily: "Arial, sans-serif",
              color: "#ccc",
              fontSize: 15,
              lineHeight: 1.7,
              marginBottom: 28,
            }}>
              Ovaj link za potvrdu je nevažeći ili je već iskorišten.
            </p>
          </>
        )}
        <Link href="/" style={{
          display: "inline-block",
          background: "linear-gradient(180deg, #ffcc00 0%, #ff5500 100%)",
          color: "#000",
          padding: "12px 32px",
          borderRadius: 8,
          fontFamily: "Impact, sans-serif",
          fontSize: 22,
          textDecoration: "none",
          letterSpacing: 1,
        }}>
          NAZAD NA POČETNU
        </Link>
      </div>
    </div>
  );
}
