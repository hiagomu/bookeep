import { Comment } from "@/app/@types"
import Image from "next/image"
import { MdVerified as VerifiedIcon } from 'react-icons/md'
import Link from "next/link"
import {
    FaTrashAlt as RemoveIcon
} from 'react-icons/fa'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import axios from "axios"
import { useSession } from "next-auth/react"

interface ICommentSection {
    comments: Comment[]
}

interface IDeleteComment {
    id: string
}

const CommentSection = ({ comments }: ICommentSection) => {
    let deleteToastID: string
    const queryClient = useQueryClient()
    const { data: session } = useSession()

    const deleteComment = useMutation(
        async ({ id }: IDeleteComment) => {
            deleteToastID = toast.loading("Removendo comentário...", { id: deleteToastID})
            await axios.delete(`/api/posts/deleteComment`, {data: { id }})
        },
        {
            onSuccess: () => {
                toast.success("Comentário removido com sucesso", { id: deleteToastID })
                queryClient.invalidateQueries(["detail-post"])
            }
        }
    )

    return (
        <div className='bg-white mt-2 shadow-primary px-4 py-3 rounded-lg dark:bg-secondaryDarkColor max-xl:w-[40rem] max-md:w-[32rem] max-sm:w-[18rem]'>
            {
                comments?.map(comment => {
                    return <div className='flex py-2 relative'>
                        <Link
                            href={`/profile/${comment.user.id}`}
                        >
                            <Image
                                alt="Imagem de perfil do usuário"
                                src={comment.user.image}
                                className="mr-3 rounded-full w-9 h-9 max-md:w-7 max-md:h-7"
                                width={36}
                                height={36}
                            />
                        </Link>
                        <div className='flex flex-col'>
                            <Link
                                href={`/profile/${comment.user.id}`}
                                className='text-primaryColor font-bold flex items-center max-md:text-sm'
                            >
                                {comment.user.name}
                                { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs ml-1"/> }
                            </Link>
                            <p className='text-black dark:text-white max-md:text-sm break-words w-[46rem] max-xl:w-[35rem] max-md:w-[27.5rem] max-sm:w-[13.5rem]'>{comment.message}</p>
                        </div>
                        {
                            session?.user.id === comment.userId &&
                            <button
                                className="absolute right-0"
                                onClick={() => {
                                    deleteComment.mutate({ id: comment.id })
                                }}
                            >
                                <RemoveIcon  className="text-red-500 max-lg:w-3 max-sm:w-2.5"/>
                            </button>
                        }
                    </div>
                })
            }
            
        </div>
    )
}

export default CommentSection