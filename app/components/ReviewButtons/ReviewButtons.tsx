import {
    FaCheck as ApproveIcon,
    FaTrashAlt as RejectIcon
} from "react-icons/fa"
import { useQueryClient, useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useState } from "react"
import { RejectPost } from "../Modals/RejectPost"

interface ReviewButtons {
    id: string,
    bookImageURL: string,
    description: string,
    category: string,
    coupon: string,
    title: string,
    price: string,
    saleLink: string,
    userId: string,
}

export const ReviewButtons = ({
    id,
    price,
    title,
    coupon,
    userId,
    saleLink,
    category,
    description,
    bookImageURL,
}: ReviewButtons) => {

    let approveToastID: string
    let rejectToastID: string
    const queryClient = useQueryClient()
    const [isOpen, setIsOpen] = useState(false)
    
    const approvePost = useMutation(
        async ({ id, price, title, coupon, userId, saleLink, category, description, bookImageURL }: ReviewButtons) => {
            approveToastID = toast.loading("Aprovando anúncio...", { id: approveToastID})
            await axios.put(`/api/posts/approvePost`, {data: { id, price, title, coupon, userId, saleLink, category, description, bookImageURL }})
        },
        {
            onError: (error) => {
                if (error instanceof AxiosError) {
                  toast.error(error?.response?.data.message, {id: approveToastID})
                }
            },
            onSuccess: () => {
                toast.success("Anúncio aprovado com sucesso!", { id: approveToastID })
                queryClient.invalidateQueries(["posts"])
            }
        }
    )

    const rejectPost = useMutation(
        async ({ id, price, title, coupon, userId, saleLink, category, description, bookImageURL }: ReviewButtons) => {
            rejectToastID = toast.loading("Removendo anúncio...", { id: rejectToastID})
            await axios.put(`/api/posts/rejectPost`, {data: { id, price, title, coupon, userId, saleLink, category, description, bookImageURL }})
        },
        {
            onError: (error) => {
                if (error instanceof AxiosError) {
                  toast.error(error?.response?.data.message, {id: rejectToastID})
                }
            },
            onSuccess: () => {
                toast.success("Anúncio removido com sucesso!", { id: rejectToastID })
                queryClient.invalidateQueries(["posts"])
            }
        }
    )

    return (
        <>
            <RejectPost
                id={id}
                price={price}
                title={title}
                coupon={coupon}
                userId={userId}
                saleLink={saleLink}
                category={category}
                description={description}
                bookImageURL={bookImageURL}
                isOpen={isOpen}
                rejectPost={rejectPost}
                setIsOpen={setIsOpen}
            />
            <div className="flex justify-between w-48 absolute bottom-0 right-0 max-sm:w-40">
                <button
                    className="bg-green-500 hover:opacity-50 py-1 px-2 rounded-lg font-bold text-sm flex items-center justify-center max-sm:text-xs max-sm:py-0.5"
                    onClick={() => approvePost.mutate({id, price, title, coupon, userId, saleLink, category, description, bookImageURL})}
                >
                    Aprovar
                    <ApproveIcon className="text-white ml-2 max-sm:ml-1"/>
                </button>
                <button
                    className="bg-red-500 hover:opacity-50 py-1 px-2 rounded-lg font-bold text-sm flex items-center justify-center max-sm:text-xs max-sm:py-0.5"
                    onClick={() => setIsOpen(true)}
                >
                    Rejeitar
                    <RejectIcon className="text-white ml-2 max-sm:ml-1"/>
                </button>
            </div>
        </>
    )
}