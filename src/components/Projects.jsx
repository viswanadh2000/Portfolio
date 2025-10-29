import React from 'react'

const projects = [
  {
    name: 'Viswa / Airlines',
    desc: 'Airline Reservation & Management microservices in Java (Spring Boot).',
    link: 'https://github.com/viswanadh2000/Airlines',
    tags: ['Java', 'Spring Boot', 'Microservices']
  },
]

export default function Projects() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.name} href={p.link} target="_blank" className="card p-6 hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-zinc-300 mt-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-800 border border-zinc-700">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
