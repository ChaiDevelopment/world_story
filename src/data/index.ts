import type { Civilization } from '../types';
import { ancientCivs } from './civs-ancient';
import { nusantaraEarly } from './civs-nusantara-early';
import { nusantaraLate } from './civs-nusantara-late';
import { medievalCivs } from './civs-medieval';
import { modernCivs } from './civs-modern';
import { eventsAncient } from './events-ancient';
import { eventsModern } from './events-modern';
import { people } from './people';
import { tradeRoutes, eras } from './trade';
import type { ChronicleBook, StoryBook } from './chronicle';
import { chroniclesNusantara } from './chronicles-nusantara';
import { chroniclesMedieval } from './chronicles-medieval';
import { chroniclesModern } from './chronicles-modern';
import { storiesAncient } from './stories-ancient';
import { storiesNusantara } from './stories-nusantara';
import { storiesMedieval } from './stories-medieval';
import { storiesModern } from './stories-modern';

/** Kronik periode yang ditulis terpisah dari file peradaban. */
export const chronicleBook: ChronicleBook = { ...chroniclesNusantara, ...chroniclesMedieval, ...chroniclesModern };
/** Cerita zaman per periode. */
export const storyBook: StoryBook = { ...storiesAncient, ...storiesNusantara, ...storiesMedieval, ...storiesModern };

const withChronicles = (c: Civilization): Civilization => {
  const book = chronicleBook[c.id];
  const stories = storyBook[c.id];
  if (!book && !stories) return c;
  return {
    ...c,
    territories: c.territories.map((t, i) => {
      const d = book?.[i];
      const merged = d ? { ...t, ...d, note: t.note ?? d.note } : t;
      return stories?.[i] ? { ...merged, scenes: stories[i] } : merged;
    }),
  };
};

export const civilizations: Civilization[] = [
  ...ancientCivs,
  ...nusantaraEarly,
  ...medievalCivs,
  ...nusantaraLate,
  ...modernCivs,
].map(withChronicles);

export const events = [...eventsAncient, ...eventsModern].sort((a, b) => a.year - b.year);
export { people, tradeRoutes, eras };

export const civById = new Map(civilizations.map((c) => [c.id, c]));
