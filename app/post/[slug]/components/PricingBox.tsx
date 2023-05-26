import { HiShare as ShareIcon } from 'react-icons/hi'
import { RiCoupon3Fill as CouponIcon } from 'react-icons/ri'
import { FaExternalLinkAlt as VisitIcon } from 'react-icons/fa'
import {
    MdNotificationsActive as NotifyIcon,
    MdVerified as VerifiedIcon
} from 'react-icons/md'
import Link from 'next/link'
import { PricingBoxType } from '@/app/@types'
import { Share } from '@/app/components/Modals/Share'
import { useState } from 'react'

const PricingBox =  ({
    price,
    coupon,
    postId,
    seller,
    saleLink
}: PricingBoxType) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-[18rem] h-[13rem] p-5 shadow-primary rounded-lg dark:bg-secondaryDarkColor max-xl:p-4 max-xl:w-[16rem] max-xl:h-[11rem]'>
            <Share isOpen={isOpen} setIsOpen={setIsOpen} postId={postId}/>
            <div className='flex justify-between'>
                <span className='text-primaryColor text-4xl font-poppins font-semibold max-xl:text-3xl'>
                    R$ {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(Number(price)).slice(3)}
                </span>
                <div className='rounded-full hover:bg-slate-200 w-fit h-fit p-1.5 flex justify-center items-center dark:hover:bg-primaryDarkHoverColor cursor-pointer'>    
                    <ShareIcon
                        className='text-primaryColor w-5 h-5'
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <div className='flex items-center mt-2'>
                <span className='text-slate-400 mr-2 font-semibold font-poppins max-xl:text-sm max-sm:text-xs max-sm:mr-1'>{seller}</span>
                { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                {
                    false &&
                    <button className='bg-slate-200 ml-2 p-0.5 rounded-full'>
                        <NotifyIcon className='text-slate-500'/>
                    </button>
                }
            </div>
            <div className='flex mt-3 gap-2'>
                {
                    coupon ?
                        <div className='flex p-1 bg-slate-200 rounded-lg cursor-pointer'>
                            <CouponIcon className='text-slate-500 mr-1'/>
                            <span className='text-slate-500 text-xs font-bold'>{coupon}</span>
                        </div>
                        :
                        <div className='flex p-1 bg-red-400 rounded-lg cursor-pointer'>
                            <span className='text-black text-xs font-bold'>SEM CUPOM</span>
                        </div>
                }
            </div>
            <Link
                className='flex items-center justify-center bg-primaryColor font-poppins text-white rounded-lg w-full py-1.5 font-semibold text-xl mt-5 hover:bg-primaryHoverColor max-xl:mt-3 max-xl:text-lg max-xl:py-1'
                href={saleLink}
            >
                Ver promoção
                <VisitIcon className='text-white ml-2'/>
            </Link>
        </div>
    )
}

export default PricingBox