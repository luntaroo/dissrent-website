import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 5000;
  background: rgba(10, 10, 14, 0.97);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--yellow-bar);
  padding: 0 4%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.9);
`;

export const Brand = styled.div`
  ${heavyFont}
  display: flex;
  flex-direction: column;
  line-height: 0.82;
  transform: scaleX(0.88);
  transform-origin: left;
  cursor: default;
  user-select: none;
`;

export const BrandDiss = styled.span`
  font-size: 28px;
  color: var(--yellow-bar);
  text-shadow: 0 0 14px rgba(255, 204, 0, 0.35);
`;

export const BrandRent = styled.span`
  font-size: 28px;
  color: #fff;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 5px;
  border: 1.5px solid rgba(255, 204, 0, 0.35);
  transition: all 0.18s;

  &:hover {
    border-color: var(--yellow-bar);
    background: rgba(255, 204, 0, 0.07);
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
  }
`;

export const PhoneIcon = styled.i`
  color: var(--yellow-bar);
  font-size: 14px;
`;

export const PhoneNum = styled.span`
  ${heavyFont}
  font-size: 20px;
  color: #fff;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
