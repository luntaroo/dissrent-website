import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const PageWrap = styled.div`
  min-height: 100vh;
  background: var(--bg-color);
`;

export const Container = styled.div`
  width: 96%;
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 0 60px;

  @media (max-width: 768px) {
    padding: 32px 0 40px;
  }
`;

export const PageTitle = styled.h1`
  ${heavyFont}
  font-size: clamp(32px, 5vw, 56px);
  color: var(--yellow-bar);
  text-shadow: 0 0 20px rgba(255, 204, 0, 0.2);
  margin-bottom: 8px;
`;

export const TitleAccent = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--yellow-bar) 0%, #ff5500 100%);
  border-radius: 2px;
  margin-bottom: 36px;
  box-shadow: 0 0 12px rgba(255, 204, 0, 0.3);
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(20px, 3vw, 28px);
  color: #fff;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-family: Arial, sans-serif;
  font-size: 15px;
  color: #bbb;
  line-height: 1.8;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 14px;
`;

export const ListItem = styled.li`
  font-family: Arial, sans-serif;
  font-size: 15px;
  color: #bbb;
  line-height: 1.8;
  padding-left: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    width: 8px;
    height: 8px;
    background: var(--yellow-bar);
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(255, 204, 0, 0.4);
  }
`;

export const FaqItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 4px solid var(--yellow-bar);
  border-radius: 0 6px 6px 0;
  padding: 20px 24px;
  margin-bottom: 16px;
  transition: border-color 0.18s;

  &:hover {
    border-color: rgba(255, 204, 0, 0.3);
    border-left-color: var(--yellow-bar);
  }
`;

export const FaqQuestion = styled.h3`
  ${heavyFont}
  font-size: 18px;
  color: var(--yellow-bar);
  margin-bottom: 8px;
`;

export const FaqAnswer = styled.p`
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #bbb;
  line-height: 1.7;
`;

export const BackLink = styled.a`
  ${heavyFont}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: var(--yellow-bar);
  text-decoration: none;
  margin-bottom: 28px;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;
