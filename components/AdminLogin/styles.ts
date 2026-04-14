import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(180deg, var(--bg-soft) 0%, var(--bg) 100%);
`;

export const Card = styled.div`
  width: min(100%, 460px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 36px 32px 30px;
  box-shadow: var(--shadow-lg);
`;

export const Eyebrow = styled.span`
  ${bodyFont}
  display: inline-block;
  font-size: 0.66rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
  margin-bottom: 10px;
  padding: 6px 12px;
  background: var(--primary-soft);
  border-radius: var(--radius-full);
  border: 1px solid rgba(37, 99, 235, 0.15);
`;

export const Title = styled.h1`
  ${heavyFont}
  font-size: clamp(1.9rem, 4.5vw, 2.6rem);
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  ${bodyFont}
  display: block;
  color: var(--text-subtle);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  ${bodyFont}
  width: 100%;
  height: 52px;
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-heading);
  padding: 0 18px;
  font-size: 0.94rem;
  font-weight: 500;
  outline: none;
  margin-bottom: 20px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-soft);
  }
`;

export const LoginBtn = styled.button`
  ${bodyFont}
  width: 100%;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-full);
  padding: 14px 18px;
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

export const ErrorMsg = styled.p`
  ${bodyFont}
  color: var(--danger);
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 14px;
  padding: 10px 14px;
  background: var(--danger-soft);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(220, 38, 38, 0.15);
`;
