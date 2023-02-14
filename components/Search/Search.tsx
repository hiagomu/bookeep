"use client"

import { BsSearch as SearchIcon } from 'react-icons/bs'

export const Search = () => {
    return (
        <div
            className="h-12 flex items-center justify-between fixed top-0 mt-24 max-sm:mt-14"
        >
            <div
                className='bg-search flex rounded-xl w-search max-lg:w-search-lg max-sm:w-search-sm max-md:w-search-md'
            >
                <input
                    className="bg-transparent w-full py-1.5 px-4 text-black rounded-xl outline-none max-sm:text-sm"
                    placeholder="Pesquise por livros ou lojas"
                    type="text"
                />
                <button
                    className='px-4 max-sm:px-2'
                >
                    <SearchIcon
                        className='text-slate-600 text-sm max-sm:text-xs'
                    />
                </button>
            </div>
            <button
                className="bg-primaryColor h-9 px-2 rounded-lg ml-2 hover:bg-primaryHoverColor text-base font-semibold max-sm:text-xs max-sm:h-7"
            >
                Novo
            </button>
        </div>
    )
}