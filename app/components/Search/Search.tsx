"use client"

import { BsSearch as SearchIcon } from 'react-icons/bs'

interface ISearch {
    setIsOpen?: (isOpen: boolean) => void
    isReviewPage?: boolean
}

export const Search = ({
    setIsOpen,
    isReviewPage
}: ISearch) => {
    return (
        <div
            className="h-12 flex items-center justify-between fixed mt-20 max-sm:mt-14"
        >
            <div
                className='bg-search dark:bg-secondaryDarkColor flex rounded-xl w-search max-lg:w-search-lg max-sm:w-search-sm max-md:w-search-md'
            >
                <input
                    className="bg-transparent w-full py-1.5 px-4 text-black dark:text-white rounded-xl outline-none max-sm:text-sm"
                    placeholder="Pesquise por livros ou lojas"
                    type="text"
                />
                <button
                    className='px-4 max-sm:px-2'
                >
                    <SearchIcon
                        className='text-slate-600 dark:text-white text-sm max-sm:text-xs'
                    />
                </button>
            </div>
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