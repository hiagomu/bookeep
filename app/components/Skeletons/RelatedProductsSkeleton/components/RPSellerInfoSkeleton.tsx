import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const RPSellerInfoSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="flex mt-2 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5 dark:hidden">
                <div className='h-5 w-5 mr-2 max-sm:w-4'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} circle />
                </div>
                <div
                    className="mr-2 max-sm:mr-1 h-5 w-20"
                >
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="mt-2 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5 hidden dark:flex">
                <div className='h-5 w-5 mr-2 max-sm:w-4'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} circle />
                </div>
                <div
                    className="mr-2 max-sm:mr-1 h-5 w-20"
                >
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default RPSellerInfoSkeleton