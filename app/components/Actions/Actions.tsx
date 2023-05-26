import { HiShare as ShareIcon } from 'react-icons/hi'
import {
    FaEdit as EditIcon,
    FaTrashAlt as RemoveIcon
} from 'react-icons/fa'
import { useSession } from 'next-auth/react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Remove } from '../Modals/Remove'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { User } from '@/app/@types'
import { Share } from "../Modals/Share"

interface IActions {
    user: User
    postId: string
    status: "pending" | "published" | "rejected"
    isActionsOpen: boolean
    setIsActionsOpen: (isActionsOpen: boolean) => void
}

interface IDeletePost {
    id: string
}

export const Actions = ({ user, postId, isActionsOpen, setIsActionsOpen, status }: IActions) => {
    
    let deleteToastID: string
    const { data: session } = useSession()
    const queryClient = useQueryClient()
    const [isRemoveOpen, setIsRemoveOpen] = useState(false)
    const [isShareOpen, setIsShareOpen] = useState(false)
    const deletePost = useMutation(
        async ({ id }: IDeletePost) => {
            deleteToastID = toast.loading("Removendo anúncio...", { id: deleteToastID})
            await axios.delete(`/api/posts/deletePost`, {data: { id }})
        },
        {
            onSuccess: () => {
                toast.success("Anúncio removido com sucesso", { id: deleteToastID })
                queryClient.invalidateQueries(["posts"])
            }
        }
    )

    return (
        <>
            <Remove isOpen={isRemoveOpen} setIsOpen={setIsRemoveOpen} deletePost={deletePost} id={postId}/>
            <Share
                isOpen={isShareOpen}
                postId={postId}
                setIsOpen={setIsShareOpen}
            />
            {
                isActionsOpen &&
                    <div
                        className="flex flex-col dark:shadow-dark-secondary justify-evenly items-center absolute bg-white shadow-primary h-fit py-2 w-28 z-40 right-0 top-0 mt-7 rounded-lg dark:bg-secondaryDarkColor"
                        onMouseLeave={() => setIsActionsOpen(false)}
                    >
                        {
                            status === "published" &&
                            <button
                                className="flex items-center w-11/12 px-1 h-5 hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor text-black dark:text-white text-xs font-bold rounded-md"
                                onClick={() => setIsShareOpen(true)}
                            >
                                <ShareIcon className='mr-1.5'/>
                                <p>Compartilhar</p>
                            </button>
                        }
                        {
                            session?.user?.email === user.email &&
                            <>
                                {
                                    status !== "rejected" &&
                                    <button
                                        className="flex items-center w-11/12 px-1 h-5 hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor text-black dark:text-white text-xs font-bold rounded-md"
                                    >
                                        <EditIcon className='mr-1.5'/>
                                        <p>Editar</p>
                                    </button>
                                }
                                <button
                                    className="flex items-center w-11/12 px-1 h-5 hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor text-red-500 text-xs font-bold rounded-md"
                                    onClick={() => setIsRemoveOpen(true)}
                                >
                                    <RemoveIcon className='mr-1.5 text-red-500'/>
                                    <p>Remover</p>
                                </button>
                            </>
                        }
                    </div>
            }
        </>
    )
}