import avatarImg from "../assets/avatar.png";
import HeroDivider from "./HeroDivider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Hero({ darkMode }) {
    return (
        <section id="top" className="overflow-hidden bg-[#FAF6F1] dark:bg-[#201911] w-full">
            <div className="px-4 pt-8 sm:pt-10">
                <p className=" flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-centers text-xs font-normal sm:text-sm md:text-base dark:text-white">
                    <span>Aspiring Software Developer</span>
                    <span className="text-[8px]"> ● </span>
                    <span>Self-Taught Graphic Designer</span>
                </p>
            </div>
            <div className=" relative  mt-6  h-[320px] sm:h-[370px] md:h-[420px] lg:h-[470px]">
                <h1 className=" absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap font-['Francois_One']  text-[clamp(4rem,15vw,17.5rem)] leading-[0.85] tracking-[-0.03em] text-[#201911] dark:text-white "> PORTFOLIO</h1>
                {/* DIVIDER */}
                <div className="absolute bottom-19 left-0 z-20 h-[50px] w-full sm:h-[55px] md:h-[60px] lg:h-[70px]">
                    <HeroDivider darkMode={darkMode} />
                </div>

                {/* AVATAR */}
                <img src={avatarImg} alt="Lusizo avatar" className=" absolute bottom-[90px] left-1/2 z-30 w-[clamp(520px,62vw,1100px)] max-w-none -translate-x-1/2"/>
            </div>
            <div className="relative z-20 -mt-20 flex min-h-[200px] flex-col items-center bg-[#E9E0D4] px-4 pt-4 sm:pt-5 dark:bg-[#332A20]">
                <a href="/Lusizo_Sibiya_CV.pdf" download className=" flex w-fit items-center justify-center rounded-full bg-[#444A34] px-10 py-2 text-sm text-white transition duration-300 hover:bg-[#7F8D59] sm:text-base dark:bg-white dark:text-black dark:hover:bg-[#ccc]">Download CV</a>
                <div className="flex flex-col items-center pt-6">
                    <p className=" text-center font-['Amatic_SC'] text-2xl font-normal tracking-wider sm:text-3xl dark:text-white">SCROLL DOWN TO LEARN MORE</p>
                    <button onClick={() => document .getElementById("about") ?.scrollIntoView({behavior: "smooth",})} aria-label="Scroll to About section" className=" mt-2 animate-bounce text-4xl text-black sm:text-5xl dark:text-white">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;