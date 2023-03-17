"use client"

import { yupResolver } from '@hookform/resolvers/yup'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { BsSearch as SearchIcon } from 'react-icons/bs'
import { object, string } from 'yup'

interface ISearch {
    setIsOpen?: (isOpen: boolean) => void
    isReviewPage?: boolean
}

const searchSchema = object({
    query: string().min(3).required()
})

const getFilteredPosts = async (query: string) => {
    if (query) {
        const response = await axios.get(`/api/posts/getFilteredPosts?search=${query}`)
        return response.data
    }

    return null
}

export const Search = ({
    setIsOpen,
    isReviewPage
}: ISearch) => {

    const [query, setQuery] = useState("")

    const { data, isError, isLoading } = useQuery(["filteredPosts", query], () => getFilteredPosts(query))
    
    let toastPostID: string

    const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm({
        resolver: yupResolver(searchSchema)
    });

    const onSubmit = (data: FieldValues) => {
        setQuery(data.query)
        reset()
    }

    return (
        <div
            className="h-12 flex items-center justify-between fixed mt-20 max-sm:mt-14"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-search dark:bg-secondaryDarkColor flex rounded-xl w-search max-lg:w-search-lg max-sm:w-search-sm max-md:w-search-md'
            >
                <input
                    className="bg-transparent w-full py-1.5 px-4 text-black dark:text-white rounded-xl outline-none max-sm:text-sm"
                    placeholder="Pesquise por livros ou lojas"
                    {...register("query")}
                    type="text"
                />
                <button
                    type='submit'
                    className='px-4 max-sm:px-2'
                >
                    <SearchIcon
                        className='text-slate-600 dark:text-white text-sm max-sm:text-xs'
                    />
                </button>
            </form>
            {
                !isReviewPage && setIsOpen &&
                <button
                    className="bg-primaryColor font-poppins h-9 px-2 rounded-lg ml-2 hover:bg-primaryHoverColor text-base font-medium max-sm:text-xs max-sm:h-7"
                    onClick={() => setIsOpen(true)}
                >
                    Novo
                </button>
            }
        </div>
    )
}