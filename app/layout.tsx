import { Inter } from 'next/font/google'
import { AppProvider } from '@/lib/context/AppContext'
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://linovia.com' // Update with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Linovia - Master Linux Commands & System Administration | Complete Tutorial Guide',
    template: '%s | Linovia - Linux Command Reference'
  },
  description: 'Master Linux with Linovia - Your comprehensive guide to 200+ Linux commands, interactive tutorials, quizzes, and real-world examples. From beginner to advanced system administration. Free, always updated.',
  keywords: [
    'linovia',
    'linux commands',
    'linux tutorial',
    'bash commands',
    'shell scripting',
    'ubuntu commands',
    'linux cheatsheet',
    'terminal commands',
    'system administration',
    'devops tools',
    'command line interface',
    'unix commands',
    'linux reference',
    'linux learning platform',
    'linux education',
    'free linux course',
    'linux examples',
    'interactive linux tutorial'
  ],
  authors: [{ name: 'Linovia Team', url: siteUrl }],
  creator: 'Linovia',
  publisher: 'Linovia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' }
    ]
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Linovia',
    title: 'Linovia - Master Linux Commands & System Administration',
    description: 'Comprehensive Linux command reference with 200+ commands, interactive tutorials, and practice quizzes. Learn Linux from beginner to advanced level.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Linovia - Linux Command Learning Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@linovia',
    creator: '@linovia',
    title: 'Linovia - Master Linux Commands & System Administration',
    description: 'Comprehensive Linux command reference with 200+ commands, interactive tutorials, and practice quizzes.',
    images: ['/logo.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    yandex: 'your-yandex-verification-code', // Add if needed
    // bing: 'your-bing-verification-code', // Add if needed
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Linovia',
  description: 'Comprehensive Linux command reference and learning platform',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/commands?search={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Linovia',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`
    }
  }
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Linovia',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [
    'https://github.com/linovia',
    'https://twitter.com/linovia'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguage: ['English']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          strategy="beforeInteractive"
        />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}