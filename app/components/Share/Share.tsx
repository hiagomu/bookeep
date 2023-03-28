import { Modal } from "../Modal"
import {
    FaFacebookF as FacebookIcon,
    FaTelegramPlane as TelegramIcon,
    FaTwitter as TwitterIcon,
    FaWhatsapp as WhatsappIcon,
    FaLink as LinkIcon
} from "react-icons/fa"
import {
    MdEmail as EmailIcon
} from "react-icons/md"
import {
    FacebookShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    TwitterShareButton,
    EmailShareButton
} from "react-share"
import { toast } from "react-hot-toast"

interface IShare {
    isOpen: boolean
    postId: string
    setIsOpen: (isOpen: boolean) => void
}

export const Share = ({
    isOpen,
    postId,
    setIsOpen
}: IShare) => {

    const shareTitle = "Aproveite a promoção, acesse o link anexado 😉\n"
    let toastPostID: string

    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <div className="p-5 max-sm:p-3">
                <h1 className="text-xl font-bold font-poppins max-sm:text-lg dark:text-white text-primaryColor">Compartilhar</h1>
                <div className="mt-4 text-sm">
                    <span className="font-poppins font-medium dark:text-white text-gray-400 max-sm:text-sm">Compartilhar link via:</span>
                    <ul className="flex justify-between mt-3">
                        <li className="p-3 rounded-full bg-facebook h-11 w-11 flex justify-center items-center max-sm:h-9 max-sm:w-9">
                            <FacebookShareButton
                                url={`https://bookeep.io/${postId}`}
                            >
                                <FacebookIcon className="text-white h-5 w-5 max-sm:h-4 max-sm:w-4"/>
                            </FacebookShareButton>
                        </li>
                        <li className="p-3 rounded-full bg-twitter h-11 w-11 flex justify-center items-center max-sm:h-9 max-sm:w-9">
                            <TwitterShareButton
                                url={`https://bookeep.io/${postId}`}
                                title={shareTitle}
                            >
                                <TwitterIcon className="text-white h-5 w-5 max-sm:h-4 max-sm:w-4"/>
                            </TwitterShareButton>
                        </li>
                        <li className="p-3 rounded-full bg-whatsapp h-11 w-11 flex justify-center items-center max-sm:h-9 max-sm:w-9">
                            <WhatsappShareButton
                                url={`https://bookeep.io/${postId}`}
                                title={shareTitle}
                            >
                                <WhatsappIcon className="text-white h-5 w-5 max-sm:h-4 max-sm:w-4"/>
                            </WhatsappShareButton>
                        </li>
                        <li className="p-3 rounded-full bg-telegram h-11 w-11 flex justify-center items-center max-sm:h-9 max-sm:w-9">
                            <TelegramShareButton
                                url={`https://bookeep.io/${postId}`}
                                title={shareTitle}
                            >
                                <TelegramIcon className="text-white h-5 w-5 max-sm:h-4 max-sm:w-4"/>
                            </TelegramShareButton>
                        </li>
                        <li className="p-3 rounded-full bg-gray-600 h-11 w-11 flex justify-center items-center max-sm:h-9 max-sm:w-9">
                            <EmailShareButton
                                subject={shareTitle}
                                url={`https://bookeep.io/${postId}`}
                            >
                                <EmailIcon className="text-white h-5 w-5 max-sm:h-4 max-sm:w-4"/>
                            </EmailShareButton>
                        </li>
                    </ul>
                </div>
                <div className="mt-5">
                    <span className="font-poppins font-medium dark:text-white text-gray-400 max-sm:text-sm">Copiar link:</span>
                    <div className="mt-3 dark:bg-secondaryDarkColor bg-gray-400 rounded-md flex items-center py-1 px-1">
                        <LinkIcon className="ml-1"/>
                        <input
                            value={`bookeep.io/posts/${postId}`}
                            className="outline-none mr-2 px-2 bg-transparent overflow-hidden max-sm:text-xs"
                            type="text"
                            readOnly
                        />
                        <button
                            className="bg-primaryColor hover:bg-primaryHoverColor py-1 px-1.5 rounded-sm max-sm:text-sm"
                            onClick={() => {
                                navigator.clipboard.writeText(`https://bookeep.io/posts/${postId}`)
                                toast.success("Copiado para área de transferência", {id: toastPostID})
                            }}
                        >
                            Copiar
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}