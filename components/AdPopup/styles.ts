import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Overlay = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 960;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  pointer-events: none;

  @media (max-width: 640px) {
    right: 14px;
    left: 14px;
    bottom: 14px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 360px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background: rgba(10, 15, 22, 0.9);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(9, 12, 17, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(22px) saturate(160%);
  pointer-events: auto;
`;

export const Visual = styled.div`
  position: relative;
  min-height: 160px;
`;

export const VisualOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.08) 0%,
    rgba(0, 0, 0, 0.55) 100%
  );
`;

export const VisualBadge = styled.div`
  ${bodyFont}
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(8, 8, 8, 0.78);
  backdrop-filter: blur(8px);
  color: var(--gold);
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(200, 145, 42, 0.3);
`;

export const VisualTitle = styled.h2`
  ${heavyFont}
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 14px;
  color: var(--text-inverse);
  font-size: 1.45rem;
  line-height: 0.95;
`;

export const Body = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const BodyTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Kicker = styled.div`
  ${bodyFont}
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(1.18rem, 3vw, 1.4rem);
  line-height: 1;
  color: var(--text-inverse);
`;

export const Subtitle = styled.p`
  ${bodyFont}
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.56);
  line-height: 1.65;
`;

export const FeatureRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Feature = styled.div`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(200, 145, 42, 0.1);
  border: 1px solid rgba(200, 145, 42, 0.18);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.72rem;
  font-weight: 600;

  i {
    color: var(--gold);
    font-size: 0.66rem;
  }
`;

export const CloseBtn = styled.button`
  ${bodyFont}
  align-self: flex-start;
  border: none;
  border-radius: 999px;
  padding: 11px 16px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const CloseX = styled.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-dark);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.15rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: inherit;
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background: var(--gold-dim);
    color: var(--gold);
    border-color: rgba(200, 145, 42, 0.4);
  }
`;
