import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { activeTheme } from '@/config/site'
import { themes } from '@/data/themes'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemePicker } from '@/components/ThemePicker'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Dr. Sushma S — Ayurveda Physician | BAMS | Panchakarma Specialist',
  description: 'Dr. Sushma S, BAMS — Ayurveda Physician specialising in Panchakarma, PCOD/PCOS, lifestyle diseases, and pain management. Book consultation online.',
  keywords: ['Ayurveda', 'Ayurvedic Doctor', 'Panchakarma', 'BAMS', 'PCOD', 'PCOS', 'Pain Management', 'Bengaluru', 'Ayurvedic Physician'],
  authors: [{ name: 'Dr. Sushma S' }],
  creator: 'Dr. Sushma S',
  publisher: 'Dr. Sushma S',
  metadataBase: new URL('https://drsushma.webhost.atsnet.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drsushma.webhost.atsnet.in',
    title: 'Dr. Sushma S — Ayurveda Physician | BAMS',
    description: 'Holistic Ayurvedic care for lifestyle diseases, women\'s health & pain management. Book a consultation today.',
    siteName: 'Dr. Sushma S | Ayurveda Physician',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sushma S - Ayurveda Physician',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sushma S — Ayurveda Physician | BAMS',
    description: 'Holistic Ayurvedic care for lifestyle diseases, women\'s health & pain management.',
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://drsushma.webhost.atsnet.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = themes[activeTheme]
  const { brand, swiper } = theme

  const themeCSS = `
    :root {
      --color-brand-50:  ${brand[50]};
      --color-brand-100: ${brand[100]};
      --color-brand-200: ${brand[200]};
      --color-brand-300: ${brand[300]};
      --color-brand-400: ${brand[400]};
      --color-brand-500: ${brand[500]};
      --color-brand-600: ${brand[600]};
      --color-brand-700: ${brand[700]};
      --color-brand-800: ${brand[800]};
      --color-brand-900: ${brand[900]};
    }
    .swiper-pagination-bullet        { background: ${swiper}; opacity: 0.3; }
    .swiper-pagination-bullet-active { background: ${swiper}; opacity: 1; }
  `

  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drsushma.webhost.atsnet.in" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* Inject active theme CSS variables */}
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      </head>
      <body className="font-sans text-gray-800 bg-white antialiased">
        <ThemeProvider>
          {children}
          <ThemePicker />
        </ThemeProvider>
      </body>
    </html>
  )
}
