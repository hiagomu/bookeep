import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const RPProductTitleSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <div className='text-black font-semibold font-poppins mt-2 block dark:text-white max-xl:text-sm h-12 w-64 max-xl:w-56 max-xl:h-8'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:flex">
                <div className='text-black font-semibold font-poppins mt-2 block dark:text-white max-xl:text-sm h-12 w-64 max-xl:w-56 max-xl:h-8'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default RPProductTitleSkeleton