import type { Metadata } from 'next'
import { SceneProvider } from './context/scene-context'
import { PurpleBlurb, OrangeBlurb, GreenBlurb } from './components/icons'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SceneProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen overflow-hidden`}>
          <Header />
          {children}
          <Footer />
          <div className="bg-background -z-1">
            <OrangeBlurb className="orange-blurb" />
            <PurpleBlurb className="purple-blurb" />
            <GreenBlurb className="green-blurb" />
          </div>
        </body>
      </html>
    </SceneProvider>
  )
}
