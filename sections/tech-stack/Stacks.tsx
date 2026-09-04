import Image from "next/image";
import { Logo } from "./TechStack";

export default function Stacks({
  activeTab,
  activeLogo,
  logos,
  handleLogoClick,
}: {
  activeTab: string;
  activeLogo: string | null;
  logos: Logo[];
  handleLogoClick: (name: string) => void;
}) {
  const filteredLogos =
    activeTab === "All"
      ? logos
      : logos.filter((logo) =>
          Array.isArray(logo.category)
            ? logo.category.includes(activeTab)
            : logo.category === activeTab,
        );

  return (
    <div className="py-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
      {filteredLogos.map((logo) => (
        <div
          key={`${activeTab}-${logo.name}`}
          className={`relative group flex flex-col items-center justify-center w-35 md:w-35 py-6  border border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-500 ease-out hover:bg-primary/5 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)] overflow-hidden animate-in slide-in-from-bottom-5 fade-in ${
            activeLogo === logo.name &&
            "bg-primary/5 -translate-y-2 shadow-[0_20px_50px_rgba(var(--primary-rgb),0.2)]"
          }`}
          onClick={() => handleLogoClick(logo.name)}
        >
          {/* Background Glow on Hover */}
          <div
            className={`absolute -inset-px bg-linear-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500  ${activeLogo === logo.name && "opacity-100"}`}
          />

          {/* Logo Container */}
          <figure className="relative w-12 h-12 md:w-10 md:h-10 z-10 pointer-events-none">
            <Image
              fill
              className="object-contain filter group-hover:scale-110 transition-all duration-500 ease-in-out"
              src={logo.logo}
              alt={logo.name}
            />
          </figure>

          {/* Text Style */}
          <p className="z-10 mt-4 text-center text-xs md:text-sm font-semibold tracking-wide text-slate-400 group-hover:text-white transition-colors duration-300 pointer-events-none">
            {logo.name.toUpperCase()}
          </p>

          {/* Bottom Accent Line */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary  group-hover:w-full transition-all duration-500 ${activeLogo === logo.name && "w-full"}`}
          />
        </div>
      ))}
    </div>
  );
}
