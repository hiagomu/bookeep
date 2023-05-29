"use client"

import { Modal } from "../Modal"

import {
  FaGhost as BooIcon
} from 'react-icons/fa'
import { FieldValues } from 'react-hook-form'
import { mixed, object, string } from "yup";
import { useEffect, useState } from "react"
import { EditPostType } from "@/app/@types"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  BsCamera as ImageIcon
} from 'react-icons/bs'
import axios from "axios"
import { toast } from "react-hot-toast"

interface IEditPost {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    createPost: (data: FieldValues) => void
    postData: EditPostType
    isEdit: boolean 
}

const editPostSchema = object({
  title:
    string()
    .min(3, "O título deve ter o mínimo de 3 caracteres")
    .max(60, "O título deve ter o máximo de 60 caracteres")
    .required(),
  saleLink:
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
  seller:
    string()
    .min(2, "O vendedor deve ter o mínimo de 2 caracteres")
    .max(25, "O vendedor deve ter o máximo de 25 caracteres")
    .required("O vendedor é obrigatório"),
  description: string().max(500, "A descrição dever ter no máximo 500 caracteres"),
  bookImageURL: mixed().test("required", "A imagem do produto é obrigatória", (file: any) => {
    if (file.length !== 0) return true
    return false
  }),
});

export const EditPost = ({
  isOpen,
  setIsOpen,
  createPost,
  postData
}: IEditPost) => {

  const [productImage, setProductImage]= useState<string>()
  const [previewImage, setPreviewImage] = useState<string>()
  const [file, setFile] = useState<any>()
  const queryClient = useQueryClient()
  let toastEditPostID: string

  const [currentPostData, setCurrentPostData] = useState<EditPostType>({
    id: postData.id,
    title: postData.title,
    bookImageURL: postData.bookImageURL,
    category: postData.category,
    coupon: postData.coupon,
    description: postData.description,
    saleLink: postData.saleLink,
    status: postData.status,
    seller: postData.seller,
    price: postData.price
  })

  const options = [
    {name: "", value: ""},
    {name: "Drama", value: "drama"},
    {name: "Terror", value: "terror"},
    {name: "Ficção", value: "ficction"},
    {name: "Romance", value: "romance"},
    {name: "História", value: "history"},
    {name: "Fantasia", value: "fantasy"},
    {name: "Mistério", value: "mistery"},
    {name: "Suspense", value: "thriller"},
    {name: "Aventura", value: "adventure"},
    {name: "Religioso", value: "religious"},
    {name: "Educação", value: "educational"},
    {name: "Literatura Clássica", value: "classical-literature"},
  ]

  const { mutate } = useMutation(
    (async () => {
      const response = await axios.get("/api/images/uploadImage", {
        params: {
          name: `${file?.name}`,
          type: file?.type
        }
      })
      await axios.put(response.data.url, file)
      setProductImage(response.data.url.split("?")[0])
    })
  )

  useEffect(() => {
    if (file) {
      mutate(file)
    }
  }, [file, productImage])

  const editPostMutation = useMutation({
    mutationFn: (post: EditPostType) => {
      return axios.put("/api/posts/editPost", post)
    },
    onSuccess: () => {
      toast.success("Anúncio editado com sucesso!", {id: toastEditPostID})
      queryClient.invalidateQueries(["posts"])
      setIsOpen(false)
    }
  })

  const handleSubmit = async () => {
    toastEditPostID = toast.loading("Atualizando anúncio...", {id: toastEditPostID})
    editPostMutation.mutate({
      ...currentPostData,
      bookImageURL: productImage || currentPostData.bookImageURL
    })
    queryClient.invalidateQueries(["posts"])
    setIsOpen(false)
  }

  const handleReset = () => {
    setCurrentPostData({
      id: postData.id,
      title: postData.title,
      bookImageURL: postData.bookImageURL,
      category: postData.category,
      coupon: postData.coupon,
      description: postData.description,
      saleLink: postData.saleLink,
      status: postData.status,
      seller: postData.seller,
      price: postData.price
    })
    setIsOpen(false)
  }

  return (
      <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <div className="h-fit p-6 w-fit max-sm:p-4">
            <h1 className="text-primaryColor font-bold font-poppins text-2xl mb-4 max-lg:mb-3 max-lg:text-xl max-sm:text-lg max-sm:mb-2">Editar anúncio</h1>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              <div className="flex flex-col">
                <label
                    className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                    htmlFor="title"
                >
                    Título
                </label>
                <input
                    className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs w-input-lg max-lg:w-input-md max-sm:w-input-2sm"
                    placeholder="Insira o nome do produto..."
                    onChange={(e) => {
                      setCurrentPostData({
                        ...currentPostData,
                        title: e.target.value
                      })
                    }}
                    name="title"
                    type="text"
                    value={currentPostData.title}
                    id="title"
                />
              </div>
              <div className="flex flex-col">
                <label
                    className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                    htmlFor="saleLink"
                >
                    Link
                </label>
                <input
                    className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs w-input-lg max-lg:w-input-md max-sm:w-input-2sm"
                    placeholder="Insira o link da promoção..."
                    onChange={(e) => {
                      setCurrentPostData({
                        ...currentPostData,
                        saleLink: e.target.value
                      })
                    }}
                    name="saleLink"
                    type="text"
                    value={currentPostData.saleLink}
                    id="saleLink"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label
                      className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                      htmlFor="price"
                  >
                      Preço
                  </label>
                  <input
                      className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs w-input-sm max-lg:w-input-xs max-sm:w-input-xxs"
                      placeholder="Insira o valor do produto..."
                      onChange={(e) => {
                        setCurrentPostData({
                          ...currentPostData,
                          price: e.target.value
                        })
                      }}
                      name="price"
                      type="text"
                      value={currentPostData.price}
                      id="price"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                      className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                      htmlFor="coupon"
                  >
                      Cupom
                  </label>
                  <input
                      className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs w-input-sm max-lg:w-input-xs max-sm:w-input-xxs"
                      placeholder="Insira o cupom..."
                      onChange={(e) => {
                        setCurrentPostData({
                          ...currentPostData,
                          coupon: e.target.value
                        })
                      }}
                      name="coupon"
                      type="text"
                      value={currentPostData.coupon}
                      id="coupon"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-input-sm max-lg:w-input-xs max-sm:w-input-xxs">
                  <label
                    htmlFor="bookImageURL"
                    className="block text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm w-fit"
                  >
                    Imagem
                    <div className="flex w-fit">
                      <div className="flex justify-center items-center flex-col h-20 w-16 mb-1 mr-2 border-2 bg-slate-200 dark:bg-neutral-700 border-primaryColor rounded cursor-pointer">
                        <span className="block text-xs text-center text-primaryColor dark:text-zinc-400">Alterar</span>
                        <ImageIcon className="text-primaryColor dark:text-zinc-400 w-5 h-5 font-bold"/>
                      </div>
                      {
                        (previewImage || postData.bookImageURL) &&
                        <div className="flex justify-center items-center flex-col h-16 w-14 mr-2 border-2 border-primaryColor rounded cursor-pointer overflow-hidden">
                          <img
                            src={previewImage ?? postData.bookImageURL}
                            alt="Imagem do produto"
                          />
                        </div>
                      }
                    </div>
                  </label>
                  <input
                    className='hidden'
                    type="file"
                    id="bookImageURL"
                    onChange={(e) => {
                      if (e.target.files) {
                        setFile(e.target.files[0])
                        if (e?.target?.files?.[0]) {
                          const file = e.target.files[0]
                          const reader = new FileReader()
                          reader.onloadend = () => {
                            setPreviewImage(reader.result as string)
                          }
                          reader.readAsDataURL(file)
                        }
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="flex flex-col">
                    <label
                        className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                        htmlFor="marketplace"
                    >
                        Marketplace
                    </label>
                    <input
                        className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs w-input-sm max-lg:w-input-xs max-sm:w-input-xxs"
                        placeholder="Insira o marketplace..."
                        onChange={(e) => {
                          setCurrentPostData({
                            ...currentPostData,
                            seller: e.target.value
                          })
                        }}
                        value={currentPostData.seller}
                        name="marketplace"
                        type="text"
                        id="marketplace"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                        className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                        htmlFor="category"
                    >
                        Categoria
                    </label>
                    <select
                        className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs w-input-sm max-lg:w-input-xs max-sm:w-input-xxs"
                        id="category"
                        name="category"
                        onChange={(e) => {
                          setCurrentPostData({
                            ...currentPostData,
                            category: e.target.value
                          })
                        }}
                        value={currentPostData.category}
                    >
                        {
                            options.map((option, index) =>
                                <option
                                    key={index}
                                    value={option.value}
                                >
                                    {option.name}
                                </option>)
                        }
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                  htmlFor="description"
                >
                  Descrição
                </label>
                <textarea
                  className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 w-input-lg h-textarea py-1.5 px-1.5 text-sm text-black dark:text-white outline-none overflow-hidden max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:text-xs max-sm:w-input-2sm"
                  placeholder="Insira a descrição do produto..."
                  name="description"
                  onChange={(e) => {
                    setCurrentPostData({
                      ...currentPostData,
                      description: e.target.value
                    })
                  }}
                  value={currentPostData.description}
                  id="description"
                />
              </div>
              <div className="flex w-full justify-end mt-4">
                <button
                  className="bg-zinc-500 rounded text-sm py-2 px-3 font-poppins text-white font-semibold mr-4 outline-none hover:bg-zinc-400 max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  onClick={handleReset}
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center items-center bg-primaryColor py-2 px-3 rounded text-white text-sm font-poppins font-semibold outline-none hover:bg-primaryHoverColor max-lg:py-1.5 max-lg:px-2.5 max-lg:text-xs"
                  type="submit"
                >
                  <BooIcon className="mr-2"/>
                  Atualizar
                </button>
              </div>
            </form>
          </div>
        </Modal>
  )
}