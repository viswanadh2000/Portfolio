import React from 'react'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <div className="section grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
      <div className="space-y-6">
        <p className="text-emerald-400 text-sm">Java Developer</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-emerald-400">Viswanadh Kakani</span>.
          <br /> I build backend services & data pipelines.
        </h1>
        <p className="text-zinc-300">
          8+ years crafting enterprise systems with Spring Boot, Microservices,
          Kafka, AWS, and Snowflake. I focus on reliability, performance, and clean architecture.
        </p>
        <div className="flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition">View Projects</a>
          <a href="mailto:viswanadhkakani27@gmail.com" className="px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500">Contact Me</a>
        </div>
        <div className="flex gap-4 pt-2 text-zinc-300">
          <a className="hover:text-white" href="https://www.linkedin.com/in/viswanadh_kakani" target="_blank">LinkedIn</a>
          <a className="hover:text-white" href="https://github.com/viswanadh2000" target="_blank">GitHub</a>
          <a className="hover:text-white" href="https://github.com/viswanadh2000/Airlines" target="_blank">Airlines Project</a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={profile} alt="Viswanadh Kakani" className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-3xl border border-zinc-800 shadow-2xl" />
      </div>
    </div>
  )
}
