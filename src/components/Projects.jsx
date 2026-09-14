import projectBg from "../assets/project-bg.png";
import darkprojectBg from "../assets/darkproject-bg.png";
import blackCard from "../assets/black-card.png";
import orangeCard from "../assets/orange-card.png";
import brownCard from "../assets/brown-card.png";
import darkgreenCard from "../assets/darkgreen-card.png";
import grayDarkCard from "../assets/gray-card.png";
import peachDarkCard from "../assets/peach-card.png";
import lightBrownDarkCard from "../assets/lightbrown-card.png";
import greenDarkCard from "../assets/green-card.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
  {
    title: "MENU-LIKE-WEBSITE",
    description: "A responsive menu-style website designed to showcase books for sale, with clear categories, book details, and an easy-to-browse layout.",
    type: "Individual Project",
    card: darkgreenCard,
    darkCard: greenDarkCard,
    image: project1,
    languages: ["HTML", "CSS"],
    url: "https://betweenthepageswebsite.netlify.app/",
  },

  {
    title: "WEBSITE REDESIGN",
    description: "A modern website redesign focused on improved layout, responsiveness, usability, and visual presentation.",
    type: "Group Project",
    card: blackCard,
    darkCard: grayDarkCard,
    image: project2,
    languages: ["HTML", "CSS", "Bootstrap"],
    url: "https://tessasbakeryrevamp.netlify.app/",
  },

  {
    title: "DIGITAL CLOCK",
    description: "A responsive digital clock featuring real-time updates, date display, 12/24-hour format, and theme controls.",
    type: "Individual Project",
    card: brownCard,
    darkCard: lightBrownDarkCard,
    image: project3,
    languages: ["HTML", "CSS", "JavaScript"],
    url: "https://functionalclock.netlify.app/",
  },

  {
    title: "QUIZZO",
    description: "An interactive quiz application with multiple topics, scoring, answer reviews, and a responsive interface.",
    type: "Group Project",
    card: orangeCard,
    darkCard: peachDarkCard,
    image: project4,
    languages: ["HTML", "CSS", "JavaScript"],
    url: "https://quizzooo.netlify.app/",
  },
];

function Projects({ darkMode }) {
  return (
    <section id="projects" className="h-230 -mt-7" style={{backgroundImage: `url(${darkMode ? darkprojectBg : projectBg})`, backgroundSize: "cover", backgroundPosition: "center",}}>
      <div className="text-center">
        <h1 className="pt-65 font-['Amatic_SC'] text-[120px] leading-none text-[#201911] dark:text-white">WHAT I'VE BEEN WORKING ON</h1>
        <p className="mt-6 text-lg leading-relaxed text-[#201911] dark:text-white">Here you can find the projects I’ve had the pleasure and frustration of doing.</p>
      </div>
      <div className="mt-6 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 2xl:grid-cols-4">
        {projects.map((project, index) => (
          <div key={index} className="relative w-[350px] transition-transform hover:scale-105">
            <img src={darkMode ? project.darkCard : project.card} alt="Project Card" className="w-full"/>
            <div className="absolute inset-0 flex flex-col">
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#201911] transition-transform hover:scale-110"> ↗</a>
              <img src={project.image} alt={`${project.title} preview`} className="mx-auto mt-22 h-[170px] w-[260px] rounded-3xl object-cover"/>
              <div className="px-8 pt-5">
                <h3 className="mt-2 text-2xl font-bold text-white dark:text-black">{project.title}</h3>
                <p className="text-sm font-normal text-white dark:text-black">{project.description}</p>
                <div className="mt-11 flex gap-2"> {project.languages.map((language, index) => (<span key={index} className="rounded-full bg-[#ECE4DA] px-3 py-1 text-xs">{language}</span>))}</div>
                <p className="mt-2 text-center text-sm font-normal text-white dark:text-black">{project.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;