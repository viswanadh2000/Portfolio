import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedKeys, setTypedKeys] = useState('');
  const secretCode = 'viswa.dev';

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newTypedKeys = (typedKeys + e.key).slice(-secretCode.length);
      setTypedKeys(newTypedKeys);
      
      if (newTypedKeys === secretCode) {
        setIsVisible(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [typedKeys]);

  const terminalLines = [
    '> whoami',
    'viswanadh.kakani',
    '> cat /etc/profile',
    'export JAVA_HOME="/usr/lib/jvm/java-11-openjdk"',
    'export KAFKA_HOME="/opt/kafka"',
    'export AWS_PROFILE="developer"',
    '> systeminfo',
    'OS: Brain.OS v2.0',
    'CPU: Coffee-powered',
    'RAM: Loading...',
    'STATUS: Ready to code! 🚀',
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center bg-gray-800 px-4 py-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400">developer@viswa.dev</span>
            </div>
            <div className="p-6 font-mono text-sm">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-green-400"
                >
                  {line}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: terminalLines.length * 0.1 }}
                className="mt-4 text-emerald-400"
              >
                {'>'}You found the easter egg! 🎉
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;