import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Section = styled.section`
  background: linear-gradient(180deg, var(--bg-soft) 0%, var(--bg) 100%);
  padding: 80px 32px;

  @media (max-width: 900px) {
    padding: 60px 20px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Header = styled.div`
  max-width: 720px;
  margin-bottom: 48px;
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--primary);
  margin-bottom: 14px;
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(2rem, 3.8vw, 3rem);
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 16px;
  max-width: 11ch;
`;

export const Text = styled.p`
  ${bodyFont}
  font-size: 0.96rem;
  color: var(--text-muted);
  line-height: 1.75;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 26px;
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(37, 99, 235, 0.2);
  }
`;

export const CardKicker = styled.div`
  ${heavyFont}
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  ${heavyFont}
  font-size: 1.15rem;
  line-height: 1.1;
  color: var(--text-heading);
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  ${bodyFont}
  font-size: 0.86rem;
  color: var(--text-muted);
  line-height: 1.7;
`;

export const Strip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
  justify-content: center;
`;

export const StripItem = styled.div`
  ${bodyFont}
  padding: 10px 18px;
  border-radius: var(--radius-full);
  background: var(--primary-soft);
  border: 1px solid rgba(37, 99, 235, 0.15);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 600;
`;

export const FinalNote = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.84rem;
  line-height: 1.7;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;
