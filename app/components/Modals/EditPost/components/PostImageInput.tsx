"use client"

import {
  BsCamera as ImageIcon
} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { EditImageInputType } from '@/app/@types'

const PostImageInput = ({
  id,
  alt,
  name,
  title,
  value,
  innerText,
  setProductImage
}: EditImageInputType) => {

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
        type="file"
        id={id}
      />
    </div>
  )
}

export default PostImageInput