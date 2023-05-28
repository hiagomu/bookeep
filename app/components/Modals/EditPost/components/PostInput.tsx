"use client"

import { EditPostInputType } from "@/app/@types"

const PostInput = ({
    id,
    type,
    name,
    title,
    options,
    element,
    isSmall,
    value,
    placeholder,
    currentPostData,
    setCurrentPostData
}: EditPostInputType) => {

    return (
        <div className="flex flex-col">
            <label
                className="text-primaryColor font-poppins font-semibold mt-2 max-lg:text-sm"
                htmlFor={id}
            >
                {title}
            </label>
            {
                element === "input" ?
                    <input
                        className={`border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs ${isSmall ? "w-input-sm max-lg:w-input-xs max-sm:w-input-xxs" : "w-input-lg max-lg:w-input-md max-sm:w-input-2sm"}`}
                        placeholder={placeholder}
                        name={name}
                        type={type}
                        defaultValue={value ?? ""}
                        id={id}
                    />
                    : element === "textarea" ?
                        <textarea
                            className="border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 w-input-lg h-textarea py-1.5 px-1.5 text-sm text-black dark:text-white outline-none overflow-hidden max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:text-xs max-sm:w-input-2sm"
                            placeholder={placeholder}
                            name={name}
                            defaultValue={value ?? ""}
                            id={id}
                        />
                    : element === "select" &&
                        <select
                            className={`border-primaryColor border-2 mb-1 rounded bg-white dark:bg-neutral-700 py-1.5 px-1.5 text-sm text-black dark:text-white outline-none max-lg:py-1 max-lg:px-1 max-lg:text-xs ${isSmall ? "w-input-sm max-lg:w-input-xs max-sm:w-input-xxs" : "w-input-lg max-lg:w-input-md max-sm:w-input-2sm"}`}
                            id={id}
                            name={name}
                            defaultValue={value ?? ""}
                        >
                            {
                                options?.map((option, index) =>
                                    <option
                                        key={index}
                                        value={option.value}
                                    >
                                        {option.name}
                                    </option>)
                            }
                        </select>
            }
        </div>
    )
}

export default PostInput