"use client"

import { Post } from "./components/Post"
import { Search } from "./components/Search"
import { useState } from "react"
import { NewPost } from "./components/Modals/NewPost"
import Image from "next/image"
import axios, { AxiosError } from "axios"
import { QueryFunctionContext, QueryKey, useQuery, useQueryClient } from "@tanstack/react-query"
import { PostSkeleton } from "./components/Skeletons/PostSkeleton"
import { toast } from "react-hot-toast"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { FilterQueryParams, PostType } from "./@types"
import { Filters } from "./components/Filters"
import { Bookstores } from "./components/Bookstores"
import qs from "query-string"
import notFoundImage from "../public/assets/not_found.svg"

const getPosts = async (searchParams: QueryFunctionContext<QueryKey, any>) => {
  if (searchParams.queryKey[1]) {
    const response = await axios.get(`/api/posts/getApprovedPosts/?${qs.stringify(searchParams.queryKey[1])}`)
    return response.data
  } else {
    const response = await axios.get("/api/posts/getApprovedPosts")
    return response.data
  }
}

export default function Home() {
  
  const [searchParams, setSearchParams] = useState<FilterQueryParams>({
    min: 0,
    max: 100,
    category: "all",
    orderBy: "desc",
    search: ""
  })

  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)

  const { data, isLoading, status } = useQuery<PostType[]>({
    queryFn: (searchParams) => getPosts(searchParams),
    queryKey: ["posts", searchParams],
    onError: err => err,
  })
  
  let toastPostID: string

  const { mutate } = useMutation(
    async (data: FieldValues) => await axios.post("/api/posts/createPost", { data }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, {id: toastPostID})
        }
      },
      onSuccess: () => {
        toast.success("Anúncio criado com sucesso!", {id: toastPostID})
        queryClient.invalidateQueries(["posts"])
      }
    }
  )

  const createPost = (data: FieldValues) => {
    toastPostID = toast.loading("Criando anúncio...", {id: toastPostID})
    mutate(data)
  }

  return (
      <main className="flex justify-center items-center h-fit flex-col relative" >
        <div className="fixed top-0 w-full h-36 flex justify-center bg-white z-10 max-sm:h-28 dark:bg-primaryDarkColor">
          <Search setIsOpen={setIsOpen} searchParams={searchParams} setSearchParams={setSearchParams}/>
          <NewPost
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            createPost={createPost}
          />
        </div>
        <div className="flex justify-center gap-12 max-2xl:gap-8">
          <div className="w-[19rem] h-[28rem] max-2xl:w-[16rem] max-lg:hidden">
            <Filters
              min={0}
              max={100}
              defaultValue={[25, 75]}
              setSearchParams={setSearchParams}
            />
          </div>
          <div className="mt-40 z-0 max-sm:mt-28 max-2xl:h-[26rem]">
            {
              status === "loading" || isLoading ?
                <PostSkeleton count={5}/>
                :
                data?.length ?
                  data?.map((post: PostType) => 
                    <Post
                      status={post.status}
                      category={post.category}
                      saleLink={post.saleLink}
                      coupon={post.coupon || ""}
                      description={post.description || ""}
                      isMarketplaceVerified={true}
                      isUserVerified={true}
                      userProfileURL={"/"}
                      interactions={true}
                      bookImageURL={post.bookImageURL}
                      marketplace={post.seller}
                      comments={post.comments}
                      seller={post.user.name}
                      price={post.price}
                      title={post.title}
                      createdAt={post.createdAt}
                      updatedAt={post.updatedAt}
                      likes={post.likes}
                      user={post.user}
                      key={post.id}
                      id={post.id}
                    />
                  )
                  :
                  <div className="max-xl:w-post-xl max-lg:w-post-lg max-sm:w-post-sm flex flex-col justify-center items-center">
                    <span className="mb-6 text-2xl font-bold text-primaryColor dark:text-white max-md:text-xl text-center max-sm:w-[12rem] max-sm:text-lg">Que pena 😥 nenhum anúncio foi encontrado!</span>
                    <Image
                      alt="Sem anúcios"
                      src={notFoundImage}
                      width={180}
                      height={180}
                      className="max-sm:w-[8rem] max-sm:h-[8rem]"
                    />
                  </div>
            }
          </div>
          <div className="w-[19rem] h-[36rem] max-2xl:w-[16rem] max-xl:hidden">
            <Bookstores />
          </div>
        </div>
      </main>
  )
}