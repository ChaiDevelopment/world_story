import type { Topic } from '../../types';
import { topicSukuBangsa } from './suku-bangsa';
import { topicWarisanBudaya } from './warisan-budaya';
import { topicAgamaNusantara } from './agama-nusantara';
import { topicIslamNusantara } from './islam-nusantara';
import { topicIslamDunia } from './islam-dunia';
import { topicPrasejarah } from './prasejarah-manusia';
import { topicAgamaDunia } from './agama-dunia';
import { topicSains } from './sains-penemuan';
import { topicRevolusi } from './revolusi-dunia';
import { topicPerangDunia } from './perang-dunia';
import { topicPerangDingin } from './perang-dingin';
import { topicPergerakan } from './pergerakan-nasional';
import { topicRevolusiKemerdekaan } from './revolusi-kemerdekaan';

export const topics: Topic[] = [
  topicSukuBangsa,
  topicWarisanBudaya,
  topicAgamaNusantara,
  topicIslamNusantara,
  topicPergerakan,
  topicRevolusiKemerdekaan,
  topicPrasejarah,
  topicAgamaDunia,
  topicIslamDunia,
  topicSains,
  topicRevolusi,
  topicPerangDunia,
  topicPerangDingin,
];

export const topicById = new Map(topics.map((t) => [t.id, t]));
