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
                className="text-black font-bold font-nunito text-lg mb-1"
                htmlFor={id}
            >
                {title}
            </label>
            <select
                className={"mb-1 rounded-lg bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-black opacity-60 font-bold dark:text-white outline-none w-64"}
                id={id}
                {...register(name)}
            >   
                {
                    options?.map((option, index) =>
                        <option
                            key={index}
                            value={option.value}
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