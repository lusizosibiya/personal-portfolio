import contactBg from '../assets/contact-bg.png'
import contactDarkBg from '../assets/darkcontact.png'
import avatarImg from "../assets/avatar.png";
import githubImg from "../assets/github.png";
import linkedImg from "../assets/linkedin.png";
import emailImg from "../assets/email.png";

function Contact({ darkMode }) {
    return (
        <section id="contact" className="flex h-210 -mt-20" style={{ backgroundImage: `url(${darkMode ? contactDarkBg : contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="mx-auto flex max-w-7xl items-center gap-16  mt-20">
                <div className="w-1/2 dark:text-white">
                    <p className="font-[Amatic_SC] text-3xl">LET'S CONNECT</p>
                    <h2 className="mt-4 text-4xl font-bold">Have a question, opportunity, or just want to say hi?</h2>
                    <p className="mt-4 text-xl">I'd love to hear from you!</p>
                    <div className="mt-11 flex items-center gap-6">
                        <a href="https://github.com/lusizosibiya" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center transition-transform hover:scale-105">
                            <img src={githubImg} alt="GitHub" className="h-25" />
                            <p className="font-['Amatic_SC'] text-2xl">GitHub</p>
                        </a>
                        <a href="https://www.linkedin.com/in/lusizo-sibiya-a9b8543b0?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center transition-transform hover:scale-105">
                            <img src={linkedImg} alt="LinkedIn" className="h-25" />
                            <p className="font-['Amatic_SC'] text-2xl">LinkedIn</p>
                        </a>
                        <a href="mailto:sibiyalusizo2003@gmail.com" className="flex flex-col items-center transition-transform hover:scale-105">
                            <img src={emailImg} alt="Email" className="h-25" />
                            <p className="font-['Amatic_SC'] text-2xl">Email</p>
                        </a>
                    </div>
                </div>
                <div className="relative w-1/2 pt-24">
                    <img src={avatarImg} alt="Avatar" className="absolute -top-5 left-100 h-32 -translate-x-1/2 object-contain" />
                    <div className="bg-[#FBF8F3] dark:bg-[#6B594E] rounded-2xl p-8 shadow-lg">
                        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
                            <input type="hidden" name="access_key" value="4823b74e-4733-46f5-b118-350a1c7b6109"></input>
                            <input type="text" name="name" placeholder="Name" required className="rounded-lg border border-gray-300 p-2 dark:bg-[#E8DCCF] dark:text-[#736C68]" />
                            <input type="email" name="email" placeholder="Email" required className="rounded-lg border border-gray-300 p-2 dark:bg-[#E8DCCF] dark:text-[#736C68]" />
                            <textarea name="message" placeholder="Message" required className="rounded-lg border border-gray-300 p-2 dark:bg-[#E8DCCF] dark:text-[#736C68]"></textarea>
                            <button type="submit" className="rounded-lg bg-[#444A34] dark:bg-white dark:text-black dark:hover:bg-[#ccc] py-2 px-4 text-white hover:bg-[#5A5F4B] transition-colors">Send</button>
                        </form>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Contact;