import DropdownLink from "./DropdownLink"
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LoginButton from "@/app/auth/LoginButton"
import LoggedButton from "@/app/auth/LoggedButton"
import links from "../utils/links.json"

const DropdownOpen  = async () => {

    const session = await getServerSession(authOptions)

    const userLinks = links.filter(link => link.access_level.includes(session?.user.user_access_level || "client"))

    return (
        <nav className='flex absolute flex-col items-center py-3 bg-white dark:bg-secondaryDarkColor shadow-secondary rounded-lg right-0 top-0 mt-10 z-10'>
            {
                userLinks.map((link, index) => 
                    <DropdownLink name={link.name} href={link.href} key={index}/>
                )
            }
            <div className='w-fit text-black mt-2'>
                {!session?.user && <LoginButton isDropdown={true}/>}
                {session?.user &&  
                    <LoggedButton name={session.user.name || ""} image={session.user.image || "" } isDropdown={true} />
                }
            </div>
        </nav>
    )
}

export default DropdownOpen