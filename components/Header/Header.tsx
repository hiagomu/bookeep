import { BsPersonCircle as ProfileDefaultIcon } from 'react-icons/bs'

export const Header = () => {
    return (
        <header
            className='flex items-center h-16 w-11/12 border-b-2 border-slate-100'
        >
            <div
                className='flex w-fit items-center'
            >
                <div
                    className='flex items-center justify-center bg-primaryColor rounded-xl h-9 w-9'
                >                    
                    <img
                        className='w-5'
                        src="./assets/logo.png"
                        alt="bookeep logo"
                    />
                </div>
                <p
                    className='text-black ml-1 font-bold'
                >
                    BooKeep
                </p>
            </div>
            <nav>
                <ul>
                    <li></li>
                </ul>
                <ProfileDefaultIcon />
            </nav>
        </header>
    )
}