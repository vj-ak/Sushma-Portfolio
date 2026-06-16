'use client'

import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { doctor } from '@/data/content'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)

  if (!doctor.testimonials.length) return null

  return (
    <section id="testimonials" className="py-20 bg-brand-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-brand-200 opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-brand-100 opacity-50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header + nav buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-600 mb-2">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl font-semibold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 bg-clip-text text-transparent">
              What Patients Say
            </h2>
          </div>

          {/* Custom nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-brand-500 hover:text-brand-600 text-gray-500 flex items-center justify-center shadow-sm transition-all"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center shadow-sm transition-all"
              aria-label="Next"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonials-swiper pb-12"
          >
            {doctor.testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl leading-none text-brand-400 font-serif mb-3 select-none">&ldquo;</span>
                  <p className="text-gray-600 text-sm leading-7 flex-1 mb-5">{t.quote}</p>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} className={s < t.rating ? 'text-gold-400' : 'text-gray-200'}>★</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-bold flex-shrink-0">
                      {t.name === 'Anonymous' ? '✦' : t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-800 text-sm font-semibold leading-tight">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
