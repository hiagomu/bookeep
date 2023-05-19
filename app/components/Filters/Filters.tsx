import {
    ChakraProvider
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import SelectInput from './components/SelectInput';
import RangeSliderInput from './components/RangeSliderInput';

type Props = {
    min: number
    max: number
    defaultValue: [number, number]
};

export const Filters =  ({min, max, defaultValue}: Props) => {

    const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm();

    return (
        <ChakraProvider>
            <div className="w-[19rem] h-[28rem] bg-filters rounded-xl mt-40 shadow-primary flex justify-center items-center">
                <div className="w-10/12 h-[26rem]">
                    <div className="flex justify-between">
                        <h2 className="text-black font-bold text-xl font-nunito mb-6">Filtros</h2>   
                        <button></button>
                    </div>
                    <RangeSliderInput defaultValue={defaultValue}/>
                    <SelectInput
                        register={register}
                        id="category"
                        name="category"
                        title="Categoria"
                        options={[
                            {name: "Drama", value: "drama"},
                            {name: "Terror", value: "terror"},
                            {name: "Ficção", value: "ficction"},
                            {name: "Romance", value: "romance"},
                            {name: "História", value: "history"},
                            {name: "Fantasia", value: "fantasy"},
                            {name: "Mistério", value: "mistery"},
                            {name: "Suspense", value: "thriller"},
                            {name: "Aventura", value: "aventure"},
                            {name: "Religioso", value: "religious"},
                            {name: "Educação", value: "educational"},
                            {name: "Literatura Clássica", value: "classical-literature"},
                        ]}
                    />
                    <SelectInput
                        register={register}
                        id="sortBy"
                        name="sortBy"
                        title="Ordenar por"
                        options={[
                            {name: "Mais recentes", value: "recent"},
                            {name: "Mais antigos", value: "old"},
                        ]}
                    />
                    <div className="w-64 flex justify-center mt-6">
                        <button className="bg-primaryColor rounded-lg py-1.5 px-6 shadow-primary font-semibold  hover:bg-primaryHoverColor">Aplicar</button>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    )
}