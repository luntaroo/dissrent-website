import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Card = styled.article`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(30, 30, 34, 0.85) 0%,
      rgba(30, 30, 34, 0.3) 35%,
      rgba(30, 30, 34, 0.2) 60%,
      rgba(15, 15, 18, 0.85) 100%
    );
    z-index: 1;
  }

  @media (max-width: 900px) {
    min-height: 280px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

export const Bg = styled.div<{ $img: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`;

export const Top = styled.div`
  position: relative;
  z-index: 2;
  padding: 16px 16px 0;
`;

export const Title = styled.h3`
  ${heavyFont}
  color: #ffffff;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 0;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.95);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.5px;
  transform: scaleX(0.88);
  transform-origin: left;

  @media (max-width: 900px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Price = styled.div`
  ${heavyFont}
  color: var(--price-yellow);
  font-size: 42px;
  line-height: 1.05;
  font-style: italic;
  text-shadow: 0 0 25px rgba(255, 204, 0, 0.4), 2px 2px 6px rgba(0, 0, 0, 0.95);
  letter-spacing: -0.5px;
  transform: scaleX(0.88);
  transform-origin: left;

  @media (max-width: 900px) {
    font-size: 34px;
  }

  @media (max-width: 768px) {
    font-size: 44px;
  }

  @media (max-width: 480px) {
    font-size: 38px;
  }
`;

export const Bottom = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 16px 14px;
`;

export const BookBtn = styled.button`
  ${heavyFont}
  background: linear-gradient(180deg, #ffcc00 0%, #ff5500 100%);
  color: #000000;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-size: 34px;
  cursor: pointer;
  position: relative;
  box-shadow: 0 5px 0 #8a3000, 0 8px 18px rgba(0, 0, 0, 0.7);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  letter-spacing: -0.5px;
  transform: scaleX(0.9);

  &:hover {
    filter: brightness(1.08);
  }

  &:active {
    transform: scaleX(0.9) translateY(4px);
    box-shadow: 0 1px 0 #8a3000, 0 3px 8px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    padding: 13px 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const CursorIcon = styled.div`
  position: absolute;
  right: 8px;
  bottom: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
  transform: rotate(-10deg);

  i {
    font-size: 14px;
    color: #000;
    margin-bottom: -1px;
  }

  span {
    font-family: Arial, sans-serif;
    font-size: 8px;
    font-weight: 900;
    color: #000;
    letter-spacing: 0;
  }
`;
