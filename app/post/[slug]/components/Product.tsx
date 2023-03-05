import { FaEllipsisH as OptionsIcon } from "react-icons/fa"
import { MdVerified as VerifiedIcon } from 'react-icons/md'
import Image from "next/image"
import Link from "next/link"
import { Interactions } from "@/app/components/Interactions"
import formatDistance from "date-fns/formatDistance"
import { ptBR } from "date-fns/locale"

interface IProduct {
    id: string
    title: string
    createdAt: Date
    description?: string
    bookImageURL: string
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
}

const Product = ({
    id,
    user,
    title,
    comments,
    createdAt,
    description,
    bookImageURL,
}: IProduct) => {

    const today = Date.now()

    return (
        <div className="w-[51rem] h-[17rem] flex flex-col relative">
            <div className='flex items-center mt-2'>
                <span
                    className="block text-primaryColor dark:text-slate-400 font-bold w-full text-right text-sm serif max-sm:text-xs"
                >
                    {formatDistance(new Date(createdAt), today, {
                        locale: ptBR,
                    })}
                </span>
                <button
                    className="text-black ml-2 flex items-center justify-center rounded-full h-6 w-6 bg-slate-200 dark:bg-primaryDarkHoverColor"
                >
                    <OptionsIcon className="text-primaryColor"/>
                </button>
            </div>
            <div className='flex'>
                <Image
                    src={bookImageURL}
                    alt="product"
                    width={136}
                    height={192}
                    className="mr-5 max-xl:w-24 max-xl:h-36 max-lg:w-30 max-lg:h-32 max-sm:w-16 max-sm:h-24 rounded"
                />
                <div className='relative'>
                    <h1 className="block text-black dark:text-white text-2xl font-bold max-xl:text-lg max-lg:text-base max-sm:text-sm max-sm:truncate">
                        {title}
                    </h1>
                    { description && <p className='text-sm font-medium mt-2 text-black dark:text-white'>{description}</p> }
                    <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5">
                        <Image
                            alt="Imagem de perfil do usuário"
                            src={user.image}
                            className="mr-2 rounded-full max-lg:w-5 max-sm:w-4"
                            width={24}
                            height={24}
                        />
                        <Link
                            href={"/"}
                            className="text-primaryColor dark:text-white mr-2 font-bold max-xl:text-sm max-sm:text-xs max-sm:mr-1"
                        >
                            {user.name}
                        </Link>
                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                    </div>
                    <Interactions
                        boos={5}
                        comments={comments?.length || 0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product