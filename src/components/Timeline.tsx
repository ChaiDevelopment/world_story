import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { eras, events } from '../data';
import { YEAR_MAX, YEAR_MIN, formatYear, tToYear, yearToT } from '../lib/time';

interface Props {
  year: number;
  onChange: (y: number) => void;
}

const TICKS = [-3000, -2000, -1000, -500, 0, 500, 1000, 1500, 1800, 1945, 2026];
/** Label yang disembunyikan di layar sempit agar tidak bertumpuk. */
const MINOR_TICKS = new Set([-2000, -500, 500, 1800, 1945]);

export default function Timeline({ year, onChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [playing, setPlaying] = useState(false);

  const setFromX = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const t = (clientX - r.left) / r.width;
      onChange(Math.round(tToYear(t)));
    },
    [onChange],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
    setPlaying(false);
    setFromX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) setFromX(e.clientX);
  };
  const onPointerUp = () => setDragging(false);

  const onKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 100 : 10;
    if (e.key === 'ArrowLeft') onChange(Math.max(YEAR_MIN, year - step));
    else if (e.key === 'ArrowRight') onChange(Math.min(YEAR_MAX, year + step));
    else if (e.key === 'Home') onChange(YEAR_MIN);
    else if (e.key === 'End') onChange(YEAR_MAX);
    else return;
    e.preventDefault();
  };

  // Autoplay: kecepatan mengikuti skala, ±25 detik dari awal ke akhir
  const yearRef = useRef(year);
  yearRef.current = year;
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const t = Math.min(1, yearToT(yearRef.current) + dt / 25);
      const y = Math.round(tToYear(t));
      onChange(y);
      if (t >= 1) {
        setPlaying(false);
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [playing, onChange]);

  const density = useMemo(() => {
    const bins = new Array(120).fill(0);
    for (const e of events) bins[Math.min(119, Math.floor(yearToT(e.year) * 120))]++;
    const max = Math.max(...bins);
    return bins.map((b) => b / max);
  }, []);

  const pct = yearToT(year) * 100;

  return (
    <div className="timeline">
      <div className="tl-controls">
        <button
          className="btn"
          onClick={() => {
            if (year >= YEAR_MAX) onChange(YEAR_MIN);
            setPlaying((p) => !p);
          }}
          aria-label={playing ? 'Jeda' : 'Putar'}
        >
          {playing ? '❚❚ Jeda' : '▶ Putar'}
        </button>
        <div className="tl-year" aria-live="polite">
          {formatYear(year)}
        </div>
        <div className="tl-jump">
          {[-3000, -500, 0, 1293, 1602, 1945, 2026].map((y) => (
            <button key={y} className="chip" onClick={() => { setPlaying(false); onChange(y); }}>
              {formatYear(y)}
            </button>
          ))}
        </div>
      </div>

      <div
        className="tl-track-wrap"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="tl-eras">
          {eras.map((e) => (
            <div
              key={e.id}
              className="tl-era"
              style={{ left: `${yearToT(e.start) * 100}%`, width: `${(yearToT(e.end) - yearToT(e.start)) * 100}%` }}
            >
              <span>{e.label}</span>
            </div>
          ))}
        </div>
        <div className="tl-density">
          {density.map((d, i) => (
            <i key={i} style={{ height: `${8 + d * 24}px`, opacity: 0.25 + d * 0.6 }} />
          ))}
        </div>
        <div className="tl-line">
          {TICKS.map((t) => (
            <div key={t} className={`tl-tick ${MINOR_TICKS.has(t) ? 'minor' : ''}`} style={{ left: `${yearToT(t) * 100}%` }}>
              <span>{formatYear(t)}</span>
            </div>
          ))}
          <div className="tl-fill" style={{ width: `${pct}%` }} />
          <div
            className={`tl-handle ${dragging ? 'dragging' : ''}`}
            style={{ left: `${pct}%` }}
            role="slider"
            tabIndex={0}
            aria-valuemin={YEAR_MIN}
            aria-valuemax={YEAR_MAX}
            aria-valuenow={year}
            aria-valuetext={formatYear(year)}
            aria-label="Tahun"
            onKeyDown={onKey}
          />
        </div>
      </div>
    </div>
  );
}
