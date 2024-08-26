"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import CardDemo from './project';  // Ensure this path is correct

const CardCarousel = ({
  cards = [], // Default to an empty array if cards are not provided
  className,
  containerClassName,
  speed = 500,
  direction = "left",
}: {
  cards?: { name: string; description: string; href?: string; imageSrc?: string }[];
  className?: string;
  containerClassName?: string;
  speed?: number; // Control the speed of the carousel
  direction?: "left" | "right"; // Control the direction of the carousel
}) => {
  const sliderRef = useRef<Slider>(null);

  // Dummy data
  const defaultCards = [
    {
      name: "Project Alpha",
      description: "A groundbreaking project that aims to revolutionize the industry.",
      href: "/project-alpha",
      imageSrc: "/image.jpg",
    },
    {
      name: "Project Beta",
      description: "An innovative solution that addresses common challenges in the field.",
      href: "/project-beta",
      imageSrc: "/image.jpg",
    },
    {
      name: "Project Gamma",
      description: "A cutting-edge project that explores new technologies and methods.",
      href: "/project-gamma",
      imageSrc: "/image.jpg",
    },
    {
      name: "Project Delta",
      description: "A project focused on enhancing user experience and performance.",
      href: "/project-delta",
      imageSrc: "/image.jpg",
    },
    {
      name: "Project Epsilon",
      description: "An advanced project integrating AI and machine learning for smarter solutions.",
      href: "/project-epsilon",
      imageSrc: "/image.jpg",
    },
    {
      name: "Project Zeta",
      description: "A creative initiative designed to push the boundaries of conventional approaches.",
      href: "/project-zeta",
      imageSrc: "/image.jpg",
    },
  ];

  const effectiveCards = cards.length > 0 ? cards : defaultCards;

  const settings = {
    infinite: true,
    speed: speed,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
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
    <div className="relative pb-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black bg-grid-black/[0.2] dark:bg-grid-white/[0.2]" />
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center my-6 text-gray-800 dark:text-gray-200 relative z-10 pt-5">Projects</h2>
      
      {/* Gradient and Blur Background */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparent to-black backdrop-blur-md opacity-50" />
      
      <Slider {...settings} ref={sliderRef} className="relative z-30">
        {effectiveCards.map((card, index) => (
          <div key={index} className="px-4">
            <CardDemo
              name={card.name}
              description={card.description}
              href={card.href}
              imageSrc={card.imageSrc}
              className={className}
              containerClassName={containerClassName}
            />
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

export default CardCarousel;
