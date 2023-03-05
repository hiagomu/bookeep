import { IoMdSend as SendIcon } from 'react-icons/io'
import Image from "next/image"
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

const newCommentSchema = object({
    comment:
      string()
      .min(1)
      .max(300, "Comentário deve ter o máximo de 300 caracteres")
      .required(),
  });
interface ICommentInput {
    id: string
}

interface IComment {
    id: string
    comment: string
}

const CommentInput = ({ id }: ICommentInput) => {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(newCommentSchema)
    });
    const queryClient = useQueryClient()
    let commentToastID: string

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
        <div className='flex flex-col justify-center bg-white dark:bg-secondaryDarkColor shadow-primary rounded-lg h-fit w-full px-4 py-3 mt-5'>
            <h2 className='text-black font-bold mb-2 text-lg dark:text-white'>Comentários</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-between"
            >
                <Image
                    alt="Imagem de perfil do usuário"
                    src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                    className="mr-2 rounded-full w-9 h-9"
                    width={36}
                    height={36}
                />
                <textarea
                    id=""
                    {...register("comment")}
                    placeholder='Adicione um comentário a publicação'
                    className='bg-slate-200 rounded-2xl py-1.5 px-2 text-black dark:bg-primaryDarkHoverColor dark:text-white outline-none w-full h-9 resize-none mr-2'
                />
                <button
                    type="submit"
                    className='bg-primaryColor hover:bg-primaryHoverColor text-white rounded-full h-fit p-2'
                >
                    <SendIcon className='text-white h-5 w-5'/>
                </button>
            </form>
        </div>
    )
}

export default CommentInput