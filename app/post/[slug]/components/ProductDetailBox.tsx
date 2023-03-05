import { HiOfficeBuilding as EditorIcon } from 'react-icons/hi'

const ProductDetailBox = () => {
    return (
        <div className='flex flex-col items-center justify-center p-4 w-24 h-20 rounded-lg shadow-purple dark:bg-secondaryDarkColor'>
            <EditorIcon className='text-primaryColor w-7 h-7'/>
            <span className='text-slate-500 text-xs font-bold mt-2 dark:text-white'>Intrínseca</span>
        </div>
    )
}

export default ProductDetailBox