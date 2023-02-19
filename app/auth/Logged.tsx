"use client"

import { signOut } from 'next-auth/react'
import Image from 'next/image'

interface ILogged {
    image: string
}

const Logged = ({image}: ILogged) => {
    return (
        <Image
            width={36}
            height={36}
            alt="Profile picture"
            src={image}
            className="rounded-full cursor-pointer"
            onClick={() => signOut()}
        />
    )
}

export default Logged