import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Card = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-md);
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(37, 99, 235, 0.25);
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
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.06);
  }
`;

export const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), transparent 60%);
`;

export const TopRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 14px;
  flex-wrap: wrap;
`;

export const StatusBadge = styled.div<{ $available: boolean }>`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 11px;
  border-radius: var(--radius-full);
  background: ${({ $available }) =>
    $available ? "rgba(22, 163, 74, 0.9)" : "rgba(217, 119, 6, 0.9)"};
  color: var(--text-inverse);
  font-size: 0.64rem;
  font-weight: 700;
  backdrop-filter: blur(8px);
`;

export const PriceBadge = styled.div`
  ${bodyFont}
  padding: 7px 11px;
  border-radius: var(--radius-full);
  background: var(--surface);
  color: var(--text-heading);
  font-size: 0.64rem;
  font-weight: 700;
  border: 1px solid var(--border);
`;

export const Bottom = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h3`
  ${heavyFont}
  color: var(--text-heading);
  font-size: 1.05rem;
  line-height: 1.1;
`;

export const AvailabilityText = styled.p<{ $available: boolean }>`
  ${bodyFont}
  color: ${({ $available }) => ($available ? "var(--success)" : "var(--warning)")};
  font-size: 0.74rem;
  font-weight: 600;
  line-height: 1.4;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const PricingCard = styled.div`
  padding: 12px;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border-light);
`;

export const PricingLabel = styled.div`
  ${bodyFont}
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-bottom: 6px;
`;

export const PricingValue = styled.div`
  ${bodyFont}
  color: var(--text-heading);
  font-size: 0.76rem;
  font-weight: 700;
  line-height: 1.3;
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
  padding: 6px 10px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.12);
  color: var(--primary);
  font-size: 0.64rem;
  font-weight: 600;

  i {
    font-size: 0.6rem;
  }
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

export const BookBtn = styled.button`
  ${bodyFont}
  flex: 1.2;
  min-height: 44px;
  border: none;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
  transition: transform 0.15s, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(37, 99, 235, 0.32);
  }

  &:active {
    transform: translateY(0);
  }
`;
