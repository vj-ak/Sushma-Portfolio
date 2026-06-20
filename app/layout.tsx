import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { activeTheme } from '@/config/site'
import { themes } from '@/data/themes'
import { ThemeProvider } from '@/components/ThemeProvider'

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
  title: {
    default: 'Dr. Sushma S | Ayurvedic Physician & Panchakarma Specialist in Bengaluru',
    template: '%s | Dr. Sushma S – Ayurveda',
  },
  description: 'Dr. Sushma S (BAMS) is an Ayurvedic Physician at Vedakshethra Kerala Ayurvedic Treatment Centre, Madiwala, Bengaluru. Specialises in Panchakarma detox, PCOD/PCOS, women\'s health, pain management, and lifestyle diseases. Book consultation today.',
  keywords: [
    'Dr Sushma S', 'Ayurvedic Doctor Bengaluru', 'Ayurveda Physician Madiwala',
    'Panchakarma Bengaluru', 'BAMS Doctor Bengaluru', 'PCOD PCOS Ayurveda',
    'Kerala Ayurveda Bengaluru', 'Vedakshethra Ayurveda', 'Ayurvedic Treatment Bengaluru',
    'Women Health Ayurveda', 'Pain Management Ayurveda', 'Lifestyle Disease Ayurveda',
    'Shirodhara Bengaluru', 'Vamana Virechana Basti Nasya', 'Holistic Doctor Bengaluru',
  ],
  authors: [{ name: 'Dr. Sushma S', url: 'https://drsushma.webhost.atsnet.in' }],
  creator: 'Dr. Sushma S',
  publisher: 'Dr. Sushma S',
  category: 'Healthcare, Ayurveda, Alternative Medicine',
  metadataBase: new URL('https://drsushma.webhost.atsnet.in'),
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: 'https://drsushma.webhost.atsnet.in',
    title: 'Dr. Sushma S – Ayurvedic Physician & Panchakarma Specialist, Bengaluru',
    description: 'Authentic Kerala Ayurveda & Panchakarma at Vedakshethra Clinic, Madiwala. Specialised care for PCOD/PCOS, pain, lifestyle diseases & women\'s health. Consult Dr. Sushma S (BAMS).',
    siteName: 'Dr. Sushma S – Ayurveda Physician',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sushma S – BAMS Ayurvedic Physician at Vedakshethra, Madiwala Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sushma S – Ayurvedic Physician & Panchakarma Specialist, Bengaluru',
    description: 'Authentic Kerala Ayurveda & Panchakarma. Specialised in PCOD/PCOS, pain, lifestyle diseases & women\'s health.',
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
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Inject active theme CSS variables */}
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
        {/* JSON-LD structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Sushma S",
              "honorificPrefix": "Dr.",
              "jobTitle": "Ayurvedic Physician & Panchakarma Specialist",
              "description": "BAMS Ayurvedic Physician specialising in Panchakarma, PCOD/PCOS, women's health, pain management and lifestyle diseases.",
              "url": "https://drsushma.webhost.atsnet.in",
              "image": "https://drsushma.webhost.atsnet.in/images/profile.jpg",
              "telephone": "+917598158582",
              "email": "drsushmas852@gmail.com",
              "gender": "Female",
              "medicalSpecialty": ["Ayurveda", "Panchakarma", "Women's Health", "Pain Management"],
              "worksFor": {
                "@type": "MedicalClinic",
                "name": "Vedakshethra Kerala Ayurvedic Treatment Centre",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Madiwala",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560068",
                  "addressCountry": "IN"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Madiwala",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560068",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Sri Sairam Ayurveda Medical College & Research Center",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                }
              },
              "sameAs": [
                "https://www.linkedin.com/in/sushma-s-a50325303"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans text-gray-800 bg-white antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
