import Image from 'next/image';
import Title from '@/components/Title/Title';
import styles from './AboutSection.module.css';
import Papich from '@/assets/papich.jpg';
import FireIcon from './fire.svg?svgr';
import SectionMotion from '@/components/SectionMotion/SectionMotion';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'CSS/SASS/CSS Modules',
  'Tailwind CSS',
  'React/Redux',
  'Next.js',
  'Git',
  'Webpack',
  'Docker',
  'Node.js',
];

const AboutSection = () => {
  return (
    <SectionMotion className="py-24">
      <Title tag="h2" className="mb-10">
        Обо Мне
      </Title>
      <div className="grid gap-12 grid-cols-5">
        <div className="col-span-3 border-l-4 border-cyclamen pl-6">
          <p className="mb-5">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее
            осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в
            домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст
            генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст
            более привлекательным и живым для визуально-слухового восприятия.
          </p>
          <p className="mb-5">Вот технологии с которыми я работаю:</p>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <FireIcon className="inline-block fill-cyclamen" width={13} height={13} /> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2">
          <div className="bg-cyclamen rounded">
            <Image
              src={Papich}
              alt="Roflan ebalo"
              className="rounded transition-transform hover:-translate-x-2 hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </SectionMotion>
  );
};

export default AboutSection;
