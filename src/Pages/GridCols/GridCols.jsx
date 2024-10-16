import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import pic1 from "../../assets/pic1.webp"
import pic2 from "../../assets/pic2.webp"
import pic3 from "../../assets/pic3.webp"
import pic4 from "../../assets/pic4.webp"
import pic5 from "../../assets/pic5.webp"
import pic6 from "../../assets/pic6.webp"


const GridCols = () => {
    return (
        <div className='container m-auto'>
            <div className="container mx-auto ms-10 mb-10 text-start">
                <h1 className="text-4xl font-bold">
                    KeyDesign exclusive <span className="italic">template library.</span>
                </h1>
                <p className="text-xl mt-4">
                    500+ blocks, flexible & mobile perfect.
                </p>
                <p className="text-md mt-2">
                    Built with Flexbox Containers, these templates automatically adapt to your website's global styles.
                </p>
                <button className="mt-6 rounded-2xl bg-blue-500 text-white py-2 px-6  hover:bg-blue-600">
                    Discover more
                </button>
            </div>
            <div className="container mx-auto py-10">
                {/* Main wrapper */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Left column with two cards */}
                    <div className="grid grid-rows-2 gap-6">
                        {/* First card */}
                        <div className="card border border-black rounded-2xl bg-gray-200 p-7 w-full shadow-xl">
                            <div className="card-body">
                                <h1 className='text-3xl p-2'>Smooth and easy blogging</h1>
                                <p className='p-2'>Customize your blog using intuitive layout presets and flexible controls.</p>
                                <div className='flex gap-5 p-2'>
                                    <span className='flex items-center'><RiVerifiedBadgeFill /> 10 Blog Listing Layouts</span>
                                    <span className='flex items-center'><RiVerifiedBadgeFill /> 10 Blog Listing Layouts</span>
                                </div>
                            </div>
                            <figure>
                                <img
                                    src={pic1}
                                    alt="Example 1"
                                    className="rounded-lg"
                                />
                            </figure>
                        </div>

                        {/* Second card */}
                        <div className="card border border-gray-400 rounded-2xl bg-gray-200 p-7 w-full shadow-xl">
                            <div className="card-body">
                                <h1 className='text-3xl p-2'>Start selling products online
                                </h1>
                                <p className='p-2'>Create an online shopping experience
                                that resonates with your brand.</p>
                                <div className='flex gap-5 p-2'>
                                    <span className='flex items-center'><RiVerifiedBadgeFill /> 10 Blog Listing Layouts</span>
                                    <span className='flex items-center'><RiVerifiedBadgeFill /> 10 Blog Listing Layouts</span>
                                </div>
                            </div>
                            <figure>
                                <img
                                    src={pic2}
                                    alt="Example 2"
                                    className="rounded-lg"
                                />
                            </figure>
                        </div>
                    </div>

                    {/* Right column with one large card */}
                    <div className="card border border-black rounded-2xl bg-gray-200 p-7 w-full h-full shadow-xl">
                        <div className="card-body">
                            <h1 className='text-3xl p-2'>Build your portfolio and
                                showcase your best projects</h1>
                            <p className='p-2'>Boost your online presence with a customizable portfolio page that lets you curate a gallery and tell the story behind your work.

                            </p>
                            <div className='flex gap-5 p-2'>
                                <span className='flex items-center'><RiVerifiedBadgeFill /> 10 Blog Listing Layouts</span>
                                <span className='flex items-center'><RiVerifiedBadgeFill /> 10 Blog Listing Layouts</span>
                            </div>
                        </div>
                        <figure>
                            <img
                                src={pic3}
                                alt="Large Card"
                                className="rounded-lg"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridCols;