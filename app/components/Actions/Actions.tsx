import { HiShare as ShareIcon } from 'react-icons/hi'
import {
    FaEdit as EditIcon,
    FaTrashAlt as RemoveIcon
} from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

interface IActions {
    user: {
        emailVerified: boolean | null
        email: string
        image: string
        name: string
        id: string
    }
    postId: string
} 

export const Actions = ({ user, postId }: IActions) => {
    
    const { data: session } = useSession()
    const deletePost = useMutation((id: string) => {
        return axios.delete(`/api/posts/deletePost`, {
            data: {
                id
            }
        })
    })

    return (
        <div className="flex flex-col justify-evenly items-center absolute bg-white shadow-primary h-fit py-2 w-28 z-40 right-0 top-0 mt-7 rounded-lg">
            <button className="flex items-center w-11/12 px-1 h-5 hover:bg-slate-200 text-black text-xs font-bold rounded-md">
                <ShareIcon className='mr-1.5'/>
                <p>Compartilhar</p>
            </button>
            {
                session?.user?.email === user.email &&
                <>
                    <button
                        className="flex items-center w-11/12 px-1 h-5 hover:bg-slate-200 text-black text-xs font-bold rounded-md"
                    >
                        <EditIcon className='mr-1.5'/>
                        <p>Editar</p>
                    </button>
                    <button
                        className="flex items-center w-11/12 px-1 h-5 hover:bg-slate-200 text-red-500 text-xs font-bold rounded-md"
                        onClick={() => deletePost.mutate(postId)}
                    >
                        <RemoveIcon className='mr-1.5 text-red-500'/>
                        <p>Remover</p>
                    </button>
                </>
            }
        </div>
    )
}