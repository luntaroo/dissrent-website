/// <reference types="@cloudflare/workers-types" />

interface CloudflareEnv {
  DB: D1Database;
  APP_BASE_URL: string;
  ADMIN_PASSWORD: string;
  ADMIN_SESSION_SECRET: string;
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
  ADMIN_EMAIL: string;
  TEST_EMAIL_OVERRIDE?: string;
}

declare module "@opennextjs/cloudflare" {
  export function getCloudflareContext(): Promise<{
    env: CloudflareEnv;
    ctx: ExecutionContext;
  }>;
}
