import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Section = styled.section`
  margin-top: 18px;
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.34fr) minmax(0, 0.66fr);
  gap: 16px;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.aside`
  position: sticky;
  top: calc(var(--nav-h) + 16px);
  align-self: start;
  padding: 20px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--text-inverse);
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.2);

  @media (max-width: 1020px) {
    position: static;
  }
`;

export const SummaryEyebrow = styled.div`
  ${bodyFont}
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
`;

export const SummaryTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  line-height: 1.05;
  margin-bottom: 10px;
`;

export const SummaryText = styled.p`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.78rem;
  line-height: 1.55;
  margin-bottom: 14px;
`;

export const SummaryList = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SummaryItem = styled.div`
  padding: 10px 12px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const SummaryLabel = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 6px;
`;

export const SummaryValue = styled.div`
  ${bodyFont}
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-inverse);
  line-height: 1.5;
`;

export const StepList = styled.div`
  display: grid;
  gap: 8px;
`;

export const StepItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: start;
`;

export const StepNumber = styled.div`
  ${heavyFont}
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: var(--text-inverse);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
`;

export const StepText = styled.p`
  ${bodyFont}
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.72rem;
  line-height: 1.5;
`;

export const ResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ToolbarCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Heading = styled.h2`
  ${heavyFont}
  color: var(--text-heading);
  font-size: clamp(1.2rem, 2.4vw, 1.7rem);
  line-height: 1.05;
`;

export const Subtext = styled.p`
  ${bodyFont}
  max-width: 760px;
  color: var(--text-muted);
  font-size: 0.78rem;
  line-height: 1.5;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  ${bodyFont}
  padding: 7px 11px;
  border-radius: var(--radius-full);
  border: 1.5px solid ${({ $active }) => ($active ? "rgba(37, 99, 235, 0.3)" : "var(--border)")};
  background: ${({ $active }) => ($active ? "var(--primary-soft)" : "var(--surface)")};
  color: ${({ $active }) => ($active ? "var(--primary)" : "var(--text-heading)")};
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;

  &:hover {
    transform: translateY(-1px);
    ${({ $active }) =>
      !$active
        ? `
    background: var(--primary-soft);
    border-color: rgba(37, 99, 235, 0.3);
    color: var(--primary);
  `
        : ""}
  }
`;

export const EmptyState = styled.div`
  ${bodyFont}
  border: 1px solid rgba(37, 99, 235, 0.2);
  background: var(--info-soft);
  border-radius: var(--radius-md);
  padding: 12px 14px;
  color: var(--primary);
  font-size: 0.76rem;
  line-height: 1.5;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
