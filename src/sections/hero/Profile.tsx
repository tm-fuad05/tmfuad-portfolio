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
        <figure className="md:mr-5 w-80 h-90 md:w-70 md:h-76 lg:w-100 lg:h-112.5 relative group rotate-5 hover:rotate-0 transition-all duration-600 bg-linear-to-r from-secondary to-primary/10 rounded-[80px]! border-white border-b-5 shadow-primary shadow-lg">
          <div className="absolute bg-primary/90 px-4 py-2 z-1 -top-2 left-44 lg:left-52 opacity-0 group-hover:opacity-100 duration-300">
            <p className="font-semibold text-white!">Hello!</p>
          </div>
          <Image
            className=" pb-0 object-top  object-cover  rounded-[80px]!"
            src="/images/me.png"
            fill
            priority
            alt="Me"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-[80px]! bg-linear-to-t from-black/50 via-transparent to-transparent" />

          <RiTailwindCssFill className="text-[#06b6d4] absolute -top-8 -left-5 text-8xl lg:-top-12 lg:-left-7 lg:text-9xl" />
        </figure>
      </motion.div>
    </motion.div>
  );
}
