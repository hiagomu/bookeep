"use client"

import { useState } from 'react'
import { FiMenu as MenuIcon } from 'react-icons/fi'

interface IDropdown {
    children: React.ReactNode
}

const Dropdown = ({children}: IDropdown) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div
            className='hidden max-sm:block max-sm:relative cursor-pointer z-40'
        >
            <span className='block hover:bg-zinc-400 dark:hover:bg-primaryDarkHoverColor rounded-full p-1'
                onClick={() => setIsActive(!isActive)}
            >
                <MenuIcon  className='text-black dark:text-white'/>
            </span>
            {
                isActive &&
                children
            }
        </div>
    )
}

export default Dropdown