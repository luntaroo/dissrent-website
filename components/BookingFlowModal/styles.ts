import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(9, 12, 17, 0.76);
  backdrop-filter: blur(14px);
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
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.64);
  border-radius: 38px;
  width: 100%;
  max-width: 1120px;
  max-height: calc(100vh - 48px);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 50px 140px rgba(9, 12, 17, 0.32);
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
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(10, 15, 22, 0.7);
  color: var(--text-inverse);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  flex-shrink: 0;

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
  background: linear-gradient(180deg, var(--bg-dark-strong) 0%, #121821 100%);
  color: var(--text-inverse);

  @media (max-width: 760px) {
    display: none;
  }
`;

export const SummaryVisual = styled.div<{ $img: string }>`
  min-height: 240px;
  background:
    linear-gradient(180deg, rgba(9, 12, 17, 0.08) 0%, rgba(9, 12, 17, 0.56) 100%),
    url(${({ $img }) => $img}) center/cover no-repeat;

  @media (max-width: 760px) {
    min-height: 160px;
  }
`;

export const SummaryOverlay = styled.div`
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at top left, rgba(var(--gold-rgb), 0.28), transparent 28%),
    linear-gradient(180deg, transparent 20%, rgba(9, 12, 17, 0.58) 100%);
`;

export const SummaryContent = styled.div`
  padding: 28px 26px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SummaryEyebrow = styled.div`
  ${bodyFont}
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-light);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(1.9rem, 4vw, 3.2rem);
  line-height: 0.96;
  color: var(--text-inverse);
`;

export const Subtitle = styled.p`
  ${bodyFont}
  color: rgba(247, 248, 251, 0.68);
  font-size: 0.92rem;
  line-height: 1.75;
`;

export const Steps = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Step = styled.div<{ $active?: boolean }>`
  ${bodyFont}
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#101828" : "rgba(247, 248, 251, 0.72)")};
  background: ${({ $active }) => ($active ? "var(--gold-light)" : "rgba(255, 255, 255, 0.08)")};
  border: 1px solid ${({ $active }) => ($active ? "rgba(var(--gold-rgb), 0.28)" : "rgba(255, 255, 255, 0.08)")};
  border-radius: 999px;
  padding: 8px 14px;
`;

export const SummaryBox = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 18px;
`;

export const SummaryLine = styled.div`
  ${bodyFont}
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: rgba(247, 248, 251, 0.56);
  font-size: 0.9rem;
  line-height: 1.8;

  strong {
    color: var(--text-inverse);
    font-weight: 700;
    text-align: right;
  }
`;

export const Notice = styled.div`
  ${bodyFont}
  background: rgba(var(--gold-rgb), 0.12);
  border: 1px solid rgba(var(--gold-rgb), 0.18);
  border-radius: 22px;
  padding: 14px 16px;
  color: inherit;
  font-size: 0.88rem;
  line-height: 1.72;
`;

export const FormPane = styled.div`
  padding: 34px 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 760px) {
    padding: 20px 18px 32px;
    gap: 16px;
  }
`;

export const MobileCarTitle = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
    ${heavyFont}
    font-size: 1.5rem;
    line-height: 1.05;
    color: var(--text);
    margin-bottom: 4px;
  }
`;

export const SectionTitle = styled.div`
  ${bodyFont}
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-faint);
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
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Input = styled.input`
  ${bodyFont}
  width: 100%;
  height: 58px;
  background: rgba(16, 24, 40, 0.03);
  border: 1px solid rgba(16, 24, 40, 0.1);
  border-radius: 20px;
  color: var(--text);
  padding: 0 18px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: rgba(var(--gold-rgb), 0.35);
    box-shadow: 0 0 0 4px rgba(var(--gold-rgb), 0.12);
  }
`;

export const ContactLabel = styled.span`
  ${bodyFont}
  display: block;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
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
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.1);
  background: rgba(16, 24, 40, 0.03);
  transition: border-color 0.2s, background 0.2s;

  &:has(input:checked) {
    border-color: rgba(var(--gold-rgb), 0.35);
    background: rgba(var(--gold-rgb), 0.08);
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(16, 24, 40, 0.14);
  background: var(--surface-strong);
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.2s, background 0.2s;

  &:checked {
    background: var(--gold);
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(var(--gold-rgb), 0.12);
  }
`;

export const RadioIcon = styled.i`
  font-size: 1rem;
  color: var(--gold-strong);
`;

export const RadioText = styled.span`
  ${bodyFont}
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 700;
`;

export const ErrorText = styled.p`
  ${bodyFont}
  color: var(--danger);
  font-size: 0.9rem;
  line-height: 1.7;
`;

export const ConfirmButton = styled.button`
  ${bodyFont}
  width: 100%;
  min-height: 58px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  border: none;
  border-radius: 999px;
  font-size: 0.94rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 20px 36px rgba(var(--gold-rgb), 0.22);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const SuccessBox = styled.div`
  padding: 72px 34px 54px;
  text-align: center;
`;

export const SuccessTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--text);
  line-height: 0.98;
  margin-bottom: 16px;
`;

export const SuccessText = styled.p`
  ${bodyFont}
  font-size: 0.98rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 540px;
  margin: 0 auto;

  strong {
    color: var(--text);
    font-weight: 700;
  }
`;
