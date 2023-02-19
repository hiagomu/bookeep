import './globals.css'
import { Nunito } from '@next/font/google'
import { Header } from './components/Header'
import Navbar from './components/Header/components/Navbar'
import AuthContext from './auth/AuthContext'
import Dropdown from './components/Header/components/Dropdown'
import DropdownOpen from './components/Header/components/DropdownOpen'

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
            <Dropdown>
              <DropdownOpen />
            </Dropdown>
          </Header>
        </AuthContext>
        {children}
      </body>      
    </html>
  )
}
