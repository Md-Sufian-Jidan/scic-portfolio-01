import { useEffect, useRef, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import Typed from "typed.js";
// import jsPDF from "jspdf";


const Banner = () => {
    const [loading, setLoading] = useState(false);

    // const download = async () => {
    //     const doc = new jsPDF();
    //     doc.text(`
    //                                        Resume 

    // Name      : Md Abu Sufian Jidan      

    // Address   : 2 No Shahid nagor, 
    //             Narayangonj,Dhaka.

    // City      : Narayangonj                Zip code : 1400

    // Districts : Dhaka

    // phone     : +88 019 0684 4598

    // Email     : jidanjiyaj03@gmail.com 

    // Linkdin   : https://www.linkedin.com/in/md-abu-sufian-jidan

    // GitHub    : https://github.com/Md-Sufian-Jidan
    //                 `, 10, 10);
    //     doc.save("a4.pdf");
    // };

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>A Passionate</i> Web Developer.', 'A Junior web developer.', 'I am a Junior Front-End Developer.'],
            typeSpeed: 70,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className="hero max-w-screen-sm mx-auto my-5">
            <div className="hero-content flex-col lg:flex-row">
                {/* <img
                    src="https://media.licdn.com/dms/image/D4D03AQHhAa08TqOKfg/profile-displayphoto-shrink_200_200/0/1719225918279?e=1725494400&v=beta&t=5o0wq4R5G1oSjFoJ2y6u8uFsPqkrE1pf7CD2FGe2W04"
                    className="max-w-sm rounded-full shadow-2xl" /> */}
                {/* <img
                    src="https://i.ibb.co/JtHQnk9/Black-and-Gold-Simple-Business-Man-Linked-In-Profile-Picture.png"
                    className="max-w-xs rounded-full shadow-2xl" /> */}
                <img
                    src="https://i.imgur.com/lYNKPed.jpeg"
                    className="max-w-xs rounded-full shadow-2xl" />
                <div>
                    <h1 className="text-xl font-bold">Hi,My Name is <span className="text-2xl text-[#12afa6]">Md Abu Sufian Jidan.</span> <span className="text-[#12afa6]" ref={el}></span></h1>
                    {/* onClick={() => download()}  */}
                    <a href="/public/Md_Abu_Sufian_Jidan_resume.pdf" download className="mt-5 btn text-fuchsia-200/50 bg-pink-400/50  hover:bg-gradient-to-b from-green-200 to-rose-300 hover:text-black">{loading ? <VscLoading className="w-full flex justify-center items-center animate-spin" /> : 'Download Resume'}</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;