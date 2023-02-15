interface IModal {
    setIsOpen: (isOpen: boolean) => void
    children: React.ReactNode
}

export const Modal = ({
    setIsOpen,
    children
}: IModal) => {

    const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target.id === "wrapper") setIsOpen(false) 
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-hidden"
            id="wrapper"
            onClick={(event) => handleClose(event)}
        >
            <div className="w-[600px] flex flex-col">
                <div className="bg-white p-2 rounded">
                    {children}
                </div>
            </div>
        </div>
    )
}