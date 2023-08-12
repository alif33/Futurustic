import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Mega } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const lexendMega = Lexend_Mega({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Futurustic Designers',
  description: 'Generated by create next app 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('dark custom-scrollbar', lexendMega.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
