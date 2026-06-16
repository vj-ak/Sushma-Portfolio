'use client'

import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { doctor } from '@/data/content'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research',   href: '#research' },
  { label: 'Contact',    href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-800">

          {/* Name + tagline */}
          <div className="text-center md:text-left">
            <p className="font-serif text-white text-xl font-semibold">{doctor.shortName}</p>
            <p className="text-sm text-gray-500 mt-1">{doctor.title}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {doctor.social.linkedin && (
              <a href={doctor.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#0A66C2] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                title="LinkedIn">
                <FaLinkedin />
              </a>
            )}
            {doctor.social.instagram && (
              <a href={doctor.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#E1306C] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                title="Instagram">
                <FaInstagram />
              </a>
            )}
            {doctor.social.whatsapp && (
              <a href={`https://wa.me/${doctor.social.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                title="WhatsApp">
                <FaWhatsapp />
              </a>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 pt-6">
          © {new Date().getFullYear()} TechBusinessBeyond. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
