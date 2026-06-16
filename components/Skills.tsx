'use client'

import { motion } from 'framer-motion'
import {
  GiHerbsBundle,
  GiMeditation,
} from 'react-icons/gi'
import { FaLeaf, FaSeedling, FaBone } from 'react-icons/fa'
import { MdOutlineScience } from 'react-icons/md'
import { IconType } from 'react-icons'
import { doctor } from '@/data/content'

const iconMap: Record<string, IconType> = {
  GiHerbsBundle,
  GiMeditation,
  FaLeaf,
  FaSeedling,
  FaBone,
  MdOutlineScience,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-brand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">
            Expertise
          </p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent mb-12">
            Clinical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? FaLeaf
            return (
              <motion.div
                key={skill.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              >
                <Icon className="text-3xl text-brand-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.title}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-brand-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
