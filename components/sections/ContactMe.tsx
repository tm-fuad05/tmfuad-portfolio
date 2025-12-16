"use client";
import { useRef, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "framer-motion";
// React Icons
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

const ContactMe = () => {
  type Icons = {
    icon: LucideIcon;
    href: string;
  };
  const icons: Icons[] = [
    { icon: Github, href: "https://github.com/tm-fuad05" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tmfuad05/",
    },
    { icon: Twitter, href: "https://x.com/tm_fuad05" },
  ];

  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  type Status = {
    show: boolean;
    success: boolean;
    message: string;
  };

  const [status, setStatus] = useState<Status>({
    show: false,
    success: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_fwh8eve", // Replace with your EmailJS service ID
        "template_60bjc2k", // Replace with your EmailJS template ID
        form.current,
        "vuYSD7atTVsOA0PuN" // Replace with your EmailJS public key
      );

      if (result.text === "OK") {
        setStatus({
          show: true,
          success: true,
          message: "Message sent successfully!",
        });
        form.current?.reset();
      }
    } catch (error) {
      setStatus({
        show: true,
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(
        () => setStatus({ show: false, success: false, message: "" }),
        5000
      );
    }
  };

  return (
    <div
      //   initial={{ opacity: 0, y: 100 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: false }}
      //   transition={{ duration: 1, ease: "easeOut" }}
      id="contact-me"
      className="w-full mx-auto px-6 md:px-10 lg:px-16"
    >
      <SectionTitle
        title={"get in touch"}
        subtitle={"Get in Touch and Let's Create Something Amazing"}
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="px-6 bg-linear-to-r from-primary/10 to-primary/10 p-8 rounded-3xl backdrop-blur-xl border border-white/20"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-primary text-slate-200 rounded-lg  outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-200">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full p-2 border border-primary text-slate-200 rounded-lg  outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-200">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full p-2 border border-primary text-slate-200 rounded-lg  outline-none"
                required
              />
            </div>

            {/* Status Message */}
            {status.show && (
              <div
                className={`p-3 rounded-lg ${
                  status.success
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-secondary to-primary text-white py-2 px-4 rounded-lg hover:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <MdSend className="w-4 h-4" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" bg-linear-to-r from-primary/10 to-primary/10 p-8 rounded-3xl backdrop-blur-xl border border-white/20"
        >
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-sm animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-sm animate-pulse" />

            <div className="relative space-y-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-linear-to-r from-primary to-white bg-clip-text text-transparent">
                  Contact Information
                </h1>
              </div>

              {/* Contact details grid */}
              <div className="grid gap-6">
                <div className="group flex items-center transform hover:scale-105 transition-all">
                  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 w-full backdrop-blur-sm ">
                    <Mail className="w-6 h-6 text-primary" />
                    <a
                      href="mailto:tm.fuad05@gmail.com"
                      className="text-slate-100 group-hover:text-purple-400 transition-colors"
                    >
                      tm.fuad05@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center transform hover:scale-105 transition-all">
                  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 w-full backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-primary" />
                    <a
                      href="tel:+8801622-737988"
                      className="text-slate-100 group-hover:text-purple-400 transition-colors"
                    >
                      +880 1622-737988
                    </a>
                  </div>
                </div>

                <div className="group flex items-center transform hover:scale-105 transition-all">
                  <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 w-full backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-slate-100">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8">
                <h2 className="text-center text-slate-400 mb-4 text-sm font-medium">
                  Connect with me
                </h2>
                <div className="flex justify-center gap-4">
                  {icons.map((i, index) => (
                    <a
                      key={index}
                      href={i.href}
                      target="_blank"
                      className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all transform hover:scale-110"
                    >
                      <i.icon size={22} className="text-primary" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer message */}
              <div className="text-center mt-8">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Feel free to reach out! I'm always open to discussing new
                  projects, creative ideas, or opportunities to be part of your
                  visions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
