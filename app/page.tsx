"use client"

import { Post } from "./components/Post"
import { Search } from "./components/Search"
import { useState } from "react"
import { NewPost } from "./components/NewPost"
import axios, { AxiosError } from "axios"
import { QueryFunctionContext, QueryKey, useQuery, useQueryClient } from "@tanstack/react-query"
import { PostSkeleton } from "./components/PostSkeleton"
import { toast } from "react-hot-toast"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { FilterQueryParams, PostType } from "./@types"
import { Filters } from "./components/Filters"
import { Bookstores } from "./components/Bookstores"
import qs from "query-string"


export default function Home() {
  
  const [searchParams, setSearchParams] = useState<FilterQueryParams>({
    min: 0,
    max: 100,
    category: "all",
    orderBy: "desc"
  })


  const getPosts = async (searchParams: QueryFunctionContext<QueryKey, any>) => {
    const response = await axios.get(`/api/posts/getApprovedPosts${searchParams.queryKey[1] ? "/?" + qs.stringify(searchParams.queryKey[1]) : ""}`)
    return response.data
  }

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
          <Search setIsOpen={setIsOpen}/>
          <NewPost
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            createPost={createPost}
          />
        </div>
        <div>
          <div className="fixed left-0 top-0 ml-48">
            <Filters
              min={0}
              max={100}
              defaultValue={[25, 75]}
              setSearchParams={setSearchParams}
            />
          </div>
          <div  className="mt-40 z-0 max-sm:mt-28">
            {
              status === "loading" || isLoading ?
                <PostSkeleton count={5}/>
                : 
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
            }
          </div>
          <div className="fixed right-0 top-0 mr-48">
            <Bookstores />
          </div>
        </div>
      </main>
  )
}