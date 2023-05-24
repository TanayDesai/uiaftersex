import '../styles/globals.css'
import { Inter } from 'next/font/google'
import React, { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'uiaftersex',
  description: 'An experimental User Interfaces & Interactions canvasal laboratory.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}/>
        {children}
      </body>
    </html>
  )
}
