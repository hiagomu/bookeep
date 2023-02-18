"use client"

import { Modal } from "../Modal"
import PostInput from "./components/PostInput"
import {
  FaGhost as BooIcon
} from 'react-icons/fa'

import { FieldValues, useForm } from 'react-hook-form'
import PostImageInput from "./components/PostImageInput"

interface INewPost {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const NewPost = ({
  isOpen,
  setIsOpen
}: INewPost) => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data)
    reset()
    setIsOpen(false)
  }

  return (
      <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <div className="h-fit p-6 w-fit max-sm:p-4">
            <h1 className="text-primaryColor font-bold text-2xl mb-6 max-lg:mb-3 max-lg:text-xl max-sm:text-lg max-sm:mb-2">Criar anúncio</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}>
              <PostInput
                id="title"
                element="input"
                placeholder="Insira o nome do produto..."
                isSmall={false}
                title="Título"
                type="text"
                register={register}
                name="title"
              />
              <PostInput
                id="link"
                element="input"
                placeholder="Insira o link da promoção..."
                isSmall={false}
                title="Link"
                type="text"
                register={register}
                name="link"
              />
              <PostInput
                id="category"
                element="input"
                placeholder="Escolha a categoria..."
                isSmall={false}
                title="Categoria"
                type="text"
                register={register}
                name="category"
              />
              <div className="flex justify-between">
                <PostInput
                  id="price"
                  element="input"
                  placeholder="Insira o valor do produto..."
                  isSmall={true}
                  title="Preço"
                  type="text"
                  register={register}
                  name="price"
                />
                <PostInput
                  id="coupon"
                  element="input"
                  placeholder="Insira o cupom..."
                  isSmall={true}
                  title="Cupom"
                  type="text"
                  register={register}
                  name="coupon"
                />
              </div>
              <PostImageInput />
              <PostInput
                id="description"
                element="textarea"
                placeholder="Insira a descrição do produto..."
                isSmall={true}
                title="Descrição"
                register={register}
                name="description"
              />
              <div className="flex w-full justify-end mt-4">
                <button
                  className="bg-zinc-500 rounded text-sm py-2 px-3 font-semibold mr-4 outline-none hover:bg-zinc-400 max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center items-center bg-primaryColor py-2 px-3 rounded text-sm font-semibold outline-none hover:bg-primaryHoverColor max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  type="submit"
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