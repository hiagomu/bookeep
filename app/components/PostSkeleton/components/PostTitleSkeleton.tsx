import { PostSkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PostTitleSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: PostSkeletonType) => {
    return (
        <>
            <div className="block dark:hidden">
                <div className="h-5 w-[28rem] max-lg:w-[22rem] max-sm:w-[11rem] max-sm:hidden">
                    <Skeleton count={2} width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className="h-5 w-[28rem] max-lg:w-[22rem] max-sm:w-[11rem] hidden max-sm:block">
                    <Skeleton count={1} width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:block">
                <div className="h-5 w-[28rem] max-lg:w-[22rem] max-sm:w-[11rem] max-sm:hidden">
                    <Skeleton count={2} width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
                <div className="h-5 w-[28rem] max-lg:w-[22rem] max-sm:w-[11rem] hidden max-sm:block">
                    <Skeleton count={1} width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default PostTitleSkeleton