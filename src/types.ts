export type Region =
  | 'Nusantara'
  | 'Asia Timur'
  | 'Asia Selatan'
  | 'Asia Tenggara'
  | 'Asia Barat'
  | 'Afrika'
  | 'Eropa'
  | 'Amerika'
  | 'Oseania';

export interface Source {
  title: string;
  author?: string;
  year?: number | string;
  kind: 'primer' | 'sekunder' | 'prasasti' | 'arkeologi';
}

/** Satu wilayah kekuasaan pada satu periode (poligon [lon, lat]). */
export interface Territory {
  /** mulai berlaku (tahun, negatif = SM) */
  from: number;
  /** berakhir (tahun) */
  to: number;
  /** satu atau lebih cincin poligon [lon, lat] */
  polygons: [number, number][][];
  note?: string;
  /** narasi singkat periode, ditampilkan di halaman periode */
  story?: string;
  /** kronik peristiwa periode ini, urut tahun */
  chronicle?: ChronicleEntry[];
  /** cerita kehidupan pada periode ini, per bagian */
  scenes?: StoryScene[];
}

export interface StoryScene {
  title: string;
  text: string;
}

export interface ChronicleEntry {
  year: number;
  title: string;
  text: string;
  /** tahun perkiraan (ditampilkan dengan ±) */
  approx?: boolean;
}

export interface Civilization {
  id: string;
  name: string;
  region: Region;
  start: number;
  end: number;
  color: string;
  capital?: { name: string; lon: number; lat: number };
  summary: string;
  highlights: string[];
  economy: string;
  religionCulture: string;
  decline: string;
  territories: Territory[];
  sources: Source[];
}

export interface HistEvent {
  id: string;
  year: number;
  title: string;
  region: Region;
  lon: number;
  lat: number;
  description: string;
  civilizationId?: string;
  kind: 'perang' | 'politik' | 'budaya' | 'teknologi' | 'perdagangan' | 'bencana' | 'agama';
}

export interface Person {
  id: string;
  name: string;
  born: number;
  died: number;
  role: string;
  region: Region;
  civilizationId?: string;
  lon: number;
  lat: number;
  bio: string;
}

export interface TradeRoute {
  id: string;
  name: string;
  start: number;
  end: number;
  color: string;
  commodities: string[];
  /** titik jalur [lon, lat] */
  path: [number, number][];
  description: string;
}

/** Konteks "sedang terjadi apa" per era, untuk drawer sezaman. */
export interface Era {
  id: string;
  label: string;
  start: number;
  end: number;
}

export interface ViewState {
  year: number;
  selectedCivId: string | null;
  layers: { territories: boolean; trade: boolean; events: boolean; people: boolean };
}

/** Satu entri dalam tema: suku, tradisi, tokoh, atau peristiwa. */
export interface TopicEntry {
  title: string;
  /** label waktu bebas, mis. "abad ke-7 M", "±1297", "menurut tradisi" */
  when?: string;
  /** tahun untuk tombol "tampilkan di peta" (negatif = SM); kosongkan bila tak bisa ditanggali */
  year?: number;
  /** lokasi untuk penanda peta */
  place?: { name: string; lon: number; lat: number };
  /** isi bercerita; pisahkan paragraf dengan baris kosong ("\n\n") */
  text: string;
  /** fakta singkat, mis. ["Bahasa", "Jawa"] */
  facts?: [string, string][];
  /** peradaban terkait di atlas */
  civId?: string;
}

export interface TopicSection {
  title: string;
  intro?: string;
  entries: TopicEntry[];
}

/** Halaman tema yang bisa dijelajahi dari panel. */
export interface Topic {
  id: string;
  title: string;
  subtitle: string;
  /** pembuka tema; paragraf dipisah "\n\n" */
  intro: string;
  sections: TopicSection[];
  /** peradaban yang menampilkan tautan ke tema ini */
  relatedCivIds: string[];
  sources: Source[];
  /** catatan kehati-hatian, mis. sifat riwayat keagamaan */
  note?: string;
}
