import './globals.css'
import { Nunito } from '@next/font/google'
import { Header } from './components/Header'
import Navbar from './components/Header/components/Navbar'
import AuthContext from './auth/AuthContext'

const nunito = Nunito({ subsets: ['latin']})

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={nunito.className}>
      <head />
      <body className='flex flex-col items-center'>
        <AuthContext>
          <Header>
            <Navbar />
          </Header>
        </AuthContext>
        {children}
      </body>      
    </html>
  )
}
