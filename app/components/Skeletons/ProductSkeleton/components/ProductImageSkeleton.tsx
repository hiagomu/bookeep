import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const ProductImageSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="w-36 h-48 rounded-t-lg max-xl:w-32 max-xl:h-40 max-sm:w-20 max-sm:h-28 dark:hidden">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
            </div>
            <div className="w-36 h-48 rounded-t-lg max-xl:w-32 max-xl:h-40 max-sm:w-20 max-sm:h-28 hidden dark:block">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
            </div>
        </>
    )
}

export default ProductImageSkeleton