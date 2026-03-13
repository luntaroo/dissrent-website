import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.82);
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0 40px;
  overflow-y: auto;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s ease;
`;

export const Modal = styled.div<{ $open: boolean }>`
  background: #111114;
  border: 3px solid var(--yellow-bar);
  border-radius: 10px;
  padding: 35px 35px 30px;
  width: 90%;
  max-width: 520px;
  position: relative;
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)"};
  transition: transform 0.3s ease;
`;

export const ModalTitle = styled.h2`
  ${heavyFont}
  font-size: 42px;
  color: var(--yellow-bar);
  margin-bottom: 22px;
  line-height: 1;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
  text-shadow: 0 0 20px rgba(255, 204, 0, 0.2);
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
  ${heavyFont}
  display: block;
  color: var(--yellow-bar);
  font-size: 20px;
  margin-bottom: 6px;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
`;

export const FieldInput = styled.input`
  width: 100%;
  height: 48px;
  background: #2a2a2e;
  border: none;
  border-radius: 6px;
  color: #fff;
  padding: 0 16px;
  font-size: 15px;
  font-family: Arial, sans-serif;
  outline: none;
  transition: background 0.2s;

  &:focus {
    background: #333338;
  }
`;

export const ContactLabel = styled.span`
  ${heavyFont}
  color: var(--yellow-bar);
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 3px solid #555;
  background: #222;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s;

  &:checked {
    background: var(--yellow-bar);
    border-color: var(--yellow-bar);
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.5);
  }
`;

export const RadioIcon = styled.i`
  font-size: 22px;
  color: var(--yellow-bar);
`;

export const RadioText = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, sans-serif;
`;

export const ConfirmBtn = styled.button`
  ${heavyFont}
  width: 100%;
  background: linear-gradient(180deg, #ffcc00 0%, #ff5500 100%);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 16px 0;
  font-size: 38px;
  cursor: pointer;
  box-shadow: 0 6px 0 #8a3000, 0 10px 25px rgba(0, 0, 0, 0.7);
  transition: all 0.1s;
  transform: scaleX(0.9);

  &:hover {
    filter: brightness(1.08);
  }

  &:active {
    transform: scaleX(0.9) translateY(5px);
    box-shadow: 0 1px 0 #8a3000, 0 4px 10px rgba(0, 0, 0, 0.7);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: scaleX(0.9);
  }
`;

export const CloseX = styled.button`
  position: absolute;
  top: 12px;
  right: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #aaa;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 0, 0, 0.6);
    color: #fff;
  }
`;

export const ContextBar = styled.div`
  background: rgba(255, 204, 0, 0.08);
  border: 1px solid rgba(255, 204, 0, 0.25);
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: #ccc;
  margin-bottom: 18px;

  strong {
    color: #fff;
  }
`;

export const SuccessBox = styled.div`
  padding: 20px 0 10px;
  text-align: center;
`;

export const SuccessTitle = styled.h2`
  ${heavyFont}
  font-size: 36px;
  color: var(--yellow-bar);
  margin-bottom: 16px;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: center;
`;

export const SuccessText = styled.p`
  font-family: Arial, sans-serif;
  font-size: 15px;
  color: #ccc;
  line-height: 1.7;

  strong {
    color: #fff;
  }
`;
