import Image from "next/image"
import { MdVerified as VerifiedIcon } from 'react-icons/md'

interface ICommentSection {
    comments?: {
        id: string
        userId: string
        postId: string
        message: string
        createdAt: string
        user: {
            emailVerified: boolean | null
            email: string
            image: string
            name: string
            id: string
        }
    }[]
}

const CommentSection = ({ comments }: ICommentSection) => {

    return (
        <div className='bg-white mt-2 shadow-primary px-4 py-3 rounded-lg dark:bg-secondaryDarkColor max-xl:w-[40rem] max-md:w-[32rem] max-sm:w-[18rem]'>
            {
                comments?.map(comment => {
                    return <div className='flex py-2'>
                        <Image
                            alt="Imagem de perfil do usuário"
                            src={comment.user.image}
                            className="mr-3 rounded-full w-9 h-9 max-md:w-7 max-md:h-7"
                            width={36}
                            height={36}
                        />
                        <div className='flex flex-col'>
                            <span className='text-primaryColor font-bold flex items-center max-md:text-sm'>
                                {comment.user.name}
                                { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs ml-1"/> }
                            </span>
                            <p className='text-black dark:text-white max-md:text-sm'>{comment.message}</p>
                        </div>
                    </div>
                })
            }
            
        </div>
    )
}

export default CommentSection