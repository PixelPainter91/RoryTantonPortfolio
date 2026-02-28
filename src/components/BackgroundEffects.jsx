import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <>
      <motion.div 
        className="background-orb orb-pink"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="background-orb orb-cyan"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

export default BackgroundEffects;