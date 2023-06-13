import PBCouponSkeleton from "./components/PBCouponSkeleton"
import PBMarkertplaceInfoSkeleton from "./components/PBMarkertplaceInfoSkeleton"
import PBPriceAndShareSkeleton from "./components/PBPriceAndShareSkeleton"
import PBViewProductBttnSkeleton from "./components/PBViewProductBttnSkeleton"

export const PricingBoxSkeleton = () => {

    const skeletonColorsLight = {
        baseColor: "#eee",
        highlightColor: "#f5f5f5"
    }
    const skeletonColorsDark = {
        baseColor: "#202020",
        highlightColor: "#444"
    }

    return (
        <div className='w-[18rem] h-[13rem] p-5 shadow-primary rounded-lg dark:bg-secondaryDarkColor max-xl:p-4 max-xl:w-[16rem] max-xl:h-[11rem]'>
            <PBPriceAndShareSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
            <div className='mt-2'>
                <PBMarkertplaceInfoSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
            </div>
            <PBCouponSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
            <PBViewProductBttnSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
        </div>
    )
}