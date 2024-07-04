import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="my-5">
            <h3 className="text-5xl text-center divider">Contact With Me</h3>

            <div className="mt-10">
                <p className="text-2xl font-semibold">Email : jidanjiyaj03@gmail.com</p>
                <p className="text-2xl font-semibold flex items-center">Social Links : <p className="p-5 flex gap-5">
                    <a href="https://www.facebook.com/profile.php?id=100063493051408" target="_blank" >
                        <FaFacebook className="text-blue-600 hover:scale-110 duration-300" size={30} />
                    </a>
                    <a href="https://github.com/Md-Sufian-Jidan" target="_blank" >
                        <FaGithub className="text-black hover:scale-110 duration-300" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/md-abu-sufian-jidan" target="_blank" >
                        <FaLinkedin className="text-blue-600 hover:scale-110 duration-300" size={30} />
                    </a>
                </p>
                </p>
            </div>
            <div className="divider">Or Send Me a email by fulfil the form</div>
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gradient-to-tr from-sky-300 to-purple-300 md:p-8 mt-10">
                <form>
                    <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input type="text" placeholder="Name " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input type="text" placeholder="Last Name" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input type="email" placeholder="Type Your Email" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-red-200/50 dark:text-violet-500 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>

                    </div>

                    <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-red-500/70 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;