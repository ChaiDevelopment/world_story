import type { ChronicleEntry, StoryScene, Territory } from '../types';

/** Entri kronik; `approx` untuk tahun perkiraan. */
export const ev = (year: number, title: string, text: string, approx = false): ChronicleEntry => ({ year, title, text, approx });

/** Isi halaman periode untuk wilayah yang datanya ditulis terpisah; `note` hanya mengisi jika wilayah belum punya. */
export type PeriodDetail = Pick<Territory, 'note' | 'story' | 'chronicle'>;

/** Kronik per peradaban, diurutkan sesuai indeks `territories` peradaban itu. */
export type ChronicleBook = Record<string, PeriodDetail[]>;

/** Cerita zaman per peradaban: satu daftar bagian untuk tiap indeks `territories`. */
export type StoryBook = Record<string, StoryScene[][]>;

/** Satu bagian cerita. */
export const scene = (title: string, text: string): StoryScene => ({ title, text });
