import 'react-loading-skeleton/dist/skeleton.css'
import InteractionsSkeleton from '../components/InteractionsSkeleton'
import RPPriceAndMarketplaceSkeleton from './components/RPPriceAndMarketplaceSkeleton'
import RPProductImageSkeleton from './components/RPProductImageSkeleton'
import RPProductTitleSkeleton from './components/RPProductTitleSkeleton'
import RPSellerInfoSkeleton from './components/RPSellerInfoSkeleton'

interface IRelatedProductsSkeleton {
    count: number
}

export const RelatedProductsSkeleton = ({count}: IRelatedProductsSkeleton) => {

    const skeletonColorsLight = {
        baseColor: "#eee",
        highlightColor: "#f5f5f5"
    }
    const skeletonColorsDark = {
        baseColor: "#202020",
        highlightColor: "#444"
    }

    return (
        <>
            {
                Array(count).fill(0).map((item, index) => {
                    return <div className='w-[18rem] h-fit p-4 shadow-primary rounded-lg mb-2 dark:bg-secondaryDarkColor max-xl:p-4 max-xl:w-[16rem]' key={index}>
                        <div className='flex gap-6'>
                            <RPProductImageSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                            <div className='relative'>
                                <RPPriceAndMarketplaceSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                                <RPSellerInfoSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                                <InteractionsSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} isSmall={true}/>
                            </div>
                        </div>
                        <RPProductTitleSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                    </div>
                })
            }
        </>
    )
}