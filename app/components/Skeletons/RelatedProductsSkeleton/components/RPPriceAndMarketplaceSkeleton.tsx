import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const RPPriceAndMarketplaceSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <div className='h-7 w-16 mb-1'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className='h-6 w-16'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:flex">
                <div className='h-7 w-16 mb-1'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
                <div className='h-6 w-16'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default RPPriceAndMarketplaceSkeleton