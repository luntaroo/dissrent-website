import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Card = styled.article`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  min-height: 340px;
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
      rgba(20, 20, 24, 0.9) 0%,
      rgba(20, 20, 24, 0.35) 30%,
      rgba(20, 20, 24, 0.25) 55%,
      rgba(10, 10, 14, 0.93) 100%
    );
    z-index: 1;
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
  padding: 16px 16px 8px;
`;

export const CarName = styled.h3`
  ${heavyFont}
  color: #ffffff;
  font-size: 26px;
  line-height: 1;
  margin-bottom: 6px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.95);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.5px;
  transform: scaleX(0.88);
  transform-origin: left;
`;

export const PriceLine = styled.div`
  color: #bbb;
  font-size: 13px;
  font-family: Arial, sans-serif;
  margin-bottom: 2px;
  line-height: 1.5;

  strong {
    color: #fff;
    font-size: 14px;
  }
`;

export const TotalPrice = styled.div`
  ${heavyFont}
  color: var(--price-yellow);
  font-size: 44px;
  font-style: italic;
  line-height: 1;
  letter-spacing: -0.5px;
  text-shadow: 0 0 25px rgba(255, 204, 0, 0.4), 2px 2px 6px rgba(0, 0, 0, 0.95);
  transform: scaleX(0.88);
  transform-origin: left;
  margin-top: 2px;

  @media (max-width: 900px) {
    font-size: 36px;
  }
`;

export const NegotiableText = styled.div`
  ${heavyFont}
  color: var(--price-yellow);
  font-size: 22px;
  font-style: italic;
  line-height: 1;
  text-shadow: 0 0 15px rgba(255, 204, 0, 0.3);
  transform: scaleX(0.88);
  transform-origin: left;
  margin-top: 4px;
`;

export const DiscountBadge = styled.div`
  ${heavyFont}
  display: inline-block;
  background: linear-gradient(135deg, #ff3300 0%, #cc0000 100%);
  color: #ffffff;
  font-size: 16px;
  padding: 3px 10px 2px;
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.5);
  transform: scaleX(0.88);
  transform-origin: left;
  letter-spacing: 0.5px;
`;

export const Bottom = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 16px 14px;
`;

export const BlockedOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ZauzetoBadge = styled.div`
  ${heavyFont}
  font-size: 36px;
  color: #ff2222;
  letter-spacing: 3px;
  transform: rotate(-18deg) scaleX(0.88);
  text-shadow:
    0 0 20px rgba(255, 0, 0, 0.8),
    2px 2px 0 rgba(0, 0, 0, 0.9);
  border: 4px solid #ff2222;
  padding: 6px 18px 4px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 24px rgba(255, 0, 0, 0.4);
  white-space: nowrap;

  @media (max-width: 900px) {
    font-size: 26px;
  }
`;

export const UnavailableBtn = styled.button`
  ${heavyFont}
  background: rgba(20, 20, 24, 0.9);
  color: #ff3333;
  border: 2px solid #ff3333;
  border-radius: 6px;
  padding: 10px 8px;
  font-size: 20px;
  cursor: not-allowed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.5px;
  transform: scaleX(0.9);
  opacity: 0.85;
  box-shadow: 0 5px 0 #6a0000, 0 8px 18px rgba(0, 0, 0, 0.7);
`;

export const ReserveBtn = styled.button<{ $contact?: boolean }>`
  ${heavyFont}
  background: ${({ $contact }) =>
    $contact
      ? "linear-gradient(180deg, #2a2a2e 0%, #1a1a1e 100%)"
      : "linear-gradient(180deg, #ffcc00 0%, #ff5500 100%)"};
  color: ${({ $contact }) => ($contact ? "var(--yellow-bar)" : "#000000")};
  border: ${({ $contact }) => ($contact ? "2px solid var(--yellow-bar)" : "none")};
  border-radius: 6px;
  padding: 10px 8px;
  font-size: 20px;
  cursor: pointer;
  box-shadow: ${({ $contact }) =>
    $contact
      ? "0 5px 0 #111, 0 8px 18px rgba(0,0,0,0.7)"
      : "0 5px 0 #8a3000, 0 8px 18px rgba(0,0,0,0.7)"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  letter-spacing: -0.5px;
  transform: scaleX(0.9);
  white-space: nowrap;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scaleX(0.9) translateY(4px);
    box-shadow: ${({ $contact }) =>
      $contact
        ? "0 1px 0 #111, 0 3px 8px rgba(0,0,0,0.7)"
        : "0 1px 0 #8a3000, 0 3px 8px rgba(0,0,0,0.7)"};
  }
`;
