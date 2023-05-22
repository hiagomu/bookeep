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
import { FilterQueryParams } from '@/app/@types';

type Props = {
    min: number
    max: number
    defaultValue: [number, number]
    setSearchParams: (searchParams: FilterQueryParams) => void
};

export const Filters =  ({min, max, defaultValue, setSearchParams }: Props) => {

    const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm()

    const onSubmit = async (data: FieldValues) => {

        let currentQuery = {
            orderBy: data.orderBy,
            category: data.category,
            min: values[0],
            max: values[1]
        }

        setSearchParams(currentQuery)
    }

    const [values, setValues] = useState<number[]>([defaultValue[0], defaultValue[1]])

    const handleWithMinMaxValues = (val: number[]) => {
        setValues(val)
    }

    return (
        <ChakraProvider>
            <div className="w-[19rem] h-[28rem] bg-filters dark:bg-secondaryDarkColor rounded-xl mt-40 shadow-primary flex justify-center items-center">
                <div className="w-10/12 h-[26rem]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-between">
                            <h2 className="text-black font-bold text-xl font-nunito mb-6 dark:text-white">Filtros</h2>   
                            <button></button>
                        </div>
                        <div>
                            <div className="mb-2">
                                <span className="text-black font-bold font-nunito text-lg dark:text-white">Faixa de preço</span>
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
                                <div className="flex flex-col items-center bg-white dark:bg-neutral-700 rounded-lg w-28 h-12">
                                    <label htmlFor="min" className="text-slate-300 font-bold text-xs mb-1 w-24">min</label>
                                    <div className="flex items-center justify-center gap-1 ">
                                        <span className="font-bold text-black text-sm dark:text-white">R$</span>
                                        <input type="number" id="min" name="min" defaultValue={values[0]} value={values[0]} readOnly className="w-20 text-black dark:text-white font-bold text-sm dark:bg-neutral-700 outline-none"/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center bg-white dark:bg-neutral-700 rounded-lg w-28 h-12">
                                    <label htmlFor="min" className="text-slate-300 font-bold text-xs mb-1 w-24">max</label>
                                    <div className="flex items-center justify-center gap-1 ">
                                        <span className="font-bold text-black text-sm dark:text-white">R$</span>
                                        <input type="number" id="max" name="max" defaultValue={values[1]} value={values[1]} readOnly className="w-20 text-black dark:text-white font-bold text-sm dark:bg-neutral-700 outline-none"/>
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
                        <div className="w-64 flex justify-center mt-6">
                            <button type="submit" className="bg-primaryColor rounded-lg py-1.5 px-6 shadow-primary font-semibold hover:bg-primaryHoverColor">Aplicar</button>
                        </div>
                    </form>
                </div>
            </div>
        </ChakraProvider>
    )
}