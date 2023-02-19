"use client"

import Image from 'next/image'
import { useState } from 'react'
import { SignOut } from '../components/SignOut'

interface ILoggedButton {
    name?: string
    image: string
    isDropdown: boolean
}

const LoggedButton = ({
    name,
    image,
    isDropdown
}: ILoggedButton) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <SignOut isOpen={isOpen} setIsOpen={setIsOpen}/>
            {
                isDropdown ?
                <div
                    className='flex justify-between items-center mt-2 cursor-pointer'
                    onClick={() => setIsOpen(true)}
                >
                    <Image
                        width={24}
                        height={24}
                        alt="Profile picture"
                        src={image}
                        className="rounded-full"
                    />
                    <span className='font-medium text-xs truncate w-16 text-primaryColor hover:underline decoration-2'>{name}</span>
                </div>
                :
                <Image
                    width={32}
                    height={32}
                    alt="Profile picture"
                    src={image}
                    className="rounded-full cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
            }
        </>
    )
}

export default LoggedButton