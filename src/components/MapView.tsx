import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import world from 'world-atlas/land-50m.json';
import { civilizations, events, people, tradeRoutes } from '../data';
import { formatYear, isActive } from '../lib/time';
import type { ViewState } from '../types';

interface Props {
  view: ViewState;
  onSelectCiv: (id: string | null) => void;
  onSelectEvent: (id: string) => void;
  focus: { name: string; lon: number; lat: number } | null;
  onClearFocus: () => void;
}

const topo = world as unknown as Topology;
/** Daratan tanpa batas negara modern, agar peta tidak anakronistis. */
const land = feature(topo, topo.objects.land as GeometryCollection) as FeatureCollection<Geometry>;

/** Tambah titik di sepanjang tiap sisi supaya kurva halus tetap mengikuti bentuk asli. */
function densify(ring: [number, number][], steps = 2): [number, number][] {
  const out: [number, number][] = [];
  ring.forEach((a, i) => {
    const b = ring[(i + 1) % ring.length];
    for (let s = 0; s < steps; s++) out.push([a[0] + ((b[0] - a[0]) * s) / steps, a[1] + ((b[1] - a[1]) * s) / steps]);
  });
  return out;
}

const smoothLine = d3.line<[number, number]>().curve(d3.curveCatmullRomClosed.alpha(0.5));

export default function MapView({ view, onSelectCiv, onSelectEvent, focus, onClearFocus }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const [size, setSize] = useState({ w: 1000, h: 560 });
  const [k, setK] = useState(1);
  const [hover, setHover] = useState<string | null>(null);

  // Ukuran peta mengikuti kontainer agar tidak ada ruang kosong di layar mana pun.
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { w: W, h: H } = size;
  const pad = Math.min(W, H) * 0.03;
  const projection = useMemo(
    () => d3.geoNaturalEarth1().fitExtent([[pad, pad], [W - pad, H - pad]], { type: 'Sphere' }),
    [W, H, pad],
  );
  const path = useMemo(() => d3.geoPath(projection), [projection]);
  const graticule = useMemo(() => d3.geoGraticule10(), []);
  const landD = useMemo(() => path(land) ?? '', [path]);
  const sphereD = useMemo(() => path({ type: 'Sphere' }) ?? '', [path]);

  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 16])
      .translateExtent([[0, 0], [W, H]])
      .on('zoom', (e) => {
        g.attr('transform', e.transform.toString());
        setK(e.transform.k);
      });
    zoomRef.current = zoom;
    svg.call(zoom).on('dblclick.zoom', null);
    // Ukuran berubah: kembalikan ke tampilan penuh agar posisi tidak meleset.
    svg.call(zoom.transform, d3.zoomIdentity);
    return () => {
      svg.on('.zoom', null);
    };
  }, [W, H]);

  // Fokus tempat: geser dan perbesar halus sampai titik berada di tengah peta.
  useEffect(() => {
    if (!focus || !svgRef.current || !zoomRef.current) return;
    const pt = projection([focus.lon, focus.lat]);
    if (!pt) return;
    // Tata letak sempit: halaman menggulir, jadi bawa peta ke layar agar zoom terlihat.
    const wrap = wrapRef.current;
    if (wrap && window.matchMedia('(max-width: 900px)').matches) {
      const bar = document.querySelector<HTMLElement>('.topbar')?.getBoundingClientRect().bottom ?? 0;
      const r = wrap.getBoundingClientRect();
      if (r.top < bar || r.bottom > window.innerHeight) window.scrollBy({ top: r.top - bar, behavior: 'smooth' });
    }
    const zoom = zoomRef.current;
    const raw = d3.zoomIdentity.translate(W / 2 - 5 * pt[0], H / 2 - 5 * pt[1]).scale(5);
    const t = zoom.constrain()(raw, [[0, 0], [W, H]], [[0, 0], [W, H]]);
    d3.select(svgRef.current).transition().duration(600).call(zoom.transform, t);
  }, [focus, projection, W, H]);

  const zoomBy = (f: number) => {
    if (svgRef.current && zoomRef.current) d3.select(svgRef.current).transition().duration(250).call(zoomRef.current.scaleBy, f);
  };
  const zoomReset = () => {
    if (svgRef.current && zoomRef.current)
      d3.select(svgRef.current).transition().duration(350).call(zoomRef.current.transform, d3.zoomIdentity);
  };

  const year = view.year;

  const activeTerritories = useMemo(() => {
    const out: { civId: string; color: string; d: string; key: string }[] = [];
    for (const c of civilizations) {
      if (!isActive(c.start, c.end, year)) continue;
      c.territories.forEach((t, ti) => {
        if (!isActive(t.from, t.to, year)) return;
        t.polygons.forEach((ring, ri) => {
          const pts = densify(ring)
            .map((p) => projection(p))
            .filter((p): p is [number, number] => !!p);
          const d = pts.length > 2 ? smoothLine(pts) : null;
          if (d) out.push({ civId: c.id, color: c.color, d, key: `${c.id}-${ti}-${ri}` });
        });
      });
    }
    return out;
  }, [year, projection]);

  const activeRoutes = useMemo(
    () =>
      tradeRoutes
        .filter((r) => isActive(r.start, r.end, year))
        .map((r) => ({
          ...r,
          d: path({ type: 'LineString', coordinates: r.path } as GeoJSON.LineString) ?? '',
        })),
    [year, path],
  );

  const evWindow = Math.max(15, Math.abs(year) * 0.04);
  const visibleEvents = useMemo(() => events.filter((e) => Math.abs(e.year - year) <= evWindow), [year, evWindow]);
  const visiblePeople = useMemo(() => people.filter((p) => isActive(p.born, p.died, year)), [year]);

  const hoverCiv = hover ? civilizations.find((c) => c.id === hover) : null;
  // Skala visual: simbol tetap terbaca di layar kecil maupun besar.
  const u = Math.max(0.75, Math.min(1.4, W / 1000));

  return (
    <div className="map-wrap" ref={wrapRef}>
      <svg ref={svgRef} width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="map-svg" role="img" aria-label="Peta dunia sejarah">
        <defs>
          <radialGradient id="sea" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="#101826" />
            <stop offset="100%" stopColor="#080b11" />
          </radialGradient>
          {/* Tepi lembut: wilayah kuno tidak punya garis batas setegas peta modern */}
          <filter id="soft-edge" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation={2.2 / k} />
          </filter>
          <clipPath id="land-clip">
            <path d={landD} />
          </clipPath>
        </defs>
        <rect width={W} height={H} fill="#080b11" />
        <g ref={gRef}>
          <path d={sphereD} fill="url(#sea)" stroke="#d4a84b33" strokeWidth={0.8 / k} />
          <path d={path(graticule) ?? ''} fill="none" stroke="#ffffff0b" strokeWidth={0.5 / k} />
          <path d={landD} fill="#1b2433" stroke="#33405a" strokeWidth={0.5 / k} strokeLinejoin="round" />

          {view.layers.territories && (
            <>
              {/* Wilayah pengaruh (termasuk laut): garis putus-putus samar */}
              {activeTerritories.map((t) => (
                <path
                  key={`halo-${t.key}`}
                  d={t.d}
                  fill={t.color}
                  fillOpacity={view.selectedCivId === t.civId ? 0.1 : 0.05}
                  stroke={t.color}
                  strokeOpacity={0.55}
                  strokeWidth={1 / k}
                  strokeDasharray={`${3 / k} ${3 / k}`}
                  className="territory"
                  onMouseEnter={() => setHover(t.civId)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => onSelectCiv(t.civId)}
                />
              ))}
              {/* Wilayah daratan yang dikuasai: dipotong mengikuti garis pantai */}
              <g clipPath="url(#land-clip)">
                {activeTerritories.map((t) => (
                  <path
                    key={t.key}
                    d={t.d}
                    fill={t.color}
                    fillOpacity={view.selectedCivId === t.civId ? 0.7 : hover === t.civId ? 0.6 : 0.45}
                    stroke={t.color}
                    strokeWidth={(view.selectedCivId === t.civId ? 3 : 0) / k}
                    strokeLinejoin="round"
                    filter="url(#soft-edge)"
                    className="territory"
                    onMouseEnter={() => setHover(t.civId)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => onSelectCiv(t.civId)}
                  />
                ))}
              </g>
            </>
          )}

          {view.layers.trade &&
            activeRoutes.map((r) => (
              <path
                key={r.id}
                d={r.d}
                fill="none"
                stroke={r.color}
                strokeWidth={(1.6 * u) / k}
                strokeDasharray={`${(5 * u) / k} ${(4 * u) / k}`}
                className="route"
              >
                <title>{`${r.name}: ${r.commodities.join(', ')}`}</title>
              </path>
            ))}

          {view.layers.people &&
            visiblePeople.map((p) => {
              const pt = projection([p.lon, p.lat]);
              if (!pt) return null;
              return (
                <g key={p.id} transform={`translate(${pt[0]},${pt[1]})`}>
                  <circle r={(2.8 * u) / k} fill="#0b0e14" stroke="#9ecbff" strokeWidth={1 / k} />
                  <title>{`${p.name} — ${p.role}`}</title>
                </g>
              );
            })}

          {view.layers.events &&
            visibleEvents.map((e) => {
              const pt = projection([e.lon, e.lat]);
              if (!pt) return null;
              return (
                <g
                  key={e.id}
                  transform={`translate(${pt[0]},${pt[1]})`}
                  className="event-pin"
                  onClick={() => onSelectEvent(e.id)}
                >
                  {/* area sentuh lebih besar dari titiknya */}
                  <circle r={(12 * u) / k} fill="transparent" />
                  <circle r={(7 * u) / k} fill="#d4a84b22" className="pulse" />
                  <circle r={(3.6 * u) / k} fill="#d4a84b" stroke="#0b0e14" strokeWidth={0.8 / k} />
                  <title>{`${formatYear(e.year)} — ${e.title}`}</title>
                </g>
              );
            })}

          {view.layers.territories &&
            civilizations
              .filter((c) => c.capital && isActive(c.start, c.end, year))
              .map((c) => {
                const pt = projection([c.capital!.lon, c.capital!.lat]);
                if (!pt || k * u < 1.6) return null;
                return (
                  <text key={c.id} x={pt[0]} y={pt[1] - 5 / k} fontSize={(9 * u) / k} textAnchor="middle" className="map-label">
                    {c.name.split(' (')[0]}
                  </text>
                );
              })}

          {focus && (() => {
            const pt = projection([focus.lon, focus.lat]);
            if (!pt) return null;
            return (
              <g transform={`translate(${pt[0]},${pt[1]})`} pointerEvents="none">
                <circle r={(14 * u) / k} fill="#d4a84b1f" stroke="#d4a84b" strokeWidth={1.4 / k} className="pulse" />
                <circle r={(6 * u) / k} fill="none" stroke="#f0cf7a" strokeWidth={2 / k} />
                <circle r={(1.8 * u) / k} fill="#f0cf7a" />
                <text y={(-12 * u) / k} fontSize={(11 * u) / k} textAnchor="middle" className="focus-label" strokeWidth={3 / k}>
                  {focus.name}
                </text>
              </g>
            );
          })()}
        </g>
      </svg>

      {focus && (
        <div className="map-focus">
          <span>{focus.name}</span>
          <button onClick={onClearFocus} aria-label="Hapus penanda">×</button>
        </div>
      )}
      <div className="map-hint">
        {hoverCiv ? <strong>{hoverCiv.name}</strong> : 'Seret untuk menggeser · scroll atau cubit untuk zoom'}
      </div>
      <div className="map-zoom" role="group" aria-label="Zoom peta">
        <button onClick={() => zoomBy(1.6)} aria-label="Perbesar">+</button>
        <button onClick={() => zoomBy(1 / 1.6)} aria-label="Perkecil">−</button>
        <button onClick={zoomReset} aria-label="Tampilkan seluruh dunia">⟲</button>
      </div>
      <div className="map-note">Wilayah: blok berwarna = daratan dikuasai, garis putus = jangkauan pengaruh (skematis).</div>
    </div>
  );
}
