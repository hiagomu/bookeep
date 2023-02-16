"use client"

import { Modal } from "../Modal"
import PostInput from "./components/PostInput"

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
            <div className="h-fit p-6 w-fit">
              <h1 className="text-primaryColor font-bold text-2xl mb-6">Criar anúncio</h1>
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
                  <img src="" alt="" />
                  <input type="text" />
                </div>
                <PostInput
                  id="description"
                  name="Descrição"
                  element="textarea"
                  placeholder="Digite a descrição do produto..."
                />
                <div>
                  <button></button>
                  <button></button>
                </div>
              </form>
            </div>
          </Modal>
    )
}