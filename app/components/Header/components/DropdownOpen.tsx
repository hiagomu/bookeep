import DropdownLink from "./DropdownLink"
import Link from "next/link"
import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LoginButton from "@/app/auth/LoginButton"
import LoggedButton from "@/app/auth/LoggedButton"

const DropdownOpen  = async () => {

    const session = await getServerSession(authOptions)

    return (
        <nav className='flex absolute flex-col items-center w-28 py-5 bg-white shadow-secondary rounded-lg right-0 top-0 mt-10 z-10'>
            <DropdownLink name="For you" href="/"/>
            <DropdownLink name="Offers" href="/"/>
            <DropdownLink name="Market" href="/"/>
            <div className='w-10/12 h-6 border-t border-slate-200 text-black mt-2'>
                {!session?.user && <LoginButton isDropdown={true}/>}
                {session?.user &&  
                    <LoggedButton isDropdown={true} name={session?.user?.name || ""} image={session.user.image || ""}/>
                }
            </div>

        </nav>
    )
}

export default DropdownOpen