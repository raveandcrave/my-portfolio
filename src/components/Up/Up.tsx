'use client';

import {useAnimation, motion, useScroll, useMotionValueEvent} from 'framer-motion';
import Button from '../Button/Button';
import UpIcon from './up.svg?svgr';

const Up = () => {
  const controls = useAnimation();
  const {scrollYProgress} = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    controls.start({opacity: latest});
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div initial={{opacity: 0}} animate={controls} className="fixed bottom-3 right-2 md:right-24 md:bottom-24">
      <Button
        onClick={scrollToTop}
        className="bg-sky-50 hover:bg-sky-100 dark:bg-slate-700 dark:hover:bg-slate-600"
        aria-label="Наверх">
        <UpIcon className="fill-black-custom dark:fill-slate-300" />
      </Button>
    </motion.div>
  );
};

export default Up;
