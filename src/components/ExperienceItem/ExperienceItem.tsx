import Title from '../Title/Title';
import {ExperienceItemProps} from './ExperienceItem.props';

const ExperienceItem = ({tags, itemKey, t}: ExperienceItemProps) => {
  return (
    <>
      <Title tag="h3">{t(`experience-section.${itemKey}.title`)}</Title>
      <div className="font-light text-slate-500 dark:text-green-200">{t(`experience-section.${itemKey}.dates`)}</div>
      {tags && (
        <ul className="flex-wrap flex gap-2 mt-2">
          {tags.map((tag) => (
            <li key={tag} className="px-4 py-1 bg-cyclamen text-white text-sm rounded-2xl max-h-7">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4">{t(`experience-section.${itemKey}.description`)}</p>
    </>
  );
};

export default ExperienceItem;
