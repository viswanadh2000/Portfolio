import React from 'react';
import profile from '../assets/images/profile.jpg';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Particles } from '@tsparticles/react';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] section grid md:grid-cols-[1.1fr_1fr] gap-10 items-center bg-gradient-to-r from-emerald-500/10 to-blue-600/10 overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          particles: {
            number: { value: 40 },
            color: { value: ["#10b981", "#3b82f6"] },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
          },
        }}
      />
      <motion.div
        className="space-y-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        <p className="text-emerald-200 text-sm">
          <Typewriter
            words={["Java Developer | Spring Boot | Microservices | AWS | Kafka"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-emerald-200">Viswanadh Kakani</span>.
          <br /> I build backend services & data pipelines.
        </h1>
        <p className="text-zinc-100 dark:text-zinc-300">
          8+ years crafting enterprise systems with Spring Boot, Microservices,
          Kafka, AWS, and Snowflake. I focus on reliability, performance, and clean architecture.
        </p>
        <div className="flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition">View Projects</a>
          <a href="mailto:viswanadhkakani27@gmail.com" className="px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500">Contact Me</a>
        </div>
        <div className="flex gap-4 pt-2 text-zinc-100 dark:text-zinc-300">
          <a className="hover:text-white" href="https://www.linkedin.com/in/viswanadh_kakani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="https://github.com/viswanadh2000" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white" href="https://github.com/viswanadh2000/Airlines" target="_blank" rel="noopener noreferrer">Airlines Project</a>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center md:justify-end relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
      >
        <img 
          src={profile} 
          alt="Profile photo of Viswanadh Kakani" 
          loading="lazy" 
          className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-3xl border border-zinc-800 shadow-2xl"
          onError={(e) => {
            console.error('Error loading image:', e);
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5OCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IiMxZTI5M2IiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iODAiIHI9IjMwIiBmaWxsPSIjMTBiOTgxIi8+CjxwYXRoIGQ9Ik0xNTAgMTgwQzE1MCAxNDAgMTI4IDEyMCAxMDAgMTIwQzcyIDEyMCA1MCAxNDAgNTAgMTgwIiBmaWxsPSIjMTBiOTgxIi8+Cjwvc3ZnPg==';
          }}
        />
      </motion.div>
    </div>
  );
}
