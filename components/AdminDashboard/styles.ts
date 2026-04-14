import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Page = styled.div`
  width: min(100% - 40px, 1320px);
  margin: 0 auto;
  padding: 36px 0 56px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
  flex-wrap: wrap;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  ${heavyFont}
  font-size: clamp(2.3rem, 5vw, 4rem);
  line-height: 0.92;
  color: var(--navy);
`;

export const HeaderText = styled.p`
  ${bodyFont}
  color: var(--text-soft);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 680px;
`;

export const LogoutBtn = styled.button`
  ${bodyFont}
  border: 1px solid rgba(216, 75, 84, 0.16);
  background: rgba(216, 75, 84, 0.08);
  color: var(--danger);
  padding: 12px 18px;
  border-radius: 18px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
`;

export const SectionCard = styled.section`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(246, 250, 255, 0.99) 100%);
  border: 1px solid rgba(12, 76, 177, 0.12);
  border-radius: 30px;
  padding: 26px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.65rem, 3vw, 2.5rem);
  line-height: 0.95;
  color: var(--navy);
  margin-bottom: 10px;
`;

export const SectionHint = styled.p`
  ${bodyFont}
  font-size: 0.96rem;
  color: var(--text-soft);
  line-height: 1.8;
  margin-bottom: 20px;
`;

export const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const CarCalendarCard = styled.div`
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(12, 76, 177, 0.12);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 18px 36px rgba(24, 58, 109, 0.08);
`;

export const CarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: linear-gradient(180deg, rgba(243, 248, 255, 0.96) 0%, rgba(232, 241, 255, 0.98) 100%);
  border-bottom: 1px solid rgba(12, 76, 177, 0.1);
`;

export const CarThumb = styled.div<{ $img: string }>`
  width: 72px;
  height: 50px;
  border-radius: 14px;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  box-shadow: 0 12px 24px rgba(15, 58, 129, 0.1);
`;

export const CarTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const CarName = styled.span`
  ${heavyFont}
  font-size: 1.15rem;
  line-height: 0.96;
  color: var(--navy);
`;

export const CarMeta = styled.span<{ $available: boolean }>`
  ${bodyFont}
  font-size: 0.84rem;
  font-weight: 800;
  color: ${({ $available }) => ($available ? "var(--success)" : "#9b5f14")};
  line-height: 1.6;
`;

export const CalendarWrap = styled.div`
  padding: 18px 16px 16px;
`;

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const MonthLabel = styled.span`
  ${heavyFont}
  font-size: 1.15rem;
  color: var(--navy);
`;

export const NavBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  border: 1px solid rgba(12, 76, 177, 0.12);
  background: var(--surface-muted);
  color: var(--primary);
  cursor: pointer;
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 6px;
`;

export const WeekDay = styled.div`
  ${bodyFont}
  text-align: center;
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--text-soft);
  text-transform: uppercase;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const DayCell = styled.button<{
  $blocked: boolean;
  $today: boolean;
  $empty: boolean;
  $past: boolean;
}>`
  ${bodyFont}
  height: 34px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-size: 0.84rem;
  font-weight: 700;
  cursor: ${({ $empty, $past }) => ($empty || $past ? "default" : "pointer")};
  background: ${({ $blocked, $empty, $past }) =>
    $empty
      ? "transparent"
      : $past
        ? "#eef3fb"
        : $blocked
          ? "rgba(216, 75, 84, 0.14)"
          : "var(--surface-muted)"};
  color: ${({ $blocked, $empty, $past, $today }) =>
    $empty
      ? "transparent"
      : $past
        ? "#b0bfd2"
        : $blocked
          ? "var(--danger)"
          : $today
            ? "var(--primary-strong)"
            : "var(--navy)"};
  box-shadow: ${({ $today }) => ($today ? "inset 0 0 0 2px rgba(15, 106, 230, 0.22)" : "none")};
  pointer-events: ${({ $empty, $past }) => ($empty || $past ? "none" : "auto")};
`;

export const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const BookingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 980px;
`;

export const Th = styled.th`
  ${bodyFont}
  text-align: left;
  padding: 12px 14px;
  color: var(--text-soft);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(12, 76, 177, 0.1);
`;

export const Td = styled.td`
  ${bodyFont}
  padding: 14px;
  color: var(--navy);
  font-size: 0.94rem;
  border-bottom: 1px solid rgba(12, 76, 177, 0.08);
  vertical-align: middle;
`;

export const CellStrong = styled.strong`
  color: var(--navy);
`;

export const CellMuted = styled.span`
  color: var(--text-soft);
  font-size: 0.84rem;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
  background: ${({ $status }) =>
    $status === "confirmed"
      ? "rgba(31, 157, 104, 0.12)"
      : $status === "pending"
        ? "rgba(240, 156, 40, 0.12)"
        : "rgba(92, 112, 143, 0.12)"};
  color: ${({ $status }) =>
    $status === "confirmed"
      ? "var(--success)"
      : $status === "pending"
        ? "#9b5f14"
        : "var(--text-soft)"};
`;

export const EmptyMsg = styled.p`
  ${bodyFont}
  color: var(--text-soft);
  font-size: 0.96rem;
  padding: 10px 0 4px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ActionBtn = styled.button<{ $variant: "confirm" | "cancel" }>`
  ${bodyFont}
  padding: 9px 12px;
  border-radius: 14px;
  border: 1px solid
    ${({ $variant }) =>
      $variant === "confirm" ? "rgba(31, 157, 104, 0.18)" : "rgba(216, 75, 84, 0.18)"};
  background: ${({ $variant }) =>
    $variant === "confirm" ? "rgba(31, 157, 104, 0.08)" : "rgba(216, 75, 84, 0.08)"};
  color: ${({ $variant }) => ($variant === "confirm" ? "var(--success)" : "var(--danger)")};
  font-size: 0.84rem;
  font-weight: 800;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
