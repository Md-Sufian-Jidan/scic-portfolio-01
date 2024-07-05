
const Navbar = () => {
    const navLinks = <>
        {/* <li><a>Home</a></li> */}
        <li><a onClick={() => window.scrollTo(0,320)}>About</a></li>
        <li><a onClick={() => window.scrollTo(0,800)}>Skills</a></li>
        <li><a onClick={() => window.scrollTo(0,1240)}>Projects</a></li>
        <li><a onClick={() => window.scrollTo(0,2420)}>Contact</a></li>
    </>
        {/* <li><a>Services</a></li> */}
    return (
        <div className="navbar bg-cyan-900/30 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-green-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <p className="text-2xl pl-3"><span className="text-indigo-500">Jidan</span>Portfolio</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div title="Md Abu Sufian Jidan" className="w-10 rounded-full">
                        <img
                            alt="Developer image"
                            src="https://media.licdn.com/dms/image/D4D03AQHhAa08TqOKfg/profile-displayphoto-shrink_200_200/0/1719225918279?e=1725494400&v=beta&t=5o0wq4R5G1oSjFoJ2y6u8uFsPqkrE1pf7CD2FGe2W04" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;