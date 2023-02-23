import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

interface IPostSkeleton {
    count: number
}

export const PostSkeleton = () => {
    return (
        <div
            className="bg-white dark:bg-secondaryDarkColor w-post h-fit rounded-3xl flex items-center flex-col shadow-primary mb-10 relative overflow-hidden max-xl:w-post-xl max-lg:w-post-lg max-sm:w-post-sm max-sm:mb-5"
        >
            <div className="w-11/12">
                <div className="flex justify-end w-full mt-2">
                    <div className="w-24 h-5 max-lg:w-20 max-lg:h-4">
                        <Skeleton width="100%" height="100%" />
                    </div>
                </div>
                <div className="flex relative w-full">
                    <div className="w-36 h-48 mr-5 max-xl:w-24 max-xl:h-36 max-lg:w-30 max-lg:h-32 max-sm:w-16 max-sm:h-24">
                        <Skeleton height="100%" width="100%"/>
                    </div>
                    <div className="mt-2 h-fit max-lg:mt-1 max-sm:w-44">
                        <div className="h-5 w-[28rem] max-lg:w-[22rem] max-sm:w-[11rem] max-sm:hidden">
                            <Skeleton count={2} width="100%" height="100%" />
                        </div>
                        <div className="h-5 w-[28rem] max-lg:w-[22rem] max-sm:w-[11rem] hidden max-sm:block">
                            <Skeleton count={1} width="100%" height="100%" />
                        </div>
                        <div className="mt-7 h-fit flex items-end max-sm:mt-0">
                            <div className="mt-2 w-24 h-8 max-lg:h-6 max-lg:w-20">
                                <Skeleton width="100%" height="100%" />
                            </div>
                            <div className="mb-1 ml-4 max-sm:ml-2 h-6 w-16 max-lg:w-12 max-lg:h-5">
                                <Skeleton width="100%" height="100%" />
                            </div>
                        </div>
                        <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-2 max-sm:mb-5">
                            <div className="w-6 h-6 mr-2 max-lg:w-4 max-sm:h-4">
                                <Skeleton width="100%" height="100%" circle/>
                            </div>
                            <div className="h-5 w-20 mr-2 max-sm:mr-1 max-sm:h-4 max-sm:w-16    ">
                                <Skeleton width="100%" height="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-32 h-7 rounded-lg bottom-0 right-0 max-lg:h-6 max-lg:w-28 max-sm:w-20 max-sm:h-5">
                        <Skeleton width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="w-40 h-8 rounded-t-lg max-xl:w-32 max-xl:h-7 max-sm:w-20 max-sm:mt-2 max-sm:h-5">
                <Skeleton width="100%" height="100%" />
            </div>
        </div>
    )
}