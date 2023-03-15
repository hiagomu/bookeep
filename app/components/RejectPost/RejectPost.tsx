import { Modal } from "../Modal"
import { UseMutationResult } from "@tanstack/react-query"

interface IRejectPostMutation {
    id: string
    price: string
    title: string
    coupon: string
    userId: string
    saleLink: string
    category: string
    description: string
    bookImageURL: string
}

interface IRejectPost {
    id: string
    price: string
    title: string
    coupon: string
    userId: string
    saleLink: string
    category: string
    description: string
    bookImageURL: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    rejectPost: UseMutationResult<void, unknown, IRejectPostMutation, unknown>
}

export const RejectPost = ({
    id,
    price,
    title,
    coupon,
    userId,
    saleLink,
    category,
    description,
    bookImageURL,
    setIsOpen,
    isOpen,
    rejectPost
}: IRejectPost) => {
    
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
                            rejectPost.mutate({id, price, title, coupon, userId, saleLink, category, description, bookImageURL})
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