import heroBg from '../assets/hero-bg.png'
import darkHeroBg from '../assets/darkhero.png'
import avatarImg from "../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Hero({ darkMode }) {
    return (
        <section id="top" className="h-162 border-0" style={{ backgroundImage: `url(${darkMode ? darkHeroBg : heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className="text-sm font-normal flex justify-center gap-6 pt-10 dark:text-white">
                <span>Aspiring Software Developer</span>
                <span>●</span>
                <span>Self-Taught Graphic Designer</span>
            </p>
            <h1 className="text-[280px] font-['Francois_One'] text-[#201911] text-center -mt-20 dark:text-white">PORTFOLIO</h1>
            <img src={avatarImg} alt="Lusizo avatar" className="w-250 mx-auto -mt-75"/>
            <a href="/CV.pdf" download className="mx-auto mt-3 flex w-fit items-center justify-center rounded-full bg-[#444A34] px-10 py-2 text-white dark:bg-white dark:text-black hover:bg-[#7F8D59] dark:hover:bg-[#ccc] transition duration-300">Download CV</a>
            <div className="flex flex-col items-center pt-5">
                <p className="font-['Amatic_SC'] text-3xl font-normal tracking-wider dark:text-white">SCROLL DOWN TO LEARN MORE</p>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to About section" className="mt-2 animate-bounce text-5xl text-black dark:text-white">
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
        </section>
    )
}

export default Hero;
