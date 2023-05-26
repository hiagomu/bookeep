import Link from "next/link"
import { SignOut } from "../Modals/SignOut"
import { useState } from "react"
import { BsFilePerson as ProfileCardIcon } from 'react-icons/bs'
import { MdLogout as SingOutIcon } from 'react-icons/md'
import Image from "next/image"
import { Darkmode } from "../Darkmode"
import { useSession } from "next-auth/react"

interface IProfileMenu {
    profilePic: string
    name?: string
}

export const ProfileMenu = ({
    name, profilePic
}: IProfileMenu) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const { data: session } = useSession()

    return (
        <>
            <SignOut isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="flex absolute flex-col items-center w-fit pt-4 pb-3 px-2 bg-white dark:bg-secondaryDarkColor shadow-primary rounded-lg right-0 top-0 mt-14 z-10">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-500 pb-2">
                    <Image
                        width={24}
                        height={24}
                        alt="Imagem de perfil do usuário"
                        src={profilePic}
                        className="rounded-full mr-2"
                    />
                    <span className="block text-black dark:text-white text-sm w-28 truncate">{name || ""}</span>
                </div>
                <div className="w-full border-b border-slate-100 dark:border-slate-500 pb-2">
                    <Link href={`/profile/${session?.user.id}`} className="flex w-full mt-1 py-1.5 px-2 rounded items-center outline-none hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor">
                        <ProfileCardIcon className='text-slate-600 dark:text-slate-200 w-5 h-5 mr-2' />
                        <span className="text-black dark:text-white text-sm">Meu perfil</span>
                    </Link>
                    <div onClick={() => setIsOpen(true)} className="flex w-full mt-1 py-1.5 px-2 rounded items-center outline-none hover:bg-slate-200 dark:hover:bg-primaryDarkHoverColor cursor-pointer">
                        <SingOutIcon className="text-slate-600 dark:text-slate-200 w-5 h-5 mr-2"/>
                        <span className="text-black dark:text-white text-sm">Sair</span>
                    </div>
                </div>
                <div className="flex w-full mt-1 px-2">
                    <Darkmode isDropdown={false}/>
                </div>
            </div>
        </>
    )
}