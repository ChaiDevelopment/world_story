import { useEffect, useRef, useState } from 'react';

/** Penanda pindah halaman di dalam teks panjang: baris "---" di antara paragraf. */
export const PAGE_BREAK = /\n\s*---\s*\n/;
/** Teks tanpa penanda tetap dipecah otomatis bila paragrafnya lebih dari ini. */
const AUTO_PAGE = 4;

export const paragraphs = (s: string) => s.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p && p !== '---');

/** Bagi teks menjadi halaman, masing-masing berisi daftar paragraf. */
export function toPages(text: string): string[][] {
  const parts = text.split(PAGE_BREAK).map(paragraphs).filter((p) => p.length > 0);
  if (parts.length > 1) return parts;
  const all = parts[0] ?? [];
  if (all.length <= AUTO_PAGE + 1) return [all];
  const out: string[][] = [];
  for (let i = 0; i < all.length; i += AUTO_PAGE) out.push(all.slice(i, i + AUTO_PAGE));
  return out;
}

interface Props {
  text: string;
  className?: string;
}

/** Teks panjang yang dibaca per halaman, dengan tombol sebelumnya/selanjutnya. */
export default function PagedText({ text, className }: Props) {
  const pages = toPages(text);
  const [page, setPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => setPage(0), [text]);

  const go = (i: number) => {
    setPage(i);
    const el = ref.current;
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' });
  };

  const cur = pages[Math.min(page, pages.length - 1)] ?? [];
  return (
    <div className={`paged${className ? ` ${className}` : ''}`} ref={ref}>
      {cur.map((p, i) => <p key={`${page}-${i}`}>{p}</p>)}
      {pages.length > 1 && (
        <div className="paged-nav">
          <button className="chip" disabled={page === 0} onClick={() => go(page - 1)}>← Sebelumnya</button>
          <span className="paged-count">Halaman {page + 1} dari {pages.length}</span>
          <button className="chip" disabled={page === pages.length - 1} onClick={() => go(page + 1)}>Selanjutnya →</button>
        </div>
      )}
    </div>
  );
}
