'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { doctor } from '@/data/content'

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const initials = doctor.name
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-brand-50 via-white to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-600 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-5">
              {doctor.title}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 leading-tight bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
              {doctor.name}
            </h1>
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {doctor.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${doctor.social.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-medium px-7 py-3.5 rounded-full transition-colors shadow-sm shadow-brand-200 w-full sm:w-auto"
              >
                <FaWhatsapp className="text-lg" />
                Book Consultation
              </a>
              <button
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center border border-gray-200 text-gray-600 hover:border-brand-500 hover:text-brand-600 font-medium px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
              >
                View My Specialities
              </button>
            </div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-88 lg:h-88 flex items-center justify-center">

              {/* rotated square frame */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 border-brand-300 rounded-3xl rotate-12 opacity-50" />
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 border-brand-500 rounded-3xl -rotate-12 opacity-30" />

              {/* accent dots at corners */}
              <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-brand-400 opacity-70" />
              <div className="absolute top-2 right-6 w-2 h-2 rounded-full bg-brand-600" />
              <div className="absolute bottom-2 left-6 w-2 h-2 rounded-full bg-brand-600" />
              <div className="absolute bottom-2 right-6 w-3 h-3 rounded-full bg-brand-400 opacity-70" />

              {/* photo circle */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-brand-200 bg-gradient-to-br from-brand-100 to-brand-200 z-10">
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center text-brand-600 text-5xl font-serif font-semibold">
                    {initials}
                  </div>
                ) : (
                  <img
                    src={doctor.profilePhoto}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
