import { useMemo, useRef, useState } from 'react';
import { civById } from '../data';
import { formatYear } from '../lib/time';
import type { Topic, TopicEntry } from '../types';

interface Props {
  topic: Topic;
  onClose: () => void;
  onApplyYear: (y: number) => void;
  onSelectCiv: (id: string) => void;
  onFocusPlace: (place: { name: string; lon: number; lat: number }, year?: number) => void;
}

const paragraphs = (s: string) => s.split('\n\n').map((p) => p.trim()).filter(Boolean);

/**
 * Halaman tema: satu bagian ditampilkan sekali waktu (chip untuk berpindah),
 * entri berupa kartu lipat, dan pencarian lintas bagian.
 */
export default function TopicPage({ topic, onClose, onApplyYear, onSelectCiv, onFocusPlace }: Props) {
  const [sec, setSec] = useState(0);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const headRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!q) return null;
    return topic.sections
      .map((s, si) => ({
        si,
        title: s.title,
        entries: s.entries
          .map((e, ei) => ({ e, ei }))
          .filter(({ e }) => `${e.title}\n${e.when ?? ''}\n${e.text}`.toLowerCase().includes(q)),
      }))
      .filter((g) => g.entries.length > 0);
  }, [q, topic]);
  const total = matches?.reduce((n, g) => n + g.entries.length, 0) ?? 0;

  const goSection = (i: number) => {
    setSec(i);
    setOpen(null);
    const el = headRef.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' });
  };

  const renderEntry = (e: TopicEntry, si: number, ei: number) => {
    const key = `${si}-${ei}`;
    const isOpen = open === key;
    const civ = e.civId ? civById.get(e.civId) : null;
    return (
      <div key={key} className={`t-entry${isOpen ? ' open' : ''}`}>
        <button className="t-entry-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : key)}>
          <span className="t-entry-title">{e.title}</span>
          {e.when && <span className="t-entry-when">{e.when}</span>}
          <span className="t-caret" aria-hidden>{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && (
          <div className="t-entry-body">
            {paragraphs(e.text).map((p, i) => <p key={i}>{p}</p>)}
            {e.facts && e.facts.length > 0 && (
              <dl className="t-facts">
                {e.facts.map(([k, v]) => (
                  <div key={k + v}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="t-actions">
              {e.place && (
                <button className="chip" onClick={() => onFocusPlace(e.place!, e.year)}>Tampilkan di peta</button>
              )}
              {e.year !== undefined && (
                <button className="chip" onClick={() => onApplyYear(e.year!)}>Lompat ke tahun {formatYear(e.year)}</button>
              )}
              {e.civId && (
                <button className="chip" onClick={() => onSelectCiv(e.civId!)}>
                  Lihat peradaban{civ ? `: ${civ.name.split(' (')[0]}` : ''}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const section = topic.sections[sec];

  return (
    <div className="topic">
      <button className="link back" onClick={onClose}>← Kembali</button>
      <div className="period-kicker t-kicker">Jelajah Tema</div>
      <h2>{topic.title}</h2>
      <div className="meta">{topic.subtitle}</div>
      {paragraphs(topic.intro).map((p, i) => <p key={i} className="t-intro">{p}</p>)}
      {topic.note && <div className="t-note">{topic.note}</div>}

      <div className="t-search">
        <input
          type="search"
          value={query}
          placeholder="Cari dalam tema ini…"
          aria-label="Cari dalam tema"
          onChange={(ev) => {
            setQuery(ev.target.value);
            setOpen(null);
          }}
        />
      </div>

      {!matches && (
        <>
          <div className="t-chips" role="tablist" ref={headRef}>
            {topic.sections.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                aria-selected={sec === i}
                className={`chip${sec === i ? ' on' : ''}`}
                onClick={() => goSection(i)}
              >
                {s.title} <span className="t-count">{s.entries.length}</span>
              </button>
            ))}
          </div>
          <h3 className="t-sec-title">{section.title}</h3>
          {section.intro && paragraphs(section.intro).map((p, i) => <p key={i} className="t-sec-intro">{p}</p>)}
          <div className="t-entries">{section.entries.map((e, ei) => renderEntry(e, sec, ei))}</div>
          <nav className="period-nav">
            {sec > 0 ? (
              <button className="period-step" onClick={() => goSection(sec - 1)}>
                <small>← Sebelumnya</small>
                <span>{topic.sections[sec - 1].title}</span>
              </button>
            ) : <span />}
            {sec < topic.sections.length - 1 ? (
              <button className="period-step next" onClick={() => goSection(sec + 1)}>
                <small>Selanjutnya →</small>
                <span>{topic.sections[sec + 1].title}</span>
              </button>
            ) : <span />}
          </nav>
        </>
      )}

      {matches && (
        <div ref={headRef}>
          <p className="muted t-result-count">
            {total === 0 ? `Tidak ada hasil untuk "${query.trim()}".` : `${total} entri cocok`}{' '}
            <button className="link more" onClick={() => setQuery('')}>Hapus pencarian</button>
          </p>
          {matches.map((g) => (
            <section key={g.si}>
              <h3 className="t-sec-title">{g.title}</h3>
              <div className="t-entries">{g.entries.map(({ e, ei }) => renderEntry(e, g.si, ei))}</div>
            </section>
          ))}
        </div>
      )}

      <h3>Sumber</h3>
      <ul className="t-sources">
        {topic.sources.map((s) => (
          <li key={s.title}>
            <b>{s.title}</b>
            {s.author && <> — {s.author}</>}
            {s.year && <> ({s.year})</>}
            <small> {s.kind}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
