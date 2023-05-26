"use client"

import { useSession } from "next-auth/react"
import { InteractionsType, Like } from '@/app/@types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loading } from "@nextui-org/react";
import axios from 'axios'
import {
    FaGhost as BooIcon,
    FaCommentAlt as CommentIcon
} from 'react-icons/fa'
import { useState } from "react";

interface IPostID {
    id: string
}

export const Interactions = ({
    id,
    likes,
    comments,
    little
}: InteractionsType) => {
    const [loading, setLoading] = useState(false)
    const queryClient = useQueryClient()
    const { data: session } = useSession()
    const { user } = session || {}
    const currentUserLiked =
        (session && likes?.some((like: Like) => like.userId === user?.id)) || false
    const mutation =  useMutation(async (data: IPostID) => {
        setLoading(true)
        return await axios.post('/api/posts/addLike', { data })
    },
    {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["detail-post", "posts"])
            setLoading(false)
        }
    })


    return (
        <div className={`flex items-center justify-evenly absolute bg-primaryColor ${little ? "w-28 h-6 left-0": "w-32 h-7 right-0"} rounded-lg bottom-0  shadow-primary max-xl:w-28 max-xl:h-6 max-sm:w-20 max-sm:h-5`}>
            <div className='flex items-center'>
                <button className="flex items-center justify-center" onClick={() => mutation.mutate({id})}>
                    {loading ?
                        <Loading size="xs" color="white" className="mr-2 max-sm:mr-1"/>
                        :
                        <BooIcon className={`mr-2 hover:text-primaryHoverColor max-xl:text-sm max-sm:text-xs max-sm:mr-1 text-white ${currentUserLiked ? "text-red-400" : ""}`} />
                    }
                </button>
                <span className='font-poppins font-bold max-xl:text-sm max-sm:text-xs text-white'>{likes?.length || 0}</span>
            </div>
            <div className='flex items-center'>
                <CommentIcon className='mr-2 hover:text-primaryHoverColor max-xl:text-sm max-sm:text-xs max-sm:mr-1 text-white' />
                <span className='font-poppins font-bold max-xl:text-sm max-sm:text-xs text-white'>{comments}</span>
            </div>
        </div>
    )
}