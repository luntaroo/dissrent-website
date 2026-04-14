"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
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

const WEEK_DAYS = ["Po", "Ut", "Sr", "Ce", "Pe", "Su", "Ne"];
const MONTH_NAMES = [
  "Januar",
  "Februar",
  "Mart",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "Septembar",
  "Oktobar",
  "Novembar",
  "Decembar",
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
  const offset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];

  for (let i = 0; i < offset; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);

  return cells;
}

function formatDisplay(value: string): string {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}.`;
}

// Body has zoom: 0.5 only on desktop (≥901px).
// getBoundingClientRect returns visual (viewport) coords.
// CSS positional values inside zoomed body are in layout units.
// To convert: layout = visual / zoom
function getBodyZoom(): number {
  if (typeof window === "undefined") return 1;
  return window.matchMedia("(min-width: 901px)").matches ? 0.5 : 1;
}

interface PopupPos {
  top: number;
  left: number;
  width: number;
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
  const [initialYear, initialMonth] = initialDate.split("-").map(Number);
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth - 1);
  const [popupPos, setPopupPos] = useState<PopupPos | null>(null);
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      setPopupPos(null);
      return;
    }

    function computePos() {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const zoom = getBodyZoom();
      const popupWidth = 296;
      // Convert visual coords to layout coords for zoomed body
      const rawLeft = rect.left / zoom;
      const maxLeft = window.innerWidth / zoom - popupWidth;
      setPopupPos({
        top: rect.bottom / zoom + 8,
        left: Math.min(rawLeft, maxLeft),
        width: popupWidth,
      });
    }

    computePos();
    window.addEventListener("resize", computePos);
    window.addEventListener("scroll", computePos, true);
    return () => {
      window.removeEventListener("resize", computePos);
      window.removeEventListener("scroll", computePos, true);
    };
  }, [open]);

  useEffect(() => {
    function onMouseDown(event: MouseEvent) {
      const target = event.target as Node;
      const insideWrap = wrapRef.current?.contains(target);
      const insidePopup = popupRef.current?.contains(target);
      if (!insideWrap && !insidePopup) {
        setOpen(false);
      }
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function prevMonth() {
    if (month === 0) {
      setYear((y) => y - 1);
      setMonth(11);
      return;
    }
    setMonth((m) => m - 1);
  }

  function nextMonth() {
    if (month === 11) {
      setYear((y) => y + 1);
      setMonth(0);
      return;
    }
    setMonth((m) => m + 1);
  }

  function selectDay(day: number) {
    const dateStr = toYMD(year, month, day);
    onChange(dateStr);
    setOpen(false);
  }

  const cells = buildCells(year, month);
  const effectiveMin = minDate && minDate > today ? minDate : today;

  const popupContent =
    open && mounted && popupPos
      ? createPortal(
          <Popup
            ref={popupRef}
            style={{
              position: "fixed",
              top: `${popupPos.top}px`,
              left: `${popupPos.left}px`,
              width: `${popupPos.width}px`,
            }}
          >
            <MonthNav>
              <NavBtn type="button" onClick={prevMonth}>
                &#8249;
              </NavBtn>
              <MonthLabel>
                {MONTH_NAMES[month]} {year}
              </MonthLabel>
              <NavBtn type="button" onClick={nextMonth}>
                &#8250;
              </NavBtn>
            </MonthNav>

            <WeekRow>
              {WEEK_DAYS.map((day) => (
                <WeekDay key={day}>{day}</WeekDay>
              ))}
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
                const isExplicitlyBlocked = Boolean(blockedDates?.includes(dateStr));
                const isDisabled =
                  dateStr < effectiveMin ||
                  (maxDate !== undefined && dateStr > maxDate) ||
                  isExplicitlyBlocked;
                const isSelected = dateStr === value;
                const isToday = dateStr === today;
                const isInRange = Boolean(
                  rangeStart && rangeEnd && dateStr > rangeStart && dateStr < rangeEnd
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
          </Popup>,
          document.body
        )
      : null;

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        type="button"
        $hasValue={!!value}
        onClick={() => setOpen((o) => !o)}
      >
        {value ? formatDisplay(value) : placeholder}
      </Trigger>
      <Icon className="fa-regular fa-calendar" />
      {popupContent}
    </Wrap>
  );
}
