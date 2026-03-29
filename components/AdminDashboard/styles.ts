import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Page = styled.div`
  width: 96%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 30px 0 60px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Title = styled.h1`
  ${heavyFont}
  font-size: 48px;
  color: var(--yellow-bar);
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
  text-shadow: 0 0 20px rgba(255, 204, 0, 0.2);
  line-height: 1;
`;

export const LogoutBtn = styled.button`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #aaa;
  padding: 8px 20px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 0, 0, 0.5);
    color: #fff;
    border-color: transparent;
  }
`;

export const SectionTitle = styled.h2`
  ${heavyFont}
  font-size: 32px;
  color: var(--yellow-bar);
  letter-spacing: 1px;
  transform: scaleX(0.88);
  transform-origin: left;
  margin-bottom: 20px;
  margin-top: 40px;
  line-height: 1;
`;

export const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const CarCalendarCard = styled.div`
  background: #111114;
  border: 2px solid #2a2a2e;
  border-radius: 10px;
  overflow: hidden;
`;

export const CarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #1a1a1e;
  border-bottom: 1px solid #2a2a2e;
`;

export const CarThumb = styled.div<{ $img: string }>`
  width: 60px;
  height: 40px;
  border-radius: 4px;
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const CarName = styled.span`
  ${heavyFont}
  font-size: 16px;
  color: var(--yellow-bar);
  letter-spacing: 0.5px;
  transform: scaleX(0.88);
  display: inline-block;
  transform-origin: left;
`;

export const CalendarWrap = styled.div`
  padding: 14px 12px;
`;

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const MonthLabel = styled.span`
  ${heavyFont}
  font-size: 18px;
  color: #fff;
  letter-spacing: 1px;
  transform: scaleX(0.88);
  display: inline-block;
  transform-origin: center;
`;

export const NavBtn = styled.button`
  background: none;
  border: 1px solid #333;
  color: #aaa;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;

  &:hover {
    background: #2a2a2e;
    color: #fff;
  }
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`;

export const WeekDay = styled.div`
  font-family: Arial, sans-serif;
  font-size: 11px;
  color: #555;
  text-align: center;
  padding: 2px 0;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const DayCell = styled.button<{ $blocked: boolean; $today: boolean; $empty: boolean; $past: boolean }>`
  height: 30px;
  border-radius: 4px;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 12px;
  cursor: ${({ $empty, $past }) => ($empty || $past ? "default" : "pointer")};
  background: ${({ $blocked, $empty, $past }) =>
    $empty ? "transparent" :
    $past ? "#1a1a1a" :
    $blocked ? "rgba(255, 60, 60, 0.85)" : "#2a2a2e"};
  color: ${({ $blocked, $empty, $past, $today }) =>
    $empty ? "transparent" :
    $past ? "#333" :
    $today ? "#ffcc00" :
    $blocked ? "#fff" : "#aaa"};
  outline: ${({ $today }) => ($today ? "2px solid var(--yellow-bar)" : "none")};
  outline-offset: -2px;
  transition: background 0.15s;
  pointer-events: ${({ $empty, $past }) => ($empty || $past ? "none" : "auto")};

  &:hover {
    background: ${({ $blocked, $empty, $past }) =>
      $empty || $past ? "transparent" :
      $blocked ? "rgba(255, 80, 80, 1)" : "#3a3a3e"};
  }
`;

export const BookingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px 14px;
  background: #1a1a1e;
  color: var(--yellow-bar);
  font-size: 12px;
  letter-spacing: 1px;
  border-bottom: 2px solid #2a2a2e;
`;

export const Td = styled.td`
  padding: 10px 14px;
  color: #ccc;
  border-bottom: 1px solid #1e1e22;
  vertical-align: middle;
`;

export const StatusBadge = styled.span<{ $status: string }>`
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  background: ${({ $status }) =>
    $status === "confirmed" ? "rgba(50, 200, 100, 0.2)" :
    $status === "pending" ? "rgba(255, 204, 0, 0.2)" : "rgba(100, 100, 100, 0.2)"};
  color: ${({ $status }) =>
    $status === "confirmed" ? "#50c878" :
    $status === "pending" ? "#ffcc00" : "#888"};
  border: 1px solid currentColor;
`;

export const EmptyMsg = styled.p`
  color: #555;
  font-family: Arial, sans-serif;
  font-size: 14px;
  padding: 20px 0;
`;

export const ActionBtn = styled.button<{ $variant: "confirm" | "cancel" }>`
  padding: 4px 12px;
  border-radius: 5px;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.15s;
  background: ${({ $variant }) =>
    $variant === "confirm" ? "rgba(50, 200, 100, 0.2)" : "rgba(200, 50, 50, 0.2)"};
  color: ${({ $variant }) =>
    $variant === "confirm" ? "#50c878" : "#e05050"};
  border: 1px solid currentColor;

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;
