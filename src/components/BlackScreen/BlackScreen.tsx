'use client';
import {motion} from 'framer-motion';

const BlackScreen = () => {
  return (
    <motion.div
      animate={{
        height: 0,
        transition: {
          duration: 0.5,
          ease: 'circIn',
        },
      }}
      className="fixed bottom-0 w-screen h-screen bg-black-custom z-50"></motion.div>
  );
};

export default BlackScreen;
