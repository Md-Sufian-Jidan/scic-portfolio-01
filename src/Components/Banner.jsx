import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://media.licdn.com/dms/image/D4D03AQHhAa08TqOKfg/profile-displayphoto-shrink_200_200/0/1719225918279?e=1725494400&v=beta&t=5o0wq4R5G1oSjFoJ2y6u8uFsPqkrE1pf7CD2FGe2W04"
                    className="max-w-sm rounded-full shadow-2xl" />
                <div>
                    <h1 className="text-xl font-bold">Hi,My Name is <span className="text-2xl text-[#12afa6]">Md Abu Sufian Jidan</span> and i am Junior Web Developer</h1>
                    <div className="p-5 flex gap-2">
                    <a href="https://www.facebook.com/profile.php?id=100063493051408" target="_blank" >
                    <FaFacebook className="text-blue-500 hover:scale-110" size={30} />
                    </a>
                    <a href="https://github.com/Md-Sufian-Jidan" target="_blank" >
                    <FaGithub className="hover:scale-110" size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/md-abu-sufian-jidan" target="_blank" >
                    <FaLinkedin className="text-blue-600 hover:scale-110" size={30} />
                    </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;