import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Section = styled.section`
  background:
    radial-gradient(circle at top left, rgba(var(--gold-rgb), 0.16), transparent 24%),
    linear-gradient(180deg, var(--bg-dark-strong) 0%, #11161f 100%);
  padding: 104px 32px;

  @media (max-width: 900px) {
    padding: 72px 20px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export const Header = styled.div`
  max-width: 720px;
  margin-bottom: 46px;
`;

export const Eyebrow = styled.div`
  ${bodyFont}
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold-light);
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  ${heavyFont}
  font-size: clamp(2.3rem, 4vw, 4rem);
  line-height: 0.96;
  color: var(--text-inverse);
  margin-bottom: 16px;
  max-width: 11ch;
`;

export const Text = styled.p`
  ${bodyFont}
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.8;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 28px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 24px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
`;

export const CardKicker = styled.div`
  ${heavyFont}
  font-size: 1rem;
  color: var(--gold-light);
  margin-bottom: 18px;
`;

export const CardTitle = styled.h3`
  ${heavyFont}
  font-size: 1.4rem;
  line-height: 1.02;
  color: var(--text-inverse);
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  ${bodyFont}
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.75;
`;

export const Strip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
`;

export const StripItem = styled.div`
  ${bodyFont}
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(var(--gold-rgb), 0.1);
  border: 1px solid rgba(var(--gold-rgb), 0.18);
  color: var(--gold-light);
  font-size: 0.8rem;
  font-weight: 700;
`;

export const FinalNote = styled.p`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.82rem;
  line-height: 1.7;
`;
