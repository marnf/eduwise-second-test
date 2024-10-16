import React from 'react';
import pic1 from "../../assets/pic1.webp"
import pic2 from "../../assets/pic2.webp"
import ss1 from "../../assets/ss1.png"
import ss2 from "../../assets/ss2.png"
import card3 from "../../assets/card3.png"
import pic7 from "../../assets/pic7.webp"
import pic8 from "../../assets/pic8.webp"
import pic9 from "../../assets/pic9.webp"
import pic10 from "../../assets/pic10.webp"
import pic11 from "../../assets/pic11.webp"
import pic12 from "../../assets/pic12.webp"


const GridRow = () => {
    return (
        <div className='container m-auto flex gap-7 mb-5 '>


            <div className='w-1/2 flex flex-col gap-7 '>
                {/* card 1 */}
                <div className="card bg-green-100 rounded-2xl  shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">Start your new website
                            with Elementor Page Builder</h2>
                        <p>Elementor is the only page builder you’ll need to create a high-converting professional WordPress website.

                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"> explore page builder</button>
                        </div>
                    </div>

                    <figure className='m-7'>
                        <img className='m-auto'
                            src={pic1}
                            alt="Shoes" />
                    </figure>

                </div>

                {/* card 3 */}
                <div className="card bg-stone-200 rounded-2xl  shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">Start your new website
                            with Elementor Page Builder</h2>
                        <p>Elementor is the only page builder you’ll need to create a high-converting professional WordPress website.

                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"> explore page builder</button>
                        </div>
                    </div>

                    <figure className='m-7'>
                        <img className='m-auto'
                            src={card3}
                            alt="Shoes" />
                    </figure>

                </div>

                {/* card 4 */}

                <div className="card bg-green-100 rounded-2xl  shadow-xl">

                    <div className="card-body">
                        <h2 className="card-title">Start your new website
                            with Elementor Page Builder</h2>
                        <p>Elementor is the only page builder you’ll need to create a high-converting professional WordPress website.

                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"> explore page builder</button>
                        </div>
                    </div>

                    <figure className='m-7'>
                        <img className='m-auto'
                            src={ss1}
                            alt="Shoes" />
                    </figure>

                </div>

            </div>

            <div className='w-1/2 flex flex-col gap-7'>
                <div className='card rounded-2xl bg-stone-200 '>
                    <div className="card-body">
                        <h2 className="card-title">Start your new website
                            with Elementor Page Builder</h2>
                        <p>Elementor is the only page builder you’ll need to create a high-converting professional WordPress website.

                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"> explore page builder</button>
                        </div>
                    </div>
                    <div>
                        <div className="container mx-auto p-10">
                            {/* Card Wrapper */}
                            <div className="grid  md:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className=" rounded-lg p-2">
                                    <img
                                        src={pic7}
                                        alt="Card 1"
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <h2 className="mt-4 text-lg text-start font-bold">Card Title 1</h2>
                                </div>

                                {/* Card 2 */}
                                <div className=" rounded-lg p-2">
                                    <img
                                        src={pic8}
                                        alt="Card 2"
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <h2 className="mt-4 text-lg text-start font-bold">Card Title 2</h2>
                                </div>

                                {/* Card 3 */}
                                <div className=" rounded-lg p-2">
                                    <img
                                        src={pic9}
                                        alt="Card 3"
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <h2 className="mt-4 text-lg text-start font-bold">Card Title 3</h2>
                                </div>

                                {/* Card 4 */}
                                <div className=" rounded-lg p-2">
                                    <img
                                        src={pic10}
                                        alt="Card 4"
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <h2 className="mt-4 text-lg text-start font-bold">Card Title 4</h2>
                                </div>

                                {/* Card 5 */}
                                <div className=" rounded-lg p-2">
                                    <img
                                        src={pic11}
                                        alt="Card 5"
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <h2 className="mt-4 text-lg text-start font-bold">Card Title 5</h2>
                                </div>

                                {/* Card 6 */}
                                <div className=" rounded-lg p-2">
                                    <img
                                        src={pic12}
                                        alt="Card 6"
                                        className="rounded-lg w-full h-48 object-cover"
                                    />
                                    <h2 className="mt-4 text-lg text-start font-bold">Card Title 6</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-stone-200 rounded-2xl  shadow-xl ">

                    <div className="card-body">
                        <h2 className="card-title">Start your new website
                            with Elementor Page Builder</h2>
                        <p>Elementor is the only page builder you’ll need to create a high-converting professional WordPress website.

                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary"> explore page builder</button>
                        </div>
                    </div>

                    <figure className='m-7 flex flex-col gap-6 '>
                        
                        <img className='m-auto'
                            src={ss2}
                            alt="Shoes" />
                        <img className='m-auto'
                            src={ss1}
                            alt="Shoes" />
                    </figure>

                </div>
            </div>
        </div>
    );
};

export default GridRow;