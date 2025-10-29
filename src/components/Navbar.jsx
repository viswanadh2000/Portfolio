import React from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <div className="section py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          VK
        </a>
        <nav className="hidden sm:flex gap-6 text-sm text-zinc-300">
          {navItems.map((n) => (
            <a key={n.href} className="hover:text-white transition" href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a
          href="https://drive.google.com/file/d/1z19xW73DwVBAUx2MWycWswhdtp3kLi4d/view?usp=sharing"
          className="text-sm px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </header>
  )
}
