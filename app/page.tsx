"use client"

import { Post } from "./components/Post"
import { Search } from "./components/Search"
import { useState } from "react"
import { NewPost } from "./components/NewPost"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { PostSkeleton } from "./components/PostSkeleton"

interface IPost {
  bookImageURL: string
  description: string
  createdAt: Date
  updatedAt: Date
  published: boolean
  category: string
  saleLink: string
  userId: string 
  coupon: string
  title:string
  price: number
  user: {
    emailVerified: boolean | null
    email: string
    image: string
    name: string
    id: string
  }
  id: string
}

const getPosts = async() => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const { data, isLoading } = useQuery<IPost[]>({
    queryFn: getPosts,
    queryKey: ["posts"],
    onError: err => err
  })

  return (
      <main className="flex justify-center items-center h-fit flex-col relative" >
        <div className="fixed top-0 w-full h-36 flex justify-center bg-white z-10 max-sm:h-28 dark:bg-primaryDarkColor">
          <Search setIsOpen={setIsOpen}/>
          <NewPost
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <div  className="mt-40 z-0 max-sm:mt-28">
          {
            isLoading ?
              <>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </>
              : 
              data?.map((post: IPost) => 
                <Post
                  isMarketplaceVerified={true}
                  userProfilePicture={post.user.image}
                  isUserVerified={true}
                  userProfileURL={"/"}
                  bookImageURL={"https://m.media-amazon.com/images/I/81+UYddlEeL.jpg"}
                  marketplace={"Amazon"}
                  saleLink={post.saleLink}
                  comments={2}
                  seller={post.user.name}
                  price={post.price}
                  title={post.title}
                  createdAt={post.createdAt}
                  boos={5}
                  key={post.id}
                />
              )
          }
        </div>
      </main>
  )
}