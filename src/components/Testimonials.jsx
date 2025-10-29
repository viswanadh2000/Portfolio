import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Robert L.',
    role: 'Manager, CITI',
    quote: 'Robert: Viswanadh led our backend migration with exceptional rigor — improved throughput and reduced latency across our core services. Highly dependable and technically strong.',
    avatar: '/assets/avatar1.jpg'
  },
  {
    name: 'Artem P.',
    role: 'Manager, USAA',
    quote: 'Artem: Delivered robust streaming pipelines and ensured operational excellence. His system design and incident response skills are top-notch.',
    avatar: '/assets/avatar2.jpg'
  },
  {
    name: 'Prathyusha G.',
    role: 'Lead Developer',
    quote: 'Prathyusha: A collaborative teammate who writes clean, maintainable code. Instrumentation and testing practices noticeably improved under his guidance.',
    avatar: '/assets/avatar3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Recommendations</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.article
            key={i}
            id={`testimonial-${i}`}
            className="card p-6 flex flex-col items-center text-center"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className="w-20 h-20 rounded-full mb-4 flex items-center justify-center bg-emerald-600 text-white font-bold text-lg">
              {t.name.split(' ').map(n => n[0]).slice(0,2).join('')}
            </div>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-sm text-zinc-400 mb-3">{t.role}</div>
            <p className="text-zinc-300">"{t.quote}"</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
