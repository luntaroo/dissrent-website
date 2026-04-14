import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Hero = styled.section`
  background:
    radial-gradient(circle at top left, rgba(var(--gold-rgb), 0.16), transparent 24%),
    linear-gradient(180deg, var(--bg-dark-strong) 0%, #10151d 100%);
`;

export const HeroInner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  padding: calc(var(--nav-h) + 20px) 24px 80px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.88fr);
  gap: 22px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: calc(var(--nav-h) + 14px) 16px 72px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  width: fit-content;
  padding: 7px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-light);
`;

export const Headline = styled.h1`
  ${heavyFont}
  font-size: clamp(1.9rem, 3.8vw, 3rem);
  line-height: 0.96;
  color: var(--text-inverse);
  max-width: 10ch;

  span {
    display: block;
    color: rgba(247, 248, 251, 0.82);
  }
`;

export const Lead = styled.p`
  ${bodyFont}
  max-width: 580px;
  font-size: 0.84rem;
  line-height: 1.65;
  color: rgba(247, 248, 251, 0.68);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const PrimaryAction = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.76rem;
  font-weight: 800;
  box-shadow: 0 18px 30px rgba(var(--gold-rgb), 0.22);
`;

export const SecondaryAction = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-inverse);
  font-size: 0.76rem;
  font-weight: 700;
`;

export const TrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TrustItem = styled.div`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(247, 248, 251, 0.74);
  font-size: 0.72rem;
  font-weight: 700;

  i {
    color: var(--gold-light);
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageCard = styled.div`
  position: relative;
  min-height: 250px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 32px 72px rgba(0, 0, 0, 0.28);

  @media (max-width: 960px) {
    min-height: 220px;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(16, 24, 40, 0.04) 0%, rgba(16, 24, 40, 0.48) 100%),
    linear-gradient(135deg, rgba(var(--gold-rgb), 0.14), transparent 56%);
`;

export const FloatingBadge = styled.div`
  ${bodyFont}
  position: absolute;
  top: 12px;
  left: 12px;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 10px;
  border-radius: 16px;
  background: rgba(10, 15, 22, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-inverse);
  backdrop-filter: blur(12px);
`;

export const FloatingBadgeLabel = styled.span`
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247, 248, 251, 0.5);
`;

export const FloatingBadgeValue = styled.span`
  font-size: 0.74rem;
  font-weight: 700;
`;

export const InfoPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  padding: 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoLabel = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247, 248, 251, 0.46);
  margin-bottom: 6px;
`;

export const InfoValue = styled.div`
  ${bodyFont}
  color: var(--text-inverse);
  font-size: 0.74rem;
  font-weight: 700;
  line-height: 1.45;
`;
