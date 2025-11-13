import { useEffect, useMemo, useState } from "react";

export interface ItCounter {
  years: number;
  months: number;
  days: number;
}

function diffYMD(from: Date, to: Date): ItCounter {
  // Normalize to avoid DST edge cases (use UTC components)
  let y = to.getUTCFullYear() - from.getUTCFullYear();
  let m = to.getUTCMonth() - from.getUTCMonth();
  let d = to.getUTCDate() - from.getUTCDate();

  if (d < 0) {
    // borrow days from previous month
    const prevMonth = new Date(Date.UTC(to.getUTCFullYear(), to.getUTCMonth(), 0));
    d += prevMonth.getUTCDate();
    m -= 1;
  }
  if (m < 0) {
    m += 12;
    y -= 1;
  }
  return { years: y, months: m, days: d };
}

export function useItCounter(startDateIso: string): ItCounter {
  const start = useMemo(() => new Date(startDateIso + "T00:00:00Z"), [startDateIso]);
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000); // update every minute
    return () => clearInterval(id);
  }, []);

  return diffYMD(start, now);
}

export default useItCounter;
