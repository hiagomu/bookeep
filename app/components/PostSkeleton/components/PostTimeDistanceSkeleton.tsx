import Skeleton from "react-loading-skeleton"

interface IPostTimeDistanceSkeleton {
    skeletonColorsLight: {
        baseColor: string
        highlightColor: string
    }
    skeletonColorsDark: {
        baseColor: string
        highlightColor: string
    }
}

const PostTimeDistanceSkeleton = ({
    skeletonColorsLight,
    skeletonColorsDark
}: IPostTimeDistanceSkeleton) => {
    return (
        <>
            <div className="w-24 h-5 max-lg:w-20 max-lg:h-4 dark:hidden">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsLight.baseColor} highlightColor={skeletonColorsLight.highlightColor} />
            </div>
            <div className="w-24 h-5 max-lg:w-20 max-lg:h-4 hidden dark:block">
                <Skeleton width="100%" height="100%" baseColor={skeletonColorsDark.baseColor} highlightColor={skeletonColorsDark.highlightColor} />
            </div>
        </>
    )
}

export default PostTimeDistanceSkeleton