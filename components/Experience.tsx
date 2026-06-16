'use client'

import { motion } from 'framer-motion'
import { doctor } from '@/data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">Experience</p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">Clinical Journey</h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-12">
          {/* vertical line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-0.5 bg-brand-100" />

          <div className="space-y-8">
            {doctor.experience.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${i}`}
                className="relative"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              >
                {/* timeline dot */}
                <div className="absolute -left-8 sm:-left-12 top-5 w-6 h-6 rounded-full bg-brand-600 border-4 border-white shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">{exp.role}</h3>
                      <p className="text-sm text-brand-600 font-medium">{exp.institution}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                    </div>
                    <span className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap border border-brand-100">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                        <span className="text-brand-400 mt-1 flex-shrink-0">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
