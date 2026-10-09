import { useRef } from "react";
import ProjectDivider from "./ProjectDivider";
// Project Images
import ecommerceImg from "../assets/ecommerce-project.png";
import cryptxImg from "../assets/cryptx-project.png";
import shalomImg from "../assets/shalom-website.png";
import quizzoImg from "../assets/quiz-project.png";
import clockImg from "../assets/clock-project.png";
import diamondImg from "../assets/diamond-project.png";
import menuwebsiteImg from "../assets/menuwebsite-project.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faArrowUpRightFromSquare, } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        title: "E-Commerce App",
        description: "A collaborative React e-commerce application featuring product browsing, cart management and checkout functionality.",
        type: "Group Project",
        image: ecommerceImg,
        technologies: ["React", "Tailwind CSS", "Redux"],
        live: "",
        github: "",
    },

    {
        title: "CryptX Dashboard",
        description: "A responsive cryptocurrency dashboard featuring market data, metric cards, charts and transaction information.",
        type: "Individual Project",
        image: cryptxImg,
        technologies: ["React", "Tailwind CSS"],
        live: "https://cryptxprojectlusizo.netlify.app/",
        github: "https://github.com/lusizosibiya/cryptxdashboard",
    },

    {
        title: "Shalom 360 Holdings",
        description: "A real-world business website developed for Shalom 360 Holdings and its range of services.",
        type: "Real-World Project",
        image: shalomImg,
        technologies: ["HTML", "CSS", "JavaScript"],
        live: "https://shalom360holdings.co.za/",
        github: "",
    },

    {
        title: "Quizzo",
        description: "A collaborative interactive quiz application with multiple topics, scoring and answer reviews.",
        type: "Group Project",
        image: quizzoImg,
        technologies: ["HTML", "CSS", "JavaScript"],
        live: "https://quizzooo.netlify.app/",
        github: "https://github.com/yolandaMaz/quizz-app.git",
    },

    {
        title: "Digital Clock",
        description: "A functional digital clock with real-time updates, date display, 12/24-hour formats and theme controls.",
        type: "Individual Project",
        image: clockImg,
        technologies: ["HTML", "CSS", "JavaScript"],
        live: "https://functionalclock.netlify.app/",
        github: "https://github.com/lusizosibiya/Clock",
    },

    {
        title: "Diamond Tech Website",
        description: "A responsive business website focused on presenting services through a clean and accessible interface.",
        type: "Individual Project",
        image: diamondImg,
        technologies: ["HTML", "CSS", "Bootstrap"],
        live: "https://diamond-tech-website-lusizo.netlify.app/",
        github: "https://github.com/lusizosibiya/Diamond-Tech-Website",
    },

    {
        title: "Menu-Like Website",
        description: "A responsive bookstore-style website with organised categories and an easy-to-browse menu layout.",
        type: "Individual Project",
        image: menuwebsiteImg,
        technologies: ["HTML", "CSS"],
        live: "https://betweenthepageswebsite.netlify.app/",
        github: "https://github.com/lusizosibiya/Menu-Like-Website",
    },
];


function Projects({ darkMode }) {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const amount = carousel.clientWidth * 0.8;
        carousel.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <section id="projects" className=" relative w-full bg-[#A58F79] pb-20 dark:bg-[#343A28]">
            {/* PROJECT DIVIDER */}
            <div className=" absolute left-0 top-[-60px] h-[65px] w-full sm:top-[-70px] sm:h-[75px]">
                <ProjectDivider darkMode={darkMode} />
            </div>

            <div className=" px-5 pt-20 text-center sm:px-8">
                <h1 className=" font-['Amatic_SC'] text-6xl leading-none text-[#201911] sm:text-7xl md:text-8xl lg:text-[110px] dark:text-white">
                    WHAT I'VE BEEN WORKING ON
                </h1>
                <p className=" mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#201911] sm:text-base dark:text-white">
                    A collection of individual, collaborative and
                    real-world projects I've built while developing
                    my skills.
                </p>
            </div>

            {/* CAROUSEL AREA */}
            <div className="relative mx-auto mt-12 max-w-[1500px]">
                <button onClick={() => scroll("left")} aria-label="Previous projects" className=" absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAF6F1] text-[#201911] shadow-lg transition hover:scale-110 sm:left-4">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div ref={carouselRef} className=" flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-8 pb-6 sm:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {projects.map((project, index) => (
                        <article key={index}
                            className=" min-w-[85%] snap-center overflow-hidden rounded-[28px] bg-[#FAF6F1] shadow-lg sm:min-w-[46%] lg:min-w-[31%] xl:min-w-[29%] dark:bg-[#201911]">

                            {/* PROJECT IMAGE */}
                            <div className="aspect-[16/10] overflow-hidden">
                                <img src={project.image} alt={`${project.title} preview`} className=" h-full w-full object-cover transition duration-500 hover:scale-105"/>
                            </div>

                            {/* PROJECT INFO */}
                            <div className="flex min-h-[300px] flex-col p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className=" text-xs uppercase tracking-widest text-[#7A6B5B] dark:text-[#C8BBAE]">{project.type}</p>
                                        <h3 className=" mt-1 text-2xl font-bold text-[#201911] dark:text-white">{project.title}</h3>
                                    </div>
                                </div>
                                <p className=" mt-4 text-sm leading-relaxed text-[#4E463F] dark:text-[#DDD4CB]">{project.description}</p>

                                {/* TECHNOLOGIES THAT WERE USED */}
                                <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => (
                                    <span key={technology} className=" rounded-full bg-[#E9E0D4] px-3 py-1 text-xs text-[#201911] dark:bg-[#444A34] dark:text-white">{technology}</span>
                                        )
                                    )}
                                </div>

                                {/* LINKS */}
                                <div className="mt-auto flex gap-3 pt-6">{project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-[#444A34] px-4 py-2 text-sm text-white transition hover:bg-[#7F8D59] dark:bg-white dark:text-black">
                                            Live Site
                                            <FontAwesomeIcon icon={ faArrowUpRightFromSquare }/>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 rounded-full border border-[#201911] px-4 py-2 text-sm text-[#201911] transition hover:bg-[#E9E0D4] dark:border-white dark:text-white dark:hover:bg-[#444A34]">
                                            <FontAwesomeIcon icon={faGithub}/>
                                            Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* RIGHT BUTTON */}
                <button onClick={() => scroll("right")} aria-label="Next projects" className=" absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAF6F1] text-[#201911] shadow-lg transition hover:scale-110 sm:right-4">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}

export default Projects;