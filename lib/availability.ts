import type { Car, CarAvailabilityMap, CarAvailabilitySummary } from "./types";
import {
  getTodayDateString,
  hasBlockedDates,
  isValidDateString,
  parseDateString,
  shiftDate,
} from "./booking";

const WEEKDAY_NAMES = [
  "nedjelja",
  "ponedjeljak",
  "utorak",
  "srijeda",
  "cetvrtak",
  "petak",
  "subota",
];

function normalizeRequestedDays(requestedDays: number): number {
  return Number.isInteger(requestedDays) && requestedDays > 0 ? requestedDays : 1;
}

export function formatAvailabilityDateLabel(value: string | null): string | null {
  if (!value || !isValidDateString(value)) {
    return null;
  }

  const date = parseDateString(value);
  if (!date) {
    return null;
  }

  const weekday = WEEKDAY_NAMES[date.getUTCDay()];
  const [year, month, day] = value.split("-");
  return `${weekday}, ${day}.${month}.${year}.`;
}

export function findFirstAvailableStartDate(
  blockedDates: string[],
  requestedDays: number,
  startFrom: string,
  maxLookaheadDays = 540
): string | null {
  const safeStart = isValidDateString(startFrom) ? startFrom : getTodayDateString();
  const safeDays = normalizeRequestedDays(requestedDays);
  let candidate = safeStart;

  for (let i = 0; i <= maxLookaheadDays; i += 1) {
    const candidateEnd = shiftDate(candidate, safeDays);
    if (candidateEnd && !hasBlockedDates(blockedDates, candidate, candidateEnd)) {
      return candidate;
    }

    const nextCandidate = shiftDate(candidate, 1);
    if (!nextCandidate) {
      return null;
    }

    candidate = nextCandidate;
  }

  return null;
}

export function getCarAvailabilitySummary(
  blockedDates: string[],
  requestedDays: number,
  startFrom: string
): CarAvailabilitySummary {
  const normalizedStart = isValidDateString(startFrom) ? startFrom : getTodayDateString();
  const safeDays = normalizeRequestedDays(requestedDays);
  const firstAvailableDate = findFirstAvailableStartDate(blockedDates, safeDays, normalizedStart);

  return {
    isAvailableForWindow: firstAvailableDate === normalizedStart,
    firstAvailableDate,
    firstAvailableLabel: formatAvailabilityDateLabel(firstAvailableDate),
    requestedDays: safeDays,
    startFrom: normalizedStart,
  };
}

export async function buildCarAvailabilityMap(
  cars: Car[],
  getBlockedDatesForCar: (carImg: string) => Promise<string[]>,
  requestedDays: number,
  startFrom: string
): Promise<CarAvailabilityMap> {
  const entries = await Promise.all(
    cars.map(async (car) => {
      const blocked = await getBlockedDatesForCar(car.img);
      return [car.img, getCarAvailabilitySummary(blocked, requestedDays, startFrom)] as const;
    })
  );
  return Object.fromEntries(entries);
}
