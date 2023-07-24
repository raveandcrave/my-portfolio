import Title from '@/components/Title/Title';
import styles from './TitleSection.module.css';
import {TitleSectionProps} from './TitleSectionProps';

const TitleSection = ({t}: TitleSectionProps) => {
  return (
    <section className={styles.titleSection}>
      <div>
        <span className="ml-1 dark:text-green-200">{t('title-section.hello')}</span>
        <Title tag="h1">{t('title-section.name')}</Title>
        <h2 className="text-7xl font-semibold">{t('title-section.developer')}</h2>
        <p className="text-xl mt-9 max-w-lg">{t('title-section.description')}</p>
      </div>
    </section>
  );
};

export default TitleSection;
