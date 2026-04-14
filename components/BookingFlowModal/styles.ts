import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s ease;

  @media (max-width: 760px) {
    padding: 0;
    align-items: stretch;
  }
`;

export const Modal = styled.div<{ $open: boolean }>`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 28px;
  width: 100%;
  max-width: 1120px;
  max-height: calc(100vh - 48px);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-2xl);
  transform: ${({ $open }) => ($open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)")};
  transition: transform 0.3s ease;
  overflow: hidden;

  @media (max-width: 760px) {
    border-radius: 0;
    max-width: 100%;
    width: 100%;
    max-height: 100dvh;
    height: 100dvh;
    transform: none;
  }
`;

export const MobileBar = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 12px 14px 0;
    flex-shrink: 0;
  }
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  min-height: 0;
`;

export const CloseX = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  color: var(--text-subtle);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background: var(--danger-soft);
    color: var(--danger);
    border-color: rgba(220, 38, 38, 0.2);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Shell = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 0.46fr) minmax(0, 0.54fr);
  flex: 1;
  min-height: 0;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryPane = styled.div`
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--text-inverse);

  @media (max-width: 760px) {
    display: none;
  }
`;

export const SummaryVisual = styled.div<{ $img: string }>`
  min-height: 240px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;

  @media (max-width: 760px) {
    min-height: 160px;
  }
`;

export const SummaryOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.15), transparent 30%);
`;

export const SummaryContent = styled.div`
  padding: 28px 26px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SummaryEyebrow = styled.div`
  ${bodyFont}
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  line-height: 1;
  color: var(--text-inverse);
`;

export const Subtitle = styled.p`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  line-height: 1.7;
`;

export const Steps = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Step = styled.div<{ $active?: boolean }>`
  ${bodyFont}
  font-size: 0.76rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "var(--text-inverse)" : "rgba(255, 255, 255, 0.7)")};
  background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.08)")};
  border: 1px solid ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)")};
  border-radius: var(--radius-full);
  padding: 8px 14px;
`;

export const SummaryBox = styled.div`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-lg);
  padding: 18px;
`;

export const SummaryLine = styled.div`
  ${bodyFont}
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.88rem;
  line-height: 1.8;

  strong {
    color: var(--text-inverse);
    font-weight: 700;
    text-align: right;
  }
`;

export const Notice = styled.div`
  ${bodyFont}
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--radius-lg);
  padding: 14px 16px;
  color: inherit;
  font-size: 0.86rem;
  line-height: 1.7;
`;

export const FormPane = styled.div`
  padding: 34px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 760px) {
    padding: 20px 18px 32px;
    gap: 18px;
  }
`;

export const MobileCarTitle = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
    ${heavyFont}
    font-size: 1.45rem;
    line-height: 1.05;
    color: var(--text-heading);
    margin-bottom: 4px;
  }
`;

export const SectionTitle = styled.div`
  ${bodyFont}
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-subtle);
`;

export const DateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  ${bodyFont}
  display: block;
  color: var(--text-subtle);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Input = styled.input`
  ${bodyFont}
  width: 100%;
  height: 54px;
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-heading);
  padding: 0 18px;
  font-size: 0.92rem;
  font-weight: 500;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-soft);
  }
`;

export const ContactLabel = styled.span`
  ${bodyFont}
  display: block;
  color: var(--text-subtle);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--border);
  background: var(--bg-subtle);
  transition: border-color 0.2s, background 0.2s;

  &:has(input:checked) {
    border-color: var(--primary);
    background: var(--primary-soft);
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border-medium);
  background: var(--surface);
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.2s, background 0.2s;

  &:checked {
    background: var(--primary);
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--primary-soft);
  }
`;

export const RadioIcon = styled.i`
  font-size: 1rem;
  color: var(--primary);
`;

export const RadioText = styled.span`
  ${bodyFont}
  color: var(--text-heading);
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ErrorText = styled.p`
  ${bodyFont}
  color: var(--danger);
  font-size: 0.88rem;
  line-height: 1.6;
  padding: 10px 14px;
  background: var(--danger-soft);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(220, 38, 38, 0.15);
`;

export const ConfirmButton = styled.button`
  ${bodyFont}
  width: 100%;
  min-height: 54px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-full);
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
  transition: transform 0.15s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.32);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SuccessBox = styled.div`
  padding: 72px 34px 54px;
  text-align: center;
`;

export const SuccessTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--text-heading);
  line-height: 1;
  margin-bottom: 16px;
`;

export const SuccessText = styled.p`
  ${bodyFont}
  font-size: 0.96rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 540px;
  margin: 0 auto;

  strong {
    color: var(--text-heading);
    font-weight: 600;
  }
`;
