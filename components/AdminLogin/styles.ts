import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  background: #111114;
  border: 3px solid var(--yellow-bar);
  border-radius: 10px;
  padding: 40px 36px 36px;
  width: 90%;
  max-width: 420px;
`;

export const Title = styled.h1`
  ${heavyFont}
  font-size: 42px;
  color: var(--yellow-bar);
  margin-bottom: 28px;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
  text-shadow: 0 0 20px rgba(255, 204, 0, 0.2);
`;

export const Label = styled.label`
  ${heavyFont}
  display: block;
  color: var(--yellow-bar);
  font-size: 20px;
  margin-bottom: 8px;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
`;

export const Input = styled.input`
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
  margin-bottom: 20px;
  transition: background 0.2s;

  &:focus {
    background: #333338;
  }
`;

export const LoginBtn = styled.button`
  ${heavyFont}
  width: 100%;
  background: linear-gradient(180deg, #ffcc00 0%, #ff5500 100%);
  color: #000;
  border: none;
  border-radius: 8px;
  padding: 14px 0;
  font-size: 32px;
  cursor: pointer;
  box-shadow: 0 6px 0 #8a3000, 0 10px 25px rgba(0, 0, 0, 0.7);
  transition: all 0.1s;
  transform: scaleX(0.9);

  &:hover {
    filter: brightness(1.08);
  }

  &:active {
    transform: scaleX(0.9) translateY(4px);
    box-shadow: 0 2px 0 #8a3000;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.p`
  color: #ff4444;
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin-bottom: 14px;
`;
