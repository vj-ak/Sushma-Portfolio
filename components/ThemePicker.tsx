'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { themes, type ThemeName } from '@/data/themes'

const themeOrder: ThemeName[] = ['emerald', 'ocean', 'saffron', 'lotus', 'amethyst', 'teal']

export function ThemePicker() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Swatches panel */}
      {open && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex flex-col gap-1 min-w-[148px]">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-1 mb-1">
            Theme
          </p>
          {themeOrder.map((name) => {
            const t = themes[name]
            const active = name === theme
            return (
              <button
                key={name}
                onClick={() => { setTheme(name); setOpen(false) }}
                className={`flex items-center gap-2.5 px-2 py-1.5 rounded-xl text-left transition-all ${
                  active ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                  style={{ background: t.brand[600] }}
                />
                <span className="text-xs font-medium text-gray-700">{t.label}</span>
                <span className="text-[10px] text-gray-400 ml-auto">{t.description}</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        title="Change theme"
        className="w-10 h-10 rounded-full shadow-lg border-2 border-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ background: themes[theme].brand[600] }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  )
}
