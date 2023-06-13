import { SkeletonType } from "@/app/@types"
import Skeleton from "react-loading-skeleton"

const ProductDescriptionSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: SkeletonType) => {
    return (
        <>
            <div className="dark:hidden">
                <p className='text-sm font-medium h-20 mt-1 break-words text-black dark:text-white max-xl:line-clamp-4 max-md:text-xs max-md:mt-1 max-sm:h-24 max-sm:line-clamp-6 max-sm:w-[10.75rem]'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </p>
            </div>
            <div className="hidden dark:block">
                <p className='text-sm font-medium h-20 mt-1 break-words text-black dark:text-white max-xl:line-clamp-4 max-md:text-xs max-md:mt-1 max-sm:h-24 max-sm:line-clamp-6 max-sm:w-[10.75rem]'>
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />        
                </p>
            </div>
        </>
    )
}

export default ProductDescriptionSkeleton