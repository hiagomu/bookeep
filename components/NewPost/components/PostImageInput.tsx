"use client"

import {
  BsCamera as ImageIcon
} from 'react-icons/bs'
import { FieldValues, UseFormRegister } from "react-hook-form"
import { useState } from 'react'
interface IPostImageInput {
  id: string
  alt: string
  name: string
  title: string
  register: UseFormRegister<FieldValues>
  required: boolean
  innerText: string
}

const PostImageInput = ({
  id,
  alt,
  name,
  title,
  register,
  required,
  innerText
}: IPostImageInput) => {

  const [previewImage, setPreviewImage] = useState<string>()

  return (
    <>
      <label
        htmlFor={id}
        className="block text-primaryColor font-bold max-lg:text-sm w-fit"
      >
        {title}
        <div className="flex w-fit">
          <div className="flex justify-center items-center flex-col h-16 w-14 mb-4 mr-2 border-2 border-primaryColor rounded cursor-pointer">
            <span className="block text-xs text-center text-slate-400">{innerText}</span>
            <ImageIcon className="text-slate-400"/>
          </div>
          {
            previewImage &&
            <div className="flex justify-center items-center flex-col h-16 w-14 mb-4 mr-2 border-2 border-primaryColor rounded cursor-pointer overflow-hidden">
              <img
                src={previewImage} 
                alt={alt}
              />
            </div>
          }
        </div>
      </label>
      <input
        className="hidden"
        required={required}
        {...register(name, {
          onChange: (e) => {
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
    </>
  )
}

export default PostImageInput