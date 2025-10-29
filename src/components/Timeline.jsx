import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import experienceRows from '../data/experienceData.js';

const education = {
  year: '2016 – 2020',
  title: 'B.Tech, Computer Science',
  subtitle: 'KLU University',
};

export default function Timeline() {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-8 text-center">My Journey</h2>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* center line */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-blue-400 opacity-30" />

        <div className="space-y-10">
          {/* Combine experience + education into a single timeline for consistent layout */}
          {[
            ...experienceRows.map((r) => ({ ...r, type: 'experience' })),
            { type: 'education', year: education.year, title: education.title, subtitle: education.subtitle },
          ].map((item, i) => {
            const isEducation = item.type === 'education';
            const Icon = isEducation ? FaGraduationCap : FaBriefcase;
            const reversed = i % 2 !== 0;
            return (
              <motion.div
                key={isEducation ? 'education' : item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`md:flex md:items-center md:justify-between ${reversed ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className={`text-sm ${isEducation ? 'text-zinc-400' : 'text-emerald-300'}`}>{isEducation ? item.year : item.period}</div>
                  <div className={`font-semibold ${isEducation ? 'text-2xl' : 'text-xl'} text-white`}>{isEducation ? item.title : item.role}</div>
                  <div className="text-zinc-300 mb-3">{isEducation ? item.subtitle : item.company}</div>
                  {!isEducation && (
                    <ul className="list-disc list-inside text-zinc-300 space-y-1">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="text-sm">{p}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="md:w-1/2 md:px-8 flex md:justify-center mt-4 md:mt-0">
                  <div className="bg-zinc-900 border border-emerald-400 rounded-full p-4 shadow-lg">
                    <Icon className="text-emerald-400 text-xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
