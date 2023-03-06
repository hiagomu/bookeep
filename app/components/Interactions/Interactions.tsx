"use client"

import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import {
    FaGhost as BooIcon,
    FaCommentAlt as CommentIcon
} from 'react-icons/fa'

interface IInteractions {
    boos: number
    comments: number
    little?: boolean
    id: string
}

interface IPostID {
    id: string
}

export const Interactions = ({
    id,
    boos,
    comments,
    little
}: IInteractions) => {
    const queryClient = useQueryClient()

    const { mutate } = useMutation(
        async (data: IPostID) => { return axios.post('/api/posts/addLike', {data})},
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries(["detail-post"])
                queryClient.invalidateQueries(["posts"])
            }
        }
    )

    return (
        <div className={`flex items-center justify-evenly absolute bg-primaryColor ${little ? "w-28 h-6 left-0": "w-32 h-7 right-0"} rounded-lg bottom-0  shadow-primary max-xl:w-28 max-xl:h-6 max-sm:w-20 max-sm:h-5`}>
            <div className='flex items-center'>
                <button onClick={() => mutate({id})}>
                    <BooIcon className='mr-2 hover:text-primaryHoverColor max-xl:text-sm max-sm:text-xs max-sm:mr-1' />
                </button>
                <span className='font-poppins font-bold max-xl:text-sm max-sm:text-xs'>{boos}</span>
            </div>
            <div className='flex items-center'>
                <CommentIcon className='mr-2 hover:text-primaryHoverColor max-xl:text-sm max-sm:text-xs max-sm:mr-1' />
                <span className='font-poppins font-bold max-xl:text-sm max-sm:text-xs'>{comments}</span>
            </div>
        </div>
    )
}