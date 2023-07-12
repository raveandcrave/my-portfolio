import Title from '@/components/Title/Title';
import styles from './ExperienceList.module.css';

const experiences = [
  {
    title: 'Омский Государственный Технический Университет',
    dates: '2016-2020',
    description:
      'Бакалавр. Энергетический институт. Электроэнергетика и электротехника. Хоть специальность и не располагала к будущей работе, но здесь я получил знания о базовых понятих в программировании и в итоге понял что мой интерес лежит к вэб-разработке.',
  },
  {
    title: 'Фриланс',
    dates: 'Март - Сентябрь 2021',
    tags: ['HTML', 'CSS', 'SASS', 'GULP', 'October CMS'],
    description: 'HTML Верстальщик. Адаптивная верстка сайтов с посадкой на October CMS',
  },
  {
    title: 'KRDS.ru',
    dates: '2022-2023',
    tags: ['React', 'SASS', 'CSS Modules', 'Typescript', 'Ant Design', 'react-hook-form', 'chart.js', 'NodeJS'],
    description:
      'Frontend разработчик. Разработка CRM для микрофинансовых организаций на React. Расширение и поддержка библиотеки ui компонентов, работа с формами различной сложности, добавление новых фич, работа с графиками',
  },
];

const ExperienceBlock = () => {
  return (
    <div className={styles.wrapper}>
      {experiences.map((item) => {
        const {title, tags, dates, description} = item;

        return (
          <div key={title} className="col-span-2 even:col-start-2 p-5 rounded shadow-xl">
            <Title tag="h3">{title}</Title>
            <div className="font-light text-slate-500">{dates}</div>
            {tags && (
              <ul className="flex gap-2 flex-wrap mt-2">
                {tags.map((tag) => (
                  <li key={tag} className="px-4 py-1 bg-cyclamen text-white text-sm rounded-2xl">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceBlock;
