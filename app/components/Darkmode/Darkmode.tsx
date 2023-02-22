import { useTheme } from "next-themes"
import { IoSunny as LightModeIcon } from "react-icons/io5"
import { IoMoon as DarkModeIcon } from "react-icons/io5"

interface IDarkmode {
    isDropdown: boolean
}

export const Darkmode = ({
    isDropdown
}: IDarkmode) => {

    const { setTheme } = useTheme()

    return (
        <div className="flex justify-center w-full mt-2">
            <button
                className={`shadow-primary mr-4 rounded-md bg-primaryColor dark:bg-slate-600 ${isDropdown ? "p-1.5" : "p-2"}`}
                onClick={() => setTheme("light")}
            >
                <LightModeIcon className="text-yellow-200 dark:text-white" />
            </button>
            <button
                className={`shadow-primary rounded-md dark:bg-primaryColor bg-white ${isDropdown ? "p-1.5" : "p-2"}`}
                onClick={() => setTheme("dark")}
            >
                <DarkModeIcon className="dark:text-yellow-100 text-slate-600" />
            </button>
        </div>
    )
} 