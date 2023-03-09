import { PostSkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PostInterectionsSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: PostSkeletonType) => {
    return (
        <>
            <div className="absolute w-32 h-7 rounded-lg bottom-0 right-0 max-lg:h-6 max-lg:w-28 max-sm:w-20 max-sm:h-5 dark:hidden">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
            </div>
            <div className="absolute w-32 h-7 rounded-lg bottom-0 right-0 max-lg:h-6 max-lg:w-28 max-sm:w-20 max-sm:h-5 hidden dark:block">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
            </div>
        </>
    )
}

export default PostInterectionsSkeleton