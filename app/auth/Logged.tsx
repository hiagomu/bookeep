"use client"

import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'
import { signOut } from 'next-auth/react'

const Logged = () => {
    return (
        <ProfileDefaultIcon
            className='text-primaryColor w-7 h-7 cursor-pointer z-40'
            onClick={() => signOut()}
        />
    )
}

export default Logged