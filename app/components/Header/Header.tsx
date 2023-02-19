"use client"

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/assets/logo.png'

interface IHeader {
    children: React.ReactNode
}

export const Header = ({children}: IHeader) => {
    return (
        <header
            className='fixed top-0 z-40 flex items-center justify-between h-16 w-11/12 border-b-2 border-slate-100 max-sm:h-12'
        >
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
                    className='text-black ml-1 font-bold max-sm:text-sm'
                >
                    BooKeep
                </p>
            </Link>
            {children}
        </header>
    )
}
