import { useState } from 'react'
import bearGif from '../assets/img/big-logo.gif'
import berryImg from '../assets/img/iconLight.png'
import breadImg from '../assets/img/iconDark2.png'

export default function HeaderBar() {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark)
        // document.documentElement.classList.toggle('dark');
    }

    return (
        <header>
            <div className='flex justify-end'>
                <button className="text-darkChoco cursor-pointer text-xl mr-3 font-bold mb-4">
                    Login
                </button>
            </div>
            <hr className='text-white border-2 mb-6' />
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <img
                        src={bearGif}
                        alt="Bear"
                        className="pointer-events-none h-50 w-50"
                    />
                    <h1 className="font-title text-darkChoco dark:text-darkChoco pointer-events-none text-4xl">
                        My Bakery Board
                    </h1>
                </div>
                

                <div className="flex flex-col items-center">
                    <p className="text-base dark:text-black">Theme</p>

                    <div className="relative flex h-14 items-center justify-center">
                        <img
                            src={berryImg}
                            alt="Light Mode"
                            className="pointer-events-none absolute top-2 right-12 z-10 h-11 w-11 transition-opacity duration-300"
                            style={{
                                opacity: isDark ? 0 : 1,
                            }}
                        />

                        <img
                            src={breadImg}
                            alt="Dark Mode"
                            className="pointer-events-none absolute top-2 left-12 z-10 h-11 w-11 transition-opacity duration-300"
                            style={{
                                opacity: isDark ? 1 : 0,
                            }}
                        />

                        <button
                            onClick={toggleTheme}
                            className="bg-choco relative z-0 h-5 w-18 cursor-pointer rounded-full border-1 border-black shadow-md"
                        >
                            <div
                                className={`absolute top-[-6px] left-[-5px] h-10 w-10 rounded-full bg-transparent transition-transform duration-300 ${
                                    isDark ? 'translate-x-12' : 'translate-x-0'
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
