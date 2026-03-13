import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Section = styled.section`
  margin-top: 30px;
`;

export const InfoBar = styled.div`
  background: var(--yellow-bar);
  border-radius: 6px;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  margin-bottom: 22px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 12px 16px;
  }
`;

export const InfoItem = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 900;
  font-family: Arial, sans-serif;
  text-align: center;
  line-height: 1.3;
`;

export const InfoLabel = styled.span`
  display: block;
  font-size: 11px;
  letter-spacing: 1.5px;
  opacity: 0.55;
  margin-bottom: 1px;
`;

export const InfoSep = styled.div`
  color: rgba(0, 0, 0, 0.25);
  font-size: 28px;
  font-weight: 100;
`;

export const Heading = styled.h2`
  ${heavyFont}
  text-align: center;
  color: var(--yellow-bar);
  font-size: 48px;
  margin-bottom: 22px;
  letter-spacing: 2px;
  text-shadow: 0 0 30px rgba(255, 204, 0, 0.3);
  transform: scaleX(0.88);
  transform-origin: center;
  line-height: 1;

  @media (max-width: 900px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
