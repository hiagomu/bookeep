import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Logged from '@/app/auth/Logged'
import Login from '@/app/auth/Login'
import NavbarLink from "./NavbarLink"
import links from "../utils/links.json"

export default async function Navbar() {

    const session = await getServerSession(authOptions)

    return (
        <nav className='flex items-center max-sm:hidden'>
            <ul className="z-40">
                {
                    links.map(link =>
                        <NavbarLink
                            key={link.name}
                            href={link.href}
                            name={link.name}
                        />
                    )
                }
            </ul>
            {!session?.user && <Login />}
            {session?.user && <Logged />}
            
        </nav>
    )
}