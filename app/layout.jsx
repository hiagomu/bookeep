import './globals.css'
import { Nunito, Poppins } from '@next/font/google'
import { Header } from './components/Header'
import Navbar from './components/Header/components/Navbar'
import AuthContext from './auth/AuthContext'
import Dropdown from './components/Header/components/Dropdown'
import DropdownOpen from './components/Header/components/DropdownOpen'
import QueryWrapper from './auth/QueryWrapper'
import ThemeContext from './theme/ThemeContext'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito"
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
})

export default function RootLayout({
  children
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={`flex flex-col items-center dark:bg-primaryDarkColor ${poppins.variable} ${nunito.variable} font-nunito`}>
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
