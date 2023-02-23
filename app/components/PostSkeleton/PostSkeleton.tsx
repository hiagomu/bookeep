import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import PostImageSkeleton from "./components/PostImageSkeleton"
import PostProductInfoSkeleton from "./components/PostProductInfoSkeleton"
import PostTimeDistanceSkeleton from "./components/PostTimeDistanceSkeleton"
import PostTitleSkeleton from "./components/PostTitleSkeleton"
import PostSellerInfoSkeleton from "./components/PostSellerInfoSkeleton"
import PostInterectionsSkeleton from "./components/PostInterectionsSkeleton"
import PostDetailsSkeleton from "./components/PostDetailsSkeleton"

interface IPostSkeleton {
    count: number
}

export const PostSkeleton = ({count}: IPostSkeleton) => {

    const skeletonColorsLight = {
        baseColor: "#eee",
        highlightColor: "#f5f5f5"
    }
    const skeletonColorsDark = {
        baseColor: "#202020",
        highlightColor: "#444"
    }

    return (
        <>
            {
                Array(count).fill(0).map(item =>{
                    return <div className="bg-white dark:bg-secondaryDarkColor w-post h-fit rounded-3xl flex items-center flex-col shadow-primary mb-10 relative overflow-hidden max-xl:w-post-xl max-lg:w-post-lg max-sm:w-post-sm max-sm:mb-5">
                        <div className="w-11/12">
                            <div className="flex justify-end w-full mt-2">
                                <PostTimeDistanceSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                            </div>
                            <div className="flex relative w-full">
                                <PostImageSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                                <div className="mt-2 h-fit max-lg:mt-1 max-sm:w-44">
                                    <PostTitleSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                                    <div className="mt-7 h-fit flex items-end max-sm:mt-0">
                                        <PostProductInfoSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                                    </div>
                                    <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-2 max-sm:mb-5">
                                        <PostSellerInfoSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                                    </div>
                                </div>
                                <PostInterectionsSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                            </div>
                        </div>
                        <PostDetailsSkeleton skeletonColorsDark={skeletonColorsDark} skeletonColorsLight={skeletonColorsLight} />
                    </div>
                })
            }
        </>
    )
}