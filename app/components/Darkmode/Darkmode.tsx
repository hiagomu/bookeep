import { useTheme } from "next-themes"
import { IoSunny as LightModeIcon } from "react-icons/io5"
import { IoMoon as DarkModeIcon } from "react-icons/io5"

export const Darkmode = () => {

    const { setTheme } = useTheme()

    return (
        <div className="flex justify-center w-full mt-2">
            <button
                className="shadow-primary mr-4 p-2 rounded-md bg-primaryColor dark:bg-slate-600"
                onClick={() => setTheme("light")}
            >
                <LightModeIcon className="text-yellow-200 dark:text-white" />
            </button>
            <button
                className="shadow-primary p-2 rounded-md dark:bg-primaryColor bg-white"
                onClick={() => setTheme("dark")}
            >
                <DarkModeIcon className="dark:text-yellow-100 text-slate-600" />
            </button>
        </div>
    )
} 