import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Card = styled.article`
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.64);
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(16px);
  transition: transform 0.24s ease, box-shadow 0.24s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

export const Media = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

export const Bg = styled.div<{ $img: string }>`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(16, 24, 40, 0) 0%, rgba(16, 24, 40, 0.36) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;
  transition: transform 0.45s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

export const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(var(--gold-rgb), 0.14), transparent 56%);
`;

export const TopRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 12px;
  flex-wrap: wrap;
`;

export const StatusBadge = styled.div<{ $available: boolean }>`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 999px;
  background: ${({ $available }) =>
    $available ? "rgba(10, 15, 22, 0.66)" : "rgba(180, 83, 9, 0.88)"};
  color: var(--text-inverse);
  font-size: 0.62rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
`;

export const PriceBadge = styled.div`
  ${bodyFont}
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--text);
  font-size: 0.62rem;
  font-weight: 800;
`;

export const Bottom = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h3`
  ${heavyFont}
  color: var(--text);
  font-size: 1rem;
  line-height: 1;
`;

export const AvailabilityText = styled.p<{ $available: boolean }>`
  ${bodyFont}
  color: ${({ $available }) => ($available ? "var(--success)" : "var(--warning)")};
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.45;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const PricingCard = styled.div`
  padding: 10px;
  border-radius: 16px;
  background: rgba(16, 24, 40, 0.04);
  border: 1px solid rgba(16, 24, 40, 0.08);
`;

export const PricingLabel = styled.div`
  ${bodyFont}
  font-size: 0.54rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 5px;
`;

export const PricingValue = styled.div`
  ${bodyFont}
  color: var(--text);
  font-size: 0.7rem;
  font-weight: 800;
  line-height: 1.4;
`;

export const BenefitRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Benefit = styled.span`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(var(--gold-rgb), 0.08);
  border: 1px solid rgba(var(--gold-rgb), 0.15);
  color: var(--gold-strong);
  font-size: 0.62rem;
  font-weight: 700;
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

export const BookBtn = styled.button`
  ${bodyFont}
  flex: 1.2;
  min-height: 42px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 18px 30px rgba(var(--gold-rgb), 0.22);
`;
