import { InteractionsSkeletonType, SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const InteractionsSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark,
    isSmall
}: InteractionsSkeletonType) => {
    return (
        <>
            <div className={`absolute rounded-lg bottom-0 max-lg:h-6 max-lg:w-28 max-sm:w-20 max-sm:h-5 dark:hidden ${isSmall ? "w-28 h-6 left-0": "w-32 h-7 right-0"}`}>
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
            </div>
            <div className={`absolute rounded-lg bottom-0 max-lg:h-6 max-lg:w-28 max-sm:w-20 max-sm:h-5 hidden dark:block ${isSmall ? "w-28 h-6 left-0": "w-32 h-7 right-0"}`}>
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
            </div>
        </>
    )
}

export default InteractionsSkeleton