"use client"
import Product from './components/Product'
import ProductDetailBox from './components/ProductDetailBox'
import CommentInput from './components/CommentInput'
import CommentSection from './components/CommentSection'
import PricingBox from './components/PricingBox'
import RelatedProducts from './components/RelatedProducts'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
        <div className="mt-24 flex justify-between w-[78.75rem]">
            <div>
                {
                    data &&
                    <Product
                        bookImageURL={data.bookImageURL}
                        description={data.description}
                        createdAt={data.createdAt}
                        comments={data.comments}
                        title={data.title}
                        user={data.user}
                        key={data.id}
                        id={data.id}
                    />
                }
                <div className='flex justify-between mt-2'>
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                    <ProductDetailBox />
                </div>
                <div className='w-[51rem]'>
                    {
                        data &&
                        <>
                            <CommentInput id={data.id}/>
                            <CommentSection comments={data.comments}/>
                        </>
                    }
                </div>
            </div>
            <div>
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
                    <h2 className='text-black font-bold font-poppins text-2xl mb-4 dark:text-white'>Relacionados</h2>
                    <RelatedProducts />
                    <RelatedProducts />
                </div>
            </div>
        </div>
    )
}