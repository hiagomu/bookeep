"use client"

import Image from "next/image"
import UnderConstruction from "../../public/assets/under_construction.svg"

export default function Home() {
    return (
        <main className="flex justify-center flex-col items-center mt-24 max-sm:mt-16">
            <h1 className="text-2xl font-bold text-primaryColor text-center mb-5 max-lg:mb-0 max-lg:text-lg  max-sm:text-base">Página em construção, novidades em breve! 😉</h1>
            <Image
                width={420}
                height={420}
                src={UnderConstruction}
                alt={"Em construção"}
                className="max-lg:w-[20rem] max-lg:h-[20rem] max-sm:w-[16rem] max-sm:h-[16rem]"
            />
        </main>
    )
}