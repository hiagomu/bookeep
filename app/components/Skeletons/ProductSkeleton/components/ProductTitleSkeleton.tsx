import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const ProductTitleSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">                
                <div className="text-black dark:text-white text-2xl font-poppins font-bold max-xl:text-lg max-sm:text-sm max-sm:w-[10.75rem] h-8 line-clamp-2">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:block">
                <div className="text-black dark:text-white text-2xl font-poppins font-bold max-xl:text-lg max-sm:text-sm max-sm:w-[10.75rem] h-8 line-clamp-2">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default ProductTitleSkeleton