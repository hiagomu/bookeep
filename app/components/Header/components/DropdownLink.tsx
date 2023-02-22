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
            className='text-black dark:text-white text-sm hover:text-primaryColor dark:hover:text-primaryColor mb-1'
        >
            {name}
        </Link>
    )
}

export default DropdownLink