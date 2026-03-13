"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Wrap,
  Trigger,
  Icon,
  Popup,
  MonthNav,
  MonthLabel,
  NavBtn,
  WeekRow,
  WeekDay,
  DaysGrid,
  DayCell,
} from "./styles";

const WEEK_DAYS = ["Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"];
const MONTH_NAMES = [
  "Januar", "Februar", "Mart", "April", "Maj", "Juni",
  "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar",
];

function toYMD(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function todayStr(): string {
  const t = new Date();
  return toYMD(t.getFullYear(), t.getMonth(), t.getDate());
}

function buildCells(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const offset = (firstDay + 6) % 7; // Mon = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function formatDisplay(s: string): string {
  if (!s) return "";
  const [y, m, d] = s.split("-");
  return `${d}.${m}.${y}.`;
}

interface Props {
  value: string;
  onChange: (date: string) => void;
  placeholder: string;
  minDate?: string;
  maxDate?: string;
  rangeStart?: string;
  rangeEnd?: string;
  blockedDates?: string[];
}

export default function DatePicker({
  value,
  onChange,
  placeholder,
  minDate,
  maxDate,
  rangeStart,
  rangeEnd,
  blockedDates,
}: Props) {
  const today = todayStr();
  const initialDate = value || minDate || today;
  const parts = initialDate.split("-");
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(parseInt(parts[0]));
  const [month, setMonth] = useState(parseInt(parts[1]) - 1);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function prevMonth() {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  }

  function nextMonth() {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  }

  function selectDay(day: number) {
    const dateStr = toYMD(year, month, day);
    onChange(dateStr);
    setOpen(false);
  }

  const cells = buildCells(year, month);
  const effectiveMin = minDate && minDate > today ? minDate : today;

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        type="button"
        $hasValue={!!value}
        onClick={() => setOpen(o => !o)}
      >
        {value ? formatDisplay(value) : placeholder}
      </Trigger>
      <Icon className="fa-regular fa-calendar" />

      {open && (
        <Popup>
          <MonthNav>
            <NavBtn type="button" onClick={prevMonth}>‹</NavBtn>
            <MonthLabel>{MONTH_NAMES[month]} {year}</MonthLabel>
            <NavBtn type="button" onClick={nextMonth}>›</NavBtn>
          </MonthNav>

          <WeekRow>
            {WEEK_DAYS.map(d => <WeekDay key={d}>{d}</WeekDay>)}
          </WeekRow>

          <DaysGrid>
            {cells.map((day, idx) => {
              if (day === null) {
                return (
                  <DayCell
                    key={idx}
                    type="button"
                    $empty
                    $disabled={false}
                    $blocked={false}
                    $selected={false}
                    $today={false}
                    $inRange={false}
                  />
                );
              }
              const dateStr = toYMD(year, month, day);
              const isExplicitlyBlocked = !!(blockedDates?.includes(dateStr));
              const isDisabled =
                dateStr < effectiveMin ||
                (maxDate !== undefined && dateStr > maxDate) ||
                isExplicitlyBlocked;
              const isSelected = dateStr === value;
              const isToday = dateStr === today;
              const isInRange = !!(
                rangeStart && rangeEnd &&
                dateStr > rangeStart && dateStr < rangeEnd
              );
              return (
                <DayCell
                  key={idx}
                  type="button"
                  $empty={false}
                  $disabled={isDisabled}
                  $blocked={isExplicitlyBlocked}
                  $selected={isSelected}
                  $today={isToday}
                  $inRange={isInRange}
                  onClick={() => selectDay(day)}
                >
                  {day}
                </DayCell>
              );
            })}
          </DaysGrid>
        </Popup>
      )}
    </Wrap>
  );
}
