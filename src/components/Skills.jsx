import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSquareJs,
  faGithub,
  faReact,
  faBootstrap,
  faNodeJs,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPalette,
  faWind,
  faDatabase,
  faServer,
  faCode,
  faBug,
  faLaptopCode,
  faPenRuler,
  faLightbulb,
  faFlask,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    description: "The building blocks I use to bring interactive ideas to life.",
    skills: [
      { name: "HTML", icon: faHtml5, color: "text-orange-600" },
      { name: "CSS", icon: faCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: faSquareJs, color: "text-yellow-500" },
      { name: "React", icon: faReact, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: faWind, color: "text-cyan-500" },
      { name: "Bootstrap", icon: faBootstrap, color: "text-purple-600" },
    ],
  },
  {
    title: "Backend & APIs",
    number: "02",
    description: "Tools and concepts I’m building on to power the experience behind the screen.",
    skills: [
      { name: "Node.js", icon: faNodeJs, color: "text-green-600" },
      { name: "Express.js", icon: faServer, color: "text-stone-600 dark:text-stone-300" },
      { name: "REST APIs", icon: faCode, color: "text-stone-600 dark:text-stone-300" },
      { name: "SQL", icon: faDatabase, color: "text-blue-500" },
      { name: "Supabase", icon: faDatabase, color: "text-green-500" },
      { name: "API Testing", icon: faFlask, color: "text-orange-500" },
    ],
  },
  {
    title: "Design & UI",
    number: "03",
    description: "A creative eye for clear layouts, thoughtful details and responsive screens.",
    skills: [
      { name: "Responsive Design", icon: faLaptopCode, color: "text-blue-500" },
      { name: "UI Design", icon: faPenRuler, color: "text-purple-500" },
      { name: "Figma", icon: faFigma, color: "text-pink-500" },
      { name: "Graphic Design", icon: faPalette, color: "text-orange-500" },
    ],
  },
  {
    title: "Workflow & Tools",
    number: "04",
    description: "The everyday tools and habits that help me build, test and improve.",
    skills: [
      { name: "Git", icon: faGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: faGithub, color: "text-stone-800 dark:text-white" },
      { name: "VS Code", icon: faLaptopCode, color: "text-blue-500" },
      { name: "Debugging", icon: faBug, color: "text-red-500" },
      { name: "Problem Solving", icon: faLightbulb, color: "text-yellow-500" },
    ],
  },
];

function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);

  const showGroup = (index) => {
    setActiveGroup((index + skillGroups.length) % skillGroups.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      showGroup(activeGroup + 1);
    } else if (event.key === "ArrowLeft") {
      showGroup(activeGroup - 1);
    }
  };

  return (
    <section
      id="skills"
      className="w-full bg-[#E9E0D4] px-5 pt-16 pb-28 dark:bg-[#444A34] sm:px-6 sm:pt-20 sm:pb-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#8B6545] dark:text-[#D5C49E]">
            A growing toolkit
          </p>
          <h2 className="font-['Amatic_SC'] text-7xl leading-none text-[#201911] dark:text-white sm:text-8xl md:text-9xl">
            SKILLS & TOOLKIT
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#51483E] dark:text-[#F1EBDD] sm:text-base">
            A little of what I use to turn ideas into things you can explore.
            Pick a card to make your way through.
          </p>
        </div>

        <div
          className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12"
          onKeyDown={handleKeyDown}
        >
          <div
            className="relative mx-auto h-[390px] w-full max-w-[390px] [perspective:1200px] sm:h-[400px]"
            aria-label="Skill category cards"
          >
            {skillGroups.map((group, index) => {
              const offset = (index - activeGroup + skillGroups.length) % skillGroups.length;
              if (offset > 2) return null;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => showGroup(offset === 0 ? index + 1 : index)}
                  aria-label={offset === 0 ? `Next card: ${group.title}` : `Show ${group.title} skills`}
                  tabIndex={offset === 0 ? 0 : -1}
                  className={`absolute inset-0 flex flex-col rounded-[2rem] border border-[#201911]/10 bg-[#F7F1E8] p-6 text-left shadow-[0_24px_60px_-28px_rgba(32,25,17,0.6)] transition-all duration-500 ease-out dark:border-white/10 dark:bg-[#333728] sm:p-8 ${
                    offset === 0
                      ? "z-30 cursor-default opacity-100"
                      : offset === 1
                        ? "z-20 cursor-pointer opacity-75"
                        : "z-10 cursor-pointer opacity-45"
                  }`}
                  style={{ transform: `translateY(${offset * 13}px)` }}
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-[#E9E0D4] px-3 py-1 text-xs font-bold tracking-widest text-[#6D5139] dark:bg-[#4A503C] dark:text-[#E9DAB9]">
                      {group.number} / 04
                    </span>
                    <span className="font-['Amatic_SC'] text-4xl font-bold text-[#A98763] dark:text-[#D5C49E]">
                      LS
                    </span>
                  </div>
                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B6545] dark:text-[#D5C49E]">
                      Skill deck
                    </p>
                    <h3 className="mt-2 h-[5.5rem] overflow-hidden font-['Amatic_SC'] text-5xl leading-[0.9] text-[#201911] dark:text-white sm:h-[7rem] sm:text-6xl">
                      {group.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 max-w-xs text-sm leading-relaxed text-[#51483E] dark:text-[#E4E0D7] sm:text-base">
                      {group.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-[#201911]/10 pt-4 text-xs font-semibold uppercase tracking-wider text-[#766652] dark:border-white/15 dark:text-[#D5C49E]">
                    <span>{group.skills.length} skills</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="min-w-0" aria-live="polite" aria-atomic="true">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B6545] dark:text-[#D5C49E]">
                  In this card
                </p>
                <h3 className="mt-1 text-2xl font-bold text-[#201911] dark:text-white">
                  {skillGroups[activeGroup].title}
                </h3>
              </div>
              <span className="font-mono text-sm text-[#766652] dark:text-[#D5C49E]">
                {String(activeGroup + 1).padStart(2, "0")} / {String(skillGroups.length).padStart(2, "0")}
              </span>
            </div>

            <ul className="grid grid-cols-2 gap-3" aria-label={`${skillGroups[activeGroup].title} skills`}>
              {skillGroups[activeGroup].skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-[#201911]/10 bg-[#F7F1E8]/80 px-3 py-3 text-sm font-semibold text-[#201911] shadow-sm dark:border-white/10 dark:bg-[#333728]/75 dark:text-white sm:px-4"
                >
                  <FontAwesomeIcon icon={skill.icon} className={`w-5 shrink-0 text-lg ${skill.color}`} />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => showGroup(activeGroup - 1)}
                aria-label="Previous skill category"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#201911]/20 text-[#201911] transition hover:bg-[#201911] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6545] dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#201911]"
              >
                <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => showGroup(activeGroup + 1)}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#201911] px-5 text-sm font-bold text-white transition hover:bg-[#6D5139] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6545] dark:bg-[#E9DAB9] dark:text-[#201911] dark:hover:bg-white"
              >
                Next card
                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 flex justify-center gap-2" aria-label="Choose a skill category">
              {skillGroups.map((group, index) => (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => showGroup(index)}
                  aria-label={`Go to ${group.title}`}
                  aria-current={index === activeGroup ? "step" : undefined}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6545] ${
                    index === activeGroup
                      ? "w-8 bg-[#8B6545] dark:bg-[#E9DAB9]"
                      : "w-2.5 bg-[#201911]/25 hover:bg-[#8B6545]/60 dark:bg-white/30 dark:hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
