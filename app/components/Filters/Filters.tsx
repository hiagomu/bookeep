import {
    ChakraProvider
} from '@chakra-ui/react'
import { FieldValues, useForm } from 'react-hook-form';
import SelectInput from './components/SelectInput';
import { useState } from 'react';
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb
} from '@chakra-ui/react'
import { FilterQueryParams } from '@/app/@types'
import { MdRestore as ResetFiltersIcon } from "react-icons/md"

type Props = {
    min: number
    max: number
    defaultValue: [number, number]
    setSearchParams: (searchParams: FilterQueryParams) => void
};

export const Filters =  ({min, max, defaultValue, setSearchParams }: Props) => {

    const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm()

    const onSubmit = (data: FieldValues) => {

        let currentQuery = {
            orderBy: data.orderBy,
            category: data.category,
            min: values[0],
            max: values[1]
        }

        setSearchParams(currentQuery)
    }

    const resetFilters = () => {
        setSearchParams({
            min: 0,
            max: 100,
            category: "all",
            orderBy: "desc"
        })
    }

    const [values, setValues] = useState<number[]>([defaultValue[0], defaultValue[1]])

    const handleWithMinMaxValues = (val: number[]) => {
        setValues(val)
    }

    return (
        <ChakraProvider>
            <div className="fixed mt-40 w-[19rem] h-[28rem] max-2xl:w-[16rem] max-2xl:h-[25rem] bg-filters dark:bg-secondaryDarkColor rounded-xl shadow-primary flex justify-center items-center">
                <div className="w-10/12 h-[26rem] max-2xl:h-[22rem]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-between align-top">
                            <h2 className="text-black font-bold text-xl font-nunito mb-6 dark:text-white max-2xl:mb-4">Filtros</h2>
                            <ResetFiltersIcon
                                className="text-primaryColor w-5 h-5 cursor-pointer"
                                onClick={resetFilters}
                            />
                        </div>
                        <div>
                            <div className="mb-2">
                                <span className="text-black font-bold font-nunito text-lg dark:text-white max-2xl:text-base">Faixa de preço</span>
                            </div>
                            <div className='mb-2'>
                                <RangeSlider aria-label={['min', 'max']} defaultValue={defaultValue} colorScheme='purple' min={0} max={100} onChange={(val) => handleWithMinMaxValues(val)}>
                                    <RangeSliderTrack>
                                        <RangeSliderFilledTrack />
                                    </RangeSliderTrack>
                                    <RangeSliderThumb index={0} bgColor="purple.500" />
                                    <RangeSliderThumb index={1} bgColor="purple.500" />
                                </RangeSlider>
                                <div className='flex justify-between'>
                                    <span className='text-slate-500 font-bold text-sm'>R$0</span>
                                    <span className='text-slate-500 font-bold text-sm'>R$100</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col items-center bg-white dark:bg-neutral-700 rounded-lg w-28 h-12 max-2xl:w-24 max-2xl:h-10">
                                    <label htmlFor="min" className="text-slate-300 font-bold text-xs mb-1 w-24 max-2xl:w-20">min</label>
                                    <div className="flex items-center justify-center gap-1 ">
                                        <span className="font-bold text-black text-sm dark:text-white">R$</span>
                                        <input
                                            id="min"
                                            name="min"
                                            type="number"
                                            defaultValue={values[0]}
                                            value={values[0]}
                                            readOnly
                                            className="w-20 text-black dark:text-white font-bold text-sm dark:bg-neutral-700 outline-none max-2xl:w-16"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center bg-white dark:bg-neutral-700 rounded-lg w-28 h-12 max-2xl:w-24 max-2xl:h-10">
                                    <label htmlFor="min" className="text-slate-300 font-bold text-xs mb-1 w-24 max-2xl:w-20">max</label>
                                    <div className="flex items-center justify-center gap-1 ">
                                        <span className="font-bold text-black text-sm dark:text-white">R$</span>
                                        <input
                                            id="max"
                                            name="max"
                                            type="number"
                                            defaultValue={values[1]}
                                            value={values[1]}
                                            readOnly
                                            className="w-20 text-black dark:text-white font-bold text-sm dark:bg-neutral-700 outline-none max-2xl:w-16"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SelectInput
                            register={register}
                            id="category"
                            name="category"
                            title="Categoria"
                            options={[
                                {name: "Todas", value: "all"},
                                {name: "Drama", value: "drama"},
                                {name: "Terror", value: "terror"},
                                {name: "Ficção", value: "ficction"},
                                {name: "Romance", value: "romance"},
                                {name: "História", value: "history"},
                                {name: "Fantasia", value: "fantasy"},
                                {name: "Mistério", value: "mistery"},
                                {name: "Suspense", value: "thriller"},
                                {name: "Aventura", value: "adventure"},
                                {name: "Religioso", value: "religious"},
                                {name: "Educação", value: "educational"},
                                {name: "Literatura Clássica", value: "classical-literature"},
                            ]}
                        />
                        <SelectInput
                            register={register}
                            id="orderBy"
                            name="orderBy"
                            title="Ordenar por"
                            options={[
                                {name: "Mais recentes", value: "desc"},
                                {name: "Mais antigos", value: "asc"},
                            ]}
                        />
                        <div className="w-full flex justify-center mt-6 max-2xl:mt-4">
                            <button type="submit" className="bg-primaryColor rounded-lg py-1.5 px-6 shadow-primary font-semibold hover:bg-primaryHoverColor max-2xl:py-1 max-2xl:px-4">Aplicar</button>
                        </div>
                    </form>
                </div>
            </div>
        </ChakraProvider>
    )
}