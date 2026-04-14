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
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 12px;
  max-width: 11ch;
`;

export const TitleAccent = styled.div`
  width: 100px;
  height: 5px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: var(--radius-full);
  margin-bottom: 28px;
`;

export const Section = styled.section`
  margin-bottom: 18px;
  padding: 28px;
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`;

export const SectionTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.4rem, 2.8vw, 1.9rem);
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 14px;
`;

export const Text = styled.p`
  ${bodyFont}
  font-size: 0.96rem;
  color: var(--text-muted);
  line-height: 1.85;
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
  font-size: 0.94rem;
  color: var(--text-muted);
  line-height: 1.75;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  background: var(--bg-subtle);
  border: 1px solid var(--border-light);
`;

export const FaqItem = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 24px 26px;
  margin-bottom: 16px;
  box-shadow: var(--shadow-sm);
`;

export const FaqQuestion = styled.h3`
  ${heavyFont}
  font-size: 1.35rem;
  line-height: 1.1;
  color: var(--text-heading);
  margin-bottom: 10px;
`;

export const FaqAnswer = styled.p`
  ${bodyFont}
  font-size: 0.94rem;
  color: var(--text-muted);
  line-height: 1.8;
`;

export const BackLink = styled.a`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  margin-bottom: 24px;
  padding: 8px 12px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: rgba(37, 99, 235, 0.15);
    transform: translateY(-1px);
  }
`;
