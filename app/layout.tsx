import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://witt-app-rho.vercel.app'),
  title: 'App with Wit',
  description: 'Portfolio of Chawengwit (Wit), a UX/UI designer and fullstack developer specializing in modern web experiences.',
  generator: 'Wit APP',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon-light-32x32.png',
  },
  openGraph: {
    title: 'App with Wit',
    description:
      'Portfolio of Chawengwit (Wit), a UX/UI designer and fullstack developer specializing in modern web experiences.',
    url: 'https://witt-app-rho.vercel.app',
    siteName: 'App with Wit',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'App with Wit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App with Wit',
    description:
      'Portfolio of Chawengwit (Wit), a UX/UI designer and fullstack developer specializing in modern web experiences.',
    images: ['/og-image.png'],
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
