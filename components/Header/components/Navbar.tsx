"use client"

import { useState } from 'react'
import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'
import NavbarLink from './NavbarLink'
import links from "../utils/links.json"

const Navbar = () => {

    const [projectIndex, setProjectIndex] = useState(0)

    return (
        <nav className='flex items-center max-sm:hidden'>
            <ul>
                {
                    links.map((link, index) =>
                        <NavbarLink
                            key={link.name}
                            href={link.href}
                            name={link.name}
                            selected={projectIndex === index}
                            onClick={() => setProjectIndex(index)}
                        />
                    )
                }
            </ul>
            <ProfileDefaultIcon className='text-primaryColor w-7 h-7' />
        </nav>
    )
}

export default Navbar