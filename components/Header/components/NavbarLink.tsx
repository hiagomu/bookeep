"use client"

import Link from "next/link"

interface INavbarLink {
    name: string
    href: string
    selected: boolean
    onClick: React.MouseEventHandler<HTMLAnchorElement>
}

const NavbarLink = ({
    name,
    href,
    selected,
    onClick
} :INavbarLink) => {
    return (
        <Link
            href={href}
            className={`text-black mr-5 font-medium hover:text-primaryColor ${selected ? 'text-primaryColor' : 'text-black'}`}
            onClick={onClick}
        >
            { name }
        </Link>
    )
}

export default NavbarLink