'use client';

import {motion, Variants} from 'framer-motion';
import {DetailedHTMLProps, ReactNode, HTMLAttributes} from 'react';

interface SectionMotionProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
  > {
  children: ReactNode;
}

const SectionMotion = ({children, ...props}: SectionMotionProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      variants={variants}
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      {...props}>
      {children}
    </motion.section>
  );
};

export default SectionMotion;
