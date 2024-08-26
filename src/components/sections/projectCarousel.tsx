"use client";

import React from "react";
import CardCarousel from "../component/projectSection";

const sampleCards = [
  {
    name: "Project Alpha",
    description: "A groundbreaking project that aims to revolutionize the industry.",
    href: "/project-alpha",
    imageSrc: "/image.jpg", // Added imageSrc
  },
  {
    name: "Project Beta",
    description: "An innovative solution that addresses common challenges in the field.",
    href: "/project-beta",
    imageSrc: "/image.jpg", // Added imageSrc
  },
  {
    name: "Project Gamma",
    description: "A cutting-edge project that explores new technologies and methods.",
    href: "/project-gamma",
    imageSrc: "/image.jpg", // Added imageSrc
  },
  {
    name: "Project Delta",
    description: "A project focused on enhancing user experience and performance.",
    href: "/project-delta",
    imageSrc: "/image.jpg", // Added imageSrc
  },
  {
    name: "Project Epsilon",
    description: "An advanced project integrating AI and machine learning for smarter solutions.",
    href: "/project-epsilon",
    imageSrc: "/image.jpg", // Added imageSrc
  },
  {
    name: "Project Zeta",
    description: "A creative initiative designed to push the boundaries of conventional approaches.",
    href: "/project-zeta",
    imageSrc: "/image.jpg", // Added imageSrc
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto ">
      <CardCarousel
        cards={sampleCards}
        speed={500}  // Adjusted for smoother transition
        direction="left" // Optional based on carousel behavior
      />
    </div>
  );
};

export default Projects;

