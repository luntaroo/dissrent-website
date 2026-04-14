import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 58px;
  z-index: 3;
`;

export const Trigger = styled.button<{ $hasValue: boolean }>`
  ${bodyFont}
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(16, 24, 40, 0.1);
  border-radius: 20px;
  color: ${({ $hasValue }) => ($hasValue ? "var(--text)" : "var(--text-faint)")};
  padding: 0 44px 0 16px;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(var(--gold-rgb), 0.32);
  }

  &:focus {
    border-color: rgba(var(--gold-rgb), 0.35);
    box-shadow: 0 0 0 4px rgba(var(--gold-rgb), 0.12);
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gold-strong);
  font-size: 0.9rem;
  pointer-events: none;
`;

export const Popup = styled.div`
  z-index: 99999;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 28px;
  padding: 18px;
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(18px);
`;

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const MonthLabel = styled.span`
  ${heavyFont}
  font-size: 1.1rem;
  color: var(--text);
  letter-spacing: -0.03em;
`;

export const NavBtn = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid rgba(16, 24, 40, 0.08);
  border-radius: 14px;
  background: rgba(16, 24, 40, 0.04);
  color: var(--gold-strong);
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, background 0.15s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(var(--gold-rgb), 0.08);
    border-color: rgba(var(--gold-rgb), 0.18);
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
  font-size: 0.7rem;
  color: var(--text-faint);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const DayCell = styled.button<{
  $empty: boolean;
  $disabled: boolean;
  $blocked: boolean;
  $selected: boolean;
  $today: boolean;
  $inRange: boolean;
}>`
  ${bodyFont}
  height: 38px;
  border-radius: 14px;
  border: 1px solid transparent;
  font-size: 0.84rem;
  cursor: ${({ $empty, $disabled, $blocked }) =>
    $empty || $disabled || $blocked ? "default" : "pointer"};
  pointer-events: ${({ $empty, $disabled, $blocked }) =>
    $empty || $disabled || $blocked ? "none" : "auto"};

  background: ${({ $selected, $inRange, $empty, $disabled, $blocked }) =>
    $empty
      ? "transparent"
      : $selected
        ? "linear-gradient(135deg, var(--gold), var(--gold-light))"
        : $inRange
          ? "rgba(var(--gold-rgb), 0.1)"
          : $blocked
            ? "var(--danger-dim)"
            : $disabled
              ? "transparent"
              : "rgba(16, 24, 40, 0.04)"};

  color: ${({ $selected, $disabled, $blocked, $empty, $today, $inRange }) =>
    $empty
      ? "transparent"
      : $selected
        ? "#101828"
        : $blocked
          ? "var(--danger)"
          : $disabled
            ? "var(--text-faint)"
            : $today
              ? "var(--gold-strong)"
              : $inRange
                ? "var(--text)"
                : "var(--text-muted)"};

  font-weight: ${({ $selected, $today }) => ($selected || $today ? "800" : "600")};

  box-shadow: ${({ $selected }) => ($selected ? "0 8px 18px rgba(var(--gold-rgb), 0.24)" : "none")};

  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked ? undefined : "rgba(var(--gold-rgb), 0.1)"};
    color: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked ? undefined : "var(--gold-strong)"};
  }
`;
