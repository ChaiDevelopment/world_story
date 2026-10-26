import { useEffect, useMemo, useRef, useState } from 'react';
import { topicById, topics } from '../data/topics';
import { civById, civilizations, events, people, tradeRoutes } from '../data';
import { formatRange, formatYear, isActive } from '../lib/time';
import ContemporaryDrawer from './ContemporaryDrawer';
import PeriodPage from './PeriodPage';
import TopicPage from './TopicPage';

interface Props {
  year: number;
  civId: string | null;
  eventId: string | null;
  onSelectCiv: (id: string | null) => void;
  onApplyYear: (y: number) => void;
  onFocusPlace: (place: { name: string; lon: number; lat: number }, year?: number) => void;
}

const TABS = ['Ringkasan', 'Perdagangan', 'Tokoh', 'Peristiwa', 'Sumber'] as const;
type Tab = (typeof TABS)[number];

export default function DetailPanel({ year, civId, eventId, onSelectCiv, onApplyYear, onFocusPlace }: Props) {
  const [tab, setTab] = useState<Tab>('Ringkasan');
  /** indeks periode wilayah yang halamannya sedang dibuka */
  const [period, setPeriod] = useState<number | null>(null);
  /** id tema yang halamannya sedang dibuka */
  const [topicId, setTopicId] = useState<string | null>(null);
  const asideRef = useRef<HTMLElement>(null);
  const civ = civId ? civById.get(civId) : null;
  const event = eventId ? events.find((e) => e.id === eventId) : null;

  const active = useMemo(
    () => civilizations.filter((c) => isActive(c.start, c.end, year)).sort((a, b) => a.start - b.start),
    [year],
  );

  useEffect(() => {
    setPeriod(null);
    setTopicId(null);
  }, [civId, eventId]);
  const mounted = useRef(false);
  useEffect(() => {
    const el = asideRef.current;
    if (!mounted.current || !el) {
      mounted.current = true;
      return;
    }
    // Desktop: panel punya scroll sendiri. Ponsel: halaman yang menggulir, jadi bawa panel ke atas layar.
    if (getComputedStyle(el).overflowY === 'visible') {
      if (el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else el.scrollTo({ top: 0 });
  }, [period, civId, topicId]);

  const topic = topicId ? topicById.get(topicId) : null;
  if (topic) {
    return (
      <aside className="panel" ref={asideRef}>
        <TopicPage
          key={topic.id}
          topic={topic}
          onClose={() => setTopicId(null)}
          onApplyYear={onApplyYear}
          onFocusPlace={onFocusPlace}
          onSelectCiv={(id) => {
            setTopicId(null);
            onSelectCiv(id);
          }}
        />
      </aside>
    );
  }

  if (!civ) {
    return (
      <aside className="panel" ref={asideRef}>
        <h2>Pada {formatYear(year)}</h2>
        <p className="muted">Pilih peradaban di peta atau daftar untuk melihat detailnya.</p>
        {event && (
          <div className="card gold">
            <h4>{event.title}</h4>
            <small>{formatYear(event.year)} · {event.region}</small>
            <p>{event.description}</p>
            {event.civilizationId && (
              <button className="link" onClick={() => onSelectCiv(event.civilizationId!)}>
                Lihat peradaban terkait →
              </button>
            )}
          </div>
        )}
        <h3>Jelajah tema</h3>
        <div className="topic-grid">
          {topics.map((t) => (
            <button key={t.id} className="topic-card" onClick={() => setTopicId(t.id)}>
              <b>{t.title}</b>
              <span>{t.subtitle}</span>
            </button>
          ))}
        </div>
        <h3>Peradaban aktif ({active.length})</h3>
        <ul className="list">
          {active.length === 0 && <li className="muted">Tidak ada data pada tahun ini.</li>}
          {active.map((c) => (
            <li key={c.id}>
              <button className="link" onClick={() => onSelectCiv(c.id)}>
                <i className="dot" style={{ background: c.color }} />
                {c.name}
              </button>
              <small>{formatRange(c.start, c.end)} · {c.region}</small>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  const civEvents = events.filter((e) => e.civilizationId === civ.id);
  const civPeople = people.filter((p) => p.civilizationId === civ.id);
  const civRoutes = tradeRoutes.filter((r) => r.start <= civ.end && r.end >= civ.start && civ.region !== undefined);
  const relatedTopics = topics.filter((t) => t.relatedCivIds.includes(civ.id));
  const nowTerr = civ.territories.map((t, i) => ({ t, i })).filter(({ t }) => isActive(t.from, t.to, year));

  if (period !== null && civ.territories[period]) {
    return (
      <aside className="panel" ref={asideRef}>
        <PeriodPage civ={civ} index={period} onIndex={setPeriod} onClose={() => setPeriod(null)} onApplyYear={onApplyYear} />
      </aside>
    );
  }

  return (
    <aside className="panel" ref={asideRef}>
      <button className="link back" onClick={() => onSelectCiv(null)}>← Semua peradaban</button>
      <h2 style={{ color: civ.color }}>{civ.name}</h2>
      <div className="meta">
        {formatRange(civ.start, civ.end)} · {civ.region}
        {civ.capital && <> · Ibu kota: {civ.capital.name}</>}
      </div>
      {nowTerr.length > 0 && year >= civ.start && year <= civ.end && (
        <div className="card">
          <small>Wilayah pada {formatYear(year)}</small>
          {nowTerr.map(({ t, i }) => (
            <button key={i} className="terr-open" onClick={() => setPeriod(i)}>
              <span className="terr-note">{t.note ?? 'Wilayah inti'}</span>
              <span className="more">
                Baca peristiwa lengkap{t.chronicle?.length ? ` (${t.chronicle.length})` : ''} →
              </span>
            </button>
          ))}
        </div>
      )}

      <ContemporaryDrawer civ={civ} onApplyYear={onApplyYear} onSelectCiv={onSelectCiv} />

      <div className="tabs" role="tablist">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Ringkasan' && (
        <div className="tabbody">
          <p>{civ.summary}</p>
          <h4>Capaian penting</h4>
          <ul>{civ.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          <h4>Agama dan budaya</h4>
          <p>{civ.religionCulture}</p>
          <h4>Kemunduran</h4>
          <p>{civ.decline}</p>
          {relatedTopics.length > 0 && (
            <>
              <h4>Tema terkait</h4>
              <div className="t-chips wrap">
                {relatedTopics.map((t) => (
                  <button key={t.id} className="chip" onClick={() => setTopicId(t.id)}>{t.title} →</button>
                ))}
              </div>
            </>
          )}
          <h4>Periode dan kronik</h4>
          <ul className="list">
            {civ.territories.map((t, i) => (
              <li key={i}>
                <button className="link" onClick={() => setPeriod(i)}>
                  {i + 1}. {t.note ?? `Periode ${i + 1}`} →
                </button>
                <small>{formatRange(t.from, t.to)}{t.chronicle?.length ? ` · ${t.chronicle.length} peristiwa` : ''}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === 'Perdagangan' && (
        <div className="tabbody">
          <h4>Ekonomi</h4>
          <p>{civ.economy}</p>
          <h4>Jalur dagang yang sezaman</h4>
          {civRoutes.map((r) => (
            <div className="card" key={r.id}>
              <b style={{ color: r.color }}>{r.name}</b>
              <small> {formatRange(r.start, r.end)}</small>
              <p>{r.description}</p>
              <div className="tags">{r.commodities.map((c) => <span key={c}>{c}</span>)}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'Tokoh' && (
        <div className="tabbody">
          {civPeople.length === 0 && <p className="muted">Belum ada tokoh tercatat.</p>}
          {civPeople.map((p) => (
            <div className="card" key={p.id}>
              <b>{p.name}</b>
              <small> {p.role} · {formatYear(p.born)}–{formatYear(p.died)}</small>
              <p>{p.bio}</p>
              <button className="chip" onClick={() => onApplyYear(Math.round((p.born + p.died) / 2))}>Lihat masanya</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'Peristiwa' && (
        <div className="tabbody">
          {civEvents.length === 0 && <p className="muted">Belum ada peristiwa tercatat.</p>}
          {civEvents.map((e) => (
            <div className="card" key={e.id}>
              <b>{e.title}</b>
              <small> {formatYear(e.year)} · {e.kind}</small>
              <p>{e.description}</p>
              <button className="chip" onClick={() => onApplyYear(e.year)}>Tampilkan di peta</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'Sumber' && (
        <div className="tabbody">
          <ul>
            {civ.sources.map((s) => (
              <li key={s.title}>
                <b>{s.title}</b>
                {s.author && <> — {s.author}</>}
                {s.year && <> ({s.year})</>}
                <small> {s.kind}</small>
              </li>
            ))}
          </ul>
          <p className="muted">Batas wilayah pada peta adalah penyederhanaan untuk visualisasi, bukan batas presisi. Periksa sumber untuk detail.</p>
        </div>
      )}
    </aside>
  );
}
