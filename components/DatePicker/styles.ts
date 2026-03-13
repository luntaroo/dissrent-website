import styled from "styled-components";
import { heavyFont } from "../shared/mixins";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`;

export const Trigger = styled.button<{ $hasValue: boolean }>`
  width: 100%;
  height: 100%;
  background: var(--input-bg);
  border: none;
  border-radius: 4px;
  color: ${({ $hasValue }) => ($hasValue ? "#fff" : "#555")};
  padding: 0 38px 0 14px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: background 0.15s;

  &:hover {
    background: #181818;
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--red-icon);
  font-size: 15px;
  pointer-events: none;
`;

export const Popup = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 9999;
  background: #111114;
  border: 2px solid var(--yellow-bar);
  border-radius: 8px;
  padding: 14px;
  width: 272px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.95);
`;

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const MonthLabel = styled.span`
  ${heavyFont}
  font-size: 18px;
  color: var(--yellow-bar);
  letter-spacing: 1px;
  transform: scaleX(0.88);
  display: inline-block;
  transform-origin: center;
`;

export const NavBtn = styled.button`
  background: rgba(255, 204, 0, 0.1);
  border: 1px solid rgba(255, 204, 0, 0.2);
  color: var(--yellow-bar);
  width: 28px;
  height: 28px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  line-height: 1;

  &:hover {
    background: rgba(255, 204, 0, 0.25);
  }
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 6px;
`;

export const WeekDay = styled.div`
  font-family: Arial, sans-serif;
  font-size: 11px;
  color: #555;
  text-align: center;
  font-weight: bold;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const DayCell = styled.button<{
  $empty: boolean;
  $disabled: boolean;
  $blocked: boolean;
  $selected: boolean;
  $today: boolean;
  $inRange: boolean;
}>`
  height: 32px;
  border-radius: 4px;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 13px;
  cursor: ${({ $empty, $disabled, $blocked }) => ($empty || $disabled || $blocked ? "default" : "pointer")};
  pointer-events: ${({ $empty, $disabled, $blocked }) => ($empty || $disabled || $blocked ? "none" : "auto")};

  background: ${({ $selected, $inRange, $empty, $disabled, $blocked }) =>
    $empty ? "transparent" :
    $selected ? "var(--yellow-bar)" :
    $inRange ? "rgba(255, 204, 0, 0.15)" :
    $blocked ? "rgba(160, 0, 0, 0.18)" :
    $disabled ? "transparent" :
    "#1e1e22"};

  color: ${({ $selected, $disabled, $blocked, $empty, $today, $inRange }) =>
    $empty ? "transparent" :
    $selected ? "#000" :
    $blocked ? "#882222" :
    $disabled ? "#2a2a2a" :
    $today ? "var(--yellow-bar)" :
    $inRange ? "#fff" :
    "#aaa"};

  font-weight: ${({ $selected, $today }) => ($selected || $today ? "bold" : "normal")};
  outline: ${({ $today, $selected }) => (!$selected && $today ? "1px solid rgba(255,204,0,0.4)" : "none")};
  outline-offset: -2px;
  transition: background 0.1s, color 0.1s;

  &:hover {
    background: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked ? undefined : "rgba(255, 204, 0, 0.2)"};
    color: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked ? undefined : "#fff"};
  }
`;
