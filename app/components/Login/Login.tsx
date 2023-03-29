import { Modal } from "../Modal"
import { signIn } from "next-auth/react"

interface ILogin {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const Login = ({
    isOpen,
    setIsOpen
}: ILogin) => {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="px-10 py-6 bg-white dark:bg-secondaryDarkColor rounded-lg flex flex-col justify-center items-center max-sm:px-6 max-sm:py-4">
                <span className="text-black dark:text-white mb-3 font-poppins text-xl font-semibold max-sm:text-lg">Deseja fazer login?</span>
                <div className="flex gap-5">
                    <button
                        className="bg-primaryColor hover:bg-primaryHoverColor text-white py-2 px-4 rounded-lg font-poppins text-lg font-semibold outline-none max-sm:text-base max-sm:px-2 max-sm:py-1.5"
                        onClick={() => signIn()}
                    >
                        Login
                    </button>
                    <button
                        className="bg-red-500 hover:opacity-70 text-white py-2 px-4 rounded-lg font-poppins text-lg font-semibold outline-none max-sm:text-base max-sm:px-2 max-sm:py-1.5"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </Modal>
    )
}