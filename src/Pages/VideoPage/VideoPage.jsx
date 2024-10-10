import React from 'react';

const VideoPage = () => {
    return (
        <div className="m-auto">
            <div className="my-9">
                <div className='mb-32'>
                    <p className="text-center text-6xl p-7">
                        Premium marketing landing page <br /> Elementor WordPress Theme
                    </p>
                    <p className="text-center p-5">
                        LandPress has the tools and resources you can rely on to build high-quality
                        <br />
                        websites faster than ever before.
                    </p>
                </div>

                {/* Parent container for the video */}
                <div className="relative w-screen  h-[300px] flex items-center justify-center">
                    {/* The div that will be behind the video */}
                    <div className=" relative  w-[700px] h-[400px] bg-purple-700 rounded-2xl">
                        <div className='flex flex-col justify-center items-center absolute bottom-12 left-52'>
                            <button className=' border bg-white rounded-full px-5 py-2' >button</button>
                            <p className='text-center text-black'>Lifetime license, free updates & 6 months of <br /> free support with every purchase</p>
                        </div>

                    </div>

                    {/* Video container */}
                    <div className="z-10 p-7 m-auto -top-32 absolute">
                        <video className="m-auto rounded-2xl" width="600" height="700" controls>
                            <source src="your-video-url-here.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default VideoPage;