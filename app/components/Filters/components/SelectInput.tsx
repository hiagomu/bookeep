"use client"

import { SelectFilterType } from "@/app/@types"

const SelectInput = ({
    id,
    name,
    title,
    options,
    register,
}: SelectFilterType) => {
    return (
        <div className="flex flex-col mt-2">
            <label
                className="text-black font-bold font-nunito text-lg mb-1 dark:text-white max-2xl:text-base"
                htmlFor={id}
            >
                {title}
            </label>
            <select
                className={"mb-1 rounded-lg bg-white dark:bg-neutral-700 p-1.5 text-black opacity-60 font-bold dark:text-white outline-none w-64 max-2xl:w-full max-2xl:p-1"}
                id={id}
                {...register(name)}
            >   
                {
                    options?.map((option, index) =>
                        <option
                            key={index}
                            value={option.value}
                            className="max-2xl:text-base"
                        >
                            {option.name}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectInput