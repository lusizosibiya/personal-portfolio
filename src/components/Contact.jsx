import ContactDivider from "./ContactDivider";

import avatarImg from "../assets/avatar.png";
import githubImg from "../assets/github.png";
import linkedImg from "../assets/linkedin.png";
import emailImg from "../assets/email.png";

function Contact({ darkMode }) {
    return (
        <section id="contact" className=" relative w-full bg-[#E5CDBE] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:py-32 dark:bg-[#4A3D34]">
            {/* TOP DIVIDER */}
            <div className=" absolute left-0 top-[-60px] h-[65px] w-full sm:top-[-70px] sm:h-[75px]">
                <ContactDivider darkMode={darkMode} />
            </div>

            {/* CONTACT CONTENT */}
            <div className=" mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
                {/* LEFT SIDE */}
                <div className=" text-center text-[#201911] lg:text-left dark:text-white">
                    <p className="font-['Amatic_SC'] text-3xl">LET'S CONNECT</p>
                    <h2 className=" mx-auto mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                        Have a question, opportunity, or just want to say hi?
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl">I'd love to hear from you!</p>

                    {/* SOCIAL LINKS */}
                    <div className=" mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                        <a href="https://github.com/lusizosibiya" target="_blank" rel="noopener noreferrer" className=" flex flex-col items-center transition-transform hover:scale-105">
                            <img src={githubImg} alt="GitHub" className=" h-[clamp(70px,8vw,100px)] w-auto"/>
                            <p className="mt-2 font-['Amatic_SC'] text-2xl">GitHub</p>
                        </a>
                        <a href="https://www.linkedin.com/in/lusizo-sibiya-a9b8543b0" target="_blank" rel="noopener noreferrer" className=" flex flex-col items-center transition-transform hover:scale-105">
                            <img src={linkedImg} alt="LinkedIn" className=" h-[clamp(70px,8vw,100px)] w-auto"/>
                            <p className="mt-2 font-['Amatic_SC'] text-2xl">LinkedIn</p>
                        </a>
                        <a href="mailto:sibiyalusizo2003@gmail.com" className=" flex flex-col items-center transition-transform hover:scale-105">
                            <img src={emailImg} alt="Email" className=" h-[clamp(70px,8vw,100px)] w-auto"/>
                            <p className="mt-2 font-['Amatic_SC'] text-2xl">Email</p>
                        </a>
                    </div>
                </div>

                {/* FORM + AVATAR */}
                <div className=" relative mx-auto w-full max-w-2xl pt-[clamp(5rem,10vw,8rem)]">
                    {/* AVATAR */}
                    <img src={avatarImg} alt="Lusizo avatar" className=" absolute left-1/2 top-7 z-20 w-[clamp(180px,24vw,330px)] max-w-none -translate-x-1/2 object-contain"/>

                    {/* FORM CARD */}
                    <div className=" relative z-10 rounded-2xl bg-[#FBF8F3] p-5 shadow-lg sm:p-8 dark:bg-[#6B594E]">
                        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
                            <input type="hidden" name="access_key" value="4823b74e-4733-46f5-b118-350a1c7b6109"/>
                            <input type="text" name="name" placeholder="Name" required className=" rounded-lg border border-gray-300 bg-white p-3 dark:bg-[#E8DCCF] dark:text-[#201911]"/>
                            <input type="email" name="email" placeholder="Email" required className=" rounded-lg border border-gray-300 bg-white  p-3 dark:bg-[#E8DCCF] dark:text-[#201911]"/>
                            <textarea name="message" placeholder="Message" required rows="4" className=" resize-y rounded-lg border border-gray-300 bg-white  p-3 dark:bg-[#E8DCCF] dark:text-[#201911]"/>
                            <button type="submit" className=" rounded-lg bg-[#444A34] px-4 py-3 text-white transition-colors hover:bg-[#5A5F4B] dark:bg-white dark:text-black dark:hover:bg-[#ccc] ">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;