"use client"

import { Modal } from "../Modal"
import PostInput from "./components/PostInput"
import {
  FaGhost as BooIcon
} from 'react-icons/fa'

interface INewPost {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const NewPost = ({
    isOpen,
    setIsOpen
}:  INewPost) => {
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
                  placeholder="Digite o nome do produto..."
                />
                <PostInput
                  id="link"
                  name="Link"
                  type="url"
                  element="input"
                  isSmall={false}
                  placeholder="Digite o link do produto..."
                />
                <PostInput
                  id="category"
                  name="Categoria"
                  type="text"
                  element="input"
                  isSmall={false}
                  placeholder="Escolha a categoria..."
                />
                <div className="flex justify-between">
                  <PostInput
                    id="price"
                    name="Preço"
                    type="text"
                    element="input"
                    isSmall={true}
                    placeholder="Digite o valor do produto..."
                  />
                  <PostInput
                    id="coupon"
                    name="Cupom"
                    type="text"
                    element="input"
                    isSmall={true}
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
                  placeholder="Digite a descrição do produto..."
                />
                <div className="flex w-full justify-end mt-4">
                  <button
                    className="bg-zinc-500 rounded text-sm py-2 px-3 font-semibold mr-4 outline-none hover:bg-zinc-400 max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center items-center bg-primaryColor py-2 px-3 rounded text-sm font-semibold outline-none hover:bg-primaryHoverColor max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
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