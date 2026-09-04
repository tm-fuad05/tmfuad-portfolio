import HoverLight from "@/components/ui/hover-spotlight";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialIcon } from "./ContactMe";

export default function ContactInfo({ icons }: { icons: SocialIcon[] }) {
  return (
    <HoverLight
      size={320}
      color="#38bdf8"
      borderOpacity={90}
      innerOpacity={0}
      border={1.5}
      className="h-full "
    >
      <div className="relative h-full p-6 sm:p-8 md:p-10  bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-sky-500/15  blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-500/10  blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
          {/* Header */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Contact Information
            </h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              Prefer direct communication? Reach out via email, phone, or find
              me across social media.
            </p>
          </div>

          {/* Info List */}
          <div className="space-y-4 my-auto">
            {/* Email */}
            <div className="group relative flex items-center gap-4 p-4  bg-slate-900/50 border border-white/5 hover:border-primary/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="p-3.5  bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:tm.fuad05@gmail.com"
                  className="text-sm font-medium text-slate-200 group-hover:text-primary transition-colors"
                >
                  tm.fuad05@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="group relative flex items-center gap-4 p-4  bg-slate-900/50 border border-white/5 hover:border-primary/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="p-3.5  bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Phone
                </span>
                <a
                  href="tel:+8801622-737988"
                  className="text-sm font-medium text-slate-200 group-hover:text-primary transition-colors"
                >
                  +880 1622-737988
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="group relative flex items-center gap-4 p-4  bg-slate-900/50 border border-white/5 hover:border-primary/40 hover:bg-slate-900/80 transition-all duration-300">
              <div className="p-3.5  bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Location
                </span>
                <span className="text-sm font-medium text-slate-200">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Social Links & Footer */}
          <div className="pt-4 border-t border-white/10">
            <span className="block text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Connect With Me
            </span>
            <div className="flex justify-center gap-3">
              {icons?.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-slate-900/60 border border-white/10  text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>

            <p className="text-xs text-center text-slate-500 leading-relaxed mt-6">
              I'm open to discussing new web development projects, architectural
              ideas, or potential collaborations.
            </p>
          </div>
        </div>
      </div>
    </HoverLight>
  );
}
