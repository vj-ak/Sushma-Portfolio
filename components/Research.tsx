'use client'

import { motion } from 'framer-motion'
import { MdOutlineScience } from 'react-icons/md'
import { HiOutlineBookOpen, HiOutlineMicrophone } from 'react-icons/hi'
import { BsPeopleFill } from 'react-icons/bs'
import { doctor } from '@/data/content'

type ResearchItem = typeof doctor.research[number]

const PAPER_TYPES = ['Presented', 'Under Review', 'Published']
const typeOrder = ['Presented', 'Under Review', 'Published']

// Group only paper types (not Delegate) by title to show journey
function groupPapers(papers: ResearchItem[]) {
  const map = new Map<string, ResearchItem[]>()
  for (const p of papers) {
    if (!PAPER_TYPES.includes(p.type)) continue
    if (!map.has(p.title)) map.set(p.title, [])
    map.get(p.title)!.push(p)
  }
  for (const [, group] of map) {
    group.sort((a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type))
  }
  return [...map.values()]
}

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  Presented:      { icon: HiOutlineMicrophone, color: 'text-blue-600',   bg: 'bg-blue-50 border-blue-200',     label: 'Presented' },
  'Under Review': { icon: MdOutlineScience,    color: 'text-amber-600',  bg: 'bg-amber-50 border-amber-200',   label: 'Under Review' },
  Published:      { icon: HiOutlineBookOpen,   color: 'text-brand-600',  bg: 'bg-brand-50 border-brand-200',   label: 'Published' },
  Delegate:       { icon: BsPeopleFill,        color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200', label: 'Delegate' },
}

export default function Research() {
  if (!doctor.research.length) return null

  const paperGroups = groupPapers(doctor.research)
  const conferenceItems = doctor.research.filter((r) => r.type === 'Delegate')

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">Research</p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent mb-12">
            Publications & Presentations
          </h2>
        </motion.div>

        {/* ── Research Papers ─────────────────────────────────── */}
        {paperGroups.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
                Research Papers
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="space-y-6 mb-10">
              {paperGroups.map((group, gi) => (
                <motion.div
                  key={group[0].title}
                  className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.08, ease: 'easeOut' }}
                >
                  <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-start gap-3">
                    <MdOutlineScience className="text-xl text-brand-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-base font-semibold text-gray-800 leading-snug">
                      {group[0].link ? (
                        <a href={group[0].link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">
                          {group[0].title}
                        </a>
                      ) : group[0].title}
                    </h3>
                  </div>

                  <div className="divide-y divide-gray-50">
                    {group.map((step, si) => {
                      const cfg = typeConfig[step.type] ?? typeConfig['Under Review']
                      const Icon = cfg.icon
                      const isLast = si === group.length - 1
                      return (
                        <div key={si} className="px-6 py-4 flex items-center gap-4 bg-white">
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${cfg.bg}`}>
                              <Icon className={`text-sm ${cfg.color}`} />
                            </div>
                            {!isLast && <div className="w-px h-4 bg-gray-200 mt-1" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-600 leading-snug">{step.venue}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xs text-gray-400">{step.year}</span>
                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${cfg.bg} ${cfg.color}`}>
                              {cfg.label}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* ── Conference Attendance ───────────────────────────── */}
        {conferenceItems.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                Conferences & Events
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conferenceItems.map((item, i) => {
                const cfg = typeConfig.Delegate
                const Icon = cfg.icon
                return (
                  <motion.div
                    key={`${item.title}-${i}`}
                    className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-5 shadow-sm hover:shadow-md transition-all flex gap-4 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-base" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.venue}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-purple-600 font-medium">{item.year}</span>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full border bg-purple-50 border-purple-200 text-purple-600">
                          Delegate
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

