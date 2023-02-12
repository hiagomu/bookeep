import { Interactions } from "../Interactions"
import Link from "next/link"
import { MdVerified as VerifiedSellerIcon } from 'react-icons/md'
import { BsPersonCircle as ProfilePictureIcon} from 'react-icons/bs'

export const Post = () => {
    return (
        <div className="bg-white w-post h-post rounded-3xl flex justify-center items-center shadow-primary mb-10 relative overflow-hidden">
            <div className="w-11/12">
                <span className="block text-primaryColor font-bold w-full text-right text-sm serif">32min</span>
                <div className="flex justify-between relative">
                    <img src="https://m.media-amazon.com/images/I/619aw8BhHCL.jpg" alt="product"  className="w-40 h-48 mr-2"/>
                    <div className="mt-2 h-fit">
                        <Link href='/' className="text-black text-xl font-bold">O Ladrão de Raios - Capa Nova: (Série Percy Jackson e os Olimpianos): 1</Link>
                        <div className="flex items-end">
                            <span className="block text-primaryColor font-bold text-2xl mt-2">R$25,50</span>
                            <div className="flex mb-1 ml-4 items-center">
                                <span className="mr-2 font-bold text-slate-500">Amazon</span>
                                <VerifiedSellerIcon className="text-primaryColor"/>
                            </div>
                        </div>
                        <div className="flex items-center mt-3">
                            <ProfilePictureIcon className="mr-2 text-primaryColor"/>
                            <Link href='/' className="text-primaryColor font-bold">Hiago Murilo</Link>
                        </div>
                    </div>
                    <Interactions />
                </div>
            </div>
            <div className="absolute bottom-0">
                <Link href='/' className="bg-primaryColor px-12 py-1 rounded-t-lg font-bold hover:bg-primaryHoverColor">Ver mais</Link>
            </div>
        </div>
    )
}
