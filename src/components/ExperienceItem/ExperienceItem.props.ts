import {TFunction} from 'i18next';
import {ExperienceKeys} from '../ExperienceSection/ExperienceSection';

export interface ExperienceItemProps {
  itemKey: ExperienceKeys;
  tags?: string[];
  t: TFunction;
}
