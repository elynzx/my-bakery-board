import { useState } from 'react'
import DropdownButton from './DropdownButton'

export default function FilterBar() {
    const filterOptions = ['Hot', 'Warm', 'Frozen', 'Salty', 'Sweet']
    const levelOptions = ['Hard', 'Medium', 'Easy']

    return (
        <>
            <div className="mb-6 flex flex-row gap-4 md:justify-between">
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search recipe..."
                        className="text-chocolate w-full rounded-full border border-black bg-white px-4 py-2 text-sm outline-none placeholder:text-gray-400 focus:ring-0 dark:bg-white dark:text-black"
                    />
                    <i className="fas fa-search absolute top-2 right-3 cursor-pointer text-xl dark:text-black" />
                </div>

                <div className="mb-6 flex flex-col gap-4">
                    <div className="flex gap-4 text-sm">
                        <button className="bg-choco cursor-pointer rounded-full border-1 border-black px-6 py-1.5 text-white">
                            All
                        </button>

                        <button className="cursor-pointer rounded-full border-1 border-black bg-white px-6 py-1.5">
                            Favorites
                        </button>

                        <DropdownButton
                            label="Filter"
                            options={filterOptions}
                        />
                        <DropdownButton label="Level" options={levelOptions} />
                    </div>

                    <div className="flex flex-row justify-end gap-6">
                        <button className="bg-lightGreen cursor-pointer px-3 py-1 text-sm text-white">
                            Easy
                            <i className="fa-solid fa-xmark ml-2"></i>
                        </button>

                        <button className="bg-pink cursor-pointer px-3 py-1 text-sm text-white">
                            Medium
                            <i className="fa-solid fa-xmark ml-2"></i>
                        </button>

                        <button className="bg-choco cursor-pointer px-3 py-1 text-sm text-white">
                            Hard
                            <i className="fa-solid fa-xmark ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
