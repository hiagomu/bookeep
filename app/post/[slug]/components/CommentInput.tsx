import { IoMdSend as SendIcon } from 'react-icons/io'
import Image from "next/image"
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { User } from '@/app/@types';
import { useSession } from 'next-auth/react'
import defaultProfileImage from '../../../../public/assets/default_user.png'

const newCommentSchema = object({
    comment:
      string()
      .min(1)
      .max(300, "Comentário deve ter o máximo de 300 caracteres")
      .required(),
  });
interface ICommentInput {
    id: string
    user: User
}

interface IComment {
    id: string
    comment: string
}

const CommentInput = ({ id, user }: ICommentInput) => {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(newCommentSchema)
    });
    const queryClient = useQueryClient()
    let commentToastID: string
    const { data: session } = useSession()

    const { mutate } = useMutation(
        async (data: IComment) => { return axios.post('/api/posts/addComment', {data})},
        {
            onError: (error) => {
                if (error instanceof AxiosError) {
                  toast.error(error?.response?.data.message, {id: commentToastID})
                }
            },
            onSuccess: (data) => {
                queryClient.invalidateQueries(["detail-post"])
                toast.success("Comentário adicionado", {id: commentToastID})
            }
        }
    )

    const onSubmit = async (data: FieldValues) => {
        commentToastID = toast.loading("Adicionando comentário...", {id: commentToastID})
        mutate({comment: data.comment, id: id})
        reset()
    }
    

    return (
        <div className='flex flex-col justify-center bg-white dark:bg-secondaryDarkColor shadow-primary rounded-lg h-fit w-full px-4 py-3 mt-5 max-xl:w-[40rem] max-md:w-[32rem] max-sm:w-[18rem]'>
            <h2 className='text-black font-bold font-poppins mb-2 text-lg dark:text-white max-md:text-sm'>Comentários</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-between"
            >
                <Image
                    alt="Imagem de perfil do usuário"
                    src={session?.user.image ||  defaultProfileImage}
                    className="mr-2 rounded-full w-9 h-9 max-md:w-7 max-md:h-7"
                    width={36}
                    height={36}
                />
                <textarea
                    id=""
                    {...register("comment")}
                    placeholder='Adicione um comentário'
                    className='bg-slate-200 rounded-2xl py-1.5 px-2 text-black dark:bg-primaryDarkHoverColor dark:text-white outline-none w-full h-9 resize-none mr-2 max-md:h-7 max-md:text-xs'
                />
                <button
                    type="submit"
                    className='bg-primaryColor hover:bg-primaryHoverColor text-white rounded-full h-fit p-2 max-md:p-1.5'
                >
                    <SendIcon className='text-white h-5 w-5 max-md:h-4 max-md:w-4'/>
                </button>
            </form>
        </div>
    )
}

export default CommentInput