import './globals.css'
import { Nunito } from '@next/font/google'
import { Header } from './components/Header'
import Navbar from './components/Header/components/Navbar'
import AuthContext from './auth/AuthContext'
import Dropdown from './components/Header/components/Dropdown'
import DropdownOpen from './components/Header/components/DropdownOpen'
import QueryWrapper from './auth/QueryWrapper'
import ThemeContext from './theme/ThemeContext'

const nunito = Nunito({ subsets: ['latin']})

export default function RootLayout({
  children
}) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <head />
      <body className='flex flex-col items-center dark:bg-primaryDarkColor'>
        <AuthContext>
          <QueryWrapper>
              <ThemeContext>
                <Header>
                  <Navbar />
                  <Dropdown>
                    <DropdownOpen />
                  </Dropdown>
                </Header>
                {children}
              </ThemeContext>
          </QueryWrapper>
        </AuthContext> 
      </body>
    </html>
  )
}
