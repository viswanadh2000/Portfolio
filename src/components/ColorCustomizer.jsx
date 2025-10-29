
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  { name: 'emerald', color: '#10b981' },
  { name: 'blue', color: '#3b82f6' },
  { name: 'violet', color: '#8b5cf6' },
];

const ColorCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('emerald');

  const setTheme = (name) => {
    setSelected(name);
    // Set CSS variable for primary color
    document.documentElement.style.setProperty('--primary-color', colors.find(c => c.name === name).color);
    localStorage.setItem('portfolioTheme', name);
  };

  React.useEffect(() => {
    // On mount, restore theme from localStorage
    const saved = localStorage.getItem('portfolioTheme');
    if (saved && colors.some(c => c.name === saved)) {
      setTheme(saved);
    } else {
      setTheme('emerald');
    }
  }, []);

  return (
    <div className="fixed top-24 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span role="img" aria-label="settings">⚙️</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-14 right-0 mt-2 p-4 bg-gray-800 rounded-lg shadow-xl"
          >
            <h3 className="text-white text-sm font-semibold mb-3">Choose Theme Color</h3>
            <div className="flex space-x-2">
              {colors.map(({ name, color }) => (
                <button
                  key={name}
                  onClick={() => setTheme(name)}
                  className={`w-8 h-8 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white ${selected === name ? 'ring-4 ring-emerald-400' : ''}`}
                  style={{ backgroundColor: color }}
                  title={name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorCustomizer;