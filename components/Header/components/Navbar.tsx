"use client"

import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'
import NavbarLink from './NavbarLink'

const Navbar = () => {
    return (
        <nav className='flex items-center max-sm:hidden'>
            <ul>
                <NavbarLink href="/" name="For you" />
                <NavbarLink href="/" name="Offers" />
                <NavbarLink href="/" name="Market"/>
            </ul>
            <ProfileDefaultIcon className='text-primaryColor w-7 h-7' />
        </nav>
    )
}

export default Navbar