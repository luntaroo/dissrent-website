import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const PageWrap = styled.div`
  width: min(100% - 40px, 820px);
  margin: 0 auto;
  padding: calc(var(--nav-h) + 52px) 0 72px;

  @media (max-width: 768px) {
    padding: calc(var(--nav-h) + 34px) 0 46px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 34px;
  padding: 38px 32px;
  box-shadow: var(--shadow-md);
  text-align: center;
  backdrop-filter: blur(16px);

  @media (max-width: 640px) {
    padding: 30px 20px;
    border-radius: 28px;
  }
`;

export const StatusIcon = styled.div<{ $tone: "success" | "warning" | "danger" | "info" }>`
  width: 76px;
  height: 76px;
  margin: 0 auto 20px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  background: ${({ $tone }) =>
    $tone === "success"
      ? "rgba(21, 128, 61, 0.12)"
      : $tone === "warning"
        ? "rgba(180, 83, 9, 0.12)"
        : $tone === "info"
          ? "var(--info-dim)"
          : "rgba(194, 65, 12, 0.12)"};
  color: ${({ $tone }) =>
    $tone === "success"
      ? "var(--success)"
      : $tone === "warning"
        ? "var(--warning)"
        : $tone === "info"
          ? "var(--info)"
          : "var(--danger)"};
`;

export const Title = styled.h1`
  ${heavyFont}
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 0.96;
  color: var(--text);
  margin-bottom: 14px;
`;

export const Text = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 24px;
`;

export const SummaryBox = styled.div`
  text-align: left;
  border: 1px solid rgba(16, 24, 40, 0.08);
  background: rgba(16, 24, 40, 0.04);
  border-radius: 26px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const SummaryLine = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  line-height: 1.9;
  font-size: 0.96rem;

  strong {
    color: var(--text);
    font-weight: 800;
  }
`;

export const ActionStack = styled.div`
  display: grid;
  gap: 14px;
  margin-bottom: 12px;
`;

export const PrimaryButton = styled.button`
  ${bodyFont}
  width: 100%;
  min-height: 56px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.96rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 20px 36px rgba(var(--gold-rgb), 0.22);
`;

export const SecondaryButton = styled.button`
  ${PrimaryButton}
  background: linear-gradient(135deg, var(--danger), #db5e2c);
  color: var(--text-inverse);
  box-shadow: 0 20px 36px rgba(194, 65, 12, 0.22);
`;

export const BackLink = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 20px;
  border-radius: 999px;
  background: rgba(16, 24, 40, 0.06);
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;
`;
