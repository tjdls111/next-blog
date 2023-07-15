import Header from '@/components/common/Header'
import './globals.css'
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/common/Footer'

const sans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Snrnsidy Blog',
  description: 'Snrnsidy Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="max-w-screen-2xl w-full flex flex-col mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
