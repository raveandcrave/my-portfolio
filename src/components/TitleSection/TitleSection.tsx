import Title from '@/components/Title/Title';
import styles from './TitleSection.module.css';

const TitleSection = () => {
  return (
    <section className={styles.titleSection}>
      <div>
        <span className="ml-1">Привет! Меня зовут</span>
        <Title tag="h1">Виктор Копань.</Title>
        <h2 className="text-7xl font-semibold">Я frontend разработчик.</h2>
        <p className="text-xl mt-9 max-w-lg">
          Я специализируюсь на воплощении в жизнь удобных и отзывчивых пользовательских интерфейсов. Буду рад запустить
          или улучшить ваш продукт
        </p>
      </div>
    </section>
  );
};

export default TitleSection;
