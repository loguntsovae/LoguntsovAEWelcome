import { useEffect, useMemo, useState } from "react";

export interface ItTimer {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function addYearsUTC(date: Date, years: number) {
  return new Date(Date.UTC(date.getUTCFullYear() + years, date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()))
}

function addMonthsUTC(date: Date, months: number) {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + months;
  const d = date.getUTCDate();
  const h = date.getUTCHours();
  const mi = date.getUTCMinutes();
  const s = date.getUTCSeconds();
  // Date.UTC auto-overflows months and handles month length
  return new Date(Date.UTC(y, m, d, h, mi, s));
}

function diffYMDHMS(from: Date, to: Date): ItTimer {
  // Work in UTC to avoid DST inconsistencies
  let start = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate(), from.getUTCHours(), from.getUTCMinutes(), from.getUTCSeconds()));
  const end = new Date(Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), to.getUTCDate(), to.getUTCHours(), to.getUTCMinutes(), to.getUTCSeconds()));

  // Years
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let cursor = addYearsUTC(start, years);
  if (cursor > end) {
    years -= 1;
    cursor = addYearsUTC(start, years);
  }

  // Months
  let months = end.getUTCMonth() - cursor.getUTCMonth() + 12 * (end.getUTCFullYear() - cursor.getUTCFullYear());
  cursor = addMonthsUTC(cursor, months);
  if (cursor > end) {
    months -= 1;
    cursor = addMonthsUTC(cursor, -1);
  }

  // Remaining difference in seconds
  let remain = Math.floor((end.getTime() - cursor.getTime()) / 1000);
  const days = Math.floor(remain / 86400);
  remain %= 86400;
  const hours = Math.floor(remain / 3600);
  remain %= 3600;
  const minutes = Math.floor(remain / 60);
  const seconds = remain % 60;

  return { years, months, days, hours, minutes, seconds };
}

export function useItTimer(startDateIso: string): ItTimer {
  const start = useMemo(() => new Date(startDateIso + (startDateIso.includes("T") ? "" : "T00:00:00Z")), [startDateIso]);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    let mounted = true;
    const tick = () => mounted && setNow(new Date());
    // Immediate update and then interval every second
    tick();
    const id = setInterval(tick, 1000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return diffYMDHMS(start, now);
}

export default useItTimer;
