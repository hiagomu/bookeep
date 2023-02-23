import Skeleton from "react-loading-skeleton"

interface IPostProductInfoSkeleton {
    skeletonColorsLight: {
        baseColor: string
        highlightColor: string
    }
    skeletonColorsDark: {
        baseColor: string
        highlightColor: string
    }
}

const PostProductInfoSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: IPostProductInfoSkeleton) => {
    return (
        <>
            <div>
                <div className="mt-2 w-24 h-8 max-lg:h-6 max-lg:w-20 dark:hidden">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className="mt-2 w-24 h-8 max-lg:h-6 max-lg:w-20 hidden dark:block">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
            <div>
                <div className="mb-1 ml-4 max-sm:ml-2 h-6 w-16 max-lg:w-12 max-lg:h-5 dark:hidden">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
                </div>
                <div className="mb-1 ml-4 max-sm:ml-2 h-6 w-16 max-lg:w-12 max-lg:h-5 hidden dark:block">
                    <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
                </div>
            </div>
        </>
    )
}

export default PostProductInfoSkeleton