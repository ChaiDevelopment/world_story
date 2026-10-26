/** Rentang timeline: -3500 (SM) sampai 2026. */
export const YEAR_MIN = -3500;
export const YEAR_MAX = 2026;

export function formatYear(y: number): string {
  const r = Math.round(y);
  if (r < 0) return `${Math.abs(r)} SM`;
  if (r === 0) return '1 M';
  return `${r} M`;
}

export function formatRange(a: number, b: number): string {
  return `${formatYear(a)} – ${b >= YEAR_MAX ? 'kini' : formatYear(b)}`;
}

export function clampYear(y: number): number {
  return Math.max(YEAR_MIN, Math.min(YEAR_MAX, y));
}

export function isActive(start: number, end: number, year: number): boolean {
  return year >= start && year <= end;
}

/** Skala piecewise: era modern diberi ruang lebih lebar agar bisa digeser halus. */
const STOPS: [number, number][] = [
  [-3500, 0],
  [-500, 0.28],
  [500, 0.5],
  [1500, 0.74],
  [2026, 1],
];

export function yearToT(y: number): number {
  const c = clampYear(y);
  for (let i = 1; i < STOPS.length; i++) {
    const [y0, t0] = STOPS[i - 1];
    const [y1, t1] = STOPS[i];
    if (c <= y1) return t0 + ((c - y0) / (y1 - y0)) * (t1 - t0);
  }
  return 1;
}

export function tToYear(t: number): number {
  const c = Math.max(0, Math.min(1, t));
  for (let i = 1; i < STOPS.length; i++) {
    const [y0, t0] = STOPS[i - 1];
    const [y1, t1] = STOPS[i];
    if (c <= t1) return y0 + ((c - t0) / (t1 - t0)) * (y1 - y0);
  }
  return YEAR_MAX;
}
