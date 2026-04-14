"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCarAvailabilitySummary } from "@/lib/availability";
import { CAR_DATA } from "@/lib/carData";
import type { Booking } from "@/lib/db";
import type { CarAvailabilityMap } from "@/lib/types";
import {
  Page,
  Header,
  TitleBlock,
  Title,
  HeaderText,
  LogoutBtn,
  SectionCard,
  SectionTitle,
  SectionHint,
  CarsGrid,
  CarCalendarCard,
  CarHeader,
  CarThumb,
  CarTitle,
  CarName,
  CarMeta,
  CalendarWrap,
  MonthNav,
  MonthLabel,
  NavBtn,
  WeekRow,
  WeekDay,
  DaysGrid,
  DayCell,
  TableScroll,
  BookingsTable,
  Th,
  Td,
  CellStrong,
  CellMuted,
  StatusBadge,
  ActionBtn,
  ActionsRow,
  EmptyMsg,
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

function buildCalendar(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);

  return cells;
}

function fmtDate(value: string | null): string {
  if (!value) return "-";
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}.`;
}

async function fetchBlockedSet(rangeStart: string, rangeEnd: string): Promise<Set<string>> {
  const response = await fetch(`/api/admin/availability?start=${rangeStart}&end=${rangeEnd}`);
  if (!response.ok) {
    return new Set<string>();
  }

  const data = (await response.json()) as { blocked: { car_img: string; date: string }[] };
  const nextSet = new Set<string>();
  for (const item of data.blocked) {
    nextSet.add(`${item.car_img}__${item.date}`);
  }

  return nextSet;
}

async function fetchAvailabilityMap(todayStr: string): Promise<CarAvailabilityMap> {
  const entries = await Promise.all(
    CAR_DATA.map(async (car) => {
      const response = await fetch(`/api/availability?carImg=${encodeURIComponent(car.img)}`);
      const data = response.ok ? (await response.json()) as { blockedDates: string[] } : { blockedDates: [] as string[] };
      return [car.img, getCarAvailabilitySummary(data.blockedDates ?? [], 1, todayStr)] as const;
    })
  );

  return Object.fromEntries(entries);
}

interface Props {
  initialBookings: Booking[];
  initialAvailabilityByCar: CarAvailabilityMap;
}

export default function AdminDashboard({ initialBookings, initialAvailabilityByCar }: Props) {
  const router = useRouter();
  const today = new Date();
  const todayStr = toYMD(today.getFullYear(), today.getMonth(), today.getDate());

  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [blockedSet, setBlockedSet] = useState<Set<string>>(new Set());
  const [availabilityByCar, setAvailabilityByCar] =
    useState<CarAvailabilityMap>(initialAvailabilityByCar);
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const rangeStart = toYMD(year, month, 1);
  const rangeEnd = toYMD(year, month, new Date(year, month + 1, 0).getDate());
  const cells = buildCalendar(year, month);

  useEffect(() => {
    let active = true;

    async function loadBlocked() {
      const nextSet = await fetchBlockedSet(rangeStart, rangeEnd);
      if (active) {
        setBlockedSet(nextSet);
      }
    }

    void loadBlocked();

    return () => {
      active = false;
    };
  }, [rangeEnd, rangeStart]);

  async function refreshAvailability() {
    setAvailabilityByCar(await fetchAvailabilityMap(todayStr));
  }

  async function refreshBookings() {
    const response = await fetch("/api/admin/bookings");
    if (!response.ok) {
      return;
    }

    const data = (await response.json()) as { bookings: Booking[] };
    setBookings(data.bookings);
  }

  async function refreshBlockedForMonth() {
    setBlockedSet(await fetchBlockedSet(rangeStart, rangeEnd));
  }

  async function toggleDate(carImg: string, date: string) {
    await fetch("/api/admin/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ carImg, date }),
    });

    await Promise.all([refreshBlockedForMonth(), refreshAvailability()]);
  }

  async function handleBookingAction(id: string, action: "confirm" | "cancel") {
    await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });

    await Promise.all([refreshBookings(), refreshBlockedForMonth(), refreshAvailability()]);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  function prevMonth() {
    if (month === 0) {
      setYear((currentYear) => currentYear - 1);
      setMonth(11);
      return;
    }

    setMonth((currentMonth) => currentMonth - 1);
  }

  function nextMonth() {
    if (month === 11) {
      setYear((currentYear) => currentYear + 1);
      setMonth(0);
      return;
    }

    setMonth((currentMonth) => currentMonth + 1);
  }

  return (
    <Page>
      <Header>
        <TitleBlock>
          <Title>Admin dashboard</Title>
          <HeaderText>
            Upravljanje dostupnoscu i rezervacijama je sada vizuelno uskladjeno sa javnim sajtom, uz
            odmah vidljiv status svakog vozila i prvi slobodan termin.
          </HeaderText>
        </TitleBlock>

        <LogoutBtn onClick={handleLogout}>Odjava</LogoutBtn>
      </Header>

      <SectionCard>
        <SectionTitle>Dostupnost automobila</SectionTitle>
        <SectionHint>
          Kliknite na datum da blokirate ili deblokirate vozilo. U kartici svakog automobila odmah se vidi
          da li je slobodan danas ili koji je prvi naredni slobodan termin.
        </SectionHint>

        <CarsGrid>
          {CAR_DATA.map((car) => {
            const availability = availabilityByCar[car.img];
            const availabilityText = availability?.isAvailableForWindow
              ? "Dostupno odmah"
              : availability?.firstAvailableLabel
                ? `Prvi slobodan termin: ${availability.firstAvailableLabel}`
                : "Trenutno nema slobodnog termina";

            return (
              <CarCalendarCard key={car.img}>
                <CarHeader>
                  <CarThumb $img={car.img} />
                  <CarTitle>
                    <CarName>{car.name}</CarName>
                    <CarMeta $available={availability?.isAvailableForWindow ?? true}>
                      {availabilityText}
                    </CarMeta>
                  </CarTitle>
                </CarHeader>

                <CalendarWrap>
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
                            $blocked={false}
                            $today={false}
                            $empty
                            $past={false}
                          />
                        );
                      }

                      const dateStr = toYMD(year, month, day);
                      const blocked = blockedSet.has(`${car.img}__${dateStr}`);
                      const isToday = dateStr === todayStr;
                      const isPast = dateStr < todayStr;

                      return (
                        <DayCell
                          key={idx}
                          $blocked={blocked}
                          $today={isToday}
                          $empty={false}
                          $past={isPast}
                          onClick={() => !isPast && toggleDate(car.img, dateStr)}
                        >
                          {day}
                        </DayCell>
                      );
                    })}
                  </DaysGrid>
                </CalendarWrap>
              </CarCalendarCard>
            );
          })}
        </CarsGrid>
      </SectionCard>

      <SectionCard>
        <SectionTitle>Rezervacije</SectionTitle>
        <SectionHint>
          Ovdje potvrdjujete ili otkazujete rezervacije i odmah osvjezavate stanje dostupnosti na sajtu.
        </SectionHint>

        {bookings.length === 0 ? (
          <EmptyMsg>Nema rezervacija.</EmptyMsg>
        ) : (
          <TableScroll>
            <BookingsTable>
              <thead>
                <tr>
                  <Th>Auto</Th>
                  <Th>Period</Th>
                  <Th>Ime i prezime</Th>
                  <Th>Telefon</Th>
                  <Th>Email</Th>
                  <Th>Kontakt</Th>
                  <Th>Cijena</Th>
                  <Th>Status</Th>
                  <Th>Kreirano</Th>
                  <Th>Akcije</Th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <Td>{booking.car_name ?? "-"}</Td>
                    <Td>
                      {booking.pickup_date
                        ? `${fmtDate(booking.pickup_date)} - ${fmtDate(booking.return_date)} (${booking.days}d)`
                        : "-"}
                    </Td>
                    <Td><CellStrong>{booking.customer_name}</CellStrong></Td>
                    <Td>{booking.customer_phone}</Td>
                    <Td>{booking.customer_email}</Td>
                    <Td>{booking.contact_preference}</Td>
                    <Td>{booking.total_price ? `${booking.total_price} KM` : "Po dogovoru"}</Td>
                    <Td>
                      <StatusBadge $status={booking.status}>{booking.status}</StatusBadge>
                    </Td>
                    <Td><CellMuted>{booking.created_at.slice(0, 10)}</CellMuted></Td>
                    <Td>
                      <ActionsRow>
                        {booking.status === "pending" && (
                          <>
                            <ActionBtn
                              $variant="confirm"
                              onClick={() => handleBookingAction(booking.id, "confirm")}
                            >
                              Potvrdi
                            </ActionBtn>
                            <ActionBtn
                              $variant="cancel"
                              onClick={() => handleBookingAction(booking.id, "cancel")}
                            >
                              Otkazi
                            </ActionBtn>
                          </>
                        )}
                        {booking.status === "confirmed" && (
                          <ActionBtn
                            $variant="cancel"
                            onClick={() => handleBookingAction(booking.id, "cancel")}
                          >
                            Otkazi
                          </ActionBtn>
                        )}
                        {booking.status === "cancelled" && <CellMuted>-</CellMuted>}
                      </ActionsRow>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </BookingsTable>
          </TableScroll>
        )}
      </SectionCard>
    </Page>
  );
}
