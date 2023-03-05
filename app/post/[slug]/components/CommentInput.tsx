import { IoMdSend as SendIcon } from 'react-icons/io'
import Image from "next/image"

const CommentInput = () => {
    return (
        <div className='flex flex-col justify-center bg-white dark:bg-secondaryDarkColor shadow-primary rounded-lg h-fit w-full px-4 py-3 mt-5'>
            <h2 className='text-black font-bold mb-2 text-lg dark:text-white'>Comentários</h2>
            <div className='flex justify-between'>
                <Image
                    alt="Imagem de perfil do usuário"
                    src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                    className="mr-2 rounded-full w-9 h-9"
                    width={36}
                    height={36}
                />
                <textarea name="" id="" placeholder='Adicione um comentário a publicação' className='bg-slate-200 rounded-2xl py-1.5 px-2 text-black dark:bg-primaryDarkHoverColor dark:text-white outline-none w-full h-9 resize-none mr-2' />
                <button className='bg-primaryColor hover:bg-primaryHoverColor text-white rounded-full h-fit p-2'>
                    <SendIcon className='text-white h-5 w-5'/>
                </button>
            </div>
        </div>
    )
}

export default CommentInput