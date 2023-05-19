import { BookstoresType } from "@/app/@types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getBookstores = async () => {
    const response = await axios.get('/api/places/getBookstores')
    return response.data
}

export const Bookstores =  () => {

    const { data, isLoading, status } = useQuery<BookstoresType[]>({
        queryFn: getBookstores,
        queryKey: ["bookstores"]
    })

    return (
        <div className="w-[19rem] h-[41rem] bg-filters dark:bg-secondaryDarkColor rounded-xl mt-40 shadow-primary px-6 py-5">
            <h2 className="text-xl text-black font-bold mb-5 dark:text-white">Bibliotecas</h2>
            {
                    data?.map((bookstore: BookstoresType) =>  
                            <div className="flex flex-col mb-2 w-[16rem]">
                                <div className="flex justify-between">
                                    <h3 className="text-black font-bold text-lg w-[12.8rem] dark:text-white">{bookstore.name}</h3>
                                    <span className="text-primaryColor font-bold text-base">{bookstore.rating} ⭐</span>
                                </div>
                                <p className="text-sm text-black dark:text-white">{bookstore.formatted_address}</p>
                                <button className="bg-primaryColor py-0.5 mt-2 text-white font-semibold rounded-md hover:bg-primaryHoverColor">Conhecer</button>
                            </div>
                    )
            }
        </div>
    )
}