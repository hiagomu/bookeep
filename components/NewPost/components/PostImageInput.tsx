import {
  BsCamera as ImageIcon
} from 'react-icons/bs'
import { ChangeEvent, useState } from "react"

const PostImageInput = () => {
  const [previewImage, setPreviewImage] = useState<string>()

  return (
    <>
      <label
        htmlFor="image"
        className="block text-primaryColor font-bold max-lg:text-sm w-fit"
      >
        Imagem
        <div className="flex w-fit">
          <div className="flex justify-center items-center flex-col h-16 w-14 mb-4 mr-2 border-2 border-primaryColor rounded cursor-pointer">
            <span className="block text-xs text-center text-slate-400">Adicione</span>
            <ImageIcon className="text-slate-400"/>
          </div>
          {
            previewImage &&
            <div className="flex justify-center items-center flex-col h-16 w-14 mb-4 mr-2 border-2 border-primaryColor rounded cursor-pointer overflow-hidden">
              <img src={previewImage} alt="" />
            </div>
          }
        </div>
      </label>
      <input
        className="hidden"
        accept="image/*"
        name="image"
        id="image"
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e?.target?.files?.[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onloadend = () => {
              setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)
          }
        }}
      />
    </>
  )
}

export default PostImageInput