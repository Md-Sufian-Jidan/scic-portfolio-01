import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
const About = () => {
    return (
        <div className="my-5">
            <h3 className="text-5xl text-center divider">About me</h3>
            <div className="p-5">
                <p className="dark:text-[#7f9179]">
                    Hello! My name is Md Abu Sufian Jidan, and I am a Junior Web Developer with expertise in <i className="text-[#7f77ff] font-bold">HTML, CSS, JavaScript, Firebase, Node.js, Express.js, MongoDB, and Tailwind CSS</i>. I am passionate about creating dynamic and responsive web applications, and I am eager to contribute to innovative projects. Explore my portfolio to see my work and feel free to get in touch!
                </p>
            </div>

            <div className="p-5 flex gap-2">
                <a href="https://www.facebook.com/profile.php?id=100063493051408" target="_blank" >
                    <FaFacebook className="text-blue-600 hover:scale-110" size={30} />
                </a>
                <a href="https://github.com/Md-Sufian-Jidan" target="_blank" >
                    <FaGithub className="text-black hover:scale-110" size={30} />
                </a>
                <a href="https://www.linkedin.com/in/md-abu-sufian-jidan" target="_blank" >
                    <FaLinkedin className="text-blue-600 hover:scale-110" size={30} />
                </a>

            </div>
        </div>
    );
};

export default About;