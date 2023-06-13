import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PBPriceAndShareSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden flex justify-between">
                <div className='text-primaryColor text-4xl font-poppins font-semibold max-xl:text-3xl h-10 w-40'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className='rounded-full h-5 w-5'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} circle/>
                </div>
            </div>
            <div className="hidden dark:flex justify-between">
                <div className='text-primaryColor text-4xl font-poppins font-semibold max-xl:text-3xl h-10 w-40'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
                <div className='rounded-full h-5 w-5'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} circle/>
                </div>
            </div>
        </>
    )
}

export default PBPriceAndShareSkeleton