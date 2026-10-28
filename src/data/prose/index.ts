import type { ProseBook } from '../chronicle';
import { proseKunoA } from './kuno-a';
import { proseKunoB } from './kuno-b';
import { proseKunoC } from './kuno-c';
import { proseNusantaraA } from './nusantara-a';
import { proseNusantaraB } from './nusantara-b';
import { proseNusantaraC } from './nusantara-c';
import { proseTengahA } from './tengah-a';
import { proseTengahB } from './tengah-b';
import { proseTengahC } from './tengah-c';
import { proseModern } from './modern';
import { proseKuno2A } from './kuno2-a';
import { proseKuno2B } from './kuno2-b';
import { proseTengah2A } from './tengah2-a';
import { proseTengah2B } from './tengah2-b';
import { proseTengah2C } from './tengah2-c';
import { proseAsiaA } from './asia-a';
import { proseAsiaB } from './asia-b';
import { proseKerajaanA } from './kerajaan-a';
import { proseKerajaanB } from './kerajaan-b';
import { proseKerajaanC } from './kerajaan-c';

/** Semua prosa panjang periode, digabung dari file per kelompok. */
export const proseBook: ProseBook = {
  ...proseKunoA,
  ...proseKunoB,
  ...proseKunoC,
  ...proseNusantaraA,
  ...proseNusantaraB,
  ...proseNusantaraC,
  ...proseTengahA,
  ...proseTengahB,
  ...proseTengahC,
  ...proseModern,
  ...proseKuno2A,
  ...proseKuno2B,
  ...proseTengah2A,
  ...proseTengah2B,
  ...proseTengah2C,
  ...proseAsiaA,
  ...proseAsiaB,
  ...proseKerajaanA,
  ...proseKerajaanB,
  ...proseKerajaanC,
};
