import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon, faBars, faXmark,} from "@fortawesome/free-solid-svg-icons";

function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-[#FAF6F1] dark:bg-[#201911] dark:text-white w-full">
            <div className="flex h-20 items-center px-4 sm:px-6 lg:px-10">
                <div className="flex min-w-0 flex-1 items-center">
                    <a href="#top" className="whitespace-nowrap text-lg font-bold sm:text-xl dark:text-white">LUSIZO SIBIYA</a>
                    {/* Decorative Line */}
                    <div className="mx-5 hidden h-px max-w-[380px] flex-1 bg-stone-800 lg:block dark:bg-white"></div>
                    {/* Decorative Dot */}
                    <div className="hidden h-3 w-3 shrink-0 rounded-full bg-stone-800 lg:block dark:bg-white"></div>
                </div>

                {/* DESKTOP NAV LINKS */}
                <div className="ml-10 hidden items-center gap-8 lg:flex">
                    <a href="#about"className="transition-opacity hover:opacity-60">About</a>
                    <a href="#projects" className="transition-opacity hover:opacity-60">Projects</a>
                    <a href="#skills" className="transition-opacity hover:opacity-60">Skills</a>
                    <a href="#contact" className="transition-opacity hover:opacity-60">Contact</a>

                    {/* Dark Mode Button */}
                    <button onClick={() => setDarkMode(!darkMode)} className="relative h-10 w-20 shrink-0 rounded-full bg-[#444A34] p-1" aria-label="Toggle dark mode">
                        <span className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300 ${ darkMode ? "left-11" : "left-1"}`}>
                            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-[#201911]"/>
                        </span>
                    </button>
                </div>

                {/* HOW IT LOOKS ON MOBILE DEVICES */}
                <div className="flex items-center gap-3 lg:hidden">

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="relative h-9 w-[68px] shrink-0 rounded-full bg-[#444A34] p-1"
                        aria-label="Toggle dark mode"
                    >
                        <span
                            className={`absolute top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white transition-all duration-300 ${
                                darkMode ? "left-9" : "left-1"
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={darkMode ? faMoon : faSun}
                                className="text-sm text-[#201911]"
                            />
                        </span>
                    </button>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center text-xl"
                        aria-label="Open navigation menu"
                    >
                        <FontAwesomeIcon
                            icon={menuOpen ? faXmark : faBars}
                        />
                    </button>

                </div>

            </div>


            {/* MOBILE MENU */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    menuOpen
                        ? "max-h-64 border-t border-stone-300"
                        : "max-h-0"
                } dark:border-stone-700`}
            >
                <div className="flex flex-col px-6 py-4">

                    <a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="py-3"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        onClick={() => setMenuOpen(false)}
                        className="py-3"
                    >
                        Projects
                    </a>

                    <a
                        href="#skills"
                        onClick={() => setMenuOpen(false)}
                        className="py-3"
                    >
                        Skills
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="py-3"
                    >
                        Contact
                    </a>

                </div>
            </div>

        </nav>
    );
}

export default Navbar;