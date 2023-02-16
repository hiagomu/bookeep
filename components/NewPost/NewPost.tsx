"use client"

import { Modal } from "../Modal"
import PostInput from "./components/PostInput"
import {
  FaGhost as BooIcon
} from 'react-icons/fa'
import { useState } from "react"

interface INewPost {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

interface IPost {
  title: string
  link: string
  category: string
  price: number
  coupon: string
  description: string
}

export const NewPost = ({
  isOpen,
  setIsOpen
}: INewPost) => {

  const [post, setPost] = useState<IPost>({
    title: "",
    link: "",
    category: "",
    price: 0,
    coupon: "",
    description: ""
  })

  return (
      <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <div className="h-fit p-6 w-fit max-sm:p-4">
            <h1 className="text-primaryColor font-bold text-2xl mb-6 max-lg:mb-3 max-lg:text-xl max-sm:text-lg max-sm:mb-2">Criar anúncio</h1>
            <form action="">
              <PostInput
                id="title"
                name="Título"
                type="text"
                element="input"
                isSmall={false}
                value={post.title}
                onChange={(event) => setPost({...post, title: event.target.value})}
                placeholder="Digite o nome do produto..."
              />
              <PostInput
                id="link"
                name="Link"
                type="url"
                element="input"
                isSmall={false}
                value={post.link}
                onChange={(event) => setPost({...post, link: event.target.value})}
                placeholder="Digite o link do produto..."
              />
              <PostInput
                id="category"
                name="Categoria"
                type="text"
                element="input"
                isSmall={false}
                value={post.category}
                onChange={(event) => setPost({...post, category: event.target.value})}
                placeholder="Escolha a categoria..."
              />
              <div className="flex justify-between">
                <PostInput
                  id="price"
                  name="Preço"
                  type="text"
                  element="input"
                  isSmall={true}
                  value={post.price}
                  onChange={(event) => setPost({...post, price: Number(event.target.value)})}
                  placeholder="Digite o valor do produto..."
                />
                <PostInput
                  id="coupon"
                  name="Cupom"
                  type="text"
                  element="input"
                  isSmall={true}
                  value={post.coupon}
                  onChange={(event) => setPost({...post, coupon: event.target.value})}
                  placeholder="Digite o coupom..."
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <img src="" alt="" />
              </div>
              <PostInput
                id="description"
                name="Descrição"
                element="textarea"
                value={post.description}
                onChange={(event) => setPost({...post, description: event.target.value})}
                placeholder="Digite a descrição do produto..."
              />
              <div className="flex w-full justify-end mt-4">
                <button
                  className="bg-zinc-500 rounded text-sm py-2 px-3 font-semibold mr-4 outline-none hover:bg-zinc-400 max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  onClick={e => {
                    e.preventDefault()
                    setPost({
                      title: "",
                      link: "",
                      category: "",
                      price: 0,
                      coupon: "",
                      description: ""
                    })
                    setIsOpen(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center items-center bg-primaryColor py-2 px-3 rounded text-sm font-semibold outline-none hover:bg-primaryHoverColor max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  onClick={e => {
                    e.preventDefault()
                    console.log(post)
                  }}
                >
                  <BooIcon className="mr-2"/>
                  Post
                </button>
              </div>
            </form>
          </div>
        </Modal>
  )
}