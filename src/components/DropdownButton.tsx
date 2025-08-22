import { useState } from 'react'

type DropdownButtonProps = {
    label: string
    options: string[]
}

export default function DropdownButton({ label, options }: DropdownButtonProps) {
    const [isActive, setIsActive] = useState(false)
    const toggleDropdown = () => setIsActive(!isActive)

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex cursor-pointer items-center rounded-full border border-black bg-white px-6 py-1.5"
            >
                {label}
                <i className="fa-solid fa-caret-down ml-2"></i>
            </button>
            {isActive && (
                <div className="absolute mt-3 rounded-lg border border-black bg-white shadow-sm dark:bg-gray-700">
                    <ul className="text p-2 text-left text-sm dark:text-gray-200">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className="hover:bg-lightPink cursor-pointer block rounded-lg px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
