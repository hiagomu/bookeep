"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { PostType } from '@/app/@types'
import { FieldValues } from "react-hook-form"
import { toast } from "react-hot-toast"
import { Profile } from "@/app/components/Profile"
import { PostSkeleton } from "@/app/components/PostSkeleton"
import { Post } from "@/app/components/Post"
import { usePathname } from 'next/navigation'

export default function Home() {
  const userId = usePathname()?.split("/")[2]
  const queryClient = useQueryClient()

  const getPostsByUser = async () => {
    const response = await axios.get('/api/posts/getPostsByUser', {
      params: {
          id: userId
      }
    })
    return response.data
  }

  const { data, isLoading, status } = useQuery<PostType[]>({
    queryFn: getPostsByUser,
    queryKey: ["userPosts"],
    onError: err => err,
  })

  return (
      <main className="flex justify-center h-fit relative" >
        <Profile posts={data}/>
        <div  className="mt-28 z-0 max-sm:mt-28">
          {
            status === "loading" || isLoading ?
              <PostSkeleton count={5}/>
              : 
              data?.map((post: PostType) => 
                <Post
                  published={post.published}
                  category={post.category}
                  saleLink={post.saleLink}
                  coupon={post.coupon || ""}
                  description={post.description || ""}
                  isMarketplaceVerified={true}
                  isUserVerified={true}
                  userProfileURL={"/"}
                  interactions={true}
                  bookImageURL={post.bookImageURL}
                  marketplace={"Amazon"}
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
      </main>
  )
}