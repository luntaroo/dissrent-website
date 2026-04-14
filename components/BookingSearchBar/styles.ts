import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Wrapper = styled.section`
  position: relative;
  z-index: 1100;
  background: var(--surface);
  border-radius: var(--radius-xl);
  padding: 20px;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border);
  overflow: visible;

  @media (max-width: 900px) {
    padding: 16px 14px;
    border-radius: var(--radius-lg);
  }
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: end;
  margin-bottom: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  font-size: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--primary);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(1.15rem, 2.2vw, 1.5rem);
  line-height: 1.05;
  color: var(--text-heading);
`;

export const Description = styled.p`
  ${bodyFont}
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 620px;
`;

export const Logo = styled.div`
  ${bodyFont}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 180px;
  padding: 12px 14px;
  border-radius: var(--radius-lg);
  background: var(--bg-gradient);
  border: 1px solid var(--border);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  span {
    font-size: 0.56rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-subtle);
  }

  strong {
    ${heavyFont}
    font-size: 1rem;
    color: var(--text-heading);
    line-height: 1;
  }

  small {
    font-size: 0.7rem;
    color: var(--text-muted);
  }
`;

export const FieldsGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  align-items: end;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

export const Label = styled.label`
  ${bodyFont}
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-subtle);
`;

export const InputContainer = styled.div`
  position: relative;
  height: 48px;
`;

export const TextInput = styled.input`
  ${bodyFont}
  width: 100%;
  height: 100%;
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-heading);
  padding: 0 40px 0 14px;
  font-size: 0.8rem;
  font-weight: 600;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-soft);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;

export const InputIcon = styled.i`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 0.8rem;
  pointer-events: none;
`;

export const SearchButton = styled.button`
  ${bodyFont}
  width: 100%;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: var(--text-inverse);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.32);
  }

  &:active {
    transform: translateY(0);
  }

  i {
    font-size: 0.75rem;
  }
`;

export const MetaRow = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  flex: 1;
`;

export const MetaPill = styled.div`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  background: var(--primary-soft);
  color: var(--primary);
  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 600;
`;

export const HelperText = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.74rem;
  line-height: 1.5;
`;

export const ErrorText = styled.p`
  ${bodyFont}
  color: var(--danger);
  font-size: 0.76rem;
  font-weight: 600;
  margin-top: 10px;
  padding: 8px 12px;
  background: var(--danger-soft);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(220, 38, 38, 0.15);
`;
