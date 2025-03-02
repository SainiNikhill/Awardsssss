import React, { useEffect, useState } from "react";

const Play = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div data-scroll data-scroll-speed="-.1"className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Eye 1 */}
          <div className="w-[17vw] h-[17vw] bg-zinc-200 flex items-center justify-center rounded-full">
            {/* Black Circle (Iris) */}
            <div className="w-2/3 h-2/3 bg-zinc-900 relative rounded-full flex items-center justify-center">
              {/* Rotating Line */}
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute w-full h-1  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {/* Pupil */}
                <div className="absolute right-0 w-6 h-6 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="w-[17vw] h-[17vw] bg-zinc-200 flex items-center justify-center rounded-full">
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

export default Play;
