"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { CardDemo } from './project';  // Ensure this path is correct

const carouselItems = [
  { title: 'Project 1', description: 'Description for Project 1' },
  { title: 'Project 2', description: 'Description for Project 2' },
  { title: 'Project 3', description: 'Description for Project 3' },
  { title: 'Project 4', description: 'Description for Project 4' },
  { title: 'Project 5', description: 'Description for Project 5' },
];

const Carousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,  // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,  // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative pb-2">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2]" />
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center my-6 text-gray-800 dark:text-gray-200 relative z-10">Projects</h2>
      
      {/* Gradient and Blur Background */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black backdrop-blur-md opacity-50" />
      
      <Slider {...settings} ref={sliderRef} className="relative z-30">
        {carouselItems.map((item, index) => (
          <div key={index} className="px-4">
            <CardDemo name={item.title} description={item.description} />
          </div>
        ))}
      </Slider>
      
      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 z-40"
        onClick={goToPrev}
      >
        &#10094;
      </button>
      
      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 z-40"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
