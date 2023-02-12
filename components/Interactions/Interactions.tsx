import {
    FaGhost as BooIcon,
    FaCommentAlt as CommentIcon
} from 'react-icons/fa'
import Link from 'next/link'

export const Interactions = () => {
    return (
        <Link
            href='/'
            className='flex items-center justify-evenly absolute bg-primaryColor w-32 h-7 rounded-lg bottom-0 right-0 shadow-primary max-xl:w-28 max-xl:h-6'
        >
            <div className='flex items-center'>
                <BooIcon
                    className='mr-2 hover:text-primaryHoverColor max-xl:text-sm'
                />
                <span
                    className='font-bold max-xl:text-sm'
                >
                    15
                </span>
            </div>
            <div className='flex items-center'>
                <CommentIcon
                    className='mr-2 hover:text-primaryHoverColor max-xl:text-sm'
                />
                <span
                    className='font-bold max-xl:text-sm'
                >
                    6
                </span>
            </div>
        </Link>
    )
}