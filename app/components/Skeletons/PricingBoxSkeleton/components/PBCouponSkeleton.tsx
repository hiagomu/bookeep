import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const PBCouponSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <div className='text-slate-500 text-xs font-bold mt-3 h-6 w-20'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:block">
                <div className='text-slate-500 text-xs font-bold mt-3 h-6 w-20'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default PBCouponSkeleton