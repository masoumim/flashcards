// layout.js - this file is the main layout that will be applied to ALL rendered pages

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import AppProvider from './appProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flashcards',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href={"/topics"}>Topics</Link>
          <Link href={"/quizzes"}>Quizzes</Link>
          <Link href={"/new-quiz"}>New Quiz</Link>
        </nav>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>

  )
}
