import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Card = styled.article`
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(37, 99, 235, 0.2);
  }
`;

export const Media = styled.div`
  position: relative;
  min-height: 170px;
`;

export const Bg = styled.div<{ $img: string }>`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.35) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;
`;

export const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), transparent 56%);
`;

export const BadgeRow = styled.div`
  position: relative;
  z-index: 1;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const StatusBadge = styled.div<{ $tone?: "available" | "warning" | "blocked" | "neutral" }>`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 11px;
  border-radius: var(--radius-full);
  font-size: 0.62rem;
  font-weight: 700;
  background: ${({ $tone }) =>
    $tone === "blocked"
      ? "rgba(220, 38, 38, 0.9)"
      : $tone === "warning"
        ? "rgba(217, 119, 6, 0.9)"
        : $tone === "neutral"
          ? "rgba(15, 23, 42, 0.7)"
          : "rgba(255, 255, 255, 0.95)"};
  color: ${({ $tone }) =>
    $tone === "available" ? "var(--text-heading)" : "var(--text-inverse)"};
  border: ${({ $tone }) =>
    $tone === "available" ? "1px solid var(--border)" : "none"};
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const CarName = styled.h3`
  ${heavyFont}
  color: var(--text-heading);
  font-size: 1.05rem;
  line-height: 1.05;
`;

export const Summary = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.76rem;
  line-height: 1.5;
`;

export const PricingPanel = styled.div`
  display: grid;
  gap: 8px;
  padding: 12px;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border-light);
`;

export const PricingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PricingLabel = styled.span`
  ${bodyFont}
  color: var(--text-subtle);
  font-size: 0.58rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const PricingValue = styled.span`
  ${bodyFont}
  color: var(--text-heading);
  font-size: 0.76rem;
  font-weight: 700;
  text-align: right;
`;

export const Notice = styled.div<{ $available: boolean }>`
  ${bodyFont}
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  background: ${({ $available }) => ($available ? "var(--success-soft)" : "var(--danger-soft)")};
  border: 1px solid
    ${({ $available }) => ($available ? "rgba(22, 163, 74, 0.15)" : "rgba(220, 38, 38, 0.15)")};
  color: ${({ $available }) => ($available ? "var(--success)" : "var(--danger)")};
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.6;
`;

export const ActionRow = styled.div`
  margin-top: auto;
  display: flex;
  gap: 10px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const GhostButton = styled.button`
  ${bodyFont}
  flex: 1;
  min-height: 44px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--border-medium);
  background: var(--surface);
  color: var(--text-heading);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.15s;

  &:hover {
    border-color: var(--primary);
    background: var(--primary-soft);
    transform: translateY(-1px);
  }
`;

export const PrimaryButton = styled.button`
  ${bodyFont}
  flex: 1.15;
  min-height: 44px;
  border-radius: var(--radius-full);
  border: none;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
  transition: transform 0.15s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.32);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transform: none;
    box-shadow: none;
  }
`;
