import Image from "next/image"
import Link from "next/link"
import { Interactions } from "@/app/components/Interactions"
import { MdVerified as VerifiedIcon } from 'react-icons/md'

const RelatedProducts = () => {
    return (
        <div className='w-[18rem] h-[12.5rem] p-5 shadow-primary rounded-lg mb-2 dark:bg-secondaryDarkColor'>
            <div className='flex'>
                <Image
                    src="https://bookeep-images.s3.amazonaws.com/m0av9ktcvd-carmilla_jpg"
                    alt="Imagem do produto"
                    width={75}
                    height={90}
                    className="mr-5 max-xl:w-24 max-xl:h-36 max-lg:w-30 max-lg:h-32 max-sm:w-16 max-sm:h-24 rounded"
                />
                <div className='relative'>
                    <span className='text-primaryColor font-poppins font-semibold text-xl'>R$53,90</span>
                    <div className='flex items-center'>
                        <span className='text-slate-400 mr-2 font-semibold font-poppins max-xl:text-sm max-sm:text-xs max-sm:mr-1'>Amazon</span>
                        { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                    </div>
                    <div className="flex mt-2 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5">
                        <Image
                            alt="Imagem de perfil do usuário"
                            src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                            className="mr-2 rounded-full max-lg:w-5 max-sm:w-4"
                            width={20}
                            height={20}
                        />
                        <Link
                            href={"/"}
                            className="text-primaryColor dark:text-white mr-2 font-medium font-poppins text-sm max-sm:text-xs max-sm:mr-1"
                        >
                            Hiago Murilo
                        </Link>
                        <Interactions comments={0} boos={0} little={true}/>
                    </div>
                </div>
            </div>
            <span className='text-black font-semibold font-poppins mt-1 block dark:text-white'>Contos de Horror da Mimi (Edição Completa)</span>
        </div>
    )
}

export default RelatedProducts