"use client"

import Link from 'next/link'
import DropdownLink from './DropdownLink'
import { useState } from 'react'
import { FiMenu as MenuIcon } from 'react-icons/fi'
import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'

const Dropdown = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div
            className='hidden max-sm:block max-sm:relative cursor-pointer'
            onClick={() => setIsActive(!isActive)}
        >
            <span className='block hover:bg-zinc-400 rounded-full p-1'>
                <MenuIcon  className='text-black'/>
            </span>
            {
                isActive &&
                <nav className='flex absolute flex-col items-center w-28 py-5 bg-white shadow-secondary rounded-lg right-0 top-0 mt-10 z-10'>
                    <DropdownLink name="For you" href="/"/>
                    <DropdownLink name="Offers" href="/"/>
                    <DropdownLink name="Market" href="/"/>
                    <div className='w-10/12 h-6 border-t border-slate-200 text-black mt-2'>
                        <Link href='/' className='flex items-center justify-between mt-2'>
                            <ProfileDefaultIcon className='text-primaryColor' />
                            <p className='text-xs text-primaryColor font-semibold w-18 truncate hover:underline decoration-2'>
                                Hiago Murilo
                            </p>
                        </Link>
                    </div>
                </nav>
            }       
        </div>
    )
}

export default Dropdown