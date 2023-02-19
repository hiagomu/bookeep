"use client"

import { FiLogIn as LoginIcon } from 'react-icons/fi'
import { signIn } from "next-auth/react"

const Login = () => {
    return (
        <LoginIcon
            href="/"
            className='text-primaryColor w-7 h-7 cursor-pointer z-40'
            onClick={() => signIn()}
        />
    )
}

export default Login