'use client'

import { motion } from 'framer-motion'
import { BsAward } from 'react-icons/bs'
import { doctor } from '@/data/content'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-brand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">Certifications</p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">Qualifications & Training</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {doctor.certifications.map((cert, i) => (
            <motion.div
              key={`${cert.name}-${i}`}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
            >
              <div className="w-10 h-10 rounded-xl bg-gold-400 bg-opacity-15 flex items-center justify-center flex-shrink-0">
                <BsAward className="text-xl text-gold-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1">{cert.name}</h3>
                <p className="text-xs text-brand-600">{cert.issuer}</p>
                <p className="text-xs text-gray-400 mt-0.5">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
