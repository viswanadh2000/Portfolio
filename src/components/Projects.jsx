import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechStackFilter from './TechStackFilter.jsx';

const projects = [
  {
    name: 'Viswa / Airlines',
    desc: 'Airline Reservation & Management microservices in Java (Spring Boot).',
    link: 'https://github.com/viswanadh2000/Airlines',
    tags: ['Java', 'Spring Boot', 'Microservices']
  },
  {
    name: 'Kafka Data Pipeline',
    desc: 'Real-time data streaming with Kafka and AWS.',
    link: 'https://github.com/viswanadh2000/kafka-pipeline',
    tags: ['Kafka', 'AWS', 'Java']
  },
  {
    name: 'React Portfolio',
    desc: 'Personal portfolio built with React and Tailwind CSS.',
    link: 'https://github.com/viswanadh2000/portfolio',
    tags: ['React', 'AWS']
  },
];

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('');
  const filteredProjects = selectedTech
    ? projects.filter(p => p.tags.includes(selectedTech))
    : projects;

  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <TechStackFilter selected={selectedTech} setSelected={setSelectedTech} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 transition"
            whileHover={{ scale: 1.04, rotateX: 6, rotateY: -6, boxShadow: "0 8px 32px rgba(16, 185, 129, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1000 }}
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-zinc-300 mt-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-800 border border-zinc-700">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
