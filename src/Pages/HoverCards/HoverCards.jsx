import React from 'react';
import pic1 from "../../assets/pic1.webp"
import pic2 from "../../assets/pic2.webp"
import pic3 from "../../assets/pic3.webp"
import pic4 from "../../assets/pic4.webp"
import pic5 from "../../assets/pic5.webp"
import pic6 from "../../assets/pic6.webp"


const HoverCards = () => {
    return (

        <div className="container mx-auto p-5">
            <div className='mb-8 container flex flex-col items-center '>
                <div className=''>
                <button className='border p-3 rounded-full justify-center bg-purple-300 '>Starter Sites
                </button>
                </div>
                <p className="text-center text-5xl p-3 font-bold">
                Get started with professionally <br /> designed starter sites
                </p>
                <p className="text-center p-2">
                Explore our collection of professionally designed, responsive-ready <br /> starter sites that will help you to speed up the building process.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

                {/* Card 1 */}
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic1}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic2}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic3}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic4}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic5}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic6}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic1}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic2}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic3}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic4}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic5}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                <div className="bg-white  rounded-lg overflow-hidden transform transition-all duration-300 ">
                    <div className="overflow-hidden rounded-xl bg-purple-200">
                        <img
                            className="w-full h-96 p-3 rounded-xl object-cover transform transition-transform duration-300 hover:-translate-y-2"
                            src={pic6}
                            alt="Sample Image 2"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="text-start font-bold text-xl">Card Title 2</h3>
                        
                    </div>
                </div>
                

            </div>
        </div>



    );
};

export default HoverCards;