import { useState } from 'react'
import recipeImg from '../assets/img/rec01.jpg'

export default function RecipeCard() {
    const [isDone, setIsDone] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleIsDone = () => {
        setIsDone(!isDone)
    }

    const btnIsFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="dark:bg-darkChoco flex gap-4 rounded-3xl border border-black bg-white p-10 shadow-md transition-colors duration-300">
            <div className="aspect-square w-64 overflow-hidden rounded-lg">
                <img
                    src={recipeImg}
                    alt="Pudding"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex w-full flex-col justify-between">
                <div className="flex justify-end">
                    <button onClick={btnIsFavorite}>
                        <i
                            className={`text-pink cursor-pointer text-xl ${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`}
                        />
                    </button>
                </div>

                <div>
                    <h2 className="text-chocolate dark:text-vanilla mb-1 text-xl font-semibold">
                        Pudding
                    </h2>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                        Short description of the receipt.
                    </p>
                    <span className="bg-pastelYellow dark:bg-darkChoco text-chocolate dark:text-vanilla px-3 py-1 text-xs">
                        #Hard
                    </span>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={toggleIsDone}
                        className={`relative h-5 w-12 rounded-full transition-colors duration-300 ${
                            isDone ? 'bg-pink' : 'bg-gray-300'
                        }`}
                    >
                        <div
                            className={`border-pink absolute top-[-2px] left-[-4px] h-6 w-6 rounded-full border-2 bg-white shadow-md transition-transform duration-300 ${
                                isDone ? 'translate-x-7' : 'translate-x-0'
                            }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
