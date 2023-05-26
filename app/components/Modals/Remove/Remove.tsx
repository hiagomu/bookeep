import { Modal } from "../Modal"
import { UseMutationResult } from "@tanstack/react-query"

interface IDeletePost {
    id: string
}

interface IRemove {
    id: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    deletePost: UseMutationResult<void, unknown, IDeletePost, unknown>
}

export const Remove = ({
    id,
    setIsOpen,
    isOpen,
    deletePost
}: IRemove) => {
    
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="py-4 px-6">
                <h2 className="text-black dark:text-white font-poppins font-medium text-lg mb-4">Você tem certeza?</h2>
                <div className="flex justify-between">
                    <button
                        className="font-poppins font-semibold bg-primaryColor text-white py-1 px-4 outline-none rounded hover:bg-primaryHoverColor"
                        onClick={() => {
                            setIsOpen(false)
                            deletePost.mutate({id})
                        }}
                    >
                        Sim
                    </button>
                    <button className="font-poppins font-semibold bg-red-500 text-white py-1 px-4 outline-none rounded hover:bg-red-300" onClick={() => setIsOpen(false)}>Não</button>
                </div>
            </div>
        </Modal>
    )
}