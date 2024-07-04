import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>A Passionate</i> Web Developer.', 'A Junior web developer.', 'I am a Junior Full-Stack Developer.'],
            typeSpeed: 70,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className="hero max-w-screen-sm mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://media.licdn.com/dms/image/D4D03AQHhAa08TqOKfg/profile-displayphoto-shrink_200_200/0/1719225918279?e=1725494400&v=beta&t=5o0wq4R5G1oSjFoJ2y6u8uFsPqkrE1pf7CD2FGe2W04"
                    className="max-w-sm rounded-full shadow-2xl" />
                <div>
                    <h1 className="text-xl font-bold">Hi,My Name is <span className="text-2xl text-[#12afa6]">Md Abu Sufian Jidan.</span> <span className="text-[#12afa6]" ref={el}></span></h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;