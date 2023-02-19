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
            <button className="text-black" onClick={() => signIn()}>Login</button>
        </Modal>
    )
}