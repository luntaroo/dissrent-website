import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(9, 12, 17, 0.72);
  backdrop-filter: blur(16px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.28s ease;

  @media (max-width: 640px) {
    padding: 12px;
  }
`;

export const Panel = styled.div<{ $open: boolean }>`
  width: min(100%, 1080px);
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.52);
  border-radius: 36px;
  overflow: hidden;
  box-shadow: 0 50px 140px rgba(9, 12, 17, 0.3);
  transform: ${({ $open }) => ($open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)")};
  transition: transform 0.28s ease;
  position: relative;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    max-height: calc(100vh - 24px);
    overflow-y: auto;
  }
`;

export const Visual = styled.div<{ $img: string }>`
  position: relative;
  min-height: 100%;
  background:
    linear-gradient(180deg, rgba(14, 18, 24, 0.08) 0%, rgba(14, 18, 24, 0.58) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;

  @media (max-width: 880px) {
    min-height: 320px;
  }
`;

export const VisualOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(var(--gold-rgb), 0.22), transparent 28%),
    linear-gradient(180deg, transparent 20%, rgba(14, 18, 24, 0.56) 100%);
`;

export const VisualBadgeRow = styled.div`
  position: absolute;
  inset: auto 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1;
`;

export const VisualBadge = styled.div`
  ${bodyFont}
  width: fit-content;
  max-width: 420px;
  padding: 12px 14px;
  border-radius: 18px;
  background: rgba(10, 15, 22, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(247, 248, 251, 0.9);
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.55;
  backdrop-filter: blur(14px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 3;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 15, 22, 0.64);
  color: var(--text-inverse);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.18s ease, background 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(var(--gold-rgb), 0.18);
  }
`;

export const Copy = styled.div`
  padding: 36px 34px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 640px) {
    padding: 28px 20px 24px;
  }
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-strong);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 0.98;
  color: var(--text);
`;

export const Subtitle = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.96rem;
  line-height: 1.78;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h3`
  ${bodyFont}
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
`;

export const PricingTable = styled.div`
  display: grid;
  gap: 10px;
`;

export const PricingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 20px;
  background: rgba(16, 24, 40, 0.04);
  border: 1px solid rgba(16, 24, 40, 0.08);
`;

export const PricingLabel = styled.span`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 700;
`;

export const PricingValue = styled.span`
  ${heavyFont}
  color: var(--text);
  font-size: 1.05rem;
  line-height: 1;
`;

export const InsightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const InsightCard = styled.div`
  padding: 18px;
  border-radius: 22px;
  background: rgba(var(--gold-rgb), 0.08);
  border: 1px solid rgba(var(--gold-rgb), 0.16);
`;

export const InsightLabel = styled.div`
  ${bodyFont}
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-strong);
  margin-bottom: 8px;
`;

export const InsightValue = styled.div`
  ${bodyFont}
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.6;
`;

export const TripBox = styled.div`
  padding: 18px;
  border-radius: 24px;
  background: var(--info-dim);
  border: 1px solid rgba(var(--primary-rgb), 0.14);
`;

export const TripRow = styled.div`
  ${bodyFont}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.7;

  strong {
    color: var(--text);
    font-weight: 800;
  }
`;

export const FeatureList = styled.div`
  display: grid;
  gap: 10px;
`;

export const FeatureItem = styled.div`
  ${bodyFont}
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.65;

  i {
    color: var(--gold-strong);
  }
`;

export const ActionRow = styled.div`
  margin-top: auto;
  display: flex;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const SecondaryButton = styled.button`
  ${bodyFont}
  flex: 1;
  min-height: 54px;
  border-radius: 999px;
  border: 1px solid rgba(16, 24, 40, 0.12);
  background: rgba(16, 24, 40, 0.04);
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 800;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  ${bodyFont}
  flex: 1.2;
  min-height: 54px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.92rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 20px 34px rgba(var(--gold-rgb), 0.22);
`;
