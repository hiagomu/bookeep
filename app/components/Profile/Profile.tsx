import Image from "next/image"
import { BsCamera as PhotoIcon } from "react-icons/bs"
import {
    FaRegCalendarAlt as CalendarIcon,
    FaPlus as AddIcon 
} from "react-icons/fa"
import { User } from '@/app/@types'
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { NewPost } from "../Modals/NewPost"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import axios, { AxiosError } from "axios"
import { toast } from "react-hot-toast"
import { useSession } from "next-auth/react"

interface IProfile {
    posts: any
    user?: User
}

export const Profile = ({ posts, user }: IProfile) => {

    const { data: session } = useSession()
    const today = new Date().getDay()
    const todayPosts = posts?.filter((post: any) =>  new Date(post.createdAt).getDay() === today)
    const inReviewPosts = posts?.filter((post: any) =>  post.status === "pending")
    const queryClient = useQueryClient()
    const [isOpen, setIsOpen] = useState(false)

    let toastPostID: string
  
    const { mutate } = useMutation(
      async (data: FieldValues) => await axios.post("/api/posts/createPost", { data }),
      {
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error(error?.response?.data.message, {id: toastPostID})
          }
        },
        onSuccess: () => {
          toast.success("Anúncio criado com sucesso!", {id: toastPostID})
          queryClient.invalidateQueries(["userPosts"])
        }
      }
    )
  
    const createPost = (data: FieldValues) => {
      toastPostID = toast.loading("Criando anúncio...", {id: toastPostID})
      mutate(data)
    }

    const userCreatedAtFormated = () => {
        if (user?.createdAt) {
            return format(new Date(user?.createdAt), "dd 'de' MMMM yyyy", {
                locale: ptBR
            })
        }
    }

    return (
        <div className="fixed max-lg:static">
            <NewPost isOpen={isOpen}  setIsOpen={setIsOpen} createPost={createPost} />
            <div className="bg-white dark:bg-secondaryDarkColor shadow-primary rounded-lg relative">
                <div className="bg-primaryColor rounded-t-lg h-32 max-xl:h-28 max-sm:h-20" />
                <div className="h-28 flex absolute top-0 ml-5 mt-20 max-xl:mt-16 max-sm:mt-10">
                    <div className="relative">
                        <Image
                            alt="Foto de Perfil"
                            src={user?.image || ""}
                            width={85}
                            height={85}
                            className="rounded-full max-sm:w-16 max-sm:h-16"
                        />
                        <div className="absolute top-0 right-0 bg-primaryDarkHoverColor p-1 rounded-full">
                            <PhotoIcon className="max-sm:h-3 max-sm:w-3"/>
                        </div>
                    </div>
                    <span className="ml-4 mt-14 text-xl font-bold font-poppins text-black dark:text-white max-xl:text-lg max-sm:text-sm max-sm:mt-12">{user?.name}</span>
                </div>
                <p className="mt-12 ml-5 font-poppins text-black text-opacity-60 font-semibold dark:text-white max-xl:text-sm max-sm:text-xs max-sm:mt-8">{user?.bio}</p>
                <div className="mt-2 ml-5 flex items-center max-sm:mt-1">
                    <CalendarIcon className="mr-2 text-black text-opacity-60 dark:text-white max-xl:mr-1 max-xl:h-3 max-xl:w-3"/>
                    <span className="text-xs font-poppins text-black text-opacity-60 dark:text-white font-semibold max-xl:font-medium">Entrou em {userCreatedAtFormated()}</span>
                </div>
                <ul className="flex mt-2">
                    <li className="bg-primaryColor font-poppins px-2 rounded-xl text-xs font-semibold py-0.5 ml-5 mr-2 shadow-primary text-center max-xl:py-0 max-xl:px-1">Ficction</li>
                    <li className="bg-primaryColor font-poppins px-2 rounded-xl text-xs font-semibold py-0.5 mr-2 shadow-primary text-center max-xl:py-0 max-xl:px-1">Drama</li>
                    <li className="bg-primaryColor font-poppins px-2 rounded-xl text-xs font-semibold py-0.5 shadow-primary text-center max-xl:py-0 max-xl:px-1">Romance</li>
                </ul>
                {
                    session?.user?.email === user?.email &&
                    <button 
                        className="bg-primaryColor flex items-center font-poppins mt-3 ml-5 px-4 rounded-lg text-sm font-semibold py-1.5 shadow-primary text-center max-xl:py-1 max-xl:px-3 max-sm:text-xs hover:bg-primaryHoverColor"
                        onClick={() => { setIsOpen(true) }}
                    >
                        <AddIcon className="text-white mr-2 max-lg:mr-1 font-bold"/>
                        Adicionar anúncio
                    </button>
                }
                <div className="flex mt-2 pb-4 w-[25.75rem] justify-evenly max-xl:w-[19rem] max-lg:w-post-lg max-lg:mt-4 max-sm:w-post-sm max-sm:mt-2">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-primaryColor font-bold font-poppins text-center mb-2 max-xl:text-sm max-xl:font-semibold max-lg:text-base max-lg:font-bold max-sm:text-xs">Anúncios</span>
                        <div className="shadow-primary rounded-lg h-20 w-20 flex justify-center items-center max-xl:h-16 max-xl:w-16 max-lg:h-20 max-lg:w-20 max-sm:h-16 max-sm:w-16">
                            <span className="text-3xl text-primaryColor font-bold font-poppins text-center max-xl:text-xl">{posts?.length}</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-primaryColor font-bold font-poppins text-center mb-2 max-xl:text-sm max-xl:font-semibold max-lg:text-base max-lg:font-bold max-sm:text-xs">Anúncios hoje</span>
                        <div className="shadow-primary rounded-lg h-20 w-20 flex justify-center items-center max-xl:h-16 max-xl:w-16 max-lg:h-20 max-lg:w-20 max-sm:h-16 max-sm:w-16">
                            <span className="text-3xl text-primaryColor font-bold font-poppins text-center max-xl:text-xl">{todayPosts?.length}</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-primaryColor font-bold font-poppins text-center mb-2 max-xl:text-sm max-xl:font-semibold max-lg:text-base max-lg:font-bold max-sm:text-xs">Em análise</span>
                        <div className="shadow-primary rounded-lg h-20 w-20 flex justify-center items-center max-xl:h-16 max-xl:w-16 max-lg:h-20 max-lg:w-20 max-sm:h-16 max-sm:w-16">
                            <span className="text-3xl text-primaryColor font-bold font-poppins text-center max-xl:text-xl">{inReviewPosts?.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}