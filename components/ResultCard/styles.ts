import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Card = styled.article`
  position: relative;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  backdrop-filter: blur(14px);
  transition: transform 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
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
    linear-gradient(180deg, rgba(16, 24, 40, 0.04) 0%, rgba(16, 24, 40, 0.4) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;
`;

export const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--gold-rgb), 0.12), transparent 56%);
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
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.62rem;
  font-weight: 800;
  background: ${({ $tone }) =>
    $tone === "blocked"
      ? "rgba(194, 65, 12, 0.88)"
      : $tone === "warning"
        ? "rgba(180, 83, 9, 0.88)"
        : $tone === "neutral"
          ? "rgba(10, 15, 22, 0.66)"
          : "rgba(255, 255, 255, 0.9)"};
  color: ${({ $tone }) =>
    $tone === "available" ? "var(--text)" : "var(--text-inverse)"};
`;

export const Content = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const CarName = styled.h3`
  ${heavyFont}
  color: var(--text);
  font-size: 1rem;
  line-height: 0.98;
`;

export const Summary = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.72rem;
  line-height: 1.45;
`;

export const PricingPanel = styled.div`
  display: grid;
  gap: 6px;
  padding: 10px;
  border-radius: 16px;
  background: rgba(16, 24, 40, 0.04);
  border: 1px solid rgba(16, 24, 40, 0.08);
`;

export const PricingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const PricingLabel = styled.span`
  ${bodyFont}
  color: var(--text-faint);
  font-size: 0.56rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const PricingValue = styled.span`
  ${bodyFont}
  color: var(--text);
  font-size: 0.7rem;
  font-weight: 800;
  text-align: right;
`;

export const Notice = styled.div<{ $available: boolean }>`
  ${bodyFont}
  padding: 10px 12px;
  border-radius: 14px;
  background: ${({ $available }) => ($available ? "var(--success-dim)" : "var(--danger-dim)")};
  border: 1px solid
    ${({ $available }) => ($available ? "rgba(21, 128, 61, 0.14)" : "rgba(194, 65, 12, 0.16)")};
  color: ${({ $available }) => ($available ? "var(--success)" : "var(--danger)")};
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.65;
`;

export const ActionRow = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const GhostButton = styled.button`
  ${bodyFont}
  flex: 1;
  min-height: 42px;
  border-radius: 999px;
  border: 1px solid rgba(16, 24, 40, 0.12);
  background: rgba(16, 24, 40, 0.03);
  color: var(--text);
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${bodyFont}
  flex: 1.15;
  min-height: 42px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 18px 30px rgba(var(--gold-rgb), 0.22);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    box-shadow: none;
  }
`;
