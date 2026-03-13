import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { sendConfirmEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const VALID_PREFS = ["viber", "sms"] as const;

// Valid car images — must match filenames in /public
const VALID_IMGS = [
  "5.jpeg", "6.jpeg", "002.jpeg", "009.jpeg",
  "2.jpeg", "00.jpeg", "1.jpg", "3.jpg",
];

export async function POST(req: NextRequest) {
  // Rate limit: 10 bookings per IP per hour
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const rl = checkRateLimit(`booking:${ip}`, 10, 60 * 60 * 1000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Previše zahtjeva. Pokušajte ponovo za malo." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter ?? 60) } }
    );
  }

  try {
    const body = await req.json();
    const {
      customerName,
      customerPhone,
      customerEmail,
      contactPreference,
      carName,
      carImg,
      days,
      pickupDate,
      returnDate,
      totalPrice,
      pickupLocation,
    } = body;

    // ── Required field presence ──────────────────────────────────────────────
    if (!customerName || !customerPhone || !customerEmail || !contactPreference) {
      return NextResponse.json({ error: "Sva polja su obavezna." }, { status: 400 });
    }

    // ── Type checks ──────────────────────────────────────────────────────────
    if (
      typeof customerName !== "string" ||
      typeof customerPhone !== "string" ||
      typeof customerEmail !== "string" ||
      typeof contactPreference !== "string"
    ) {
      return NextResponse.json({ error: "Nevažeći tipovi podataka." }, { status: 400 });
    }

    // ── Length limits ────────────────────────────────────────────────────────
    if (customerName.trim().length < 2 || customerName.length > 100) {
      return NextResponse.json({ error: "Ime mora biti između 2 i 100 znakova." }, { status: 400 });
    }
    if (customerPhone.length > 30) {
      return NextResponse.json({ error: "Telefon je predugačak." }, { status: 400 });
    }
    if (customerEmail.length > 254) {
      return NextResponse.json({ error: "Email je predugačak." }, { status: 400 });
    }

    // ── Email format ─────────────────────────────────────────────────────────
    if (!EMAIL_RE.test(customerEmail)) {
      return NextResponse.json({ error: "Nevažeća email adresa." }, { status: 400 });
    }

    // ── Contact preference enum ──────────────────────────────────────────────
    if (!VALID_PREFS.includes(contactPreference as typeof VALID_PREFS[number])) {
      return NextResponse.json({ error: "Nevažeća kontakt preferencija." }, { status: 400 });
    }

    // ── Date format (if provided) ────────────────────────────────────────────
    if (pickupDate && !DATE_RE.test(pickupDate)) {
      return NextResponse.json({ error: "Nevažeći format datuma preuzimanja." }, { status: 400 });
    }
    if (returnDate && !DATE_RE.test(returnDate)) {
      return NextResponse.json({ error: "Nevažeći format datuma povratka." }, { status: 400 });
    }
    if (pickupDate && returnDate && new Date(returnDate) <= new Date(pickupDate)) {
      return NextResponse.json({ error: "Datum povratka mora biti poslije datuma preuzimanja." }, { status: 400 });
    }

    // ── Days sanity ──────────────────────────────────────────────────────────
    if (days !== null && days !== undefined) {
      const daysNum = Number(days);
      if (!Number.isInteger(daysNum) || daysNum < 1 || daysNum > 365) {
        return NextResponse.json({ error: "Nevažeći broj dana." }, { status: 400 });
      }
    }

    // ── Car image (if provided) ──────────────────────────────────────────────
    if (carImg && !VALID_IMGS.includes(carImg)) {
      return NextResponse.json({ error: "Nevažeći auto." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const confirmToken = crypto.randomUUID();
    const cancelToken = crypto.randomUUID();

    const booking = {
      id,
      car_name: typeof carName === "string" ? carName.slice(0, 150) : null,
      car_img: carImg ?? null,
      pickup_date: pickupDate ?? null,
      return_date: returnDate ?? null,
      days: days ? Number(days) : null,
      pickup_location: typeof pickupLocation === "string" ? pickupLocation.slice(0, 100) : "Banjaluka",
      customer_name: customerName.trim(),
      customer_phone: customerPhone.trim(),
      customer_email: customerEmail.trim().toLowerCase(),
      contact_preference: contactPreference,
      total_price: totalPrice ? Number(totalPrice) : null,
      confirm_token: confirmToken,
      cancel_token: cancelToken,
      created_at: new Date().toISOString(),
    };

    // Save to DB first — always succeeds
    db.createBooking(booking);

    // Send email — if it fails, booking is still saved
    try {
      await sendConfirmEmail({ ...booking, status: "pending" });
    } catch (emailErr) {
      console.error("[EMAIL] Failed to send confirmation email:", emailErr);
      return NextResponse.json({
        success: true,
        emailWarning: "Rezervacija je primljena, ali slanje emaila nije uspjelo. Kontaktirajte nas direktno.",
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Interna greška servera." }, { status: 500 });
  }
}
