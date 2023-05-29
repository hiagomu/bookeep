import Image from "next/image"
import Link from "next/link"
import { Interactions } from "@/app/components/Interactions"
import { MdVerified as VerifiedIcon } from 'react-icons/md'
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { PostType } from "@/app/@types"

const getPosts = async () => {
    const response = await axios.get("/api/posts/getApprovedPosts?category=all&max=100&min=0&orderBy=desc&search=")
    return response.data.slice(0, 2)
}

const RelatedProducts = () => {

    const { data } = useQuery<PostType[]>({
        queryFn: getPosts,
        queryKey: ["other-posts"]
    })

    console.log(data)

    return (
        <div>
            {
                data?.map(product => {
                    return (
                        <div className='w-[18rem] h-fit p-4 shadow-primary rounded-lg mb-2 dark:bg-secondaryDarkColor max-xl:p-4 max-xl:w-[16rem]'>
                            <div className='flex'>
                                <Image
                                    src={product.bookImageURL}
                                    alt="Imagem do produto"
                                    width={75}
                                    height={90}
                                    className="mr-5 rounded"
                                />
                                <div className='relative'>
                                    <span className='text-primaryColor font-poppins font-semibold text-xl'>
                                        R${new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(Number(product.price)).slice(3)}
                                    </span>
                                    <div className='flex items-center'>
                                        <span className='text-slate-400 mr-2 font-semibold font-poppins max-xl:text-sm max-sm:text-xs max-sm:mr-1'>{product.seller}</span>
                                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                                    </div>
                                    <div className="flex mt-2 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5">
                                        <Image
                                            alt="Imagem de perfil do usuário"
                                            src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                                            className="mr-2 rounded-full max-lg:w-5 max-sm:w-4"
                                            width={20}
                                            height={20}
                                        />
                                        <Link
                                            href={`/profile/${product.user.id}`}
                                            className="text-primaryColor dark:text-white mr-2 font-medium font-poppins text-sm max-sm:text-xs max-sm:mr-1"
                                        >
                                            {product.user.name}
                                        </Link>
                                        <Interactions id={product.user.id} likes={product.likes} comments={product.comments?.length || 0} little={true}/>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href={`/post/${product.id}`}
                                className='text-black font-semibold font-poppins mt-2 block dark:text-white max-xl:text-sm'
                            >{product.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RelatedProducts