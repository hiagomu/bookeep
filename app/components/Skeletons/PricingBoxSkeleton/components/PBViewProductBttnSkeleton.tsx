import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PBViewProductBttnSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <div
                    className='rounded-lg mt-5 max-xl:mt-2 w-64 h-10 max-xl:w-56 max-xl:h-8'
                >
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:block">
                <div
                    className='rounded-lg mt-5 max-xl:mt-2 w-64 h-10 max-xl:w-56 max-xl:h-8'
                >
                        <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default PBViewProductBttnSkeleton