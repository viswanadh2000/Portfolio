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
          {/* Experience entries - alternate sides */}
          {experienceRows.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`md:flex md:items-center md:justify-between ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2 md:px-8">
                <div className="text-sm text-emerald-300">{r.period}</div>
                <div className="font-semibold text-xl text-white">{r.role}</div>
                <div className="text-zinc-300 mb-3">{r.company}</div>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  {r.points.map((p, idx) => (
                    <li key={idx} className="text-sm">{p}</li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2 md:px-8 flex md:justify-center mt-4 md:mt-0">
                <div className="bg-zinc-900 border border-emerald-400 rounded-full p-4 shadow-lg">
                  <FaBriefcase className="text-emerald-400 text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
          {/* Education (bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
              <div className="text-sm text-zinc-400">{education.year}</div>
              <div className="font-semibold text-2xl text-white">{education.title}</div>
              <div className="text-zinc-300">{education.subtitle}</div>
            </div>
            <div className="md:w-1/2 md:pl-8 flex md:justify-start mt-4 md:mt-0 order-1 md:order-2">
              <div className="bg-zinc-900 border border-emerald-400 rounded-full p-4 shadow-lg">
                <FaGraduationCap className="text-emerald-400 text-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
