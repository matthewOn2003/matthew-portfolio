// src/app/layout.tsx

import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import { Inter, Dancing_Script } from 'next/font/google'

// 引入 Google 字体，并暴露 CSS 变量
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dancing = Dancing_Script({ subsets: ['latin'], weight: '400', variable: '--font-dancing' })

export const metadata = {
  title: 'Matt Tan | Portfolio',
  description: 'Personal portfolio of Matt Tan, web developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      // 将字体变量注入根元素
      className={`${inter.variable} ${dancing.variable}`}
    >
      <body className="font-sans bg-white text-gray-900 pt-10">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="w-full py-6 bg-gray-100 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Matthew On. Powered by Aurient Studio.
        </footer>
      </body>
    </html>
  )
}
