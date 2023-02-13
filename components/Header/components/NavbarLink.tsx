"use client"

import Link from "next/link"

interface INavbarLink {
    name: string
    href: string
}

const NavbarLink = ({name, href} :INavbarLink) => {
    return (
        <Link href={href} className='text-black mr-5 font-medium hover:text-primaryColor'>
            { name }
        </Link>
    )
}

export default NavbarLink