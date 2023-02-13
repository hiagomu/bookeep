"use client"

import { Interactions } from "../Interactions"
import Link from "next/link"
import { MdVerified as VerifiedSellerIcon } from 'react-icons/md'
import { BsPersonCircle as ProfilePictureIcon} from 'react-icons/bs'

export const Post = () => {
    return (
        <div
            className="bg-white w-post h-fit rounded-3xl flex items-center flex-col shadow-primary mb-10 relative overflow-hidden max-xl:w-post-xl max-lg:w-post-lg max-sm:w-post-sm"
        >
            <div className="w-11/12">
                <span
                    className="block text-primaryColor font-bold w-full text-right text-sm serif mt-2 max-sm:text-xs"
                >
                    32min
                </span>
                <div className="flex relative">
                    <img
                        src="https://m.media-amazon.com/images/I/619aw8BhHCL.jpg"
                        alt="product"
                        className="w-40 h-48 mr-2 max-xl:w-36 max-xl:h-40 max-lg:w-30 max-lg:h-32 max-sm:w-20 max-sm:h-24"
                    />
                    <div className="mt-2 h-fit max-lg:mt-1 max-sm:w-44">
                        <Link
                            href='/'
                            className="block text-black text-xl font-bold max-xl:text-lg max-lg:text-base max-sm:text-sm max-sm:truncate"
                        >
                            O Ladrão de Raios - Capa Nova: (Série Percy Jackson e os Olimpianos): 1
                        </Link>
                        <div className="flex items-end">
                            <span
                                className="block text-primaryColor font-bold text-2xl mt-2 max-xl:text-xl max-lg:text-lg max-lg:mt-1 max-sm:text-base"
                            >
                                R$25,50
                            </span>
                            <div className="flex mb-1 ml-4 items-center max-sm:ml-2">
                                <span
                                    className="mr-2 font-bold text-slate-500 max-xl:text-sm max-sm:text-xs max-sm:mr-1"
                                >
                                    Amazon
                                </span>
                                <VerifiedSellerIcon className="text-primaryColor max-sm:text-xs"/>
                            </div>
                        </div>
                        <div className="flex items-center mt-3 max-xl:mt-2 max-lg:mt-1 max-sm:mb-5">
                            <ProfilePictureIcon className="mr-2 text-primaryColor"/>
                            <Link
                                href='/'
                                className="text-primaryColor font-bold max-xl:text-sm max-sm:text-xs"
                            >
                                Hiago Murilo
                            </Link>
                        </div>
                    </div>
                    <Interactions />
                </div>
            </div>
            <Link
                href='/'
                className="bg-primaryColor px-12 py-1 rounded-t-lg font-bold hover:bg-primaryHoverColor max-xl:px-8 max-xl:text-sm max-sm:py-0.5 max-sm:text-xs max-sm:mt-2 max-sm:px-5"
            >
                Ver mais
            </Link>
        </div>
    )
}
