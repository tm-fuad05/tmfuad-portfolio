import { motion } from "framer-motion";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";

export default function Picture({
  isImgActive,
  handleImgClick,
}: {
  isImgActive: boolean;
  handleImgClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="lg:col-span-4 flex flex-col h-full transform-gpu"
    >
      {/* Interactive Image Frame with Responsive Aspect Ratio & Offset Border */}
      <div
        onClick={handleImgClick}
        className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full group/img pr-2 pb-2 sm:pr-3.5 sm:pb-3.5 cursor-pointer select-none"
      >
        {/* Offset Decorative Border Frame (Closer on Small Devices to Prevent Margin Overflow) */}
        <div
          className={`absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3.5 sm:translate-y-3.5  border-2 shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300 ease-out pointer-events-none z-0 will-change-transform ${
            isImgActive
              ? "translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1 border-primary"
              : "border-primary/60 group-hover/img:translate-x-0.5 group-hover/img:translate-y-0.5 sm:group-hover/img:translate-x-1 sm:group-hover/img:translate-y-1 group-hover/img:border-primary"
          }`}
        />

        {/* Main Image Container */}
        <div className="relative w-full h-full  overflow-hidden z-10 border border-white/10 shadow-2xl">
          {/* Profile Image */}
          <Image
            src="/images/about_me.webp"
            alt="Tanvir Mahmud Fuad"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
            className={`object-cover object-top transition-transform duration-500 will-change-transform ${
              isImgActive ? "scale-105" : "group-hover/img:scale-105"
            }`}
            priority
          />

          {/* Bottom Black Gradient Overlay containing Dev Quote */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent pt-12 sm:pt-16 pb-4 sm:pb-5 px-4 sm:px-5 flex items-center gap-2.5 sm:gap-3">
            <div className="w-1 self-stretch bg-primary  shrink-0 shadow-[0_0_10px_#3b82f6]" />
            <BiSolidQuoteLeft className="text-lg sm:text-2xl text-primary shrink-0" />
            <p className="text-slate-200! italic font-sans text-[13px] sm:text-[15px] leading-relaxed drop-shadow">
              "You’re never behind — You only pick up from where you paused."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
