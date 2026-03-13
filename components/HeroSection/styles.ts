import styled, { keyframes } from "styled-components";
import { heavyFont } from "../shared/mixins";

const glowPulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 1; }
`;

/* ── main wrapper ── */
export const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: 44px 4% 36px;

  @media (max-width: 768px) {
    padding: 32px 5% 28px;
  }
`;

/* ── full-bleed background image container ── */
export const HeroBgImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

/* ── dark overlay over the image ── */
export const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(10, 10, 14, 0.88) 0%, rgba(10, 10, 14, 0.55) 60%, rgba(10, 10, 14, 0.30) 100%),
    linear-gradient(180deg, rgba(10, 10, 14, 0.4) 0%, rgba(10, 10, 14, 0.75) 100%);
`;

/* ── yellow→red accent stripe on left ── */
export const Accent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  z-index: 2;
  background: linear-gradient(180deg, var(--yellow-bar) 0%, #ff5500 100%);
`;

export const AccentRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  z-index: 2;
  background: linear-gradient(180deg, var(--yellow-bar) 0%, #ff5500 100%);
`;

export const AccentBottom = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  z-index: 2;
  background: linear-gradient(90deg, #ff5500 0%, var(--yellow-bar) 50%, #ff5500 100%);
`;

/* ── yellow radial spotlight ── */
export const Spotlight = styled.div`
  position: absolute;
  top: -20%;
  left: 5%;
  width: 55%;
  height: 160%;
  z-index: 2;
  background: radial-gradient(
    ellipse at 20% 50%,
    rgba(255, 204, 0, 0.07) 0%,
    transparent 65%
  );
  pointer-events: none;
  animation: ${glowPulse} 4s ease-in-out infinite;
`;

/* ── content on top of everything ── */
export const Content = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1500px;
  margin: 0 auto;
`;

/* ── top row: location tag + price badge ── */
export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

/* ── red location tag ── */
export const LocationTag = styled.div`
  ${heavyFont}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #ff3300 0%, #cc0000 100%);
  color: #fff;
  font-size: 14px;
  padding: 5px 14px 4px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(255, 0, 0, 0.45);
  letter-spacing: 1.5px;
`;

export const LocationIcon = styled.i`
  font-size: 13px;
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
`;

/* ── price badge ── */
export const PriceBadge = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  border: 2px solid var(--yellow-bar);
  border-radius: 6px;
  padding: 6px 18px 5px;
  background: rgba(0, 0, 0, 0.55);
  box-shadow: 0 0 25px rgba(255, 204, 0, 0.2), inset 0 0 15px rgba(255, 204, 0, 0.04);

  span {
    ${heavyFont}
    font-size: 13px;
    color: #999;
  }
`;

export const PriceNumber = styled.span`
  && {
    ${heavyFont}
    font-size: 38px;
    color: var(--yellow-bar);
    text-shadow: 0 0 25px rgba(255, 204, 0, 0.5);
    line-height: 1;
    letter-spacing: -1px;
  }
`;

export const PriceUnit = styled.span`
  && {
    ${heavyFont}
    font-size: 14px;
    color: var(--yellow-bar);
    letter-spacing: 0.5px;
  }
`;

/* ── massive headline ── */
export const Headline = styled.h1`
  ${heavyFont}
  font-size: clamp(38px, 7vw, 82px);
  color: #fff;
  line-height: 0.88;
  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.95), 0 0 80px rgba(0, 0, 0, 0.7);
  margin-bottom: 8px;

  span {
    color: var(--yellow-bar);
    text-shadow:
      0 0 40px rgba(255, 204, 0, 0.5),
      0 0 80px rgba(255, 204, 0, 0.2),
      0 4px 40px rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

/* ── yellow separator line ── */
export const Separator = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--yellow-bar) 0%, #ff5500 100%);
  border-radius: 2px;
  margin-bottom: 18px;
  box-shadow: 0 0 15px rgba(255, 204, 0, 0.4);

  @media (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

/* ── trust checkmarks row ── */
export const TrustRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 22px;

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 18px;
  }
`;

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TrustCheck = styled.i`
  color: var(--yellow-bar);
  font-size: 14px;
  text-shadow: 0 0 10px rgba(255, 204, 0, 0.4);
`;

export const TrustText = styled.span`
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #ddd;
  font-weight: bold;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

/* ── 3D CTA button ── */
export const CtaButton = styled.button`
  ${heavyFont}
  font-size: clamp(18px, 2.5vw, 26px);
  color: #000;
  background: linear-gradient(180deg, #ffcc00 0%, #ff5500 100%);
  border: none;
  border-radius: 6px;
  padding: 12px 40px 10px;
  cursor: pointer;
  box-shadow:
    0 5px 0 #8a3000,
    0 10px 25px rgba(0, 0, 0, 0.7),
    0 0 35px rgba(255, 204, 0, 0.15);
  transition: all 0.1s;
  letter-spacing: 0.5px;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(4px) scaleX(0.88);
    box-shadow:
      0 1px 0 #8a3000,
      0 4px 15px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 480px) {
    padding: 10px 28px 8px;
  }
`;
