import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const ProductPriceAndSellerSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <div className="hidden max-lg:flex mb-2">
            <div className="dark:hidden flex items-center">                
                <div className='text-primaryColor text-xl font-poppins font-bold mr-2 max-md:text-lg h-7 w-16'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className='text-slate-400 mr-2 font-semibold font-poppins max-xl:text-sm max-md:text-xs max-sm:mr-1 h-4 w-12'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
            </div>
            <div className="hidden dark:flex items-center">
                <div className='text-primaryColor text-xl font-poppins font-bold mr-2 max-md:text-lg h-7 w-16 block'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
                <div className='text-slate-400 mr-2 font-semibold font-poppins max-xl:text-sm max-md:text-xs max-sm:mr-1 h-4 w-12'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </div>
    )
}

export default ProductPriceAndSellerSkeleton