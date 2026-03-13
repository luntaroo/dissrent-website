"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Wrapper, Card, Title, Label, Input, LoginBtn, ErrorMsg } from "./styles";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Pogrešna lozinka.");
      }
    } catch {
      setError("Greška. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <Card>
        <Title>ADMIN PANEL</Title>
        <form onSubmit={handleLogin}>
          <Label htmlFor="password">LOZINKA</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <LoginBtn type="submit" disabled={loading}>
            {loading ? "..." : "PRIJAVA"}
          </LoginBtn>
        </form>
      </Card>
    </Wrapper>
  );
}
