'use client'

import { motion } from 'framer-motion'
import { BsAward } from 'react-icons/bs'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { FaFlask } from 'react-icons/fa'
import { doctor } from '@/data/content'

type Category = 'degree' | 'conference' | 'workshop'

const categoryConfig: Record<Category, {
  label: string
  icon: React.ElementType
  cardBg: string
  iconBg: string
  iconColor: string
  badge: string
  badgeText: string
  yearColor: string
}> = {
  degree: {
    label: 'Degree',
    icon: HiOutlineAcademicCap,
    cardBg: 'bg-gradient-to-br from-brand-50 to-white border-brand-200',
    iconBg: 'bg-brand-600',
    iconColor: 'text-white',
    badge: 'bg-brand-100 text-brand-700 border border-brand-200',
    badgeText: 'Degree',
    yearColor: 'text-brand-600',
  },
  conference: {
    label: 'Conference',
    icon: BsAward,
    cardBg: 'bg-gradient-to-br from-amber-50 to-white border-amber-200',
    iconBg: 'bg-amber-500',
    iconColor: 'text-white',
    badge: 'bg-amber-100 text-amber-700 border border-amber-200',
    badgeText: 'Conference',
    yearColor: 'text-amber-600',
  },
  workshop: {
    label: 'Workshop',
    icon: MdOutlinePeopleAlt,
    cardBg: 'bg-gradient-to-br from-purple-50 to-white border-purple-200',
    iconBg: 'bg-purple-500',
    iconColor: 'text-white',
    badge: 'bg-purple-100 text-purple-700 border border-purple-200',
    badgeText: 'Workshop',
    yearColor: 'text-purple-600',
  },
}

const groupOrder: Category[] = ['degree', 'conference', 'workshop']

export default function Certifications() {
  const grouped = groupOrder.map((cat) => ({
    category: cat,
    items: doctor.certifications.filter((c) => (c as any).category === cat),
  })).filter((g) => g.items.length > 0)

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

        <div className="space-y-10">
          {grouped.map(({ category, items }, gi) => {
            const cfg = categoryConfig[category]
            const Icon = cfg.icon
            return (
              <div key={category}>
                {/* Category heading */}
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.08 }}
                >
                  <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${cfg.badge}`}>
                    {cfg.badgeText}
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((cert, i) => (
                    <motion.div
                      key={`${cert.name}-${i}`}
                      className={`rounded-2xl border p-5 shadow-sm hover:shadow-md transition-all flex gap-4 items-start ${cfg.cardBg}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: gi * 0.08 + i * 0.07, ease: 'easeOut' }}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.iconBg}`}>
                        <Icon className={`text-lg ${cfg.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1">{cert.name}</h3>
                        <p className="text-xs text-gray-500 leading-snug">{cert.issuer}</p>
                        <p className={`text-xs font-medium mt-1 ${cfg.yearColor}`}>{cert.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

