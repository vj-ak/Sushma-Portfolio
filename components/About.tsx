'use client'

import { motion } from 'framer-motion'
import { doctor } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">About</p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">Who I Am</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {doctor.bio.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-base text-justify">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Stat cards */}
          <motion.div
            className="grid grid-cols-2 gap-4 lg:w-72 xl:w-80"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            {doctor.stats.map((stat) => (
              <div key={stat.label} className="text-center p-5 bg-brand-50 rounded-2xl border border-brand-100">
                <p className="text-3xl font-bold text-brand-600">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1.5 leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
