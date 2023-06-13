import 'react-loading-skeleton/dist/skeleton.css'
import ProductImageSkeleton from "./components/ProductImageSkeleton"
import ProductTitleSkeleton from "./components/ProductTitleSkeleton"
import ProductPriceAndSellerSkeleton from "./components/ProductPriceAndSellerSkeleton"
import ProductSellerInfoSkeleton from "./components/ProductSellerInfoSkeleton"
import InteractionsSkeleton from "../components/InteractionsSkeleton"
import ProductStatusSkeleton from "./components/ProductStatusSkeleton"
import ProductDescriptionSkeleton from "./components/ProductDescriptionSkeleton"

export const ProductSkeleton = () => {

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
            <div className="w-[51rem] h-[17rem] flex flex-col relative max-xl:w-[40rem] max-xl:h-[14rem] max-md:w-[32rem] max-sm:w-[18rem] max-sm:h-fit">
                <div className='flex items-center mt-2'>
                    <ProductStatusSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                </div>
                <div className='flex gap-4'>
                    <ProductImageSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                    <div className='relative break-words w-[41.25rem] max-xl:w-[32.75rem] max-lg:w-[30.75rem] max-md:w-[22.75rem] max-sm:w-[10.75rem]'>
                        <ProductTitleSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                        <div className="hidden max-lg:flex items-center">
                            <ProductPriceAndSellerSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                        </div>
                        <ProductDescriptionSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                        <ProductSellerInfoSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                        <InteractionsSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                    </div>
                </div>
            </div>
        </>
    )
}