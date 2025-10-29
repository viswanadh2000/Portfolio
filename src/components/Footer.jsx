import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="section pt-0 text-sm text-zinc-500">
      <div className="border-t border-zinc-800 pt-6 flex items-center justify-between">
        <span>© {year} Viswanadh Kakani</span>
        <a href="#home" className="hover:text-zinc-300">Back to top ↑</a>
      </div>
    </footer>
  )
}
