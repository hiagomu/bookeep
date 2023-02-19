"use client"

import Link from 'next/link'
import {
    FaGhost as BooIcon,
    FaCommentAlt as CommentIcon
} from 'react-icons/fa'

interface IInteractions {
    boos: number
    comments: number
}

export const Interactions = ({
    boos,
    comments
}: IInteractions) => {
    return (
        <Link
            href='/'
            className='flex items-center justify-evenly absolute bg-primaryColor w-32 h-7 rounded-lg bottom-0 right-0 shadow-primary max-xl:w-28 max-xl:h-6 max-sm:w-20 max-sm:h-5'
        >
            <div className='flex items-center'>
                <BooIcon className='mr-2 hover:text-primaryHoverColor max-xl:text-sm max-sm:text-xs max-sm:mr-1' />
                <span className='font-bold max-xl:text-sm max-sm:text-xs'>{boos}</span>
            </div>
            <div className='flex items-center'>
                <CommentIcon className='mr-2 hover:text-primaryHoverColor max-xl:text-sm max-sm:text-xs max-sm:mr-1' />
                <span className='font-bold max-xl:text-sm max-sm:text-xs'>{comments}</span>
            </div>
        </Link>
    )
}