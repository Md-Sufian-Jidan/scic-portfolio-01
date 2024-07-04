
const Footer = () => {
    return (
        <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
            <div className="container px-6 py-6">
                <h1 className="text-lg font-bold text-center lg:text-2xl">
                    <span className="text-indigo-500">Jidan</span> <br /> Portfolio.
                </h1>

                <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <a href="#">
                        <img className="w-auto h-7" src="https://i.ibb.co/vDT2Sq6/logo.png" alt="" />
                    </a>

                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            <a onClick={() => window.scrollTo(0, 320)} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                            <a onClick={() => window.scrollTo(0, 800)} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Skills</a>
                            <a onClick={() => window.scrollTo(0, 1240)} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Project</a>
                            <a onClick={() => window.scrollTo(0, 2420)} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;