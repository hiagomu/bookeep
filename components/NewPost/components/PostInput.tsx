"use client"

import { FieldValues, UseFormRegister } from "react-hook-form"

interface IPostInput {
    id: string
    type?: "text" | "url" | "file"
    name: string
    title: string
    element: "input" | "select" | "textarea"
    isSmall?: boolean
    placeholder: string
    register: UseFormRegister<FieldValues>
}

const PostInput = ({
    id,
    type,
    name,
    title,
    element,
    isSmall,
    placeholder,
    register
}: IPostInput) => {


    return (
        <div className="flex flex-col">
            <label
                className="text-primaryColor font-bold max-lg:text-sm"
                htmlFor={id}
            >
                {title}
            </label>
            {
                element === "input" ?
                    isSmall ?
                        <input
                            className="border-primaryColor border-2 rounded bg-white w-input-sm py-1.5 px-1.5 mb-4 text-sm text-black outline-none max-lg:w-input-xs max-lg:py-1 max-lg:px-1 max-lg:mb-2 max-lg:text-xs max-sm:w-input-xxs"
                            placeholder={placeholder}
                            title={title}
                            type={type}
                            id={id}
                            {...register(name)}
                        />
                        :
                        <input
                            className="border-primaryColor border-2 rounded bg-white w-input-lg py-1.5 px-1.5 mb-4 text-sm text-black outline-none max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:mb-2 max-lg:text-xs max-sm:w-input-2sm"
                            placeholder={placeholder}
                            title={title}
                            type={type}
                            id={id}
                            {...register(name)}
                        />
                    : element === "textarea" &&
                        <textarea
                            className="border-primaryColor border-2 rounded bg-white w-input-lg h-textarea py-1.5 px-1.5 text-sm text-black outline-none overflow-hidden max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:text-xs max-sm:w-input-2sm"
                            placeholder={placeholder}
                            title={title}
                            id={id}
                            {...register(name)}
                        />
            }
        </div>
    )
}

export default PostInput