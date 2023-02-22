"use client"

import Image from 'next/image'
import { useState } from 'react'
import { ProfileMenu } from '../components/ProfileMenu'
import { Darkmode } from '../components/Darkmode'
import { MdLogout as SingOutIcon } from 'react-icons/md'
import { BsFilePerson as ProfileCardIcon } from 'react-icons/bs'
import Link from 'next/link'
import { SignOut } from '../components/SignOut'

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

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const [isSignOutOpen, setIsSignOutOpen] = useState(false)

    return (
        <>
            <SignOut isOpen={isSignOutOpen} setIsOpen={setIsSignOutOpen}/>
            {
                isProfileMenuOpen && !isDropdown &&
                <ProfileMenu profilePic={image} name={name} />
            }
            {
                isDropdown ?
                <div className='px-2'>
                    <div
                        className='flex items-center py-1.5 cursor-pointer border-y border-slate-200 dark:border-slate-500'
                    >
                        <Image
                            width={26}
                            height={26}
                            alt="Imagem de perfil do usuário"
                            src={image}
                            className="rounded-full mr-2"
                        />
                        <span className='font-medium text-xs truncate w-24 text-primaryColor dark:text-white hover:underline decoration-2'>{name}</span>
                    </div>
                    <div className="w-full border-b border-slate-100 dark:border-slate-500 pb-2">
                        <Link href="/" className="flex w-full mt-1 py-1.5 px-2 rounded items-center outline-none hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor">
                            <ProfileCardIcon className='text-slate-600 dark:text-slate-200 w-4 h-4 mr-2' />
                            <span className="text-black dark:text-white text-xs">Meu perfil</span>
                        </Link>
                        <div onClick={() => setIsSignOutOpen(true)} className="flex w-full mt-0.5 py-1.5 px-2 rounded items-center outline-none hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor cursor-pointer">
                            <SingOutIcon className="text-slate-600 dark:text-slate-200 w-4 h-4 mr-2"/>
                            <span className="text-black dark:text-white text-xs">Sair</span>
                        </div>
                    </div>
                    <Darkmode isDropdown={true}/>
                </div>
                :
                <Image
                    width={32}
                    height={32}
                    alt="Imagem de perfil do usuário"
                    src={image}
                    className="rounded-full cursor-pointer"
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                />
            }
        </>
    )
}

export default LoggedButton