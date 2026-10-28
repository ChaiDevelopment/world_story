import { useState } from 'react';
import { events, people } from '../data';
import { formatRange, formatYear } from '../lib/time';
import type { Civilization } from '../types';
import PagedText from './PagedText';

interface Props {
  civ: Civilization;
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
  onApplyYear: (y: number) => void;
}

const VIEWS = ['Cerita', 'Kronik', 'Terkait'] as const;
type View = (typeof VIEWS)[number];

const periodTitle = (civ: Civilization, i: number) => civ.territories[i].note ?? `Periode ${i + 1}`;

/**
 * Halaman lanjutan satu periode wilayah: cerita kehidupan zaman itu, kronik peristiwa,
 * peristiwa dan tokoh yang tercatat di peta, serta navigasi antarperiode.
 */
export default function PeriodPage({ civ, index, onIndex, onClose, onApplyYear }: Props) {
  const [view, setView] = useState<View>('Cerita');
  const t = civ.territories[index];
  const total = civ.territories.length;
  const chronicle = [...(t.chronicle ?? [])].sort((a, b) => a.year - b.year);
  const mapEvents = events.filter((e) => e.civilizationId === civ.id && e.year >= t.from && e.year <= t.to);
  const civPeople = people.filter((p) => p.civilizationId === civ.id && p.born <= t.to && p.died >= t.from);
  const counts: Record<View, number | null> = {
    Cerita: null,
    Kronik: chronicle.length,
    Terkait: mapEvents.length + civPeople.length,
  };

  return (
    <div className="period">
      <button className="link back" onClick={onClose}>← Kembali ke {civ.name}</button>
      <div className="period-kicker" style={{ color: civ.color }}>
        {civ.name} · Periode {index + 1} dari {total}
      </div>
      <h2>{periodTitle(civ, index)}</h2>
      <div className="meta">{formatRange(t.from, t.to)}</div>
      <button className="chip" onClick={() => onApplyYear(t.from)}>Tampilkan wilayah ini di peta</button>

      {t.story && <PagedText key={`story-${index}`} text={t.story} className="period-story" />}

      <div className="tabs" role="tablist">
        {VIEWS.map((v) => (
          <button key={v} role="tab" aria-selected={view === v} className={view === v ? 'on' : ''} onClick={() => setView(v)}>
            {v}
            {counts[v] ? ` (${counts[v]})` : ''}
          </button>
        ))}
      </div>

      {view === 'Cerita' && (
        <div className="tabbody story">
          {!t.scenes?.length && <p className="muted">Belum ada cerita untuk periode ini.</p>}
          {t.scenes?.map((s) => (
            <section key={s.title} className="scene">
              <h4>{s.title}</h4>
              <PagedText text={s.text} />
            </section>
          ))}
          {chronicle.length > 0 && (
            <button className="link more" onClick={() => setView('Kronik')}>
              Lihat {chronicle.length} peristiwa penting periode ini →
            </button>
          )}
        </div>
      )}

      {view === 'Kronik' && (
        <div className="tabbody">
          {chronicle.length === 0 && <p className="muted">Belum ada kronik untuk periode ini.</p>}
          <ol className="chron">
            {chronicle.map((c) => (
              <li key={`${c.year}-${c.title}`}>
                <button className="chron-year" title="Tampilkan di peta" onClick={() => onApplyYear(c.year)}>
                  {c.approx && '±'}
                  {formatYear(c.year)}
                </button>
                <b>{c.title}</b>
                <p>{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {view === 'Terkait' && (
        <div className="tabbody">
          {mapEvents.length + civPeople.length === 0 && (
            <p className="muted">Belum ada peristiwa atau tokoh di peta untuk periode ini.</p>
          )}
          {mapEvents.length > 0 && <h4>Ditandai di peta</h4>}
          {mapEvents.map((e) => (
            <div className="card" key={e.id}>
              <b>{e.title}</b>
              <small> {formatYear(e.year)} · {e.kind}</small>
              <p>{e.description}</p>
              <button className="chip" onClick={() => onApplyYear(e.year)}>Tampilkan di peta</button>
            </div>
          ))}
          {civPeople.length > 0 && <h4>Tokoh pada periode ini</h4>}
          <ul className="list">
            {civPeople.map((p) => (
              <li key={p.id}>
                <b>{p.name}</b>
                <small> {p.role} · {formatYear(p.born)}–{formatYear(p.died)}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      <nav className="period-nav">
        {index > 0 ? (
          <button className="period-step" onClick={() => onIndex(index - 1)}>
            <small>← Sebelumnya</small>
            <span>{periodTitle(civ, index - 1)}</span>
          </button>
        ) : <span />}
        {index < total - 1 ? (
          <button className="period-step next" onClick={() => onIndex(index + 1)}>
            <small>Selanjutnya →</small>
            <span>{periodTitle(civ, index + 1)}</span>
          </button>
        ) : <span />}
      </nav>
    </div>
  );
}
