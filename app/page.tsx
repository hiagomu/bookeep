import { Post } from "@/components/Post"
import { Search } from "@/components/Search"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-fit flex-col">
      <Header />
      <Search />
      <Post />
      <Post />
      <Post />
    </main>
  )
}