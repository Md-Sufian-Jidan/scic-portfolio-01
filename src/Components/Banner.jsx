
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://media.licdn.com/dms/image/D4D03AQHhAa08TqOKfg/profile-displayphoto-shrink_200_200/0/1719225918279?e=1725494400&v=beta&t=5o0wq4R5G1oSjFoJ2y6u8uFsPqkrE1pf7CD2FGe2W04"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-xl font-bold">Hi My Name is <span className="text-2xl text-indigo-500">Md Abu Sufian Jidan</span> - Junior Web Developer</h1>
                    <p className="py-6">
                        Welcome to my portfolio! I am Md Abu Sufian Jidan, a passionate and dedicated junior web developer. With expertise in HTML5, CSS3, JavaScript, React, Tailwind CSS, Daisy UI, Node.js, Express.js, MongoDB, and Firebase, I craft dynamic and responsive web applications. Explore my projects and discover how I turn ideas into engaging digital experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;