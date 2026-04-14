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
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  line-height: 1.05;
  color: var(--text-heading);
`;

export const HeaderText = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.94rem;
  line-height: 1.7;
  max-width: 680px;
`;

export const LogoutBtn = styled.button`
  ${bodyFont}
  border: 1.5px solid rgba(220, 38, 38, 0.2);
  background: var(--danger-soft);
  color: var(--danger);
  padding: 10px 16px;
  border-radius: var(--radius-md);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: rgba(220, 38, 38, 0.15);
    border-color: rgba(220, 38, 38, 0.3);
  }
`;

export const SectionCard = styled.section`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 26px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  ${heavyFont}
  font-size: clamp(1.5rem, 2.8vw, 2.1rem);
  line-height: 1.05;
  color: var(--text-heading);
  margin-bottom: 10px;
`;

export const SectionHint = styled.p`
  ${bodyFont}
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.7;
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
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

export const CarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: var(--bg-gradient);
  border-bottom: 1px solid var(--border);
`;

export const CarThumb = styled.div<{ $img: string }>`
  width: 72px;
  height: 50px;
  border-radius: var(--radius-md);
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
`;

export const CarTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const CarName = styled.span`
  ${heavyFont}
  font-size: 1.1rem;
  line-height: 1.05;
  color: var(--text-heading);
`;

export const CarMeta = styled.span<{ $available: boolean }>`
  ${bodyFont}
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ $available }) => ($available ? "var(--success)" : "var(--warning)")};
  line-height: 1.5;
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
  font-size: 1.1rem;
  color: var(--text-heading);
`;

export const NavBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  border: 1.5px solid var(--border);
  background: var(--bg-subtle);
  color: var(--primary);
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.15s;

  &:hover {
    background: var(--primary-soft);
    border-color: rgba(37, 99, 235, 0.3);
    transform: translateY(-1px);
  }
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
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
  height: 32px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: ${({ $empty, $past }) => ($empty || $past ? "default" : "pointer")};
  background: ${({ $blocked, $empty, $past }) =>
    $empty
      ? "transparent"
      : $past
        ? "var(--bg-subtle)"
        : $blocked
          ? "var(--danger-soft)"
          : "var(--bg-subtle)"};
  color: ${({ $blocked, $empty, $past, $today }) =>
    $empty
      ? "transparent"
      : $past
        ? "var(--text-light)"
        : $blocked
          ? "var(--danger)"
          : $today
            ? "var(--primary)"
            : "var(--text-heading)"};
  box-shadow: ${({ $today }) =>
    $today ? "inset 0 0 0 2px rgba(37, 99, 235, 0.2)" : "none"};
  pointer-events: ${({ $empty, $past }) => ($empty || $past ? "none" : "auto")};
  transition: background 0.15s, transform 0.15s;

  &:hover {
    ${({ $empty, $past, $blocked }) =>
      !$empty && !$past && !$blocked ? "transform: translateY(-1px);" : ""}
  }
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
  color: var(--text-subtle);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--border);
`;

export const Td = styled.td`
  ${bodyFont}
  padding: 14px;
  color: var(--text-heading);
  font-size: 0.9rem;
  border-bottom: 1px solid var(--border-light);
  vertical-align: middle;
`;

export const CellStrong = styled.strong`
  color: var(--text-heading);
`;

export const CellMuted = styled.span`
  color: var(--text-muted);
  font-size: 0.84rem;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  ${bodyFont}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 0.74rem;
  font-weight: 700;
  background: ${({ $status }) =>
    $status === "confirmed"
      ? "var(--success-soft)"
      : $status === "pending"
        ? "var(--warning-soft)"
        : "var(--bg-subtle)"};
  color: ${({ $status }) =>
    $status === "confirmed"
      ? "var(--success)"
      : $status === "pending"
        ? "var(--warning)"
        : "var(--text-muted)"};
`;

export const EmptyMsg = styled.p`
  ${bodyFont}
  color: var(--text-muted);
  font-size: 0.92rem;
  padding: 10px 0 4px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ActionBtn = styled.button<{ $variant: "confirm" | "cancel" }>`
  ${bodyFont}
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  border: 1.5px solid
    ${({ $variant }) =>
      $variant === "confirm" ? "rgba(22, 163, 74, 0.2)" : "rgba(220, 38, 38, 0.2)"};
  background: ${({ $variant }) =>
    $variant === "confirm" ? "var(--success-soft)" : "var(--danger-soft)"};
  color: ${({ $variant }) => ($variant === "confirm" ? "var(--success)" : "var(--danger)")};
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;

  &:hover {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }
`;
