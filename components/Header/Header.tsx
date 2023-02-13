"use client"

import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'
import { FiMenu as MenuIcon } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {

    const [isActive, setIsActive] = useState(false)

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
            <div
                className='hidden max-sm:block max-sm:relative'
            >
                <span
                    onClick={() => setIsActive(!isActive)}
                    className='block hover:bg-zinc-400 rounded-full p-1'
                >
                    <MenuIcon  className='text-black cursor-pointer'/>
                </span>
                {
                    isActive &&
                    <nav
                        className='flex absolute flex-col items-center w-28 py-5 bg-white shadow-secondary rounded-lg right-0 top-0 mt-10 z-10'
                    >
                        <Link
                            href="https://github.com/hiagomu/nba-scoreboard"
                            className='text-black text-sm hover:text-primaryColor'
                        >
                            For you
                        </Link>
                        <Link
                            href="https://github.com/hiagomu/nba-scoreboard"
                            className='text-black text-sm hover:text-primaryColor'
                        >
                            Offers
                        </Link>
                        <Link
                            href="https://github.com/hiagomu/nba-scoreboard"
                            className='text-black text-sm hover:text-primaryColor'
                        >
                            Market
                        </Link>
                        <div
                            className='w-10/12 h-6 border-t border-slate-200 text-black mt-2'
                        >
                            <Link
                                href='/'
                                className='flex items-center justify-between mt-2'
                            >
                                <ProfileDefaultIcon
                                    className='text-primaryColor'
                                />
                                <p
                                    className='text-xs text-primaryColor font-semibold w-18 truncate hover:underline decoration-2'
                                >
                                    Hiago Murilo
                                </p>
                            </Link>
                        </div>
                    </nav>
                }       
            </div>
        </header>
    )
}
