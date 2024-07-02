
const Navbar = () => {
    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;