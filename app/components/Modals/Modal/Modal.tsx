"use client"

import { Dialog } from "@headlessui/react"

interface IModal {
    children: React.ReactNode
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const Modal = ({
    children,
    isOpen,
    setIsOpen
}: IModal) => {

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-25 backdrop-blur-sm">
                <Dialog.Panel className="rounded bg-white dark:bg-modalDarkColor w-fit">
                    {children}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}