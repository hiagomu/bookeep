import { FilterQueryParams } from "@/app/@types"
import { Filters } from "../../Filters"
import { Modal } from "../Modal"

interface MobileFilterType {
    defaultValue: [number, number]
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    setSearchParams: (searchParams: FilterQueryParams) => void
}

export const MobileFilter = ({isOpen, setIsOpen, setSearchParams, defaultValue}: MobileFilterType) => {
    return (
        <div className="hidden max-lg:block">
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <Filters
                    setSearchParams={setSearchParams}
                    defaultValue={defaultValue}
                    isModal={true}
                    setIsOpen={setIsOpen}
                />
            </Modal>
        </div>
    )
}