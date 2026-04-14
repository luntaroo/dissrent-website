import styled from "styled-components";
import { heavyFont, bodyFont } from "../shared/mixins";

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  overflow-y: auto;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s ease;
`;

export const Modal = styled.div<{ $open: boolean }>`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px;
  width: 100%;
  max-width: 520px;
  position: relative;
  box-shadow: var(--shadow-2xl);
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)"};
  transition: transform 0.3s ease;
`;

export const ModalTitle = styled.h2`
  ${heavyFont}
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 20px;
  line-height: 1.1;
`;

export const Field = styled.div`
  margin-bottom: 16px;
`;

export const DateRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
`;

export const FieldLabel = styled.label`
  ${bodyFont}
  display: block;
  color: var(--text-subtle);
  font-size: 0.68rem;
  margin-bottom: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const FieldInput = styled.input`
  width: 100%;
  height: 50px;
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-heading);
  padding: 0 16px;
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
  color: var(--text-subtle);
  font-size: 0.68rem;
  margin-bottom: 10px;
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 12px 14px;
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
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border-medium);
  background: var(--surface);
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s;

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

export const ConfirmBtn = styled.button`
  ${heavyFont}
  width: 100%;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-full);
  padding: 14px 0;
  font-size: 0.92rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);
  transition: transform 0.15s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.32);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const CloseX = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  color: var(--text-subtle);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: var(--danger-soft);
    color: var(--danger);
    border-color: rgba(220, 38, 38, 0.2);
  }
`;

export const ContextBar = styled.div`
  background: var(--info-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  font-size: 0.86rem;
  color: var(--text-muted);
  margin-bottom: 18px;

  strong {
    color: var(--text-heading);
    font-weight: 600;
  }
`;

export const SuccessBox = styled.div`
  padding: 20px 0 10px;
  text-align: center;
`;

export const SuccessTitle = styled.h2`
  ${heavyFont}
  font-size: 1.6rem;
  color: var(--success);
  margin-bottom: 14px;
  line-height: 1.1;
`;

export const SuccessText = styled.p`
  ${bodyFont}
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.7;

  strong {
    color: var(--text-heading);
    font-weight: 600;
  }
`;
