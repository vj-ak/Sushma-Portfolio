import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

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
  title: 'Dr. Sushma S — Ayurveda Physician | BAMS',
  description: 'Dr. Sushma S, BAMS — Ayurveda Physician specialising in Panchakarma, PCOD/PCOS, lifestyle diseases, and pain management.',
  openGraph: {
    title: 'Dr. Sushma S — Ayurveda Physician | BAMS',
    description: 'Book a consultation with Dr. Sushma S for holistic Ayurvedic care.',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans text-gray-800 bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
