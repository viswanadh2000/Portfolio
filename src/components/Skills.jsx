import React from 'react';
import { FaJava, FaAws, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiApachekafka } from 'react-icons/si';

const skills = [
  { icon: <FaJava size={40} />, label: 'Java' },
  { icon: <SiSpring size={40} />, label: 'Spring Boot' },
  { icon: <FaAws size={40} />, label: 'AWS' },
  { icon: <SiApachekafka size={40} />, label: 'Kafka' },
  { icon: <FaReact size={40} />, label: 'React' },
  { icon: <FaGitAlt size={40} />, label: 'Git' },
];

export default function Skills() {
  return (
    <section id="skills" className="section py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-emerald-400">Skills</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {skills.map((skill, idx) => (
          <div
            key={skill.label}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div
              className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 text-emerald-400 dark:text-emerald-300 drop-shadow-lg"
            >
              {skill.icon}
            </div>
            <span className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium group-hover:text-emerald-400 transition">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
