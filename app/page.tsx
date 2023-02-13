import { Post } from "@/components/Post"
import { Search } from "@/components/Search"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-fit flex-col">
      <Search />
      <Post />
      <Post />
      <Post />
    </main>
  )
}