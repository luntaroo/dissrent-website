import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "admin_auth";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function safeEqual(left: string, right: string): boolean {
  if (left.length !== right.length) {
    return false;
  }

  const encoder = new TextEncoder();
  const a = encoder.encode(left);
  const b = encoder.encode(right);

  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }

  return diff === 0;
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

async function signSession(expiresAt: string): Promise<string> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    return "";
  }

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(`admin:${expiresAt}`)
  );

  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function verifyAdminPassword(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return false;
  }

  return safeEqual(input, password);
}

export async function createAdminSessionValue(now = Date.now()): Promise<string | null> {
  if (!isAdminConfigured()) {
    return null;
  }

  const expiresAt = String(now + SESSION_TTL_SECONDS * 1000);
  const signature = await signSession(expiresAt);
  return `${expiresAt}.${signature}`;
}

export async function isValidAdminSession(value: string | undefined): Promise<boolean> {
  if (!value || !isAdminConfigured()) {
    return false;
  }

  const [expiresAt, signature] = value.split(".");
  if (!expiresAt || !signature || !/^\d+$/.test(expiresAt)) {
    return false;
  }

  if (Number(expiresAt) < Date.now()) {
    return false;
  }

  const expectedSignature = await signSession(expiresAt);
  return safeEqual(signature, expectedSignature);
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return isValidAdminSession(jar.get(ADMIN_COOKIE_NAME)?.value);
}
