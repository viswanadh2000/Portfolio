import React, { useEffect, useState } from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800 dark:bg-zinc-900/80">
        <div className="section py-4 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-wide" aria-label="Home">
            VK
          </a>
          <nav className="hidden sm:flex gap-6 text-sm text-zinc-300 dark:text-zinc-200" aria-label="Main navigation">
            {navItems.map((n) => (
              <a key={n.href} className="hover:text-white transition" href={n.href} aria-label={n.label}>{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setDarkMode((d) => !d)}
              className="p-2 rounded-xl border border-zinc-700 bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-800 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition"
            >
              {darkMode ? (
                <span role="img" aria-label="Light mode">🌙</span>
              ) : (
                <span role="img" aria-label="Dark mode">☀️</span>
              )}
            </button>
            <button
              className="text-sm px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition"
              onClick={() => setShowResume(true)}
            >
              Preview Resume
            </button>
          </div>
        </div>
      </header>
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-zinc-900 rounded-xl shadow-2xl p-6 max-w-2xl w-full relative">
            <iframe
              src="/resume/Viswanadh_Kakani_Java_Developer_Resume_2025.pdf"
              title="Resume Preview"
              className="w-full h-[70vh] rounded-lg border border-zinc-800"
            />
            <div className="flex justify-end gap-3 mt-4">
              <a
                href="/resume/Viswanadh_Kakani_Java_Developer_Resume_2025.pdf"
                download
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold animate-[pulseGlow_2s_infinite] shadow-lg"
                style={{ boxShadow: '0 0 10px #10b981' }}
              >
                Download
              </a>
              <button
                className="px-4 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600 text-white font-semibold"
                onClick={() => setShowResume(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
