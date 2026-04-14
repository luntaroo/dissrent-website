import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Section = styled.section`
  margin-top: 18px;
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 0.34fr) minmax(0, 0.66fr);
  gap: 14px;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.aside`
  position: sticky;
  top: calc(var(--nav-h) + 16px);
  align-self: start;
  padding: 18px;
  border-radius: 20px;
  background: rgba(16, 24, 40, 0.88);
  color: var(--text-inverse);
  box-shadow: 0 34px 80px rgba(9, 12, 17, 0.24);

  @media (max-width: 1020px) {
    position: static;
  }
`;

export const SummaryEyebrow = styled.div`
  ${bodyFont}
  font-size: 0.56rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold-light);
  margin-bottom: 8px;
`;

export const SummaryTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  line-height: 1;
  margin-bottom: 10px;
`;

export const SummaryText = styled.p`
  ${bodyFont}
  color: rgba(247, 248, 251, 0.64);
  font-size: 0.74rem;
  line-height: 1.48;
  margin-bottom: 12px;
`;

export const SummaryList = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
`;

export const SummaryItem = styled.div`
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const SummaryLabel = styled.div`
  ${bodyFont}
  font-size: 0.54rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(247, 248, 251, 0.44);
  margin-bottom: 6px;
`;

export const SummaryValue = styled.div`
  ${bodyFont}
  font-size: 0.74rem;
  font-weight: 700;
  color: var(--text-inverse);
  line-height: 1.55;
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
  background: rgba(var(--gold-rgb), 0.18);
  color: var(--gold-light);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
`;

export const StepText = styled.p`
  ${bodyFont}
  color: rgba(247, 248, 251, 0.66);
  font-size: 0.68rem;
  line-height: 1.45;
`;

export const ResultsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ToolbarCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Heading = styled.h2`
  ${heavyFont}
  color: var(--text);
  font-size: clamp(1.25rem, 2.5vw, 1.8rem);
  line-height: 0.96;
`;

export const Subtext = styled.p`
  ${bodyFont}
  max-width: 760px;
  color: var(--text-muted);
  font-size: 0.74rem;
  line-height: 1.45;
`;

export const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  ${bodyFont}
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? "rgba(var(--gold-rgb), 0.28)" : "rgba(16, 24, 40, 0.1)")};
  background: ${({ $active }) => ($active ? "rgba(var(--gold-rgb), 0.1)" : "rgba(255, 255, 255, 0.72)")};
  color: ${({ $active }) => ($active ? "var(--gold-strong)" : "var(--text)")};
  font-size: 0.68rem;
  font-weight: 700;
  cursor: pointer;
`;

export const EmptyState = styled.div`
  ${bodyFont}
  border: 1px solid rgba(var(--gold-rgb), 0.18);
  background: rgba(var(--gold-rgb), 0.08);
  border-radius: 18px;
  padding: 12px 14px;
  color: var(--gold-strong);
  font-size: 0.74rem;
  line-height: 1.45;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
