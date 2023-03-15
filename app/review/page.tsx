"use client"

import axios from "axios"
import { Post } from "../components/Post"
import { Search } from "../components/Search"
import { useQuery } from "@tanstack/react-query"
import { PostSkeleton } from "../components/PostSkeleton"
import { PostType } from "../@types"

const getPosts = async () => {
  const response = await axios.get('/api/posts/getPendingPosts')
  return response.data
}

export default function Home() {
  const { data, isLoading } = useQuery<PostType[]>({
    queryFn: getPosts,
    queryKey: ["posts"],
    onError: err => err,
  })

  return (
      <main className="flex justify-center items-center h-fit flex-col relative" >
        <div className="fixed top-0 w-full h-36 flex justify-center bg-white z-10 max-sm:h-28 dark:bg-primaryDarkColor">
          <Search isReviewPage={true}/>
        </div>
        <div  className="mt-40 z-0 max-sm:mt-28">
          {
            isLoading ?
              <PostSkeleton count={5}/>
              : 
              data?.map((post: PostType) => 
                <Post
                  category={post.category}
                  saleLink={post.saleLink}
                  coupon={post.coupon || ""}
                  description={post.description || ""}
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