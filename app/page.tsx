"use client"

import { Post } from "./components/Post"
import { Search } from "./components/Search"
import { useState } from "react"
import { NewPost } from "./components/NewPost"
import axios, { AxiosError } from "axios"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { PostSkeleton } from "./components/PostSkeleton"
import { toast } from "react-hot-toast"
import { useMutation } from "@tanstack/react-query"
import { FieldValues } from "react-hook-form"
import { PostType } from "./@types"

const getPosts = async () => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}

export default function Home() {

  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)
  const { data, isLoading } = useQuery<PostType[]>({
    queryFn: getPosts,
    queryKey: ["posts"],
    onError: err => err,
  })
  let toastPostID: string

  const { mutate } = useMutation(
    async (data: FieldValues) => await axios.post("/api/posts/newPost", { data }),
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
        <div  className="mt-40 z-0 max-sm:mt-28">
          {
            isLoading ?
              <PostSkeleton count={5}/>
              : 
              data?.map((post: PostType) => 
                <Post
                  isMarketplaceVerified={true}
                  isUserVerified={true}
                  userProfileURL={"/"}
                  bookImageURL={post.bookImageURL}
                  marketplace={"Amazon"}
                  comments={post.comments}
                  seller={post.user.name}
                  price={post.price}
                  title={post.title}
                  createdAt={post.createdAt}
                  likes={post.likes}
                  user={post.user}
                  key={post.id}
                  id={post.id}
                />
              )
          }
        </div>
      </main>
  )
}