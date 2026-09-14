import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Skills(darkMode) {
    return (
        <section id="skills" className="bg-[#ECE4DA] px-5 py-16 sm:px-6 sm:py-20 dark:bg-[#444A34]">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-['Amatic_SC'] text-7xl leading-none sm:text-8xl text-[#201911] dark:text-white">
                    SKILLS
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg text-[#201911] dark:text-white">
                    Tools I use, things I’m learning, and what I love working with.
                </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="relative w-full rounded-lg bg-[#E8DCCF] dark:bg-[#434612] p-4 shadow-lg">
                    <FontAwesomeIcon icon={faHtml5} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-orange-600"/>
                    <p className="text-center font-bold">HTML</p>
                </div>
                <div className="relative w-full rounded-lg bg-[#E8DCCF] dark:bg-[#434612] p-4 shadow-lg">
                    <FontAwesomeIcon icon={faCss3} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-blue-500"/>
                    <p className="text-center font-bold">CSS</p>
                </div>
                <div className="relative w-full rounded-lg bg-[#E8DCCF] dark:bg-[#434612] p-4 shadow-lg">
                    <FontAwesomeIcon icon={faSquareJs} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-yellow-500"/>
                    <p className="text-center font-bold">JavaScript</p>
                </div>
                <div className="relative w-full rounded-lg bg-[#E8DCCF] dark:bg-[#434612] p-4 shadow-lg">
                    <FontAwesomeIcon icon={faHtml5} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-orange-600"/>
                    <p className="text-center font-bold">UI/UX Design</p>
                </div>
                <div className="relative w-full rounded-lg bg-[#E8DCCF] dark:bg-[#434612] p-4 shadow-lg">
                    <FontAwesomeIcon icon={faGithub} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-black"/>
                    <p className="text-center font-bold">Github</p>
                </div>
                <div className="relative w-full rounded-lg bg-[#E8DCCF] dark:bg-[#434612] p-4 shadow-lg">
                    <FontAwesomeIcon icon={faPalette} className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-mauve-600"/>
                    <p className="text-center font-bold">Graphic Design</p>
                </div>
                <div className="flex w-full items-center gap-4 rounded-lg bg-[#C5C6B2] dark:bg-[#4F3B23] p-2 shadow-lg">
                    <FontAwesomeIcon icon={faLock} className="text-3xl text-gray-600 dark:text-white"/>
                    <div className="text-left dark:text-white">
                        <p className="font-bold">Learning...</p>
                        <p className="text-xs font-normal">React</p>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4 rounded-lg bg-[#C5C6B2] dark:bg-[#4F3B23] p-2 shadow-lg">
                    <FontAwesomeIcon icon={faLock} className="text-3xl text-gray-600 dark:text-white"/>
                    <div className="text-left dark:text-white">
                        <p className="font-bold">Learning...</p>
                        <p className="text-xs font-normal">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;


