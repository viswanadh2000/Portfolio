import React from 'react'
import experienceRows from '../data/experienceData.js'

export default function Experience() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="grid gap-6">
        {experienceRows.map((r) => (
          <div key={r.company} className="card p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl font-semibold">{r.company}</h3>
              <span className="text-sm text-zinc-400">{r.period}</span>
            </div>
            <p className="text-zinc-300">{r.role}</p>
            <ul className="mt-3 list-disc list-inside text-zinc-300 space-y-1">
              {r.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
