"use client"

import { Modal } from "../Modal"
import PostInput from "./components/PostInput"
import {
  FaGhost as BooIcon
} from 'react-icons/fa'
import { FieldValues, useForm } from 'react-hook-form'
import PostImageInput from "./components/PostImageInput"
import { mixed, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

interface INewPost {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    createPost: (data: FieldValues) => void
}

const newPostSchema = object({
  title:
    string()
    .min(3, "O título deve ter o mínimo de 3 caracteres")
    .max(60, "O título deve ter o máximo de 60 caracteres")
    .required(),
  link:
    string()
    .url("Insira uma URL válida")
    .required("O link é obrigatório"),
  category:
    string()
    .required("A categoria é obrigatório"),
  price:
    string()
    .matches(/^[0-9]+([,.][0-9]+)?$/, "O preço precisa ser um número válido")
    .required("O preço é obrigatório"),
  coupon: string().max(30, "O cupom deve ter o máximo de 30 caracteres"),
  description: string().max(500, "A descrição dever ter no máximo 500 caracteres"),
  productImage: mixed().test("required", "A imagem do produto é obrigatória", (file: any) => {
    if (file.length !== 0) return true
    return false
  }),
});

export const NewPost = ({
  isOpen,
  setIsOpen,
  createPost
}: INewPost) => {

  const [productImage, setProductImage]= useState<string>()

  const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm({
    resolver: yupResolver(newPostSchema)
  });

  const onSubmit = (data: FieldValues) => {
    setIsOpen(false)
    createPost({
      category: data.category,
      coupon: data.coupon,
      description: data.description,
      link: data.link,
      price: data.price,
      title: data.title,
      productImage: productImage
    })
    reset()
  }

  const onClose = () => {
    setIsOpen(false)
    reset()
  }

  return (
      <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <div className="h-fit p-6 w-fit max-sm:p-4">
            <h1 className="text-primaryColor font-bold text-2xl mb-4 max-lg:mb-3 max-lg:text-xl max-sm:text-lg max-sm:mb-2">Criar anúncio</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <PostInput
                errorMessage={errors.title ? String(errors.title.message) : ""}
                placeholder="Insira o nome do produto..."
                register={register}
                element="input"
                isSmall={false}
                title="Título"
                type="text"
                name="title"
                id="title"
              />
              <PostInput
                errorMessage={errors.link ? String(errors.link.message) : ""}
                placeholder="Insira o link da promoção..."
                register={register}
                element="input"
                isSmall={false}
                title="Link"
                type="text"
                name="link"
                id="link"
              />
              <div className="flex justify-between">
                <PostInput
                  errorMessage={errors.price ? String(errors.price.message) : ""}
                  placeholder="Insira o valor do produto..."
                  register={register}
                  element="input"
                  isSmall={true}
                  title="Preço"
                  type="text"
                  name="price"
                  id="price"
                />
                <PostInput
                  errorMessage={errors.coupon ? String(errors.coupon.message) : ""}
                  placeholder="Insira o cupom..."
                  register={register}
                  element="input"
                  isSmall={true}
                  title="Cupom"
                  type="text"
                  name="coupon"
                  id="coupon"
                />
              </div>
              <div className="flex justify-between">
                <PostImageInput
                  errorMessage={errors.productImage ? String(errors.productImage.message) : ""}
                  setProductImage={setProductImage}
                  innerText="Adicione"
                  register={register}
                  title="Imagem"
                  name="productImage"
                  alt="Imagem do produto"
                  id="productImage"
                />
                <PostInput
                  element="select"
                  register={register}
                  id="category"
                  name="category"
                  isSmall={true}
                  title="Categoria"
                  options={[
                    {name: "", value: ""},
                    {name: "Drama", value: "drama"},
                    {name: "Terror", value: "terror"},
                    {name: "Ficção", value: "ficction"},
                    {name: "Romance", value: "romance"},
                    {name: "História", value: "history"},
                    {name: "Fantasia", value: "fantasy"},
                    {name: "Mistério", value: "mistery"},
                    {name: "Suspense", value: "thriller"},
                    {name: "Aventura", value: "aventure"},
                    {name: "Religioso", value: "religious"},
                    {name: "Educação", value: "educational"},
                    {name: "Literatura Clássica", value: "classical-literature"},
                  ]}
                  errorMessage={errors.category ? String(errors.category.message) : ""}
                />
              </div>
              <PostInput
                errorMessage={errors.description ? String(errors.description.message) : ""}
                placeholder="Insira a descrição do produto..."
                register={register}
                element="textarea"
                isSmall={true}
                title="Descrição"
                name="description"
                id="description"
              />
              <div className="flex w-full justify-end mt-4">
                <button
                  className="bg-zinc-500 rounded text-sm py-2 px-3 font-semibold mr-4 outline-none hover:bg-zinc-400 max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center items-center bg-primaryColor py-2 px-3 rounded text-sm font-semibold outline-none hover:bg-primaryHoverColor max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  type="submit"
                  disabled={isSubmitting}
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