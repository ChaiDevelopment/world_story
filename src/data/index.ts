import type { Civilization } from '../types';
import { ancientCivs } from './civs-ancient';
import { nusantaraEarly } from './civs-nusantara-early';
import { nusantaraLate } from './civs-nusantara-late';
import { medievalCivs } from './civs-medieval';
import { modernCivs } from './civs-modern';
import { eventsAncient } from './events-ancient';
import { eventsModern } from './events-modern';
import { people as peopleBase } from './people';
import { tradeRoutes, eras } from './trade';
import type { ChronicleBook, StoryBook } from './chronicle';
import { chroniclesNusantara } from './chronicles-nusantara';
import { chroniclesMedieval } from './chronicles-medieval';
import { chroniclesModern } from './chronicles-modern';
import { storiesAncient } from './stories-ancient';
import { storiesNusantara } from './stories-nusantara';
import { storiesMedieval } from './stories-medieval';
import { storiesModern } from './stories-modern';
import { ancientCivs2 } from './civs-ancient-2';
import { chroniclesAncient2 } from './chronicles-ancient-2';
import { storiesAncient2 } from './stories-ancient-2';
import { medievalCivs2 } from './civs-medieval-2';
import { chroniclesMedieval2 } from './chronicles-medieval-2';
import { storiesMedieval2 } from './stories-medieval-2';
import { asiaCivs2 } from './civs-asia-2';
import { chroniclesAsia2 } from './chronicles-asia-2';
import { storiesAsia2 } from './stories-asia-2';
import { oceaniaCivs } from './civs-oceania';
import { chroniclesOceania } from './chronicles-oceania';
import { storiesOceania } from './stories-oceania';
import { nusantaraKingdoms } from './civs-nusantara-kingdoms';
import { chroniclesNusantaraKingdoms } from './chronicles-nusantara-kingdoms';
import { storiesNusantaraKingdoms } from './stories-nusantara-kingdoms';
import { eventsExtra } from './events-extra';
import { proseBook } from './prose';
import { peopleExtra } from './people-extra';

/** Kronik periode yang ditulis terpisah dari file peradaban. */
export const chronicleBook: ChronicleBook = {
  ...chroniclesNusantara,
  ...chroniclesMedieval,
  ...chroniclesModern,
  ...chroniclesAncient2,
  ...chroniclesMedieval2,
  ...chroniclesAsia2,
  ...chroniclesOceania,
  ...chroniclesNusantaraKingdoms,
};
/** Cerita zaman per periode. */
export const storyBook: StoryBook = {
  ...storiesAncient,
  ...storiesNusantara,
  ...storiesMedieval,
  ...storiesModern,
  ...storiesAncient2,
  ...storiesMedieval2,
  ...storiesAsia2,
  ...storiesOceania,
  ...storiesNusantaraKingdoms,
};

const withChronicles = (c: Civilization): Civilization => {
  const book = chronicleBook[c.id];
  const stories = storyBook[c.id];
  const prose = proseBook[c.id];
  if (!book && !stories && !prose) return c;
  return {
    ...c,
    territories: c.territories.map((t, i) => {
      const d = book?.[i];
      const merged = d ? { ...t, ...d, note: t.note ?? d.note } : t;
      const withScenes = stories?.[i] ? { ...merged, scenes: stories[i] } : merged;
      const long = prose?.[i];
      return long ? { ...withScenes, story: long.story, scenes: long.scenes } : withScenes;
    }),
  };
};

export const civilizations: Civilization[] = [
  ...ancientCivs,
  ...nusantaraEarly,
  ...medievalCivs,
  ...nusantaraLate,
  ...modernCivs,
  ...ancientCivs2,
  ...medievalCivs2,
  ...asiaCivs2,
  ...oceaniaCivs,
  ...nusantaraKingdoms,
].map(withChronicles);

export const events = [...eventsAncient, ...eventsModern, ...eventsExtra].sort((a, b) => a.year - b.year);
export const people = [...peopleBase, ...peopleExtra];
export { tradeRoutes, eras };

export { proseBook };

export const civById = new Map(civilizations.map((c) => [c.id, c]));
