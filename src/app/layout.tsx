import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ameer Hamza - Full Stack Developer | React, Node.js, Mobile Apps',
  description: 'Professional Full Stack Developer specializing in React, Node.js, React Native, and .NET development. View my portfolio of web applications, mobile apps, and innovative projects.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'React Native Developer',
    '.NET Developer',
    'Web Developer',
    'Mobile App Developer',
    'MERN Stack Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'Portfolio Website',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Frontend Developer',
    'Backend Developer'
  ],
  authors: [{ name: 'Ameer Hamza' }],
  creator: 'Ameer Hamza',
  publisher: 'Ameer Hamza',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ameerhamza.dev'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ameer Hamza - Full Stack Developer Portfolio',
    description: 'Professional Full Stack Developer specializing in React, Node.js, React Native, and .NET development. View my portfolio of web applications, mobile apps, and innovative projects.',
    url: 'https://ameerhamza.dev', // Replace with your actual domain
    siteName: 'Ameer Hamza Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'Ameer Hamza - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ameer Hamza - Full Stack Developer Portfolio',
    description: 'Professional Full Stack Developer specializing in React, Node.js, React Native, and .NET development.',
    images: ['/og-image.jpg'], // Same as OpenGraph image
    creator: '@ameerhamza', // Replace with your Twitter handle
  },
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
  verification: {
    google: 'your-google-verification-code', // Replace with your Google Search Console verification code
    yandex: 'your-yandex-verification-code', // Optional
    yahoo: 'your-yahoo-verification-code', // Optional
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ameer Hamza",
              "jobTitle": "Full Stack Developer",
              "description": "Professional Full Stack Developer specializing in React, Node.js, React Native, and .NET development",
              "url": "https://ameerhamza.dev", // Replace with your actual domain
              "image": "https://ameerhamza.dev/hamza.png", // Replace with your actual domain
              "sameAs": [
                "https://github.com/yourusername", // Replace with your GitHub
                "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
                "https://twitter.com/ameerhamza" // Replace with your Twitter
              ],
              "knowsAbout": [
                "React.js",
                "Node.js",
                "React Native",
                ".NET",
                "JavaScript",
                "TypeScript",
                "MongoDB",
                "SQL",
                "Web Development",
                "Mobile Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "UET Lahore"
              },
              "knowsLanguage": ["English", "Urdu"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              }
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ameer Hamza Portfolio",
              "url": "https://ameerhamza.dev", // Replace with your actual domain
              "description": "Professional portfolio showcasing web development, mobile apps, and innovative projects",
              "author": {
                "@type": "Person",
                "name": "Ameer Hamza"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ameerhamza.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
