import React from 'react';
import { Carousel } from 'flowbite-react';

const CarouselPage = () => {
  return (
    <div className="bg-gray-900 text-white p-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Create a <span className="text-blue-500">complete website</span> without the hassle
        </h1>
        <p className="text-lg mt-4">
          Our theme provides the perfect foundation, allowing you to focus on content and creativity.
        </p>
      </div>

      <Carousel slideInterval={5000}>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Slide 1"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">Slide 1 Title</h3>
          <p className="mt-2 text-gray-400">Description for the first slide.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Slide 2"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">Slide 2 Title</h3>
          <p className="mt-2 text-gray-400">Description for the second slide.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            alt="Slide 3"
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="text-xl font-semibold mt-4">Slide 3 Title</h3>
          <p className="mt-2 text-gray-400">Description for the third slide.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
