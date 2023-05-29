"use client"

import {
  BsCamera as ImageIcon
} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { ImageInputType } from '@/app/@types'

const PostImageInput = ({
  id,
  alt,
  name,
  title,
  value,
  register,
  innerText,
  errorMessage,
  setProductImage
}: ImageInputType) => {

  const [previewImage, setPreviewImage] = useState<string>()
  const [file, setFile] = useState<any>()

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
  }, [file])

  return (
    <div className="w-input-sm max-lg:w-input-xs max-sm:w-input-xxs">
      <label
        htmlFor={id}
        className="block text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm w-fit"
      >
        {title}
        <div className="flex w-fit">
          <div className="flex justify-center items-center flex-col h-20 w-16 mb-1 mr-2 border-2 bg-slate-200 dark:bg-neutral-700 border-primaryColor rounded cursor-pointer">
            <span className="block text-xs text-center text-primaryColor dark:text-zinc-400">{innerText}</span>
            <ImageIcon className="text-primaryColor dark:text-zinc-400 w-5 h-5 font-bold"/>
          </div>
          {
            (previewImage || value) &&
            <div className="flex justify-center items-center flex-col h-16 w-14 mr-2 border-2 border-primaryColor rounded cursor-pointer overflow-hidden">
              <img
                src={previewImage ?? value}
                alt={alt}
              />
            </div>
          }
        </div>
      </label>
      <input
        className='hidden'
        {...register(name, {
          onChange: (e) => {
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
        })}
        type="file"
        id={id}
      />
      {errorMessage && <span className="block text-red-500 text-xs font-bold max-lg:mb-2">{errorMessage}</span>}
    </div>
  )
}

export default PostImageInput