import { cookies } from "next/headers";
import { createHash } from "crypto";

export function getAdminToken(): string {
  return createHash("sha256")
    .update(process.env.ADMIN_PASSWORD ?? "")
    .digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return jar.get("admin_auth")?.value === getAdminToken();
}
