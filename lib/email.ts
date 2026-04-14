import { Resend } from "resend";
import type { Booking } from "./db";

type EmailTone = "brand" | "danger";

const LOGO_URL = "https://i.ibb.co/5W1fm00q/logobw.webp";

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}

function from(): string {
  const addr = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  return `DISS RENT <${addr}>`;
}

function getBaseUrl(): string {
  return process.env.APP_BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
}

function formatDate(s: string | null): string {
  if (!s) return "-";
  const [y, m, d] = s.split("-");
  return `${d}.${m}.${y}.`;
}

function formatPrice(totalPrice: Booking["total_price"]): string {
  return totalPrice ? `${Number(totalPrice)} KM` : "Po dogovoru";
}

function getContactPreferenceLabel(pref: string | null | undefined): string {
  if (pref === "viber") return "Viber";
  if (pref === "sms") return "SMS";
  return "Telefon";
}

/** Prevent HTML injection from user-supplied strings in email templates. */
function esc(str: string | null | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function renderRows(rows: Array<{ label: string; value: string; accent?: boolean }>): string {
  return rows
    .map(
      ({ label, value, accent }) => `
        <tr>
          <td style="padding:0 0 10px">
            <table
              role="presentation"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              style="border-collapse:separate;background:${accent ? "#ebf7fb" : "#f8fbfd"};border:1px solid ${accent ? "#c4e9f4" : "#dce7ee"};border-radius:16px"
            >
              <tr>
                <td style="padding:12px 14px">
                  <div style="margin:0 0 6px;color:#6f8191;font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase">
                    ${esc(label)}
                  </div>
                  <div style="margin:0;color:${accent ? "#1d84b0" : "#10212e"};font-size:15px;font-weight:700;line-height:1.5">
                    ${esc(value)}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderSummaryCard(
  title: string,
  rows: Array<{ label: string; value: string; accent?: boolean }>
): string {
  return `
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      class="summary-card"
      style="margin:0 0 20px;border-collapse:separate;background:#ffffff;border:1px solid #dce7ee;border-radius:20px"
    >
      <tr>
        <td style="padding:18px 18px 10px;color:#10212e;font-size:17px;font-weight:700;font-family:Arial,Helvetica,sans-serif">
          ${esc(title)}
        </td>
      </tr>
      <tr>
        <td style="padding:0 18px 8px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
            ${renderRows(rows)}
          </table>
        </td>
      </tr>
    </table>
  `;
}

function renderActionButton(label: string, url: string, tone: EmailTone = "brand"): string {
  const isDanger = tone === "danger";
  const background = isDanger
    ? "linear-gradient(135deg,#c2410c 0%,#db5e2c 100%)"
    : "linear-gradient(135deg,#1d84b0 0%,#62b8d7 100%)";

  return `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px">
      <tr>
        <td align="center">
          <a
            href="${url}"
            class="button-link"
            style="display:block;width:100%;box-sizing:border-box;padding:16px 20px;border-radius:999px;background:${background};color:${isDanger ? "#f7f8fb" : "#081018"};font-size:15px;font-weight:800;line-height:1;text-align:center;text-decoration:none;font-family:Arial,Helvetica,sans-serif"
          >
            ${esc(label)}
          </a>
        </td>
      </tr>
    </table>
  `;
}

function renderEmailLayout(params: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  summaryCard: string;
  actionButton?: string;
  footerNote: string;
}) {
  return `
    <!DOCTYPE html>
    <html lang="bs">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${esc(params.title)}</title>
        <style>
          @media screen and (max-width: 600px) {
            .email-shell {
              border-radius: 22px !important;
            }

            .header-cell {
              padding: 22px 18px !important;
            }

            .body-cell {
              padding: 20px 18px 22px !important;
            }

            .logo-image {
              width: 148px !important;
            }

            .eyebrow-chip {
              font-size: 11px !important;
            }

            .email-title {
              font-size: 24px !important;
            }

            .email-copy {
              font-size: 14px !important;
              line-height: 1.65 !important;
            }

            .summary-card {
              border-radius: 18px !important;
            }
          }
        </style>
      </head>
      <body style="margin:0;padding:12px;background:#eef5f8;color:#10212e;font-family:Arial,Helvetica,sans-serif">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">
          ${esc(params.preheader)}
        </div>

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
          <tr>
            <td align="center">
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                class="email-shell"
                style="max-width:560px;border-collapse:separate;background:#ffffff;border:1px solid #d8e4eb;border-radius:26px;overflow:hidden;box-shadow:0 18px 44px rgba(16,33,46,0.08)"
              >
                <tr>
                  <td
                    class="header-cell"
                    style="padding:24px 24px 22px;background:linear-gradient(180deg,#18384a 0%,#1d84b0 100%);text-align:center"
                  >
                    <img
                      src="${LOGO_URL}"
                      alt="DISS RENT"
                      width="188"
                      class="logo-image"
                      style="display:block;width:188px;max-width:100%;height:auto;margin:0 auto 16px"
                    />
                    <span
                      class="eyebrow-chip"
                      style="display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,0.16);border:1px solid rgba(255,255,255,0.2);color:#ffffff;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase"
                    >
                      ${esc(params.eyebrow)}
                    </span>
                    <h1
                      class="email-title"
                      style="margin:18px 0 10px;color:#ffffff;font-size:28px;line-height:1.08;font-weight:800;font-family:Arial,Helvetica,sans-serif"
                    >
                      ${esc(params.title)}
                    </h1>
                    <p class="email-copy" style="margin:0;color:rgba(255,255,255,0.88);font-size:15px;line-height:1.68">
                      ${esc(params.intro)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="body-cell" style="padding:20px 24px 24px">
                    <div style="margin:0 0 16px;padding:14px 16px;border-radius:18px;background:#f3f9fc;border:1px solid #dbeaf1;color:#4d6577;font-size:13px;line-height:1.65">
                      Sve vazne informacije su ispod, u rasporedu prilagodjenom telefonu i brzom pregledu.
                    </div>

                    ${params.summaryCard}

                    ${params.actionButton ?? ""}

                    <p class="email-copy" style="margin:0 0 12px;color:#4d6577;font-size:14px;line-height:1.68">
                      Ako imate dodatno pitanje, mozete odgovoriti na ovaj email ili nas pozvati na
                      <a href="tel:+38765626444" style="color:#1d84b0;text-decoration:none;font-weight:700">+387 65 626 444</a>.
                    </p>
                    <p style="margin:0;color:#7b8f9f;font-size:12px;line-height:1.65">
                      ${esc(params.footerNote)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function sendConfirmEmail(booking: Booking): Promise<void> {
  const baseUrl = getBaseUrl();
  const confirmUrl = `${baseUrl}/booking-action?action=confirm&token=${booking.confirm_token}`;
  const period =
    booking.pickup_date && booking.return_date
      ? `${formatDate(booking.pickup_date)} - ${formatDate(booking.return_date)} (${Number(booking.days) || 0} dana)`
      : "Po dogovoru";

  const summaryCard = renderSummaryCard("Pregled rezervacije", [
    { label: "Auto", value: booking.car_name ?? "DISS RENT vozilo" },
    { label: "Period", value: period },
    { label: "Ukupna cijena", value: formatPrice(booking.total_price), accent: true },
    { label: "Preuzimanje", value: booking.pickup_location ?? "Banjaluka" },
    {
      label: "Kontakt",
      value: `${booking.customer_phone} / ${getContactPreferenceLabel(booking.contact_preference)}`,
    },
  ]);

  const html = renderEmailLayout({
    preheader: "Potvrdite rezervaciju jednim klikom i sacuvajte svoj termin.",
    eyebrow: "Potvrda rezervacije",
    title: "Jedan klik do potvrde termina",
    intro: `Zdravo ${booking.customer_name}, primili smo vas zahtjev za rezervaciju. Provjerite detalje ispod i potvrdite termin kada vam sve odgovara.`,
    summaryCard,
    actionButton: renderActionButton("Potvrdi rezervaciju", confirmUrl, "brand"),
    footerNote: "Ako niste zatrazili ovu rezervaciju, slobodno ignorisite ovu poruku.",
  });

  const toEmail = process.env.TEST_EMAIL_OVERRIDE || booking.customer_email;
  console.log(
    `[EMAIL] Sending confirm email FROM=${from()} TO=${toEmail}${process.env.TEST_EMAIL_OVERRIDE ? ` (TEST override from ${esc(booking.customer_email)})` : ""}`
  );

  const result = await getResendClient().emails.send({
    from: from(),
    to: toEmail,
    subject: "Potvrdi rezervaciju - DISS RENT",
    html,
  });

  console.log("[EMAIL] Resend response:", JSON.stringify(result));
  if (result.error) {
    console.error("[RESEND] sendConfirmEmail error:", result.error);
    throw new Error(result.error.message);
  }
  console.log(`[EMAIL] Confirm email sent OK, id=${result.data?.id}`);
}

export async function sendAdminEmail(booking: Booking): Promise<void> {
  const adminEmail = process.env.TEST_EMAIL_OVERRIDE || process.env.ADMIN_EMAIL;
  if (!adminEmail) return;

  const baseUrl = getBaseUrl();
  const cancelUrl = `${baseUrl}/booking-action?action=cancel&token=${booking.cancel_token}`;
  const period = `${formatDate(booking.pickup_date)} - ${formatDate(booking.return_date)} (${Number(booking.days) || 0} dana)`;

  const summaryCard = renderSummaryCard("Detalji potvrdene rezervacije", [
    { label: "Auto", value: booking.car_name ?? "-" },
    { label: "Period", value: period },
    { label: "Ukupna cijena", value: formatPrice(booking.total_price), accent: true },
    { label: "Lokacija", value: booking.pickup_location ?? "Banjaluka" },
    { label: "Ime i prezime", value: booking.customer_name },
    { label: "Telefon", value: booking.customer_phone },
    { label: "Email", value: booking.customer_email },
    { label: "Kontakt kanal", value: getContactPreferenceLabel(booking.contact_preference) },
  ]);

  const html = renderEmailLayout({
    preheader: "Nova potvrdena rezervacija ceka pregled i dalji kontakt sa klijentom.",
    eyebrow: "Admin pregled",
    title: "Nova potvrdena rezervacija",
    intro: "Rezervacija je upravo potvrdena od strane klijenta. U nastavku su svi kljucni podaci i direktan link za otkazivanje ako bude potrebno.",
    summaryCard,
    actionButton: renderActionButton("Otkazi rezervaciju", cancelUrl, "danger"),
    footerNote: "Klik na dugme odmah otkazuje rezervaciju i vraca termin u dostupnost.",
  });

  const result = await getResendClient().emails.send({
    from: from(),
    to: adminEmail,
    subject: `Nova rezervacija - ${booking.car_name ?? "DISS RENT"}`,
    html,
  });

  if (result.error) {
    console.error("[RESEND] sendAdminEmail error:", result.error);
  }
}
