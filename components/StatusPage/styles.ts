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
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  box-shadow: var(--shadow-lg);
  text-align: center;

  @media (max-width: 640px) {
    padding: 32px 20px;
    border-radius: var(--radius-lg);
  }
`;

export const StatusIcon = styled.div<{ $tone: "success" | "warning" | "danger" | "info" }>`
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  background: ${({ $tone }) =>
    $tone === "success"
      ? "var(--success-soft)"
      : $tone === "warning"
        ? "var(--warning-soft)"
        : $tone === "info"
          ? "var(--info-soft)"
          : "var(--danger-soft)"};
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
  font-size: clamp(2rem, 4.5vw, 3rem);
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 14px;
`;

export const Text = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.96rem;
  line-height: 1.75;
  margin-bottom: 24px;
`;

export const SummaryBox = styled.div`
  text-align: left;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  border-radius: var(--radius-lg);
  padding: 20px;
  margin-bottom: 24px;
`;

export const SummaryLine = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  line-height: 1.85;
  font-size: 0.92rem;

  strong {
    color: var(--text-heading);
    font-weight: 700;
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
  min-height: 52px;
  border: none;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
  transition: transform 0.15s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.32);
  }
`;

export const SecondaryButton = styled.button`
  ${PrimaryButton}
  background: linear-gradient(135deg, var(--danger), #dc4f38);
  box-shadow: 0 4px 16px rgba(220, 38, 38, 0.25);

  &:hover {
    box-shadow: 0 8px 24px rgba(220, 38, 38, 0.32);
  }
`;

export const BackLink = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 20px;
  border-radius: var(--radius-full);
  background: var(--bg-subtle);
  color: var(--text-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  border: 1.5px solid var(--border);
  transition: border-color 0.2s, background 0.2s, transform 0.15s;

  &:hover {
    border-color: var(--primary);
    background: var(--primary-soft);
    transform: translateY(-1px);
  }
`;
