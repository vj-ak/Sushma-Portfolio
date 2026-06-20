'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { themes, type ThemeName } from '@/data/themes'
import { activeTheme as defaultTheme } from '@/config/site'

const STORAGE_KEY = 'portfolio-theme'

interface ThemeContextValue {
  theme: ThemeName
  setTheme: (t: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function applyTheme(name: ThemeName) {
  const { brand, swiper } = themes[name]
  const root = document.documentElement
  root.style.setProperty('--color-brand-50',  brand[50])
  root.style.setProperty('--color-brand-100', brand[100])
  root.style.setProperty('--color-brand-200', brand[200])
  root.style.setProperty('--color-brand-300', brand[300])
  root.style.setProperty('--color-brand-400', brand[400])
  root.style.setProperty('--color-brand-500', brand[500])
  root.style.setProperty('--color-brand-600', brand[600])
  root.style.setProperty('--color-brand-700', brand[700])
  root.style.setProperty('--color-brand-800', brand[800])
  root.style.setProperty('--color-brand-900', brand[900])

  // Update swiper dot style
  let styleEl = document.getElementById('theme-swiper-style')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.id = 'theme-swiper-style'
    document.head.appendChild(styleEl)
  }
  styleEl.textContent = `
    .swiper-pagination-bullet        { background: ${swiper}; opacity: 0.3; }
    .swiper-pagination-bullet-active { background: ${swiper}; opacity: 1;   }
  `
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme)

  // On mount — read saved preference
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    const initial = saved && themes[saved] ? saved : defaultTheme
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  const setTheme = useCallback((name: ThemeName) => {
    setThemeState(name)
    applyTheme(name)
    localStorage.setItem(STORAGE_KEY, name)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
