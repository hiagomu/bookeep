import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PostDetailsSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="w-40 h-8 rounded-t-lg max-xl:w-32 max-xl:h-7 max-sm:w-20 max-sm:mt-2 max-sm:h-5 dark:hidden">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
            </div>
            <div className="w-40 h-8 rounded-t-lg max-xl:w-32 max-xl:h-7 max-sm:w-20 max-sm:mt-2 max-sm:h-5 hidden dark:block">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
            </div>
        </>
    )
}

export default PostDetailsSkeleton