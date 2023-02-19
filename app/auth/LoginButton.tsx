"use client"

import { FiLogIn as LoginIcon } from 'react-icons/fi'
import { useState } from 'react'
import { Login } from '../components/Login'

interface ILoginButton {
    isDropdown: boolean
}

const LoginButton = ({
    isDropdown
}: ILoginButton) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Login isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isDropdown ?                            
                <div
                    className='flex justify-center items-center mt-1'
                    onClick={() => setIsOpen(true)}
                >
                    <span className='text-primaryColor text-sm mr-2'>Login</span>
                    <LoginIcon
                        href="/"
                        className="text-primaryColor cursor-pointer z-40 w-4 h-4"
                    />
                </div>
                :
                <LoginIcon
                    href="/"
                    className="text-primaryColor cursor-pointer z-40 w-7 h-7"
                    onClick={() => setIsOpen(true)}
                />
            }
        </>
    )
}

export default LoginButton