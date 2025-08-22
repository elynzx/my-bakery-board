import recipeImg from '../assets/img/rec01.jpg'
import buttonBerryImg from '../assets/img/strawberry.png'

import { useState } from 'react'

export default function RecipeDetails() {
    const [isActive, setIsActive] = useState(false)

    const showDropdown = () => setIsActive(!isActive)

    return (
        <div className="w-2xl gap-4 rounded-3xl border border-black bg-white shadow-md">
            <div className="bg-lightPink relative flex items-center justify-between rounded-t-3xl px-10 py-8">
                <div className="w-6" />
                <h2 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold">
                    Pudding
                </h2>
                <div className="relative">
                    <button
                        onClick={showDropdown}
                        className="cursor-pointer text-2xl"
                    >
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                    {isActive && (
                        <div className="absolute top-7 right-0 w-40 rounded-lg border border-black bg-white shadow-sm dark:bg-gray-700">
                            <ul className="text p-2 text-left text-sm dark:text-gray-200">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:bg-lightPink block rounded-lg px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <i className="fa-solid fa-pen mr-2.5"></i>
                                        Edit
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:bg-lightPink block rounded-lg px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <i className="fa-solid fa-trash mr-2.5"></i>
                                        Remove
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div></div>

            <div className="flex flex-col content-between gap-7 p-10">
                <div className="flex gap-12">
                    <div>
                        <div className="aspect-square w-56 overflow-hidden rounded-lg border border-black">
                            <img
                                src={recipeImg}
                                alt="Pudding"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h4 className="mt-5 mb-3 text-xl font-bold">
                            Ingredients
                        </h4>
                        <ul className="ml-4 list-disc text-sm">
                            <li>1 Taza de leche</li>
                            <li>2 Eggs</li>
                            <li>1/4 Teaspoon salt</li>
                            <li>1 Taza de leche</li>
                            <li>2 Eggs</li>
                            <li>1/4 Teaspoon salt</li>
                            <li>1 Taza de leche</li>
                            <li>2 Eggs</li>
                            <li>1/4 Teaspoon salt</li>
                        </ul>
                    </div>

                    <div>
                        <div className="mb-4 flex flex-col gap-1.5">
                            <div className="flex gap-2">
                                <p className="text-sm text-gray-400">Type:</p>
                                <select className="text-sm" name="sdfdsf" id="">
                                    <option value="">Sweet</option>
                                    <option value="">Salty</option>
                                    <option value="">Frozen</option>
                                    <option value="">Cold</option>
                                    <option value="">Hot</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-sm text-gray-400">
                                    Difficulty:
                                </p>
                                <select className="text-sm" name="sdfdsf" id="">
                                    <option value="">Easy</option>
                                    <option value="">Medium</option>
                                    <option value="">Hard</option>
                                </select>
                            </div>
                        </div>
                        <h4 className="mb-3 text-xl font-bold">Instructions</h4>
                        <ul className="ml-3 list-decimal text-sm">
                            <li>
                                In a large mixing bowl, whisk together the flour
                                an eggs.
                            </li>
                            <li>
                                In a large mixing bowl, whisk together the flour
                                an eggs. Add the salt and butter, beat until
                                smooth.
                            </li>
                            <li>
                                In a large mixing bowl, whisk together the flour
                                an eggs.
                            </li>
                            <li>
                                In a large mixing bowl, whisk together the flour
                                an eggs. Add the salt and butter, beat until
                                smooth.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative self-end">
                    <img
                        src={buttonBerryImg}
                        alt="strawberry"
                        className="absolute top-6 right-36 h-11 w-11"
                    />
                    <button className="bg-lightPink w-44 cursor-pointer rounded-full border-1 border-black py-3.5">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
