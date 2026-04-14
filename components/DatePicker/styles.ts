import styled from "styled-components";
import { bodyFont, heavyFont } from "../shared/mixins";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  z-index: 3;
`;

export const Trigger = styled.button<{ $hasValue: boolean }>`
  ${bodyFont}
  width: 100%;
  height: 100%;
  background: var(--bg-subtle);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  color: ${({ $hasValue }) => ($hasValue ? "var(--text-heading)" : "var(--text-light)")};
  padding: 0 44px 0 14px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(37, 99, 235, 0.3);
    background: var(--primary-soft);
  }

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-soft);
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 0.8rem;
  pointer-events: none;
`;

export const Popup = styled.div`
  z-index: 99999;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 16px;
  box-shadow: var(--shadow-xl);
  backdrop-filter: blur(16px);
`;

export const MonthNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const MonthLabel = styled.span`
  ${heavyFont}
  font-size: 1.05rem;
  color: var(--text-heading);
  letter-spacing: -0.03em;
`;

export const NavBtn = styled.button`
  width: 34px;
  height: 34px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-subtle);
  color: var(--primary);
  cursor: pointer;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, background 0.15s, border-color 0.15s;

  &:hover {
    transform: translateY(-1px);
    background: var(--primary-soft);
    border-color: rgba(37, 99, 235, 0.3);
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
  font-size: 0.66rem;
  color: var(--text-subtle);
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
  height: 36px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  font-size: 0.8rem;
  cursor: ${({ $empty, $disabled, $blocked }) =>
    $empty || $disabled || $blocked ? "default" : "pointer"};
  pointer-events: ${({ $empty, $disabled, $blocked }) =>
    $empty || $disabled || $blocked ? "none" : "auto"};

  background: ${({ $selected, $inRange, $empty, $disabled, $blocked }) =>
    $empty
      ? "transparent"
      : $selected
        ? "linear-gradient(135deg, var(--primary), var(--primary-light))"
        : $inRange
          ? "var(--primary-soft)"
          : $blocked
            ? "var(--danger-soft)"
            : $disabled
              ? "transparent"
              : "var(--bg-subtle)"};

  color: ${({ $selected, $disabled, $blocked, $empty, $today, $inRange }) =>
    $empty
      ? "transparent"
      : $selected
        ? "var(--text-inverse)"
        : $blocked
          ? "var(--danger)"
          : $disabled
            ? "var(--text-light)"
            : $today
              ? "var(--primary)"
              : $inRange
                ? "var(--text-heading)"
                : "var(--text-muted)"};

  font-weight: ${({ $selected, $today }) => ($selected || $today ? "700" : "600")};

  box-shadow: ${({ $selected }) =>
    $selected ? "0 4px 12px rgba(37, 99, 235, 0.25)" : "none"};

  transition: background 0.15s, color 0.15s, transform 0.15s;

  &:hover {
    background: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked
        ? undefined
        : "var(--primary-soft)"};
    color: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked ? undefined : "var(--primary)"};
    transform: ${({ $selected, $empty, $disabled, $blocked }) =>
      $selected || $empty || $disabled || $blocked ? undefined : "translateY(-1px)"};
  }
`;
