interface IPostInput {
    id: string
    type?: "text" |  "url"
    name: string
    element: "input" | "select" | "textarea"
    isSmall?: boolean
    placeholder: string
}

const PostInput = ({
    id,
    type,
    name,
    element,
    isSmall,
    placeholder
}: IPostInput) => {
    return (
        <div className="flex flex-col">
            <label
                className="text-primaryColor font-bold"
                htmlFor={id}
            >
                {name}
            </label>
            {
                element === "input" ?
                    isSmall ?
                        <input
                            className="border-primaryColor border-2 rounded bg-white w-input-sm py-1.5 px-1.5 mb-4 text-sm text-black outline-none"
                            placeholder={placeholder}
                            type={type}
                            id={id}
                        />
                        :
                        <input
                            className="border-primaryColor border-2 rounded bg-white w-input-lg py-1.5 px-1.5 mb-4 text-sm text-black outline-none"
                            placeholder={placeholder}
                            type={type}
                            id={id}
                        />
                    : element === "textarea" ?
                        <textarea
                            className="border-primaryColor border-2 rounded bg-white w-input-lg h-textarea py-1.5 px-1.5 text-sm text-black outline-none overflow-hidden"
                            placeholder={placeholder}
                            id={id}
                        />
                        : null
            }
        </div>
    )
}

export default PostInput