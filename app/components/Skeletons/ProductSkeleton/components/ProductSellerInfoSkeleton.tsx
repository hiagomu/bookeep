import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const ProductSellerInfoSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-2 max-sm:mb-8 dark:hidden">
                <div className="mr-2 rounded-full h-6 w-6 max-sm:h-4 max-sm:w-4">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} circle />
                </div>
                <div className="text-primaryColor dark:text-white w-20 h-4 mr-2 font-medium font-poppins max-xl:text-sm max-md:text-xs max-sm:mr-1">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="items-center mt-3 max-xl:mt-2 max-lg:mt-2 max-sm:mb-8 hidden dark:flex">
                <div className="mr-2 rounded-full h-6 w-6 max-sm:h-4 max-sm:w-4">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} circle />
                </div>
                <div className="text-primaryColor dark:text-white w-20 h-4 mr-2 font-medium font-poppins max-xl:text-sm max-md:text-xs max-sm:mr-1">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default ProductSellerInfoSkeleton