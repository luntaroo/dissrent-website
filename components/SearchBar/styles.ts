import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Wrapper = styled.header`
  background-color: var(--yellow-bar);
  border-radius: 6px;
  padding: 12px 18px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.9);

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  ${heavyFont}
  display: flex;
  flex-direction: column;
  color: #000000;
  font-size: 56px;
  line-height: 0.82;
  padding-right: 12px;
  margin-bottom: 4px;
  white-space: nowrap;
  -webkit-text-stroke: 1px #000;
  transform: scaleX(0.88);
  transform-origin: left;

  @media (max-width: 900px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    padding-right: 0;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  ${heavyFont}
  color: #000000;
  font-size: 17px;
  margin-bottom: 4px;
  letter-spacing: 1.5px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  background-color: var(--input-bg);
  border-radius: 4px;
  height: 40px;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: #777;
  padding: 0 38px 0 14px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  outline: none;
`;

export const DateInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: #777;
  padding: 0 38px 0 14px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const InputIcon = styled.i`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--red-icon);
  font-size: 15px;
`;

export const SearchButton = styled.button`
  ${heavyFont}
  background: linear-gradient(180deg, #ff2a00 0%, #bb0000 100%);
  color: #000000;
  border: none;
  border-radius: 6px;
  padding: 0 28px;
  height: 58px;
  font-size: 44px;
  cursor: pointer;
  box-shadow: 0 6px 0 #550000, 0 12px 25px rgba(0, 0, 0, 0.8);
  transition: all 0.1s;
  white-space: nowrap;
  letter-spacing: -0.5px;
  transform: scaleX(0.88);

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 0 1px 0 #550000, 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 8px;
  }

  @media (max-width: 900px) {
    font-size: 32px;
    height: 50px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    height: 46px;
  }
`;
