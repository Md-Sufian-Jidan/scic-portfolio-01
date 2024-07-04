
const About = () => {
    return (
        <div className="my-5">
            <h3 className="text-5xl text-center divider">About me</h3>
            <div className="p-5">
                {/* <p className="dark:text-[#7f9179]">
                    Hello! My name is <span className="text-2xl text-[#12afa6]">Md Abu Sufian Jidan.</span>, and I am a Junior Web Developer with expertise in <i className="text-[#7f77ff] font-bold">HTML, CSS, JavaScript, Firebase, Node.js, Express.js, MongoDB, and Tailwind CSS</i>. I am passionate about creating dynamic and responsive web applications, and I am eager to contribute to innovative projects. Explore my portfolio to see my work and feel free to get in touch!
                </p> */}
                {/* <h3 className="text-3xl font-bold">Introduction</h3> */}
                <div className="space-y-5">
                    <p className="font-semibold">Hello! My name is <span className="text-2xl text-[#12afa6]">Md Abu Sufian Jidan</span>, and I am a Junior Web Developer passionate about building dynamic and responsive web applications.</p>
                    {/* <h3 className="text-3xl font-bold">Background</h3> */}
                    <p className="font-medium">I have a solid foundation in web development, with skills in HTML, CSS, JavaScript, Firebase, Node.js, Express.js, MongoDB, and Tailwind CSS. My journey into web development began with a keen interest in creating intuitive and engaging user experiences.</p>
                    {/* <h3 className="text-green-200 text-3xl">Skills and Expertise</h3> */}
                    <p><i className="font-extrabold capitalize">Front-End Development</i> : Proficient in HTML, CSS, JavaScript, React and Tailwind CSS to create clean, responsive, and user-friendly interfaces.</p>
                    <p><i className="font-extrabold capitalize">Back-End Development</i> : Experienced in using Node.js and Express.js to develop robust server-side applications.</p>
                    <p><i className="font-extrabold capitalize">Database Management</i> : Skilled in working with MongoDB to design and manage efficient databases.</p>
                    <p><i className="font-extrabold capitalize">Firebase</i> : Knowledgeable in using Firebase for building scalable and secure applications.</p>
                </div>
            </div>
        </div>
    );
};

export default About;