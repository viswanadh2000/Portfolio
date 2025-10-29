import React from 'react';

export default function RecruiterCTA() {
  return (
    <section className="my-16 section bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Let's build something great together</h2>
        <p className="text-zinc-300 mb-6">I'm open to senior backend and systems roles. Need a reliable engineer who can design scalable microservices and data pipelines? Let's talk.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/resume/Viswanadh_Kakani_Java_Developer_Resume_2025.pdf" download className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold animate-[pulseGlow_2s_infinite] shadow-lg">Download Resume</a>
          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-200">Book a meeting</a>
          <a href="https://www.linkedin.com/in/viswanadh_kakani" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white">Connect on LinkedIn</a>
          <a href="/contact" className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
