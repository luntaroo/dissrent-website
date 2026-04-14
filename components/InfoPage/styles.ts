import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const PageWrap = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  width: min(100% - 40px, 980px);
  margin: 0 auto;
  padding: calc(var(--nav-h) + 52px) 0 72px;

  @media (max-width: 768px) {
    padding: calc(var(--nav-h) + 34px) 0 46px;
  }
`;

export const PageTitle = styled.h1`
  ${heavyFont}
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 0.94;
  color: var(--text);
  margin-bottom: 10px;
  max-width: 11ch;
`;

export const TitleAccent = styled.div`
  width: 110px;
  height: 6px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  border-radius: 999px;
  margin-bottom: 30px;
`;

export const Section = styled.section`
  margin-bottom: 18px;
  padding: 28px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.68);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
`;

export const SectionTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.55rem, 3vw, 2.2rem);
  line-height: 1;
  color: var(--text);
  margin-bottom: 14px;
`;

export const Text = styled.p`
  ${bodyFont}
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.9;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 12px;
  display: grid;
  gap: 10px;
`;

export const ListItem = styled.li`
  ${bodyFont}
  font-size: 0.98rem;
  color: var(--text-muted);
  line-height: 1.8;
  padding: 14px 16px;
  border-radius: 22px;
  background: rgba(16, 24, 40, 0.03);
  border: 1px solid rgba(16, 24, 40, 0.08);
`;

export const FaqItem = styled.div`
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.68);
  border-radius: 30px;
  padding: 24px 26px;
  margin-bottom: 16px;
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(14px);
`;

export const FaqQuestion = styled.h3`
  ${heavyFont}
  font-size: 1.55rem;
  line-height: 1;
  color: var(--text);
  margin-bottom: 10px;
`;

export const FaqAnswer = styled.p`
  ${bodyFont}
  font-size: 0.98rem;
  color: var(--text-muted);
  line-height: 1.82;
`;

export const BackLink = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--gold-strong);
  text-decoration: none;
  margin-bottom: 24px;
`;
