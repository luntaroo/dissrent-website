import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Wrapper = styled.section`
  position: relative;
  z-index: 1100;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 100%),
    linear-gradient(135deg, rgba(var(--gold-rgb), 0.08), transparent 55%);
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.66);
  backdrop-filter: blur(18px);
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(var(--gold-rgb), 0.12), transparent 30%);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 14px 12px;
    border-radius: 18px;
  }
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: end;
  margin-bottom: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold-strong);
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(1.05rem, 2vw, 1.4rem);
  line-height: 1.02;
  color: var(--text);
`;

export const Description = styled.p`
  ${bodyFont}
  font-size: 0.76rem;
  color: var(--text-muted);
  line-height: 1.5;
  max-width: 620px;
`;

export const Logo = styled.div`
  ${bodyFont}
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 180px;
  padding: 10px 12px;
  border-radius: 18px;
  background: rgba(16, 24, 40, 0.05);
  border: 1px solid rgba(16, 24, 40, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);

  span {
    font-size: 0.56rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-faint);
  }

  strong {
    ${heavyFont}
    font-size: 0.96rem;
    color: var(--text);
    line-height: 1;
  }

  small {
    font-size: 0.68rem;
    color: var(--text-muted);
  }
`;

export const FieldsGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
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
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
`;

export const InputContainer = styled.div`
  position: relative;
  height: 44px;
`;

export const TextInput = styled.input`
  ${bodyFont}
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(16, 24, 40, 0.1);
  border-radius: 14px;
  color: var(--text);
  padding: 0 36px 0 12px;
  font-size: 0.76rem;
  font-weight: 700;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: rgba(var(--gold-rgb), 0.4);
    box-shadow: 0 0 0 4px rgba(var(--gold-rgb), 0.12);
  }
`;

export const InputIcon = styled.i`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gold-strong);
  font-size: 0.76rem;
  pointer-events: none;
`;

export const SearchButton = styled.button`
  ${bodyFont}
  width: 100%;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: #101828;
  font-size: 0.76rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 18px 34px rgba(var(--gold-rgb), 0.22);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 38px rgba(var(--gold-rgb), 0.28);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const MetaRow = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
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
  padding: 6px 10px;
  background: rgba(var(--gold-rgb), 0.1);
  color: var(--gold-strong);
  border: 1px solid rgba(var(--gold-rgb), 0.18);
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
`;

export const HelperText = styled.p`
  ${bodyFont}
  color: var(--text-soft);
  font-size: 0.7rem;
  line-height: 1.45;
`;

export const ErrorText = styled.p`
  ${bodyFont}
  color: var(--danger);
  font-size: 0.74rem;
  font-weight: 700;
  margin-top: 8px;
`;
