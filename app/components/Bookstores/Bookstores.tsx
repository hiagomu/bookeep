import { BookstoresType } from "@/app/@types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect, useState } from "react"
import { BookstoreView } from "../Modals/BookstoreView"

interface LocationType {
    lat: number
    long: number
}

export const Bookstores =  () => {
    const [userLocation, setUserLocation] = useState<LocationType>()
    const [bookstoreDetails, setBookstoreDetails] = useState<BookstoresType>()
    const [isOpen, setIsOpen] = useState(false)

    const getBookstores = async () => {
        if (userLocation) {
            const response = await axios.get(`/api/places/getBookstoresNearby/?lat=${userLocation.lat}&long=${userLocation.long}`)
            return response.data
        } else {
            const response = await axios.get('/api/places/getBookstores')
            return response.data
        }
    }

    const { data, isLoading, status } = useQuery<BookstoresType[]>({
        queryFn: getBookstores,
        queryKey: ["bookstores"]
    })

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setUserLocation({ lat: position.coords.latitude, long: position.coords.longitude })
          },
          error => {
            console.log('Error:', error.message)
          }
        );
      }
    }, [])

    return (
        <div className="fixed w-[19rem] min-h-[36rem] h-fit max-2xl:w-[16rem] bg-filters dark:bg-secondaryDarkColor rounded-xl mt-40 shadow-primary px-6 py-5">
          <BookstoreView
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            bookstore={bookstoreDetails}
          />
          <h2 className="text-xl text-black font-bold mb-5 dark:text-white">Bibliotecas</h2>
          {
                  data?.map((bookstore: BookstoresType) =>  
                          <div className="flex flex-col mb-2 w-[16rem] max-2xl:w-[13rem]">
                              <div className="flex justify-between">
                                  <h3 className="text-black font-bold text-lg w-[12.8rem] dark:text-white line-clamp-2 max-2xl:text-base max-2xl:w-[9.8rem]">{bookstore.name}</h3>
                                  <span className="text-primaryColor font-bold text-base">{bookstore.rating} ⭐</span>
                              </div>
                              <p className="text-sm text-black dark:text-white line-clamp-2 max-2xl:text-xs">{bookstore.formatted_address || bookstore.vicinity}</p>
                              <button
                                className="bg-primaryColor py-0.5 mt-2 text-white font-semibold rounded-md hover:bg-primaryHoverColor"
                                onClick={() => {
                                  setBookstoreDetails(bookstore)
                                  setIsOpen(true)
                                }}
                              >
                                Visualizar no mapa
                              </button>
                          </div>
                  )
          }
        </div>
    )
}