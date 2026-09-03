"use client";

import { useRef, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import { MdSend } from "react-icons/md";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  LucideIcon,
} from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import HoverLight from "@/components/ui/hover-spotlight";

interface SocialIcon {
  icon: LucideIcon;
  href: string;
}

interface Status {
  show: boolean;
  success: boolean;
  message: string;
}

const ContactMe = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>({
    show: false,
    success: false,
    message: "",
  });

  const icons: SocialIcon[] = [
    { icon: Github, href: "https://github.com/tm-rounded05" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tmfuad05/" },
    { icon: Twitter, href: "https://x.com/tm_rounded05" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (form.current) {
        const result: EmailJSResponseStatus = await emailjs.sendForm(
          "service_fwh8eve",
          "template_60bjc2k",
          form.current,
          "vuYSD7atTVsOA0PuN",
        );
        if (result.text === "OK") {
          setStatus({
            show: true,
            success: true,
            message: "Message sent successfully!",
          });
          form.current?.reset();
        }
      }
    } catch {
      setStatus({
        show: true,
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(
        () => setStatus({ show: false, success: false, message: "" }),
        3000,
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-0">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title={"get in touch"}
          subtitle={"Get in Touch and Let's Create Something Amazing"}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full mt-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* ================= Contact Form Card ================= */}
            <HoverLight
              size={320}
              color="var(--primary)"
              borderOpacity={100}
              innerOpacity={0}
              border={1.5}
              className="h-full "
            >
              <div className="relative h-full p-6 sm:p-8 md:p-10  bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden">
                {/* Ambient Glow in background */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20  blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Fill out the form below and I’ll get back to you shortly.
                    </p>
                  </div>

                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Tanvir Mahmud Fuad"
                        className="w-full px-4 py-3 bg-slate-900/60 border border-white/10  text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="tm.fua05@example.com"
                        className="w-full px-4 py-3 bg-slate-900/60 border border-white/10  text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 text-slate-300">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Project Inquiry / Hiring"
                        className="w-full px-4 py-3 bg-slate-900/60 border border-white/10  text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold mb-2 text-slate-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project or idea..."
                        className="w-full px-4 py-3 bg-slate-900/60 border border-white/10  text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-white/20 resize-none"
                        required
                      />
                    </div>

                    {/* Status Toast */}
                    {status.show && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3.5  text-sm font-medium border ${
                          status.success
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : "bg-rose-500/10 border-rose-500/30 text-rose-400"
                        }`}
                      >
                        {status.message}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="relative group w-full overflow-hidden  p-[1px] font-medium transition-all duration-300 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-500 to-sky-400 transition-all duration-500 group-hover:opacity-90" />
                      <div className="relative px-6 py-3.5 bg-slate-950/60 backdrop-blur-md -[11px] flex items-center justify-center gap-2 text-white font-semibold group-hover:bg-transparent transition-all duration-300">
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent  animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <MdSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </HoverLight>

            {/* ================= Contact Information Card ================= */}
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
                      Prefer direct communication? Reach out via email, phone,
                      or find me across social media.
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
                      {icons.map((item, index) => (
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
                      I'm open to discussing new web development projects,
                      architectural ideas, or potential collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </HoverLight>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
