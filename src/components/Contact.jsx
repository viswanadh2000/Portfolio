import React from 'react'

export default function Contact() {
  return (
    <div className="section">
      <div className="card p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-zinc-300">Feel free to reach out for opportunities, collaborations, or questions.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:viswanadhkakani27@gmail.com" className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition">Email</a>
          <a href="https://www.linkedin.com/in/viswanadh_kakani" target="_blank" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">LinkedIn</a>
          <a href="https://github.com/viswanadh2000" target="_blank" className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500">GitHub</a>
        </div>
      </div>
    </div>
  )
}
