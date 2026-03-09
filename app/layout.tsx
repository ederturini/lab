import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Seu Blog Profissional',
  description: 'Um espaço para compartilhar pensamentos, insights e conhecimento',
  openGraph: {
    title: 'Seu Blog Profissional',
    description: 'Um espaço para compartilhar pensamentos, insights e conhecimento',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head />
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
