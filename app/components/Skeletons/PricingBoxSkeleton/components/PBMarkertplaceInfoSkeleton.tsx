import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PBMarkertplaceInfoSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <div className='text-slate-400 font-semibold font-poppins max-xl:text-sm max-sm:text-xs w-16 h-6'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:block">
                <div className='text-slate-400 font-semibold font-poppins max-xl:text-sm max-sm:text-xs w-16 h-6'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default PBMarkertplaceInfoSkeleton