import { FaEllipsisH as OptionsIcon } from "react-icons/fa"
import { MdVerified as VerifiedIcon } from 'react-icons/md'
import Image from "next/image"
import Link from "next/link"
import { Interactions } from "@/app/components/Interactions"
import formatDistance from "date-fns/formatDistance"
import { ptBR } from "date-fns/locale"
import { PostDetailedType } from "@/app/@types"
import { useSession } from "next-auth/react"

const Product = ({
    id,
    user,
    likes,
    price,
    title,
    seller,
    comments,
    createdAt,
    published,
    description,
    bookImageURL
}: PostDetailedType) => {

    const today = Date.now()
    const { data: session } = useSession()

    return (
        <div className="w-[51rem] h-[17rem] flex flex-col relative max-xl:w-[40rem] max-xl:h-[14rem] max-md:w-[32rem] max-sm:w-[18rem] max-sm:h-fit">
            <div className='flex items-center mt-2'>
                <span
                    className="block text-primaryColor dark:text-slate-400 font-poppins font-medium w-full text-right text-sm serif max-md:text-xs"
                >
                    {
                        published ?
                            formatDistance(new Date(createdAt), today, {
                                locale: ptBR,
                            })
                            : "Aguardando análise"
                    }
                </span>
                {
                    published &&
                        <button
                            className="text-black ml-2 flex items-center justify-center rounded-full h-6 w-6 bg-slate-200 dark:bg-primaryDarkHoverColor"
                        >
                            <OptionsIcon className="text-primaryColor"/>
                        </button>
                }
            </div>
            <div className='flex'>
                <Image
                    src={bookImageURL}
                    alt="product"
                    width={136}
                    height={192}
                    className="mr-5 max-xl:w-24 max-xl:h-36 max-lg:w-32 max-lg:h-44 max-sm:w-24 max-sm:h-40 rounded"
                />
                <div className='relative break-words w-[41.25rem] max-xl:w-[32.75rem] max-lg:w-[30.75rem] max-md:w-[22.75rem] max-sm:w-[10.75rem]'>
                    <h1 className="block text-black dark:text-white text-2xl font-poppins font-bold max-xl:text-lg max-sm:text-sm max-sm:w-[10.75rem] max-sm:line-clamp-2">
                        {title}
                    </h1>
                    <div className="hidden max-lg:flex items-center">
                        <span className='text-primaryColor text-xl font-poppins font-bold mr-2 max-md:text-lg'>R$ {price}</span>
                        <div className="flex items-center">
                            <span className='text-slate-400 mr-2 font-semibold font-poppins max-xl:text-sm max-md:text-xs max-sm:mr-1'>{seller}</span>
                            { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                        </div>
                    </div>
                    { description && <p className='text-sm font-medium mt-2 break-words text-black dark:text-white max-xl:line-clamp-4 max-md:text-xs max-md:mt-1 max-sm:h-24 max-sm:line-clamp-6 max-sm:w-[10.75rem]'>{description}</p> }
                    <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-2 max-sm:mb-8 ">
                        <Image
                            alt="Imagem de perfil do usuário"
                            src={user.image}
                            className="mr-2 rounded-full max-lg:w-5 max-sm:w-4"
                            width={24}
                            height={24}
                        />
                        <Link
                            href={`/profile/${session?.user.id}`}
                            className="text-primaryColor dark:text-white mr-2 font-medium font-poppins max-xl:text-sm max-md:text-xs max-sm:mr-1"
                        >
                            {user.name}
                        </Link>
                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                    </div>
                    <Interactions
                        id={id}
                        likes={likes}
                        comments={comments?.length || 0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product