"use client"

import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import { BsSearch as SearchIcon } from 'react-icons/bs'
import { object, string } from 'yup'
import { FilterQueryParams } from '@/app/@types'

interface ISearch {
    setIsOpen?: (isOpen: boolean) => void
    isReviewPage?: boolean
    searchParams: FilterQueryParams
    setSearchParams: (searchParams: FilterQueryParams) => void
}

const searchSchema = object({
    query: string().min(3).required()
})

export const Search = ({
    setIsOpen,
    isReviewPage,
    setSearchParams,
    searchParams
}: ISearch) => {

    const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm({
        resolver: yupResolver(searchSchema)
    });

    const onSubmit = (data: FieldValues) => {
        setSearchParams({
            category: searchParams.category,
            max: searchParams.max,
            min: searchParams.min,
            orderBy: searchParams.orderBy,
            search: String(data.query)
        })
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
                    className="bg-primaryColor font-poppins text-white h-9 px-2 rounded-lg ml-2 hover:bg-primaryHoverColor text-base font-medium max-sm:text-xs max-sm:h-7"
                    onClick={() => setIsOpen(true)}
                >
                    Novo
                </button>
            }
        </div>
    )
}