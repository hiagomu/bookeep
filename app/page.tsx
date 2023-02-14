"use client"

import { Post } from "@/components/Post"
import { Search } from "@/components/Search"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-fit flex-col relative">
      <div className="fixed top-0 w-full h-36 flex justify-center bg-white z-10 max-sm:h-28">
        <Header />
        <Search />
      </div>
      <div  className="mt-40 z-0 max-sm:mt-32">
        <Post
          isMarketplaceVerified={true}
          isUserVerified={false}
          userProfileURL={"/"}
          bookImageURL={"https://m.media-amazon.com/images/I/81+UYddlEeL.jpg"}
          marketplace={"Amazon"}
          saleLink={"https://www.amazon.com.br/Alice-Pa%C3%ADs-das-Maravilhas-Classic/dp/8594541759"}
          comments={2}
          seller={"Hiago Murilo"}
          price={44.50}
          title={"Alice no País das Maravilhas (Classic Edition)"}
          time={10}
          boos={5}
        />
        <Post
          isMarketplaceVerified={true}
          isUserVerified={true}
          userProfileURL={"/"}
          bookImageURL={"https://m.media-amazon.com/images/I/619aw8BhHCL.jpg"}
          marketplace={"Amazon"}
          saleLink={"https://www.amazon.com.br/Ladr%C3%A3o-Raios-S%C3%A9rie-Jackson-Olimpianos/dp/8580575397"}
          comments={11}
          seller={"João Silva"}
          price={40.89}
          title={"O Ladrão de Raios - Capa Nova: (Série Percy Jackson e os Olimpianos): 1"}
          time={22}
          boos={21}
        />
        <Post
          isMarketplaceVerified={false}
          isUserVerified={false}
          userProfileURL={"/"}
          bookImageURL={"https://m.media-amazon.com/images/I/81rqjb5EIdL.jpg"}
          marketplace={"Amazon"}
          saleLink={"https://www.amazon.com.br/Os-crimes-ABC-Agatha-Christie/dp/8595085927"}
          comments={27}
          seller={"Rafaela Bicalho"}
          price={31.90}
          title={"Os crimes ABC"}
          time={30}
          boos={45}
        />
        <Post
          isMarketplaceVerified={true}
          isUserVerified={false}
          userProfileURL={"/"}
          bookImageURL={"https://m.media-amazon.com/images/I/61UgkpmZd6L.jpg"}
          marketplace={"Amazon"}
          saleLink={"https://m.media-amazon.com/images/I/61UgkpmZd6L.jpg"}
          comments={12}
          seller={"Hiago Murilo"}
          price={99.90}
          title={"Corte de chamas prateadas (Vol. 4 – Edição especial) + BRINDE"}
          time={42}
          boos={31}
        />
        <Post
          isMarketplaceVerified={true}
          isUserVerified={false}
          userProfileURL={"/"}
          bookImageURL={"https://m.media-amazon.com/images/I/81psehVsWzL.jpg"}
          marketplace={"Amazon"}
          saleLink={"https://www.amazon.com.br/Duna-com-Sobrecapa-P%C3%B4ster-Filme/dp/6586064694"}
          comments={11}
          seller={"Rafaela Bicalho"}
          price={36.32}
          title={"Duna com Sobrecapa + Pôster Filme"}
          time={45}
          boos={24}
        />
        <Post
          isMarketplaceVerified={true}
          isUserVerified={false}
          userProfileURL={"/"}
          bookImageURL={"https://m.media-amazon.com/images/I/71Ih2rWClAL.jpg"}
          marketplace={"Amazon"}
          saleLink={"https://www.amazon.com.br/Harry-Potter-Goblet-Fire-Illustrated/dp/0545791421"}
          comments={33}
          seller={"Hiago Murilo"}
          price={365.22}
          title={"Harry Potter and the Goblet of Fire: The Illustrated Edition (Harry Potter, Book 4)"}
          time={58}
          boos={67}
        />
      </div>
    </main>
  )
}