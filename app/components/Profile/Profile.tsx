import Image from "next/image"
import { BsCamera as PhotoIcon } from "react-icons/bs"
import { FaRegCalendarAlt as CalendarIcon } from "react-icons/fa"
import { User } from '@/app/@types'

interface IProfile {
    posts: any
    user?: User
}

export const Profile = ({ posts, user }: IProfile) => {

    const today = new Date().getDay()
    const todayPosts = posts?.filter((post: any) =>  new Date(post.createdAt).getDay() === today)
    const inReviewPosts = posts?.filter((post: any) =>  !post.published)

    return (
        <div className="w-[25.75rem] h-[26.5rem] bg-white dark:bg-secondaryDarkColor shadow-primary mt-28 mr-24 rounded-lg relative">
            <div className="bg-primaryColor rounded-t-lg h-32" />
            <div className="h-28 flex absolute top-0 ml-5 mt-20">
                <div className="relative">
                    <Image
                        alt="Foto de Perfil"
                        src={user?.image || ""}
                        width={85}
                        height={85}
                        className="rounded-full"
                    />
                    <div className="absolute top-0 right-0 bg-primaryDarkHoverColor p-1 rounded-full">
                        <PhotoIcon />
                    </div>
                </div>
                <span className="ml-4 mt-14 text-xl font-bold font-poppins text-black dark:text-white">{user?.name}</span>
            </div>
            <p className="mt-12 ml-5 font-poppins text-black text-opacity-60 font-semibold dark:text-white">Lorem ipsum dolor sit amet, consectetur</p>
            <div className="mt-2 ml-5 flex items-center">
                <CalendarIcon className="mr-2 text-black text-opacity-60 dark:text-white"/>
                <span className="text-xs font-poppins text-black text-opacity-60 dark:text-white font-semibold">Joined February 2023</span>
            </div>
            <ul className="flex mt-2">
                <li className="bg-primaryColor font-poppins px-2 rounded-xl text-xs font-semibold py-0.5 ml-5 mr-2 shadow-primary text-center">Ficction</li>
                <li className="bg-primaryColor font-poppins px-2 rounded-xl text-xs font-semibold py-0.5 mr-2 shadow-primary text-center">Drama</li>
                <li className="bg-primaryColor font-poppins px-2 rounded-xl text-xs font-semibold py-0.5 shadow-primary text-center">Romance</li>
            </ul>
            <div className="flex mt-6 w-[25.75rem] justify-evenly">
                <div className="flex flex-col justify-center items-center">
                    <span className="text-md text-primaryColor font-bold font-poppins text-center mb-2">Anúncios</span>
                    <div className="shadow-primary rounded-lg h-20 w-20 flex justify-center items-center">
                        <span className="text-3xl text-primaryColor font-bold font-poppins text-center">{posts?.length}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className="text-md text-primaryColor font-bold font-poppins text-center mb-2">Anúncios hoje</span>
                    <div className="shadow-primary rounded-lg h-20 w-20 flex justify-center items-center">
                        <span className="text-3xl text-primaryColor font-bold font-poppins text-center">{todayPosts?.length}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className="text-md text-primaryColor font-bold font-poppins text-center mb-2">Em análise</span>
                    <div className="shadow-primary rounded-lg h-20 w-20 flex justify-center items-center">
                        <span className="text-3xl text-primaryColor font-bold font-poppins text-center">{inReviewPosts?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}