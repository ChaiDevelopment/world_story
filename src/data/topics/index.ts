import type { Topic } from '../../types';
import { topicSukuBangsa } from './suku-bangsa';
import { topicWarisanBudaya } from './warisan-budaya';
import { topicAgamaNusantara } from './agama-nusantara';
import { topicIslamNusantara } from './islam-nusantara';
import { topicIslamDunia } from './islam-dunia';

export const topics: Topic[] = [topicSukuBangsa, topicWarisanBudaya, topicAgamaNusantara, topicIslamNusantara, topicIslamDunia];

export const topicById = new Map(topics.map((t) => [t.id, t]));
