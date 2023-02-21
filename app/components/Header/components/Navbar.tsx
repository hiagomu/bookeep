import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LoggedButton from '@/app/auth/LoggedButton'
import LoginButton from '@/app/auth/LoginButton'
import NavbarLink from "./NavbarLink"
import links from "../utils/links.json"

export default async function Navbar() {

    const session = await unstable_getServerSession(authOptions)

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
            {!session?.user && <LoginButton isDropdown={false}/>}
            {session?.user && <LoggedButton isDropdown={false} image={session.user.image || ""}/>}
        </nav>
    )
}