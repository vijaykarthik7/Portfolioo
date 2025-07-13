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
                <ul className="flex gap-10 text-white colors bg-gradient-to-r from-purple-900 via-blue-900 to-fuchsia-900 rounded-xl px-6 py-3 shadow-lg"
                    style={{ minHeight: "56px", alignItems: "center" }}>
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
  <nav className="block md:hidden fixed top-16 left-0 w-full z-50">
    <ul
      onClick={() => setmenu(!togglemenu)}
      className="flex flex-col text-white bg-gradient-to-b from-purple-900 via-blue-900 to-gray-900 shadow-lg w-full p-2"
    >
      <li className="w-full border-b border-white/30">
        <a
          href="#/"
          className="block w-full px-5 py-3 hover:bg-purple-700 hover:text-yellow-200 transition-all duration-200"
        >
          Home
        </a>
      </li>
      <li className="w-full border-b border-white/30">
        <a
          href="#about"
          className="block w-full px-5 py-3 hover:bg-blue-700 hover:text-yellow-200 transition-all duration-200"
        >
          About
        </a>
      </li>
      <li className="w-full border-b border-white/30">
        <a
          href="#projects"
          className="block w-full px-5 py-3 hover:bg-pink-700 hover:text-yellow-200 transition-all duration-200"
        >
          Projects
        </a>
      </li>
      <li className="w-full">
        <a
          href="#contact"
          className="block w-full px-5 py-3 hover:bg-yellow-700 hover:text-black transition-all duration-200"
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
)}


            <button
                onClick={() => setmenu(!togglemenu)}
                className={`block md:hidden ml-3 p-2 rounded transition-all duration-300
                    ${togglemenu ? 'bg-fuchsia-700 scale-110 shadow-lg' : 'hover:bg-purple-800 hover:scale-105'}
                `}
                aria-label="Open menu"
            >
                <Bars3Icon className={`h-6 w-6 transition-colors duration-300 ${togglemenu ? 'text-yellow-300' : 'text-white'}`} />
            </button>
        </header>
    );
}
