"use client"

import Image from 'next/image'
import { useState } from 'react'
import { ProfileMenu } from '../components/ProfileMenu'

interface ILoggedButton {
    name: string
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
            {
                isOpen &&
                <ProfileMenu profilePic={image} name={name} />
            }
            {
                isDropdown ?
                <div
                    className='flex justify-between items-center my-2 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        width={24}
                        height={24}
                        alt="Imagem de perfil do usuário"
                        src={image}
                        className="rounded-full"
                    />
                    <span className='font-medium text-xs truncate w-16 text-primaryColor dark:text-white hover:underline decoration-2'>{name}</span>
                </div>
                :
                <Image
                    width={32}
                    height={32}
                    alt="Imagem de perfil do usuário"
                    src={image}
                    className="rounded-full cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
            }
        </>
    )
}

export default LoggedButton