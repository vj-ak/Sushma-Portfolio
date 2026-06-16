'use client'

import { motion } from 'framer-motion'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { doctor } from '@/data/content'

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: doctor.email,
    href: `mailto:${doctor.email}`,
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: doctor.phone,
    href: `tel:${doctor.phone.replace(/\s/g, '')}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: doctor.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(doctor.location)}`,
  },
  {
    icon: FaClock,
    label: 'Consultation Hours',
    value: doctor.consultationHours,
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent mb-12">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          {contactInfo.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <div className="w-11 h-11 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    {value}
                  </p>
                </div>
              </>
            )

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 bg-brand-50 border border-brand-100 rounded-2xl p-5 hover:border-brand-400 hover:shadow-sm transition-all"
              >
                {content}
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-4 bg-brand-50 border border-brand-100 rounded-2xl p-5"
              >
                {content}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
