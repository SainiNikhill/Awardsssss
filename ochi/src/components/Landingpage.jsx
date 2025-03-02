import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import myImage from "../assets/images/content-image01.jpg";
import { motion } from 'framer-motion';



const Landingpage = () => {
  
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen  pt-1 text-black"
    >
      <div className="  textstructure mt-40 mb-40 px-8">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex  overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "12vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="h-[5.7vw] relative  bg-red-600 rounded-lg "
                  >
                    <img
                      src={myImage}
                      alt=""
                      className=" w-full min-w-0 h-full object-cover rounded-md"
                    />
                  </motion.div>
                )}
                <h1 className='pt-[1vw] -mb=[1vw] uppercase text-[7vw] tracking-tighter leading-[.8] font-["Founders_Grotesk"] font-bold h-full'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="  border-t-[2px]    border-zinc-700  w-full flex justify-between items-center  pb-6 pt-2 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-lg  tracking-tight leading-none">{item}</p>
        ))}
        <div className="start text-lg flex items-center gap-5 ">
          <button className="rounded-full  flex items-center gap-5 border-[1px]  border-zinc-700 hover:bg-black hover:text-white px-4 py-2  text-md ">
            START PROJECT
          </button>
          <div className=" border-[1px] rounded-full px-3 py-3 rotate-45  hover:bg-black hover:text-white">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage
