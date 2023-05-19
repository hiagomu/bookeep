import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb
} from '@chakra-ui/react'
import { useState } from 'react'

interface IRangeSliderInput {
    defaultValue: number[]
}

const RangeSliderInput = ({defaultValue}: IRangeSliderInput) => {

    const [values, setValues] = useState<number[]>([defaultValue[0], defaultValue[1]])

    const handleWithMinMaxValues = (val: number[]) => {
        setValues(val)
    }

    return (
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
                        <input type="number" name="min" id="min" value={values[0]} className="w-20 text-black dark:text-white font-bold text-sm dark:bg-neutral-700"/>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white dark:bg-neutral-700 rounded-lg w-28 h-12">
                    <label htmlFor="min" className="text-slate-300 font-bold text-xs mb-1 w-24">max</label>
                    <div className="flex items-center justify-center gap-1 ">
                        <span className="font-bold text-black text-sm dark:text-white">R$</span>
                        <input type="number" name="max" id="max" value={values[1]} className="w-20 text-black dark:text-white font-bold text-sm dark:bg-neutral-700"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeSliderInput