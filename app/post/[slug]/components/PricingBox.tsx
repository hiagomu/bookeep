import { HiShare as ShareIcon } from 'react-icons/hi'
import { RiCoupon3Fill as CouponIcon } from 'react-icons/ri'
import { FaExternalLinkAlt as VisitIcon } from 'react-icons/fa'
import {
    MdNotificationsActive as NotifyIcon,
    MdVerified as VerifiedIcon
} from 'react-icons/md'
import Link from 'next/link'

interface IPricing {
    price: string
    seller: string
    coupon?: string
    saleLink: string
}

const PricingBox =  ({
    price,
    coupon,
    seller,
    saleLink
}: IPricing) => {
    return (
        <div className='w-[18rem] h-[13rem] p-5 shadow-primary rounded-lg dark:bg-secondaryDarkColor'>
            <div className='flex justify-between'>
                <span className='text-primaryColor text-4xl font-bold'>{price}</span>
                <ShareIcon className='text-primaryColor w-5 h-5'/>
            </div>
            <div className='flex items-center mt-2'>
                <span className='text-slate-400 mr-2 font-bold max-xl:text-sm max-sm:text-xs max-sm:mr-1'>{seller}</span>
                { true && <VerifiedIcon className="text-primaryColor max-sm:text-xs"/> }
                <button className='bg-slate-200 ml-2 p-0.5 rounded-full'>
                    <NotifyIcon className='text-slate-500'/>
                </button>
            </div>
            <div className='flex mt-3 gap-2'>
                <div className='flex p-1 bg-slate-200 rounded-lg cursor-pointer'>
                    <CouponIcon className='text-slate-500 mr-1'/>
                    <span className='text-slate-500 text-xs font-bold'>{coupon || "NONE"}</span>
                </div>
            </div>
            <Link
                className='flex items-center justify-center bg-primaryColor text-white rounded-lg w-full py-1.5 font-bold text-xl mt-5 hover:bg-primaryHoverColor'
                href={saleLink}
            >
                Ver promoção
                <VisitIcon className='text-white ml-2'/>
            </Link>
        </div>
    )
}

export default PricingBox