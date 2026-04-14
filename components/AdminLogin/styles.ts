import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Card = styled.div`
  width: min(100%, 460px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.97) 0%, rgba(246, 250, 255, 0.99) 100%);
  border: 1px solid rgba(12, 76, 177, 0.12);
  border-radius: 30px;
  padding: 34px 30px 28px;
  box-shadow: var(--shadow-lg);
`;

export const Eyebrow = styled.span`
  ${bodyFont}
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary-strong);
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  ${heavyFont}
  font-size: clamp(2.1rem, 5vw, 3rem);
  line-height: 0.94;
  color: var(--navy);
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  ${bodyFont}
  color: var(--text-soft);
  font-size: 0.98rem;
  line-height: 1.8;
  margin-bottom: 22px;
`;

export const Label = styled.label`
  ${bodyFont}
  display: block;
  color: var(--navy);
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  ${bodyFont}
  width: 100%;
  height: 56px;
  background: var(--surface-solid);
  border: 1px solid rgba(12, 76, 177, 0.12);
  border-radius: 18px;
  color: var(--navy);
  padding: 0 18px;
  font-size: 1rem;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: rgba(12, 76, 177, 0.28);
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.08);
  }
`;

export const LoginBtn = styled.button`
  ${bodyFont}
  width: 100%;
  background: linear-gradient(135deg, var(--primary) 0%, #3ba5ff 100%);
  color: var(--text-inverse);
  border: none;
  border-radius: 18px;
  padding: 16px 18px;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 18px 32px rgba(var(--primary-rgb), 0.22);

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.p`
  ${bodyFont}
  color: var(--danger);
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 14px;
`;
