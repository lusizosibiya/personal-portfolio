import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-[#FAF6F1] px-10 dark:bg-[#201911] dark:text-white">
            <div className="flex items-center">
                <a href="#top" className="pr-5 text-xl font-bold dark:text-white">
                    LUSIZO SIBIYA
                </a>
                <div className="hidden h-px w-100 bg-stone-800 md:block dark:bg-white"></div>
                <div className="hidden h-3 w-3 rounded-full bg-stone-800 md:block dark:bg-white"></div>
            </div>

            <div className="flex items-center gap-8 dark:text-white">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <button onClick={() => setDarkMode(!darkMode)} className="relative h-10 w-20 items-center justify-start rounded-full bg-[#444A34] p-1">
                    <span className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition-all duration-300 ${darkMode ? "left-11" : "left-1"}`}>
                        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-[#201911]"/>
                    </span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
