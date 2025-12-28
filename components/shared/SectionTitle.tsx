"use client";
import { ReactNode } from "react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
};

const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <div className="relative pb-5 mb-8 flex flex-col items-center">
      <div className="absolute inset-0 w-7/12 rounded-full mx-auto blur-[60px] bg-primary/15"></div>
      {icon && <div className="mb-4">{icon}</div>}
      <h2 className="text-4xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-linear-to-r from-white/90 to-primary text-center font-bold text-title capitalize mb-3 -scale-z-200">
        {title}
      </h2>

      <p className="text-slate-400 text-sm md:text-md mb-4 text-center px-6 md:px-10 lg:px-16">
        {subtitle}
      </p>
      <div className="flex items-center gap-2">
        <div className="h-0.5 bg-linear-to-r from-secondary to-primary w-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
