import Skeleton from "react-loading-skeleton"

interface IPostSellerInfoSkeleton {
    skeletonColorsLight: {
        baseColor: string
        highlightColor: string
    }
    skeletonColorsDark: {
        baseColor: string
        highlightColor: string
    }
}

const PostSellerInfoSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: IPostSellerInfoSkeleton) => {
    return (
        <>
            <div>
                <div className="w-6 h-6 mr-2 max-lg:w-4 max-sm:h-4 dark:hidden">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} circle />
                </div>
                <div className="w-6 h-6 mr-2 max-lg:w-4 max-sm:h-4 hidden dark:block">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} circle />
                </div>
            </div>
            <div>
                <div className="h-5 w-20 mr-2 max-sm:mr-1 max-sm:h-4 max-sm:w-16 dark:hidden">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className="h-5 w-20 mr-2 max-sm:mr-1 max-sm:h-4 max-sm:w-16 hidden dark:block">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default PostSellerInfoSkeleton


