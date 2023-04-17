"use client"

import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { PostType, User } from '@/app/@types'
import { Profile } from "@/app/components/Profile"
import { PostSkeleton } from "@/app/components/PostSkeleton"
import { Post } from "@/app/components/Post"
import { usePathname } from 'next/navigation'

export default function Home() {
  const userId = usePathname()?.split("/")[2]

  const getPostsByUser = async () => {
    const response = await axios.get('/api/posts/getPostsByUser', {
      params: {
          id: userId
      }
    })
    return response.data
  }

  const getUserById = async () => {
    const response = await axios.get('/api/users/getUserById', {
        params: {
            id: userId
        }
    })
    return response.data
}

  const posts = useQuery<PostType[]>({
    queryFn: getPostsByUser,
    queryKey: ["userPosts"],
    onError: err => err,
  })

  const userData = useQuery<User>({
    queryFn: getUserById,
    queryKey: ["userData"],
    onError: err => err,
  })

  return (
      <main className="flex justify-center h-fit relative max-lg:flex-col" >
        <div className="relative w-[25rem] h-[26.5rem] mt-28 mr-24 max-xl:w-[19rem] max-xl:h-[23rem] max-xl:mr-8 max-lg:mr-0 max-lg:mt-20 max-lg:w-post-lg max-md:w-post-md max-sm:w-post-sm max-sm:h-[18rem]">
          <Profile posts={posts.data} user={userData?.data}/>
        </div>
        <div  className="mt-28 z-0 max-lg:mt-8 max-sm:mt-6">
          {
            posts.status === "loading" || posts.isLoading ?
              <PostSkeleton count={5}/>
              :
              posts.data?.map((post: PostType) => 
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