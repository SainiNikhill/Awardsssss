import React, { useState, useEffect } from "react";

const Hello = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prev) => prev + 1); // Rotating effect for eyes
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  ">
      <div
      data-scroll
      data-scroll-speed="-.1"
       
        className="bg-[#cdea68]  h-screen relative w-full flex flex-col items-center"
      >
        <div
          className="text-[12vw] absolute flex flex-col items-center uppercase leading-[.9] tracking-tight font-bold text-zinc-700 "
          style={{ fontFamily: "Neue Montreal" }}
        >
          <h1 className="mt-20">Ready</h1>
          <h1>to start</h1>
          <h1>the project ?</h1>
        </div>

        <div className="mt-20">
          <button
            className="rounded-full  bg-zinc-800 flex items-center gap-5 border-[1px] mt-130  tracking-tight border-zinc-700 hover:bg-black hover:border-white px-4 py-2 text-xl font-semibold"
            style={{ fontFamily: "Neue Montreal" }}
          >
            START PROJECT
          </button>
        </div>

        <div
          data-scroll
          data-scroll-speed="-.1"
          className="absolute flex gap-10 top-[35vh] left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Eye 1 */}
          <div className="w-[8vw] h-[8vw] bg-zinc-200 flex items-center justify-center rounded-full">
            {/* Black Circle (Iris) */}
            <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full flex items-center justify-center">
              {/* Rotating Line */}
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute w-full h-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Pupil */}
                <div className="absolute right-0 w-6 h-6 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="w-[8vw] h-[8vw] bg-zinc-200 flex items-center justify-center rounded-full">
            {/* Black Circle (Iris) */}
            <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full flex items-center justify-center">
              {/* Rotating Line */}
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute w-full h-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Pupil */}
                <div className="absolute right-0 w-6 h-6 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
