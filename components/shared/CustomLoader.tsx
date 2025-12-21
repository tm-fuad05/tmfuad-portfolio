"use client";

import Image from "next/image";

const CustomLoader = () => {
  return (
    <div className="relative w-15 h-15 md:w-20 md:h-20 lg:w-25 lg:h-25 flex justify-center items-center">
      <div className="w-full h-full border-4 border-main border-dashed rounded-full animate-spin" />
      <div className="absolute">
        <div className="relative w-8 h-5 md:w-10 md:h-8 lg:w-12 lg:h-10">
          <Image
            src="/images/logo2.png"
            alt="Loading"
            fill
            className="animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomLoader;
