"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/assets/logo.png'

interface IHeader {
    children: React.ReactNode
}

export const Header = ({children}: IHeader) => {
    return (
        <header
            className='fixed top-0 z-40 flex items-center justify-center bg-white dark:bg-primaryDarkColor w-screen'
        >
            <div className='w-11/12 flex items-center justify-between border-b-2 border-slate-100 dark:border-secondaryDarkColor h-16 max-sm:h-12'>
                <Link
                    href="/"
                    className='flex w-fit items-center z-40'
                >
                    <div className='flex items-center justify-center bg-primaryColor rounded-xl h-9 w-9 max-sm:h-7 max-sm:w-7 max-sm:rounded-lg'>
                        <Image
                            width={20}
                            height={20}
                            className='max-sm:w-4'
                            src={logo}
                            alt="bookeep logo"
                        />
                    </div>
                    <p
                        className='text-black ml-1 font-semibold font-poppins max-sm:text-sm dark:text-white'
                    >
                        BooKeep
                    </p>
                </Link>
                {children}
            </div>
        </header>
    )
}
