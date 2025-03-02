import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"className="w-full py-20  rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text  border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 60}} // Increased duration for slower speed
          className="flex gap-20"
        >
          {/* Duplicated text for smooth scrolling */}
          {[...Array(6)].map((_, index) => (
            <h1
              key={index}
              className="text-[24vw] leading-none font-['Neue_Montreal'] font-bold uppercase"
            >
              we are ochi
            </h1> 
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
