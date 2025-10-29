import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = ({ onComplete }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={onComplete}
    >
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        className="text-emerald-500"
      >
        {/* V letter */}
        <motion.path
          d="M20 20 L40 80 L60 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          variants={pathVariants}
        />
        
        {/* K letter */}
        <motion.path
          d="M70 20 L70 80 M70 50 L90 20 M70 50 L90 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          variants={pathVariants}
        />

        {/* Glowing effect */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default LoadingAnimation;