import { Post } from "@/components/Post"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-fit flex-col">
      <Post />
      <Post />
      <Post />
    </main>
  )
}