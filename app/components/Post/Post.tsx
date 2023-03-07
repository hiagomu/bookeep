"use client"

import { Interactions } from "../Interactions"
import Link from "next/link"
import { MdVerified as VerifiedIcon } from 'react-icons/md'
import { FaEllipsisH as OptionsIcon } from 'react-icons/fa'
import formatDistance from "date-fns/formatDistance"
import ptBR from "date-fns/locale/pt-BR"
import Image from "next/image"
import { useState } from "react"
import { Actions } from "../Actions"

interface IPost {
    id: string
    user: {
        emailVerified: boolean | null
        email: string
        image: string
        name: string
        id: string
    }
    comments?: {
        id: string
        userId: string
        postId: string
        message: string
        createdAt: string
    }[]
    likes?: {
        id: string
        postId: string
        userId: string
    }[]
    createdAt: Date
    title: string
    price: string
    seller: string
    marketplace: string
    bookImageURL: string
    userProfileURL: string
    isUserVerified: boolean
    isMarketplaceVerified: boolean
}

export const Post = ({
    id,
    user,
    likes,
    title,
    price,
    seller,
    comments,
    createdAt,
    marketplace,
    bookImageURL,
    userProfileURL,
    isUserVerified,
    isMarketplaceVerified
}: IPost) => {

    const today = Date.now()
    const [isActionsOpen, setIsActionsOpen] = useState(false)

    return (
        <div
            className="bg-white dark:bg-secondaryDarkColor w-post h-fit rounded-3xl flex items-center flex-col shadow-primary mb-10 relative overflow-hidden max-xl:w-post-xl max-lg:w-post-lg max-sm:w-post-sm max-sm:mb-5"
        >
            <div className="w-11/12 mb-3 max-sm:mb-0">
                <div className="flex items-center mt-2 relative">
                    <span
                        className="font-poppins block text-primaryColor dark:text-slate-400 font-semibold w-full text-right text-sm serif max-sm:text-xs"
                    >
                        {formatDistance(new Date(createdAt), today, {
                            locale: ptBR,
                        })}
                    </span>
                    <button
                        className="text-black ml-2 flex items-center justify-center rounded-full h-6 w-6 bg-slate-200 dark:bg-primaryDarkHoverColor"
                        onClick={() => setIsActionsOpen(!isActionsOpen)}
                    >
                        <OptionsIcon className="text-primaryColor"/>
                    </button>
                    <Actions user={user} postId={id} isActionsOpen={isActionsOpen} setIsActionsOpen={setIsActionsOpen}/>
                </div>
                <div className="flex relative">
                        <Image
                            src={bookImageURL}
                            alt="product"
                            width={136}
                            height={192}
                            className="mr-5 max-xl:w-24 max-xl:h-36 max-lg:w-30 max-lg:h-32 max-sm:w-16 max-sm:h-24 rounded"
                        />
                    <div className="mt-2 h-fit max-lg:mt-1 max-sm:w-44">
                        <Link
                            href={`/post/${id}`}
                            className="font-poppins block text-black dark:text-white text-xl font-bold max-xl:text-lg max-lg:text-base max-sm:text-sm max-sm:line-clamp-2"
                        >
                            {title}
                        </Link>
                        <div className="flex items-end">
                            <span
                                className="font-poppins block text-primaryColor font-bold text-2xl mt-2 max-xl:text-xl max-lg:text-lg max-lg:mt-1 max-sm:text-base"
                            >
                                R${new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(Number(price.replace(",", "."))).slice(3)}
                            </span>
                            <div className="flex mb-1 ml-4 items-center max-sm:ml-2">
                                <span
                                    className="mr-2 font-poppins font-medium text-slate-500 dark:text-white max-xl:text-sm max-sm:text-xs max-sm:mr-1"
                                >
                                    {marketplace}
                                </span>
                                { isMarketplaceVerified && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                            </div>
                        </div>
                        <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-1 max-sm:mb-6">
                            <Image
                                alt="Imagem de perfil do usuário"
                                src={user.image}
                                className="mr-2 rounded-full max-lg:w-5 max-sm:w-4"
                                width={24}
                                height={24}
                            />
                            <Link
                                href={userProfileURL}
                                className="font-poppins text-primaryColor dark:text-white mr-2 font-medium max-xl:text-sm max-sm:text-xs max-sm:mr-1"
                            >
                                {seller}
                            </Link>
                            { isUserVerified && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                        </div>
                    </div>
                    <Interactions
                        id={id}
                        boos={likes?.length || 0}
                        comments={comments?.length || 0}
                    />
                </div>
            </div>
            <Link
                href={`/post/${id}`}
                className="font-poppins bg-primaryColor px-12 py-1 rounded-t-lg font-semibold hover:bg-primaryHoverColor max-xl:px-8 max-xl:text-sm max-sm:py-0.5 max-sm:text-xs max-sm:mt-2 max-sm:px-5"
            >
                Ver mais
            </Link>
        </div>
    )
}
