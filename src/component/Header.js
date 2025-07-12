import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {
    const [togglemenu, setmenu] = useState(false)

    return (
        <header className="flex justify-between px-5 py-2 bc bg-gradient-to-r from-fuchsia-700 via-cyan-700 to-emerald-700 shadow-xl backdrop-blur-md bg-opacity-80 border-b border-white/10">
            <a
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-2xl tracking-wide transition-colors duration-300 hover:from-pink-400 hover:to-purple-400"
                href="#"
            >
                VIJAY KARTHIKEYAN U
            </a>
            <nav className="hidden md:block">
                <ul className="flex gap-6 text-white colors">
                    <li>
                        <a
                            href="#/"
                            className="px-3 py-1 rounded transition-all duration-200 hover:bg-purple-700 hover:text-yellow-200"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="px-3 py-1 rounded transition-all duration-200 hover:bg-blue-700 hover:text-yellow-200"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="px-3 py-1 rounded transition-all duration-200 hover:bg-pink-700 hover:text-yellow-200"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            className="px-3 py-1 rounded transition-all duration-200 hover:bg-green-700 hover:text-yellow-200"
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="px-3 py-1 rounded transition-all duration-200 hover:bg-yellow-700 hover:text-black"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            {togglemenu && (
                <nav className="block md:hidden absolute top-16 left-0 w-full z-50">
                    <ul
                        onClick={() => setmenu(!togglemenu)}
                        className="flex flex-col text-white colors mob-view bg-gradient-to-b from-purple-900 via-blue-900 to-gray-900 shadow-lg rounded-b-lg"
                    >
                        <li>
                            <a
                                href="#/"
                                className="px-5 py-3 border-b border-gray-700 transition-all duration-200 hover:bg-purple-700 hover:text-yellow-200"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="px-5 py-3 border-b border-gray-700 transition-all duration-200 hover:bg-blue-700 hover:text-yellow-200"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="px-5 py-3 border-b border-gray-700 transition-all duration-200 hover:bg-pink-700 hover:text-yellow-200"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="px-5 py-3 transition-all duration-200 hover:bg-yellow-700 hover:text-black"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
            <button
                onClick={() => setmenu(!togglemenu)}
                className="block md:hidden ml-3 p-2 rounded transition-colors duration-200 hover:bg-purple-800"
            >
                <Bars3Icon className="text-white h-6 w-6" />
            </button>
        </header>
    );
}
