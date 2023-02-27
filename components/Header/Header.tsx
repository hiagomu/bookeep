"use client"

import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'
import Link from 'next/link'
import Dropdown from './components/Dropdown'

export const Header = () => {
    return (
        <header
            className='flex items-center justify-between h-16 w-11/12 border-b-2 border-slate-100 max-sm:h-12'
        >
            <div
                className='flex w-fit items-center'
            >
                <div
                    className='flex items-center justify-center bg-primaryColor rounded-xl h-9 w-9 max-sm:h-7 max-sm:w-7 max-sm:rounded-lg'
                >                    
                    <img
                        className='w-5 max-sm:w-4'
                        src="./assets/logo.png"
                        alt="bookeep logo"
                    />
                </div>
                <p
                    className='text-black ml-1 font-bold max-sm:text-sm'
                >
                    BooKeep
                </p>
            </div>
            <nav
                className='flex items-center max-sm:hidden'
            >
                <ul>
                    <Link
                        href="/"
                        className='text-black mr-5 font-medium hover:text-primaryColor'
                    >
                        For you 
                    </Link>
                    <Link
                        href="/"
                        className='text-black mr-5 font-medium hover:text-primaryColor'
                    >
                        Offers
                    </Link>
                    <Link
                        href="/"
                        className='text-black mr-5 font-medium hover:text-primaryColor'
                    >
                        Market
                    </Link>
                </ul>
                <ProfileDefaultIcon
                    className='text-primaryColor w-7 h-7'
                />
            </nav>
            <Dropdown />
        </header>
    )
}