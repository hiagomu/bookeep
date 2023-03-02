"use client"
import {
    FaEllipsisH as OptionsIcon,
    FaExternalLinkAlt as VisitIcon
} from 'react-icons/fa'
import {
    MdNotificationsActive as NotifyIcon,
    MdVerified as VerifiedIcon
} from 'react-icons/md'
import {
    HiShare as ShareIcon,
    HiOfficeBuilding as Editoricon
} from 'react-icons/hi'
import { RiCoupon3Fill as CouponIcon } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import { Interactions } from '@/app/components/Interactions'

export default function PostDetail() {
    return (
        <div className="mt-24 flex justify-between w-[78.75rem]">
            <div>
                <div className="w-[51rem] h-[17rem] flex flex-col relative">
                    <div className='flex items-center mt-2 relative'>
                        <span
                            className="block text-primaryColor dark:text-slate-400 font-bold w-full text-right text-sm serif max-sm:text-xs"
                        >
                            32 min
                        </span>
                        <button
                            className="text-black ml-2 flex items-center justify-center rounded-full h-6 w-6 bg-slate-200 dark:bg-primaryDarkHoverColor"
                            onClick={() => console.log("oi")}
                        >
                            <OptionsIcon className="text-primaryColor"/>
                        </button>
                    </div>
                    <div className='flex'>
                        <Image
                            src="https://bookeep-images.s3.amazonaws.com/m0av9ktcvd-carmilla_jpg"
                            alt="product"
                            width={136}
                            height={192}
                            className="mr-5 max-xl:w-24 max-xl:h-36 max-lg:w-30 max-lg:h-32 max-sm:w-16 max-sm:h-24 rounded"
                        />
                        <div>
                            <h1 className="block text-black dark:text-white text-2xl font-bold max-xl:text-lg max-lg:text-base max-sm:text-sm max-sm:truncate">Carmilla - A vampira de Karnstein +: O Vampiro, de John William Polidori</h1>
                            <p className='text-sm font-medium mt-2 text-black'>
                                Essa edição traz a primeira vampira da história e também a primeira história de vampiro já escrita em projeto gráfico especial, com curiosidades sobre as obras e os autores. Carmilla é uma obra precursora da temática de vampiros, considerada por muitos críticos como a melhor do século XIX, pela maneira como trabalha o suspense e o erotismo.
                            </p>
                            <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5">
                                <Image
                                    alt="Imagem de perfil do usuário"
                                    src="https://lh3.googleusercontent.com/ogw/AAEL6sj1srioXDolAgpTtsrJsULc4pGEHcZnS3BOJT7i2w=s32-c-mo"
                                    className="mr-2 rounded-full max-lg:w-5 max-sm:w-4"
                                    width={24}
                                    height={24}
                                />
                                <Link
                                    href={"/"}
                                    className="text-primaryColor dark:text-white mr-2 font-bold max-xl:text-sm max-sm:text-xs max-sm:mr-1"
                                >
                                    Hiago Murilo
                                </Link>
                                { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                            </div>
                        </div>
                        <Interactions
                            boos={5}
                            comments={0}
                        />
                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className='flex flex-col items-center justify-center p-4 w-28 h-24 rounded-lg shadow-purple'>
                        <Editoricon className='text-primaryColor w-7 h-7'/>
                        <span className='text-slate-500 text-xs font-bold mt-2'>Intrínseca</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4 w-28 h-24 rounded-lg shadow-purple'>
                        <Editoricon className='text-primaryColor w-7 h-7'/>
                        <span className='text-slate-500 text-xs font-bold mt-2'>Intrínseca</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4 w-28 h-24 rounded-lg shadow-purple'>
                        <Editoricon className='text-primaryColor w-7 h-7'/>
                        <span className='text-slate-500 text-xs font-bold mt-2'>Intrínseca</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4 w-28 h-24 rounded-lg shadow-purple'>
                        <Editoricon className='text-primaryColor w-7 h-7'/>
                        <span className='text-slate-500 text-xs font-bold mt-2'>Intrínseca</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-4 w-28 h-24 rounded-lg shadow-purple'>
                        <Editoricon className='text-primaryColor w-7 h-7'/>
                        <span className='text-slate-500 text-xs font-bold mt-2'>Intrínseca</span>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <div className='w-[18rem] h-[13rem] p-5 shadow-primary rounded-lg'>
                <div className='flex justify-between'>
                    <span className='text-primaryColor text-4xl font-bold'>R$25,50</span>
                    <ShareIcon className='text-primaryColor w-5 h-5'/>
                </div>
                <div className='flex items-center mt-2'>
                    <span className='text-slate-400 mr-2 font-bold max-xl:text-sm max-sm:text-xs max-sm:mr-1'>Amazon</span>
                    { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                    <button className='bg-slate-200 ml-2 p-0.5 rounded-full'>
                        <NotifyIcon className='text-slate-500'/>
                    </button>
                </div>
                <div className='flex mt-3 gap-2'>
                    <div className='flex p-1 bg-slate-200 rounded-lg cursor-pointer'>
                        <CouponIcon className='text-slate-500 mr-1'/>
                        <span className='text-slate-500 text-xs font-bold'>AMZ1002</span>
                    </div>
                    <div className='flex p-1 bg-slate-200 rounded-lg cursor-pointer'>
                        <CouponIcon className='text-slate-500 mr-1'/>
                        <span className='text-slate-500 text-xs font-bold'>AMZ1002</span>
                    </div>
                </div>
                <button className='flex items-center justify-center bg-primaryColor text-white rounded-lg w-full py-1.5 font-bold text-xl mt-5 hover:bg-primaryHoverColor'>
                    Ver promoção
                    <VisitIcon className='text-white ml-2'/>
                </button>
            </div>
        </div>
    )
}