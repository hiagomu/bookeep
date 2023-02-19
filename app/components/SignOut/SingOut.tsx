import { Modal } from "../Modal"
import { signOut } from 'next-auth/react'

interface ISignOut {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const SignOut = ({
    setIsOpen,
    isOpen
}: ISignOut) => {

    const signOutAndClose = () => {
        setIsOpen(false)
        signOut()
    }
    
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="py-4 px-6">
                <h2 className="text-black font-semibold text-lg mb-4">Você tem certeza?</h2>
                <div className="flex justify-between">
                    <button className="bg-primaryColor text-white py-1 px-4 outline-none rounded hover:bg-primaryHoverColor" onClick={() => signOutAndClose()}>Sim</button>
                    <button className="bg-red-500 text-white py-1 px-4 outline-none rounded hover:bg-red-300" onClick={() => setIsOpen(false)}>Não</button>
                </div>
            </div>
        </Modal>
    )
}