import { useEffect, useMemo, useRef, useState } from 'react';
import { civilizations, events, people } from '../data';
import { formatYear } from '../lib/time';
import type { Civilization } from '../types';

interface Props {
  civ: Civilization;
  onApplyYear: (y: number) => void;
  onSelectCiv: (id: string) => void;
}

/**
 * Drawer "Sezaman": geser slider (atau tarik tepi bawah drawer untuk mengubah tinggi)
 * untuk melihat apa yang sedang terjadi di dunia pada masa peradaban ini.
 */
export default function ContemporaryDrawer({ civ, onApplyYear, onSelectCiv }: Props) {
  const lo = civ.start;
  const hi = Math.min(civ.end, 2026);
  const [open, setOpen] = useState(true);
  const [y, setY] = useState(Math.round((lo + hi) / 2));
  const [height, setHeight] = useState(260);
  const dragRef = useRef<{ startY: number; startH: number } | null>(null);

  useEffect(() => {
    setY(Math.round((civ.start + Math.min(civ.end, 2026)) / 2));
  }, [civ.id, civ.start, civ.end]);

  const win = Math.max(25, Math.round((hi - lo) * 0.08));

  const data = useMemo(() => {
    const evs = events.filter((e) => Math.abs(e.year - y) <= win && e.civilizationId !== civ.id);
    const own = events.filter((e) => e.civilizationId === civ.id && Math.abs(e.year - y) <= win);
    const ppl = people.filter((p) => y >= p.born && y <= p.died);
    const civs = civilizations.filter((c) => c.id !== civ.id && y >= c.start && y <= c.end);
    return { evs, own, ppl, civs };
  }, [y, win, civ.id]);

  const onHandleDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { startY: e.clientY, startH: height };
  };
  const onHandleMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const next = dragRef.current.startH + (e.clientY - dragRef.current.startY);
    setHeight(Math.max(140, Math.min(640, next)));
  };
  const onHandleUp = () => {
    dragRef.current = null;
  };

  return (
    <section className="drawer">
      <button className="drawer-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>Sezaman: apa yang terjadi saat itu?</span>
        <span className="caret">{open ? '▾' : '▸'}</span>
      </button>

      {open && (
        <>
          <div className="drawer-body" style={{ height }}>
            <div className="drawer-slider">
              <div className="drawer-year">{formatYear(y)}</div>
              <input
                type="range"
                min={lo}
                max={hi}
                step={1}
                value={y}
                onChange={(e) => setY(Number(e.target.value))}
                aria-label="Geser tahun dalam rentang peradaban"
              />
              <div className="drawer-range">
                <span>{formatYear(lo)}</span>
                <button className="chip" onClick={() => onApplyYear(y)}>
                  Tampilkan di peta
                </button>
                <span>{hi >= 2026 ? 'kini' : formatYear(hi)}</span>
              </div>
            </div>

            <div className="drawer-cols">
              <Group title={`Peristiwa dalam ±${win} tahun`}>
                {[...data.own, ...data.evs].length === 0 && <Empty />}
                {[...data.own, ...data.evs].map((e) => (
                  <li key={e.id}>
                    <b>{formatYear(e.year)}</b> {e.title}
                    <small>{e.region}</small>
                  </li>
                ))}
              </Group>
              <Group title="Peradaban lain yang sezaman">
                {data.civs.length === 0 && <Empty />}
                {data.civs.map((c) => (
                  <li key={c.id}>
                    <button className="link" onClick={() => onSelectCiv(c.id)}>
                      <i className="dot" style={{ background: c.color }} />
                      {c.name}
                    </button>
                    <small>{c.region}</small>
                  </li>
                ))}
              </Group>
              <Group title="Tokoh yang hidup">
                {data.ppl.length === 0 && <Empty />}
                {data.ppl.map((p) => (
                  <li key={p.id}>
                    {p.name}
                    <small>{p.role}</small>
                  </li>
                ))}
              </Group>
            </div>
          </div>
          <div
            className="drawer-grip"
            onPointerDown={onHandleDown}
            onPointerMove={onHandleMove}
            onPointerUp={onHandleUp}
            onPointerCancel={onHandleUp}
            role="separator"
            aria-label="Tarik untuk mengubah tinggi drawer"
          >
            <span />
          </div>
        </>
      )}
    </section>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="drawer-group">
      <h5>{title}</h5>
      <ul>{children}</ul>
    </div>
  );
}
const Empty = () => <li className="muted">Belum ada data pada rentang ini.</li>;
