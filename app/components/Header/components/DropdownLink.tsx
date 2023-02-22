"use client"

import Link from "next/link"

interface IDropdownLink {
    name: string
    href: string
}

const DropdownLink = ({name, href} :IDropdownLink) => {
    return (
        <Link
            href={href}
            className='text-black dark:text-white text-sm hover:text-primaryColor'
        >
            {name}
        </Link>
    )
}

export default DropdownLink