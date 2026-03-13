import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const FooterEl = styled.footer`
  background: #222225;
  margin-top: 40px;
  border-top: 4px solid var(--yellow-bar);
`;

export const Container = styled.div`
  width: 96%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 40px 0 0;
`;

export const Cols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

export const ColTitle = styled.h4`
  ${heavyFont}
  font-size: 28px;
  color: var(--yellow-bar);
  margin-bottom: 16px;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ColText = styled.div`
  color: #ffffff;
  font-size: 15px;
  line-height: 2;
  font-family: Arial, sans-serif;
`;

export const LinksList = styled.ul`
  list-style: none;
`;

export const LinksItem = styled.li`
  margin-bottom: 6px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 15px;
  font-family: Arial, sans-serif;
  transition: color 0.2s;

  &:hover {
    color: var(--yellow-bar);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 4px;
`;

export const SocialLink = styled.a`
  color: var(--yellow-bar);
  font-size: 36px;
  text-decoration: none;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.15);
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 204, 0, 0.2);
  padding: 16px 0;
  text-align: center;
`;

export const BottomText = styled.p`
  ${heavyFont}
  color: var(--yellow-bar);
  font-size: 16px;
  letter-spacing: 1px;
  transform: scaleX(0.9);
  transform-origin: center;
`;
