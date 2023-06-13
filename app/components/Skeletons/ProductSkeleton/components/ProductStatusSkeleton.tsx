import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const ProductStatusSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <span className="block text-primaryColor dark:text-slate-400 font-poppins font-medium w-full text-right text-sm serif max-md:text-xs dark:hidden">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </span>      
            </div>
            <div className="hidden dark:block">
                <span className="text-primaryColor dark:text-slate-400 font-poppins font-medium w-full text-right text-sm serif max-md:text-xs hidden dark:block">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </span>
            </div>
        </>
    )
}

export default ProductStatusSkeleton