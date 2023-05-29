import { Modal } from "../Modal"
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'
import { BookstoresType } from "@/app/@types"

interface BookstoreViewType {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    bookstore?: BookstoresType
}

const containerStyle = {
    width: '576px',
    height: '576px'
}
  
const center = {
    lat: -3.745,
    lng: -38.523
}

const options = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false
}

export const BookstoreView = ({ isOpen, setIsOpen, bookstore}: BookstoreViewType) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)
    })

    console.log(bookstore)

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="h-[36rem] w-[36rem] rounded-lg bg-white overflow-hidden relative flex justify-center">
                {
                    isLoaded &&
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={bookstore?.geometry.location}
                        zoom={18}
                        options={options}
                    >
                        <MarkerF position={bookstore?.geometry.location || center}/>
                    </GoogleMap>
                }
                <div className="w-full absolute flex justify-center bottom-0 mb-5">
                    <div className="w-[32rem] rounded-lg z-50 bg-primaryColor py-1 px-3">
                        <span className="text-lg text-white font-bold">{bookstore?.name}</span>
                        <p className="text-white text-sm">{bookstore?.formatted_address || bookstore?.vicinity}</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}