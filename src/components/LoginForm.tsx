import bear from '../assets/img/bear.png'

export default function LoginForm() {
    return (
        <div className="relative flex w-md flex-col rounded-3xl border-3 border-black bg-white p-8">
            <div>
                <img
                    src={bear}
                    alt="Bear"
                    className="pointer-events-none absolute -top-24 h-40 w-40"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <button className="cursor-pointer text-2xl">
                        <i className="fa-solid fa-xmark" />
                    </button>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <p className="text-2xl font-bold">Log In</p>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Email</label>
                            <input
                                className="bg-lightPink rounded-xl px-3 py-1 text-lg"
                                type="text"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="">Password</label>
                            <input
                                className="bg-lightPink rounded-lg px-3 py-1 text-lg"
                                type="password"
                            />
                        </div>
                    </div>

                    <button className="bg-pink mb-4 w-28 cursor-pointer rounded-full p-2 text-white">
                        Login
                    </button>
                    <p>or continue with</p>
                    <div className="flex gap-4 md:justify-between">
                        <button className="text-pink w-20 cursor-pointer rounded-full border py-1 text-xl">
                            <i className="fa-brands fa-google"></i>
                        </button>
                        <button className="text-pink w-20 cursor-pointer rounded-full border py-1 text-xl">
                            <i className="fa-brands fa-facebook"></i>
                        </button>

                        <button className="text-pink w-20 cursor-pointer rounded-full border py-1 text-xl">
                            <i className="fa-brands fa-github"></i>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <p>Don't have an account yet?</p>
                        <a href="" className="text-pink font-bold">
                            Sing up for free
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
