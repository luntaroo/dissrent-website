import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Overlay = styled.div<{ $hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.88);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  pointer-events: ${({ $hidden }) => ($hidden ? "none" : "all")};
  transition: opacity 0.4s ease;
`;

export const Content = styled.div<{ $hidden: boolean }>`
  position: relative;
  max-width: 550px;
  width: 92%;
  background: linear-gradient(180deg, #2a2a2e 0%, #151517 100%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9), 0 0 60px rgba(255, 204, 0, 0.1);
  border: 2px solid var(--yellow-bar);
  transform: scale(${({ $hidden }) => ($hidden ? 0.85 : 1)});
  transition: transform 0.4s ease;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 280px;
  background: #0a0a0a;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1e, #2a2a2e);
  gap: 10px;

  i {
    font-size: 50px;
    color: var(--yellow-bar);
  }

  span {
    font-size: 13px;
    color: #666;
  }
`;

export const Body = styled.div`
  padding: 25px 25px 28px;
  text-align: center;
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: 42px;
  color: var(--yellow-bar);
  margin-bottom: 6px;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(255, 204, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: #999;
  margin-bottom: 22px;
  line-height: 1.5;
`;

export const CloseBtn = styled.button`
  ${heavyFont}
  background: linear-gradient(180deg, #ffcc00 0%, #ff5500 100%);
  color: #000;
  border: none;
  border-radius: 6px;
  padding: 12px 45px;
  font-size: 26px;
  cursor: pointer;
  box-shadow: 0 5px 0 #993300, 0 10px 20px rgba(0, 0, 0, 0.6);
  transition: all 0.15s;
  letter-spacing: 2px;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #993300, 0 3px 8px rgba(0, 0, 0, 0.6);
  }
`;

export const CloseX = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 0, 0, 0.8);
  }
`;
