import React from 'react'

const About = () => {
  return (
    <div className="w-full   py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      {/**  part 1  */}
      <h1 className='font-["Neue_Montreal"] text-[3vw] p-20 leading-[4vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      {/**part2 */}
      <div className="w-full  text-[1vw] border-t-[1px] border-[#7d9c0e] flex  leading-[2vw] justify-evenly font-['Neue_Montreal']">
        <div className='w-1/2 p-8  '>
          <h1 className="">What you can expect: </h1>
        </div>
        <div className='w-1/4 p-8  font-["Neue_Montreal"]'>
          <p className=" leading-[2vw]">
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </p>
          <p className="mt-6  leading-[2vw]">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="socails-div flex flex-col mr-2 gap-2 p-8 mt-30">
          <h1 className="mb-2">S:</h1>
          <div className='flex flex-col '>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>

      {/**  part 3  */}
      <div className="w-full border-t-[1px] pt-10 mt-20 border-[#7d9c0e] flex ">
        <div className='w-1/2 font-["Neue_Montreal"] m-12'>
          <h1 className="text-3xl m-3">Our approach:</h1>
          <button className=" flex gap-3  uppercase items-center px-10 py-6 mt-10 rounded-full bg-zinc-900 text-white">
            Read More <div className="w-3 h-3  bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="img  h-[60vh] mt-10 rounded-2xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About