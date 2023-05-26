"use client"

import axios from "axios"
import { Post } from "../components/Post"
import { useQuery } from "@tanstack/react-query"
import { PostSkeleton } from "../components/Skeletons/PostSkeleton"
import { PostType } from "../@types"
import Image from "next/image"
import notFoundImage from "../../public/assets/not_found.svg"

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
        <div  className="mt-24 z-0 max-sm:mt-16">
          {
            isLoading ?
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
          {
            data?.length === 0 &&
            <div className="flex justify-center flex-col items-center">
              <span className="mb-6 text-2xl font-bold text-primaryColor dark:text-white max-md:text-xl text-center max-sm:w-[12rem] max-sm:text-lg">Sem anúncios para analisar no momento</span>
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
      </main>
  )
}