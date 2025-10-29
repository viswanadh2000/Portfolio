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
            <div className="w-full h-[70vh] overflow-y-auto rounded-lg border border-zinc-800 bg-white text-zinc-900 p-8">
              <h2 className="text-3xl font-bold mb-2 text-emerald-700">Viswanadh Kakani</h2>
              <p className="mb-4 text-zinc-700">Java Developer | Backend Specialist | React Enthusiast</p>
              <div className="mb-4">
                <span className="font-semibold">Email:</span> viswanadhkakani27@gmail.com<br/>
                <span className="font-semibold">LinkedIn:</span> linkedin.com/in/viswanadhkakani<br/>
                <span className="font-semibold">Location:</span> Plano, Texas
              </div>
              <hr className="my-4" />
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Experience</h3>
              <ul className="mb-4 list-disc ml-6">
                <li>Lead Developer, USAA (2023–2025): Led backend development using Java, Spring Boot, Kafka, AWS.</li>
                <li>Backend Developer, CITI (2021–2023): Built microservices and event-driven systems.</li>
                <li>Software Developer, Previous Roles: Contributed to scalable enterprise projects.</li>
              </ul>
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Skills</h3>
              <ul className="mb-4 list-disc ml-6">
                <li>Java, Spring Boot, Microservices, Kafka, AWS</li>
                <li>React, System Design, Event Processing</li>
                <li>CI/CD, Cloud Architecture</li>
              </ul>
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Projects</h3>
              <ul className="mb-4 list-disc ml-6">
                <li>Airlines Booking System: Microservices, Kafka, AWS</li>
                <li>Event Processing Pipeline: Real-time data streaming</li>
                <li>Portfolio Website: React, Vite, Tailwind</li>
              </ul>
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Education</h3>
              <ul className="mb-4 list-disc ml-6">
                <li>B.Tech, Computer Science</li>
              </ul>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <a
                href="/resume/Viswanadh_Kakani_Resume.pdf"
                download
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold animate-[pulseGlow_2s_infinite] shadow-lg"
                style={{ boxShadow: '0 0 10px #10b981' }}
              >
                Download PDF
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
