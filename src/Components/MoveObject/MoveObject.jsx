import React from 'react';
import Marquee from 'react-fast-marquee';
import pic1 from "../../assets/pic1.webp";
import pic2 from "../../assets/pic2.webp";
import pic3 from "../../assets/pic3.webp";
import pic4 from "../../assets/pic4.webp";
import pic5 from "../../assets/pic5.webp";
import pic6 from "../../assets/pic6.webp";

const MoveObject = () => {
    return (
        <div className="container rounded-2xl m-auto bg-gray-900 text-white pt-10">
            {/* Hero Section */}
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

            {/* First Marquee Row */}
            <Marquee gradient={false} speed={60} className="py-8" pauseOnHover={true}>
                <div className="flex gap-6 ">
                    {/* Repeated Cards */}
                    <div className=" ms-6 bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic1} alt="Template 1" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic2} alt="Template 2" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic3} alt="Template 3" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic4} alt="Template 4" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic5} alt="Template 5" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic6} alt="Template 6" className="rounded-t-lg" />
                    </div>
                </div>
            </Marquee>

            {/* Second Marquee Row with Delay */}
            <Marquee gradient={false} speed={40} className="py-8" pauseOnHover={true} delay={2} direction='right'>
                <div className="flex gap-6">
                    {/* Repeated Cards */}
                    <div className=" ms-6 bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic1} alt="Template 1" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic2} alt="Template 2" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic3} alt="Template 3" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic4} alt="Template 4" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic5} alt="Template 5" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic6} alt="Template 6" className="rounded-t-lg" />
                    </div>
                </div>
            </Marquee>

            {/* Third Marquee Row with a Further Delay */}
            <Marquee gradient={false} speed={50} className="py-8" pauseOnHover={true} delay={4}>
                <div className="flex gap-6">
                    {/* Repeated Cards */}
                    <div className=" ms-6 bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic1} alt="Template 1" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic2} alt="Template 2" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic3} alt="Template 3" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic4} alt="Template 4" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic5} alt="Template 5" className="rounded-t-lg" />
                    </div>
                    <div className="bg-white text-black rounded-lg shadow-lg w-80 p-4 flex-shrink-0">
                        <img src={pic6} alt="Template 6" className="rounded-t-lg" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default MoveObject;
