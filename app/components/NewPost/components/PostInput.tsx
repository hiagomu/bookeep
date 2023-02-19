"use client"

import { FieldValues, UseFormRegister } from "react-hook-form"

interface IPostInput {
    id: string
    type?: "text" | "url" | "number"
    name: string
    title: string
    options?: {
        value: string
        name: string
    }[]
    element: "input" | "select" | "textarea"
    isSmall?: boolean
    register: UseFormRegister<FieldValues>
    placeholder?: string
    errorMessage: string
}

const PostInput = ({
    id,
    type,
    name,
    title,
    options,
    element,
    isSmall,
    register,
    placeholder,
    errorMessage
}: IPostInput) => {
    return (
        <div className="flex flex-col">
            <label
                className="text-primaryColor font-bold mt-2 max-lg:text-sm"
                htmlFor={id}
            >
                {title}
            </label>
            {
                element === "input" ?
                    <input
                        className={`border-primaryColor border-2 mb-1 rounded bg-white py-1.5 px-1.5 text-sm text-black outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs ${isSmall ? "w-input-sm max-lg:w-input-xs max-sm:w-input-xxs" : "w-input-lg max-lg:w-input-md max-sm:w-input-2sm"}`}
                        placeholder={placeholder}
                        type={type}
                        id={id}
                        {...register(name)}
                    />
                    : element === "textarea" ?
                        <textarea
                            className="border-primaryColor border-2 mb-1 rounded bg-white w-input-lg h-textarea py-1.5 px-1.5 text-sm text-black outline-none overflow-hidden max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:text-xs max-sm:w-input-2sm"
                            placeholder={placeholder}
                            id={id}
                            {...register(name)}
                        />
                    : element === "select" &&
                        <select
                            className={`border-primaryColor border-2 mb-1 rounded bg-white py-1.5 px-1.5 text-sm text-black outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs ${isSmall ? "w-input-sm max-lg:w-input-xs max-sm:w-input-xxs" : "w-input-lg max-lg:w-input-md max-sm:w-input-2sm"}`}
                            placeholder={placeholder}
                            id={id}
                            {...register(name)}
                        >
                            {options?.map(option => <option value={option.value}>{option.name}</option>)}
                        </select>
            }
            {errorMessage && <span className={`block text-red-500 text-xs font-bold ${isSmall ? "w-input-sm max-lg:w-input-xs max-sm:w-input-xxs" : "w-input-lg max-lg:w-input-md max-sm:w-input-2sm"}`}>{errorMessage}</span>}
        </div>
    )
}

export default PostInput