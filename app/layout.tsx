import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './_components/header'
import "./globals.css"

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata: Metadata = {
  title: 'NORM | Главная',
  description: 'Михаил - надежный веб-дизайнер с множеством кейсов работ. Оформление ваших услуг в формате WEB, бренд-дизайн, логотипы, инфографика и многое другое.',
  keywords: ['веб-дизайн', 'бренд-дизайн', 'логотипы', 'инфографика', 'Михаил', 'дизайнер'],
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NORM | Главная',
    description: 'Михаил - надежный веб-дизайнер с множеством кейсов работ. Оформление ваших услуг в формате WEB, бренд-дизайн, логотипы, инфографика и многое другое.',
    images: ['https://normweb.space/logo.jpg']
  },
  formatDetection: {telephone: false},
  applicationName: 'Norm-landing',
  authors: [
    {name: 'Михаил', url: 'https://www.instagram.com/nn_michail/'},
    {name: 'Smorfy', url: 'https://www.instagram.com/smorfydesign/'}
  ],
  creator: 'Smorfy',
  publisher: 'Михаил',
  openGraph: {
    title: 'NORM | Главная',
    description: 'Михаил - надежный веб-дизайнер с множеством кейсов работ. Оформление ваших услуг в формате WEB, бренд-дизайн, логотипы, инфографика и многое другое.',
    url: 'https://normweb.space',
    type: 'website',
    siteName: 'NORM',
    images: ['https://normweb.space/logo.jpg']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ru">
        <body className={inter.className}>
          <Header/>
          <main>
          {children}
          </main>
        </body>
      </html>
    </>
  );
}
