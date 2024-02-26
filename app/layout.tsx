import { Metadata } from 'next'
import { Header } from './_components/header'
import "./globals.css";

export const metadata: Metadata = {
  title: 'NORM | Главная',
  description: 'Михаил - надежный веб-дизайнер с множеством кейсов работ. Оформление ваших услуг в формате WEB, бренд-дизайн, логотипы, инфографика и многое другое.',
  keywords: ['веб-дизайн', 'бренд-дизайн', 'логотипы', 'инфографика', 'Михаил', 'дизайнер'],
  robots: {
    index: true,
    follow: true
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
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <meta name="language" content="ru"/>
        <meta property='og:image' content='https://normweb.space/logo.jpg'/>
      </head>
      <html lang="ru">
        <body>
          <Header/>
          <main className='font-sf_pro'>
          {children}
          </main>
        </body>
      </html>
    </>
  );
}
