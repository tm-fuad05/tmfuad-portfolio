"use client";

import Image from "next/image";

const CustomLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#020617] flex items-center justify-center select-none">
      {/* Absolute Pure Image Only */}
      <div className="relative w-64 h-40 md:w-96 md:h-60 lg:w-[500px] lg:h-[300px]">
        <Image
          src="/images/logo2.png"
          alt="Loading"
          fill
          priority
          className="object-contain animate-[pulse_2s_ease-in-out_infinite] filter drop-shadow-[0_15px_35px_rgba(37,99,235,0.45)] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        />
      </div>
    </div>
  );
};

export default CustomLoader;
