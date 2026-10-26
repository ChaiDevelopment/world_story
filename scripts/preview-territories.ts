/**
 * Pratinjau poligon wilayah satu peradaban di atas peta daratan (dipotong garis pantai seperti di aplikasi).
 * Pakai: npx tsx scripts/preview-territories.ts <civId> [keluaran.svg]
 * Tiap periode digambar dengan warna berbeda; keluaran SVG bisa dibuka atau dirender ke PNG.
 */
import { writeFileSync } from 'node:fs';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection, Geometry } from 'geojson';
import world from 'world-atlas/land-50m.json' with { type: 'json' };
import { civById } from '../src/data/index';

const id = process.argv[2];
const out = process.argv[3] ?? `preview-${id}.svg`;
const civ = civById.get(id);
if (!civ) {
  console.error(`peradaban tidak dikenal: ${id}`);
  process.exit(1);
}
const topo = world as unknown as Topology;
const land = feature(topo, topo.objects.land as GeometryCollection) as FeatureCollection<Geometry>;

const allPts = civ.territories.flatMap((t) => t.polygons.flat());
const [minLon, maxLon] = d3.extent(allPts, (p) => p[0]) as [number, number];
const [minLat, maxLat] = d3.extent(allPts, (p) => p[1]) as [number, number];
const padDeg = 6;
const box: GeoJSON.Polygon = {
  type: 'Polygon',
  coordinates: [[
    [minLon - padDeg, minLat - padDeg], [minLon - padDeg, maxLat + padDeg], [maxLon + padDeg, maxLat + padDeg],
    [maxLon + padDeg, minLat - padDeg], [minLon - padDeg, minLat - padDeg],
  ]],
};
const W = 1000, H = 700;
const proj = d3.geoEquirectangular().fitExtent([[10, 40], [W - 10, H - 10]], box);
const path = d3.geoPath(proj);
const colors = ['#e6194b', '#3cb44b', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6'];
const grat = d3.geoGraticule().step([5, 5])();

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="sans-serif">
<rect width="${W}" height="${H}" fill="#cfe3f3"/>
<defs><clipPath id="land"><path d="${path(land)}"/></clipPath></defs>
<path d="${path(grat)}" fill="none" stroke="#9bb" stroke-width="0.5"/>
<path d="${path(land)}" fill="#f4efe2" stroke="#887" stroke-width="0.6"/>`;
civ.territories.forEach((t, i) => {
  const c = colors[i % colors.length];
  for (const ring of t.polygons) {
    const pts = ring.map((p) => proj(p)!).map((p) => p.join(',')).join(' ');
    svg += `<polygon points="${pts}" fill="${c}" fill-opacity="0.35" clip-path="url(#land)"/>`;
    svg += `<polygon points="${pts}" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>`;
  }
  svg += `<text x="12" y="${20 + i * 0}" dy="${i * 16}" fill="${c}" font-size="13" font-weight="bold">${i + 1}. ${t.from}..${t.to} ${t.note ?? ''}</text>`;
});
// Label garis lintang/bujur tiap 10 derajat
for (let lon = Math.ceil((minLon - padDeg) / 10) * 10; lon <= maxLon + padDeg; lon += 10) {
  const p = proj([lon, minLat - padDeg + 1]);
  if (p) svg += `<text x="${p[0]}" y="${H - 14}" font-size="10" fill="#456">${lon}°</text>`;
}
for (let lat = Math.ceil((minLat - padDeg) / 10) * 10; lat <= maxLat + padDeg; lat += 10) {
  const p = proj([minLon - padDeg + 0.5, lat]);
  if (p) svg += `<text x="${W - 34}" y="${p[1]}" font-size="10" fill="#456">${lat}°</text>`;
}
svg += '</svg>';
writeFileSync(out, svg);
console.log(`ditulis: ${out} (${civ.territories.length} periode)`);
