'use client'

import { motion } from 'framer-motion'
import { MdOutlineScience } from 'react-icons/md'
import { doctor } from '@/data/content'

const tagColors: Record<string, string> = {
  Published:      'bg-green-100 text-green-700',
  'Under Review': 'bg-amber-100 text-amber-700',
  Presented:      'bg-blue-100 text-blue-700',
  Dissertation:   'bg-purple-100 text-purple-700',
}

export default function Research() {
  if (!doctor.research.length) return null

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">
            Research
          </p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent mb-12">
            Publications & Presentations
          </h2>
        </motion.div>

        <div className="space-y-4">
          {doctor.research.map((paper, i) => (
            <motion.div
              key={`${paper.title}-${i}`}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <MdOutlineScience className="text-2xl text-brand-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-gray-800 mb-1">
                      {paper.link ? (
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-600 transition-colors"
                        >
                          {paper.title}
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {paper.venue} · {paper.year}
                    </p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${tagColors[paper.type] ?? 'bg-gray-100 text-gray-600'}`}>
                  {paper.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
