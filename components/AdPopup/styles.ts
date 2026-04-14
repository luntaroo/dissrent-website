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
  max-width: 380px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background: var(--surface);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--border);
  pointer-events: auto;
`;

export const Visual = styled.div`
  position: relative;
  min-height: 170px;
`;

export const VisualOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

export const VisualBadge = styled.div`
  ${bodyFont}
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 11px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  color: var(--primary);
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid rgba(37, 99, 235, 0.15);
`;

export const VisualTitle = styled.h2`
  ${heavyFont}
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 14px;
  color: var(--text-inverse);
  font-size: 1.5rem;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

export const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--surface);
`;

export const BodyTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Kicker = styled.div`
  ${bodyFont}
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(1.15rem, 3vw, 1.45rem);
  line-height: 1.1;
  color: var(--text-heading);
`;

export const Subtitle = styled.p`
  ${bodyFont}
  font-size: 0.84rem;
  color: var(--text-muted);
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
  padding: 6px 11px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 600;

  i {
    color: var(--success);
    font-size: 0.64rem;
  }
`;

export const CloseBtn = styled.button`
  ${bodyFont}
  align-self: flex-start;
  border: none;
  border-radius: var(--radius-full);
  padding: 12px 18px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(37, 99, 235, 0.32);
  }
`;

export const CloseX = styled.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  color: var(--text-subtle);
  font-size: 1.1rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: inherit;
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background: var(--danger-soft);
    color: var(--danger);
    border-color: rgba(220, 38, 38, 0.2);
  }
`;
