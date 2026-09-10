import { motion } from "framer-motion";
import Image from "next/image";

import { RiTailwindCssFill } from "react-icons/ri";

export default function Profile() {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <figure className="md:mr-5 w-75 h-85 md:w-70 md:h-76 lg:w-100 lg:h-112.5 max-w-[calc(100vw-3rem)] relative group rotate-5 hover:rotate-0 transition-all duration-600 bg-linear-to-r from-secondary to-primary/10 rounded-[80px]! sm:rounded-[80px]! border-white border-b-5 shadow-primary shadow-lg">
          <div className="absolute bg-primary/90 px-3.5 py-1.5 sm:px-4 sm:py-2 z-1 -top-2 right-4 sm:right-6 md:left-44 lg:left-52 md:right-auto opacity-0 group-hover:opacity-100 duration-300 pointer-events-none">
            <p className="font-semibold text-white! text-xs sm:text-sm">
              Hello!
            </p>
          </div>
          <Image
            className=" pb-0 object-top  object-cover  rounded-[80px]! sm:rounded-[80px]!"
            src="/images/me.png"
            fill
            priority
            alt="Me"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-[80px]! sm:rounded-[80px]! bg-linear-to-t from-black/50 via-transparent to-transparent" />

          <RiTailwindCssFill className="text-[#06b6d4] absolute -top-6 -left-3 text-7xl sm:-top-8 sm:-left-5 sm:text-8xl lg:-top-12 lg:-left-7 lg:text-9xl" />
        </figure>
      </motion.div>
    </motion.div>
  );
}
