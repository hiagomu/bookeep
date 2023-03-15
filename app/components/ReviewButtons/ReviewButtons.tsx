import {
    FaCheck as ApproveIcon,
    FaTrashAlt as RejectIcon
} from "react-icons/fa"
import { useQueryClient, useMutation } from '@tanstack/react-query'
import axios from "axios"
import toast from "react-hot-toast"

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
    let patchToastID: string
    const queryClient = useQueryClient()
    const approvePost = useMutation(
        async ({ id, price, title, coupon, userId, saleLink, category, description, bookImageURL }: ReviewButtons) => {
            patchToastID = toast.loading("Aprovando anúncio...", { id: patchToastID})
            await axios.put(`/api/posts/approvePost`, {data: { id, price, title, coupon, userId, saleLink, category, description, bookImageURL }})
        },
        {
            onSuccess: () => {
                toast.success("Anúncio aprovado com sucesso!", { id: patchToastID })
                queryClient.invalidateQueries(["posts"])
            }
        }
    )

    return (
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
                
            >
                Rejeitar
                <RejectIcon className="text-white ml-2 max-sm:ml-1"/>
            </button>
        </div>
    )
}