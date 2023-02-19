import './globals.css'

import { Nunito } from '@next/font/google'

const nunito = Nunito({ subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
