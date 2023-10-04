import type { Metadata } from 'next'
import Script from 'next/script';
import { SceneProvider } from './context/scene-context'
import { PurpleBlurb, OrangeBlurb, GreenBlurb } from './components/icons'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mozilla | Rise25',
  description: 'Mozilla Presents: 25 visionaries reshaping our digital future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SceneProvider>
      <html lang="en">
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-HY8GW0L2DH" />
        <Script strategy="afterInteractive" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HY8GW0L2DH');
        `}
        </Script>
        <body className={`${inter.className} h-screen overflow-x-hidden overflow-y-scroll`}>
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
