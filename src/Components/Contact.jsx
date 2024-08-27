import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import EmailForm from "../Shared/EmailForm";

const Contact = () => {
    return (
        <div className="my-5">
            <h3 className="md:text-5xl text-2xl text-center divider">Contact With Me</h3>

            <div className="mt-10 lg:flex flex-col items-center justify-between">
                <p className="md:text-2xl font-semibold flex items-center">Social Links : <p className="p-5 flex gap-5">
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
                <p className="md:text-2xl font-semibold btn hover:btn-success">
                    <MdEmail />
                    <a target="_blank" href="mailto:jidanjiyaj03@gmail.com">Email</a>
                </p>
            </div>
            <div className="divider text-sm">Or Send Me a email by fulfil the form</div>
            <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gradient-to-tr from-sky-300 to-purple-300 md:p-8 mt-10">
                <EmailForm />
            </div>

        </div>
    );
};

export default Contact;