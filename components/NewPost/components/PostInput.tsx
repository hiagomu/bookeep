interface IPostInput {
    id: string
    type?: "text" |  "url"
    name: string
    element: "input" | "select" | "textarea"
    isSmall?: boolean
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    placeholder: string
}

const PostInput = ({
    id,
    type,
    name,
    value,
    element,
    isSmall,
    onChange,
    placeholder
}: IPostInput) => {
    return (
        <div className="flex flex-col">
            <label
                className="text-primaryColor font-bold max-lg:text-sm"
                htmlFor={id}
            >
                {name}
            </label>
            {
                element === "input" ?
                    isSmall ?
                        <input
                            className="border-primaryColor border-2 rounded bg-white w-input-sm py-1.5 px-1.5 mb-4 text-sm text-black outline-none max-lg:w-input-xs max-lg:py-1 max-lg:px-1 max-lg:mb-2 max-lg:text-xs max-sm:w-input-xxs"
                            placeholder={placeholder}
                            onChange={(e) => onChange(e)}
                            value={value}
                            name={id}
                            type={type}
                            id={id}
                        />
                        :
                        <input
                            className="border-primaryColor border-2 rounded bg-white w-input-lg py-1.5 px-1.5 mb-4 text-sm text-black outline-none max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:mb-2 max-lg:text-xs max-sm:w-input-2sm"
                            placeholder={placeholder}
                            onChange={(e) => onChange(e)}
                            value={value}
                            type={type}
                            name={id}
                            id={id}
                        />
                    : element === "textarea" &&
                        <textarea
                            className="border-primaryColor border-2 rounded bg-white w-input-lg h-textarea py-1.5 px-1.5 text-sm text-black outline-none overflow-hidden max-lg:w-input-md max-lg:py-1 max-lg:px-1 max-lg:text-xs max-sm:w-input-2sm"
                            placeholder={placeholder}
                            onChange={(e) => onChange(e)}
                            value={value}
                            name={id}
                            id={id}
                        />
            }
        </div>
    )
}

export default PostInput