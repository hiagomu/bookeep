import { FilterQueryParams } from "@/app/@types"
import { Filters } from "../../Filters"
import { Modal } from "../Modal"

interface MobileFilterType {
    min: number
    max: number
    defaultValue: [number, number]
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    setSearchParams: (searchParams: FilterQueryParams) => void
}

export const MobileFilter = ({isOpen, setIsOpen, setSearchParams, min, max, defaultValue}: MobileFilterType) => {
    return (
        <div className="hidden max-lg:block">
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <Filters
                    setSearchParams={setSearchParams}
                    min={min}
                    max={max}
                    defaultValue={defaultValue}
                    isModal={true}
                    setIsOpen={setIsOpen}
                />
            </Modal>
        </div>
    )
}