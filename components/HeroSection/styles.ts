import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Hero = styled.section`
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-soft) 100%);
  padding-top: calc(var(--nav-h) + 40px);
  padding-bottom: 60px;

  @media (max-width: 960px) {
    padding-top: calc(var(--nav-h) + 24px);
    padding-bottom: 40px;
  }
`;

export const HeroInner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.85fr);
  gap: 32px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  width: fit-content;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
`;

export const Headline = styled.h1`
  ${heavyFont}
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  line-height: 1.05;
  color: var(--text-heading);
  max-width: 11ch;

  span {
    display: block;
    color: var(--primary);
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Lead = styled.p`
  ${bodyFont}
  max-width: 560px;
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-muted);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PrimaryAction = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.32);
  }
`;

export const SecondaryAction = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 46px;
  padding: 0 20px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--border-medium);
  background: var(--surface);
  color: var(--text-heading);
  font-size: 0.8rem;
  font-weight: 700;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--primary);
    background: var(--primary-soft);
    transform: translateY(-1px);
  }

  i {
    color: var(--primary);
  }
`;

export const TrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
`;

export const TrustItem = styled.div`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  border-radius: var(--radius-full);
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.74rem;
  font-weight: 600;

  i {
    color: var(--success);
    font-size: 0.7rem;
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ImageCard = styled.div`
  position: relative;
  min-height: 280px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);

  @media (max-width: 960px) {
    min-height: 240px;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
`;

export const FloatingBadge = styled.div`
  ${bodyFont}
  position: absolute;
  top: 14px;
  left: 14px;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: var(--text-heading);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
`;

export const FloatingBadgeLabel = styled.span`
  font-size: 0.54rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-subtle);
`;

export const FloatingBadgeValue = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary);
`;

export const InfoPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoLabel = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-bottom: 6px;
`;

export const InfoValue = styled.div`
  ${bodyFont}
  color: var(--text-heading);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.4;
`;
