function Footer() {
    return (
        <footer className="w-full bg-[#FAF6F1] dark:bg-[#201911]">
            <div className=" grid grid-cols-1 items-center gap-3 px-4 py-6 text-center sm:grid-cols-3 sm:px-6 lg:px-10">
                {/* NAME */}
                <a href="#top" className=" justify-self-center whitespace-nowrap text-lg font-bold dark:text-white sm:justify-self-start sm:text-xl">LUSIZO SIBIYA</a>
                {/* COPYRIGHT */}
                <p className=" text-sm text-stone-800 dark:text-white sm:justify-self-center">
                    &copy; {new Date().getFullYear()} Lusizo Sibiya. All rights reserved.
                </p>
                <div className="hidden sm:block" />
            </div>
        </footer>
    );
}

export default Footer;