import Image from "next/image"
import { MdVerified as VerifiedIcon } from 'react-icons/md'

const CommentSection = () => {
    return (
        <div className='bg-white mt-2 shadow-primary px-4 py-3 rounded-lg dark:bg-secondaryDarkColor'>
            <div className='flex py-2'>
                <Image
                    alt="Imagem de perfil do usuário"
                    src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                    className="mr-3 rounded-full w-9 h-9"
                    width={36}
                    height={36}
                />
                <div className='flex flex-col'>
                    <span className='text-primaryColor font-bold flex items-center'>
                        Hiago Murilo
                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs ml-1"/> }
                    </span>
                    <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra urna sed urna ultrices aaa ornare. Cras pharetra urna sed urna ultrices ornare. Lorem ipsum dolor sit amet, consectetur bbbb adipiscing elit.</p>
                </div>
            </div>
            <div className='flex py-2'>
                <Image
                    alt="Imagem de perfil do usuário"
                    src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                    className="mr-3 rounded-full w-9 h-9"
                    width={36}
                    height={36}
                />
                <div className='flex flex-col'>
                    <span className='text-primaryColor font-bold flex items-center'>
                        Hiago Murilo
                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs ml-1"/> }
                    </span>
                    <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra urna sed urna ultrices aaa ornare. Cras pharetra urna sed urna ultrices ornare. Lorem ipsum dolor sit amet, consectetur bbbb adipiscing elit.</p>
                </div>
            </div>
            <div className='flex py-2'>
                <Image
                    alt="Imagem de perfil do usuário"
                    src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                    className="mr-3 rounded-full w-9 h-9"
                    width={36}
                    height={36}
                />
                <div className='flex flex-col'>
                    <span className='text-primaryColor font-bold flex items-center'>
                        Hiago Murilo
                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs ml-1"/> }
                    </span>
                    <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra urna sed urna ultrices aaa ornare. Cras pharetra urna sed urna ultrices ornare.</p>
                </div>
            </div>
        </div>
    )
}

export default CommentSection