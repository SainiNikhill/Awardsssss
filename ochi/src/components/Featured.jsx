import React, { useState } from "react";
import c1img from "../assets/images/asset 2.png";
import c2img from "../assets/images/asset 4.png";
import c3img from "../assets/images/asset 6.png";
import c4img from "../assets/images/asset 5.png";
import c5img from "../assets/images/asset 3.png";
import c6img from "../assets/images/asset 7.png";
import { motion } from "framer-motion";

const Card = ({ title, image, hoveredCard, setHoveredCard }) => {
  return (
    <div
      onMouseEnter={() => setHoveredCard(title)}
      onMouseLeave={() => setHoveredCard(null)}
      className="cardcontainer relative w-1/2 h-[60vh] flex justify-center"
    >
      {/* Animated Text */}
      <h1 className="flex overflow-hidden text-[#CDEA68] top-1/2 -translate-y-1/2 absolute z-[9] text-8xl leading-none font-bold tracking-tighter font-['Neue_Montreal'] left-1/2 -translate-x-1/2">
        {title.split(" ").map((item, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={hoveredCard === title ? { y: "0%" } : { y: "100%" }}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
            className="inline-block"
          >
            {item}
          </motion.span>
        ))}
      </h1>

      {/* Image */}
      <div className="card w-full h-full rounded-xl overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

const Featured = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    { title: "VISE", image: c1img },
    { title: "NINE", image: c2img },
    { title: "WATCHERS", image: c3img },
    { title: "IMAGENE", image: c4img },
    { title: "BREEZY", image: c5img },
    { title: "ZETA", image: c6img },
  ];

  return (
    <div className="w-full py-15 bg-white text-black">
      <div className="w-full px-11 border-b-[1px] border-zinc-300 pb-20 ">
        <h1 className='p-10 text-5xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>

      {/* Card Rows */}
      <div className="p-20 flex flex-col gap-10 items-center">
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="cards flex gap-10 w-full justify-center"
          >
            {projects
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  image={project.image}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center text-white">
        <div className="relative bg-black flex items-center justify-between px-4 rounded-3xl w-60 h-12 font-['Neue_Montreal'] transition-all duration-300 backdrop-blur-md hover:bg-zinc-900 group">
          <h1 className="z-10">VIEW ALL PROJECTS</h1>
          <div className="relative flex items-center justify-center">
            {/* Dot with Arrow */}
            <div className="w-2 h-2 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:w-6 group-hover:h-6 flex items-center justify-center">
              <svg
                className="opacity-0 group-hover:opacity-100 w-4 h-4 transition-opacity duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
