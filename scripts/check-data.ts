import { topics } from '../src/data/topics/index';
import { chronicleBook, civilizations, proseBook, storyBook, events, people, tradeRoutes } from '../src/data/index';

let errors = 0;
const fail = (m: string) => {
  console.error('✗', m);
  errors++;
};

const ids = new Set<string>();
for (const c of civilizations) {
  if (ids.has(c.id)) fail(`id peradaban ganda: ${c.id}`);
  ids.add(c.id);
  if (c.start > c.end) fail(`${c.id}: start > end`);
  if (!c.sources.length) fail(`${c.id}: tanpa sumber`);
  if (!c.territories.length) fail(`${c.id}: tanpa wilayah`);
  for (const t of c.territories) {
    if (t.from > t.to) fail(`${c.id}: wilayah from > to`);
    let prev = -Infinity;
    for (const k of t.chronicle ?? []) {
      if (k.year < t.from || k.year > t.to) fail(`${c.id}: kronik "${k.title}" (${k.year}) di luar periode ${t.from}..${t.to}`);
      if (k.year < prev) fail(`${c.id}: kronik "${k.title}" tidak urut tahun`);
      prev = k.year;
    }
    for (const ring of t.polygons) {
      if (ring.length < 3) fail(`${c.id}: poligon < 3 titik`);
      for (const [lon, lat] of ring) {
        if (lon < -180 || lon > 180 || lat < -90 || lat > 90) fail(`${c.id}: koordinat di luar batas ${lon},${lat}`);
      }
    }
  }
}
for (const [id, periods] of Object.entries(chronicleBook)) {
  const c = civilizations.find((x) => x.id === id);
  if (!c) fail(`kronik: peradaban ${id} tidak dikenal`);
  else if (periods.length !== c.territories.length) fail(`kronik ${id}: ${periods.length} periode, wilayah ada ${c.territories.length}`);
}
for (const [id, periods] of Object.entries(storyBook)) {
  const c = civilizations.find((x) => x.id === id);
  if (!c) fail(`cerita: peradaban ${id} tidak dikenal`);
  else if (periods.length !== c.territories.length) fail(`cerita ${id}: ${periods.length} periode, wilayah ada ${c.territories.length}`);
}
for (const [id, periods] of Object.entries(proseBook)) {
  const c = civilizations.find((x) => x.id === id);
  if (!c) fail(`prosa: peradaban ${id} tidak dikenal`);
  else if (periods.length !== c.territories.length) fail(`prosa ${id}: ${periods.length} periode, wilayah ada ${c.territories.length}`);
  periods.forEach((p, i) => {
    if (!p) return;
    if (!p.story.trim()) fail(`prosa ${id}: periode ${i + 1} tanpa pengantar`);
    if (!p.scenes.length) fail(`prosa ${id}: periode ${i + 1} tanpa bagian cerita`);
    for (const s of p.scenes) if (!s.title.trim() || !s.text.trim()) fail(`prosa ${id}: periode ${i + 1} bagian kosong`);
  });
}
for (const c of civilizations) {
  c.territories.forEach((t, i) => {
    if (!t.chronicle?.length) fail(`${c.id}: periode ${i + 1} tanpa kronik`);
    if (!t.scenes?.length) fail(`${c.id}: periode ${i + 1} tanpa cerita`);
  });
}
for (const e of events) {
  if (e.civilizationId && !ids.has(e.civilizationId)) fail(`peristiwa ${e.id}: civilizationId tidak dikenal`);
}
for (const p of people) {
  if (p.civilizationId && !ids.has(p.civilizationId)) fail(`tokoh ${p.id}: civilizationId tidak dikenal`);
  if (p.born > p.died) fail(`tokoh ${p.id}: lahir > wafat`);
}
const topicIds = new Set<string>();
let topicEntries = 0;
for (const t of topics) {
  if (topicIds.has(t.id)) fail(`id tema ganda: ${t.id}`);
  topicIds.add(t.id);
  for (const id of t.relatedCivIds) if (!ids.has(id)) fail(`tema ${t.id}: relatedCivIds tidak dikenal: ${id}`);
  for (const sec of t.sections) {
    if (!sec.entries.length) fail(`tema ${t.id}: bagian "${sec.title}" kosong`);
    for (const e of sec.entries) {
      topicEntries++;
      if (e.civId && !ids.has(e.civId)) fail(`tema ${t.id}: "${e.title}" civId tidak dikenal: ${e.civId}`);
      if (e.place && (e.place.lon < -180 || e.place.lon > 180 || e.place.lat < -90 || e.place.lat > 90))
        fail(`tema ${t.id}: "${e.title}" koordinat di luar batas`);
      if (e.year !== undefined && (e.year < -3500 || e.year > 2026)) fail(`tema ${t.id}: "${e.title}" tahun di luar timeline`);
      if (!e.text.trim()) fail(`tema ${t.id}: "${e.title}" tanpa teks`);
    }
  }
}
for (const r of tradeRoutes) if (r.path.length < 2) fail(`rute ${r.id}: kurang dari 2 titik`);

console.log(`${topics.length} tema (${topicEntries} entri), ${civilizations.length} peradaban, ${events.length} peristiwa, ${people.length} tokoh, ${tradeRoutes.length} jalur dagang`);
const words = (s?: string) => (s ? s.split(/\s+/).filter((w) => w && w !== '---').length : 0);
const allScenes = civilizations.flatMap((c) => c.territories.flatMap((t) => t.scenes ?? []));
const allEntries = topics.flatMap((t) => t.sections.flatMap((s) => s.entries));
console.log(
  `rata-rata kata: pengantar periode ${Math.round(civilizations.flatMap((c) => c.territories).reduce((a, t) => a + words(t.story), 0) / civilizations.flatMap((c) => c.territories).length)}, ` +
    `bagian cerita ${Math.round(allScenes.reduce((a, s) => a + words(s.text), 0) / allScenes.length)}, entri tema ${Math.round(allEntries.reduce((a, e) => a + words(e.text), 0) / allEntries.length)}`,
);
if (errors) {
  console.error(`${errors} masalah ditemukan`);
  process.exit(1);
}
console.log('✓ data valid');
