"use client"
import Product from './components/Product'
import ProductDetailBox from './components/ProductDetailBox'
import CommentInput from './components/CommentInput'
import CommentSection from './components/CommentSection'
import PricingBox from './components/PricingBox'
import RelatedProducts from './components/RelatedProducts'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { FaExternalLinkAlt as VisitIcon } from 'react-icons/fa'

const fecthDetails = async (slug: string) => {
    const response = await axios.get(`/api/posts/${slug}`)
    return response.data
}

interface IURL {
    params: {
        slug: string
    }
}

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
        user: {
            emailVerified: boolean | null
            email: string
            image: string
            name: string
            id: string
        }
    }[]
    likes?: {
        id: string
        postId: string
        userId: string
    }[]
    boos: number
    coupon: string
    createdAt: Date
    description?: string
    title: string
    price: string
    seller: string
    saleLink: string
    marketplace: string
    bookImageURL: string
    userProfileURL: string
    isUserVerified: boolean
    isMarketplaceVerified: boolean
}

export default function PostDetail(url: IURL) {

    const { data, isLoading } = useQuery<IPost>({
        queryKey: ['detail-post'],
        queryFn: () => fecthDetails(url.params.slug)
    })

    return (
        <div className="mt-24 flex justify-between w-[78.75rem] max-2xl:w-[73rem] max-xl:w-[58rem] max-lg:justify-center max-md:w-[36rem] max-sm:w-[24rem] max-lg:mt-20 max-sm:mt-16">
            <div>
                <div>
                    {
                        data &&
                        <Product
                            bookImageURL={data.bookImageURL}
                            description={data.description}
                            createdAt={data.createdAt}
                            comments={data.comments}
                            seller={"Amazon"}
                            title={data.title}
                            price={data.price}
                            likes={data.likes}
                            user={data.user}
                            key={data.id}
                            id={data.id}
                        />
                    }
                </div>
                <div className='max-lg:hidden flex justify-between mt-2 max-xl:w-[40rem]'>
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                </div>
                {
                    data &&
                    <div className='hidden max-lg:block'>
                        <Link
                            className='flex items-center justify-center bg-primaryColor font-poppins text-white rounded-lg w-full py-1.5 font-semibold text-xl mt-5 hover:bg-primaryHoverColor max-md:mt-1 max-lg:text-lg max-md:w-[32rem] max-xl:py-1 max-sm:w-[18rem] max-sm:text-base max-sm:mt-5'
                            href={data.saleLink}
                        >
                            Ver promoção
                            <VisitIcon className='text-white ml-2'/>
                        </Link>
                    </div>
                }
                <div className='w-[51rem] max-xl:w-[40rem] max-md:w-[32rem] max-sm:w-[18rem]'>
                    {
                        data &&
                        <>
                            <CommentInput id={data.id}/>
                            {
                                data.comments?.length !== undefined && data.comments?.length > 0 &&
                                <CommentSection comments={data.comments}/>
                            }
                        </>
                    }
                </div>
            </div>
            <div className='max-lg:hidden'>
                {
                    data &&
                    <PricingBox
                        saleLink={data.saleLink}
                        seller={"Amazon"}
                        coupon={data.coupon}
                        price={data.price}
                        key={data.id}
                    />
                }
                <div className='mt-16'>
                    <h2 className='text-black font-bold font-poppins text-2xl mb-4 dark:text-white max-xl:text-xl'>Relacionados</h2>
                    <RelatedProducts />
                    <RelatedProducts />
                </div>
            </div>
        </div>
    )
}