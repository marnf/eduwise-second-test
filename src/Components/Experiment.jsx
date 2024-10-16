import React, { useState } from 'react';
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import './Experiment.css'

const Experiment = () => {
    const [inputWidth, setInputWidth] = useState('w-12');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleFocus = () => {
        setInputWidth('w-64');
    };

    const handleBlur = (event) => {
        if (event.target.value === '') {
            setInputWidth('w-12');
        }
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full bg-white shadow-md">
            <nav className="w-full mx-auto px-4 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <a className="font-semibold text-xl text-black" href="#" aria-label="Brand">Brand</a>





                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-x-6 items-center">
                        {/* Hoverable Mega Menu */}

                        <div className="hoverable rounded-2xl border border-gray-200 hover:bg-gray-600 hover:text-black">
                            <a href="#" className="relative block p-5  ">Hover</a>
                            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-base-300 rounded-box text-black">
                                <div className="container mx-auto w-full flex flex-wrap justify-between  ">
                                    <div className="w-full text-black mb-8">
                                        <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
                                        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                                    </div>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 1</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 2</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 3</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 4</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* Other Links */}
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="border border-gray rounded-2xl p-5">dropdown menu</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <a href="#" className="text-black font-medium hover:text-gray-600">Newsletter</a>
                        <a href="#" className="text-black font-medium hover:text-gray-600">Purchases</a>
                       
                    </div>

                    {/* Search Bar */}

                    <div className="flex items-center">
                        <div className="relative">
                            <input
                                type="text"
                                className={`bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${inputWidth}`}
                                placeholder="Search..."
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                </svg>
                            </button>
                        </div>

                        {/* Shopping Cart */}
                        <button className="ml-4" onClick={toggleDrawer}>
                            <MdOutlineShoppingCart size={25} />
                        </button>
                    </div>


                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <MdClose size={25} /> : <MdMenu size={25} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col gap-y-2 py-4">
                        <a href="#" className="text-black font-medium">Newsletter</a>
                        <a href="#" className="text-black font-medium">Purchases</a>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn m-1">Hover</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <div className="hoverable  rounded hover:bg-gray-600 hover:text-black">
                            <a href="#" className="relative block p-5  ">Hover</a>
                            <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-base-300 rounded-box text-black">
                                <div className="container mx-auto w-full flex flex-wrap justify-between  ">
                                    <div className="w-full text-black mb-8">
                                        <h2 className="font-bold text-2xl">Main Hero Message for the menu section</h2>
                                        <p>Sub-hero message, not too long and not too short. Make it just right!</p>
                                    </div>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 1</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">Quarterly sales are at an all-time low create spaces to explore the accountable talk and blind vampires.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 2</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">Prioritize these line items game-plan draw a line in the sand come up with something buzzworthy UX upstream selling.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 3</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This proposal is a win-win situation which will cause a stellar paradigm shift, let's touch base off-line before we fire the new ux experience.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                        <div className="flex items-center">
                                            <svg className="h-8 mb-3 mr-3 fill-current text-black"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                            </svg>
                                            <h3 className="font-bold text-xl text-black text-bold mb-2">Heading 4</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm">This is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</p>
                                        <div className="flex items-center py-3">
                                            <svg className="h-6 pr-3 fill-current text-blue-300"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                            </svg>
                                            <a href="#" className="text-black bold border-b-2 border-blue-300 hover:text-blue-300">Find out more...</a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Side Drawer */}
                <div id="drawer-navigation" className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 bg-gray-200 transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <button type="button" onClick={toggleDrawer} className="text-gray-600 hover:text-black mb-4">
                        <MdClose size={25} />
                    </button>
                    <nav className="mt-8">
                        <a href="#" className="block py-2 px-3 hover:bg-gray-100">Dashboard</a>
                        <a href="#" className="block py-2 px-3 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block py-2 px-3 hover:bg-gray-100">Settings</a>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Experiment;
