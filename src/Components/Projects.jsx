
const Projects = () => {
    return (
        <div className="my-10">
            <h3 className="text-5xl text-center divider">My Work</h3>
            <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
                    <img className="object-cover w-full h-64" src="/public/p-1.png" alt="Article" />
                    <div className="p-6">
                        <div>
                            <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Project Name : Crafts House
                            </p>
                            <a href="https://assignment-art-craft.surge.sh" target="_blank" className="font-semibold mt-2 text-xl text-gray-800 transition-colors duration-300 transform dark:text-green-500 hover:text-indigo-600 hover:underline" tabIndex="0" role="link"> View Site</a>
                            <p className="mt-2 text-xl text-violet-600 dark:text-violet-400">Key Features :</p>
                            <ul type="disc">
                                <li>1) Add and sell your crafts.</li>
                                <li>2) Buy crafts from other artists.</li>
                                <li>3) View and manage your crafts in the My Crafts section.</li>
                                <li>4) Filter crafts by price and rating.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
                    <img className="object-cover w-full h-64" src="/public/p-2.png" alt="Article" />
                    <div className="p-6">
                        <div>
                            <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Project Name : Product Alter
                            </p>
                            <a href="https://product-alter.surge.sh" target="_blank" className="font-semibold mt-2 text-xl text-gray-800 transition-colors duration-300 transform dark:text-green-500 hover:text-indigo-600 hover:underline" tabIndex="0" role="link"> View Site</a>
                            <p className="mt-2 text-xl text-violet-600 dark:text-violet-400">Key Features :</p>
                            <ul type="disc">
                                <li>1) This website will shows you alternation of a Product</li>
                                <li>2) You can add or delete a product.</li>
                                <li>3) You can give a Recommendation in any product.</li>
                                <li>4) You can see your add product and your recommendations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-10">
                <img className="object-cover w-full h-64" src="/public/p-3.png" alt="Article" />
                <div className="p-6">
                    <div>
                        <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Project Name : Dreame Home</p>
                        <a href="https://assignment-09-authorization.web.app" target="_blank" className="font-semibold mt-2 text-xl text-gray-800 transition-colors duration-300 transform dark:text-green-500 hover:text-indigo-600 hover:underline" tabIndex="0" role="link"> View Site</a>
                        <p className="mt-2 text-xl text-violet-600 dark:text-violet-400">Top Features :</p>
                        <ul type="disc">
                            <li>
                                1) Dynamic routes and titles.
                            </li>
                            <li>
                                2) Property data is displayed in neatly managed cards.
                            </li>
                            <li>
                                3) Detailed property information accessible via View Details links.
                            </li>
                            <li>
                                4) User authentication for browsing, buying, or renting properties.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;