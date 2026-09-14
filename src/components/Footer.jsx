function Footer(darkMode) {
    return (
        <footer className="bg-[#FAF6F1] px-5 py-6 dark:bg-[#201911]">
            <div className="flex flex-col items-center gap-3 text-center sm:grid sm:grid-cols-3 sm:gap-0">
                <a href="#top" className="text-xl font-bold dark:text-white">LUSIZO SIBIYA</a>
                <p className="text-sm text-stone-800 dark:text-white">
                    &copy; {new Date().getFullYear()} Lusizo Sibiya. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;