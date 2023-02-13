import { BsSearch as SearchIcon } from 'react-icons/bs'

export const Search = () => {
    return (
        <div
            className="h-fit flex items-center mt-2 mb-5 justify-between"
        >
            <div
                className='bg-search flex rounded-xl w-search max-lg:w-search-lg max-sm:w-search-sm'
            >
                <input
                    className="bg-transparent w-full py-1 px-4 text-black rounded-xl outline-none max-sm:text-sm"
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
                className="bg-primaryColor h-8 px-2 rounded-lg ml-2 hover:bg-primaryHoverColor text-sm font-semibold max-sm:text-xs max-sm:h-7"
            >
                Novo
            </button>
        </div>
    )
}