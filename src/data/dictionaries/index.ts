import { ECONOMY_CONCEPTS } from './economy';
import { KOREAN_HISTORY_CONCEPTS } from './koreanHistory';
import { WORLD_HISTORY_CONCEPTS } from './worldHistory';
import { AI_CS_CONCEPTS } from './aiCs';
import { PHYSICS_CONCEPTS } from './physics';
import { SPACE_CONCEPTS } from './space';
import { BIOLOGY_CONCEPTS } from './biology';
import { PHILOSOPHY_CONCEPTS } from './philosophy';
import { ART_CONCEPTS } from './art';
import { PSYCHOLOGY_CONCEPTS } from './psychology';
import { LITERATURE_CONCEPTS } from './literature';
import { EARTH_CONCEPTS } from './earth';
import { MASTER_EXPANSION } from './masterExpansion';
import { COMPREHENSIVE_CONCEPTS } from './comprehensiveConcepts';

export const ALL_DOMAIN_DICTIONARIES: Record<string, string> = {
  ...COMPREHENSIVE_CONCEPTS,
  ...MASTER_EXPANSION,
  ...ECONOMY_CONCEPTS,
  ...KOREAN_HISTORY_CONCEPTS,
  ...WORLD_HISTORY_CONCEPTS,
  ...AI_CS_CONCEPTS,
  ...PHYSICS_CONCEPTS,
  ...SPACE_CONCEPTS,
  ...BIOLOGY_CONCEPTS,
  ...PHILOSOPHY_CONCEPTS,
  ...ART_CONCEPTS,
  ...PSYCHOLOGY_CONCEPTS,
  ...LITERATURE_CONCEPTS,
  ...EARTH_CONCEPTS,
};
