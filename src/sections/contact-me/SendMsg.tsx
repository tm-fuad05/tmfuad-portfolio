import ButtonPrimary from "@/components/shared/ButtonPrimary";
import HoverLight from "@/components/ui/hover-spotlight";
import { MdSend } from "react-icons/md";
import { Status } from "./ContactMe";
import { motion } from "framer-motion";
import { Ref } from "react";

export default function SendMsg({
  form,
  handleSubmit,
  status,
  loading,
}: {
  form: Ref<HTMLFormElement | null>;
  handleSubmit: (e: React.FormEvent) => void;
  status: Status;
  loading: boolean;
}) {
  return (
    <HoverLight
      size={320}
      color="var(--primary)"
      borderOpacity={100}
      innerOpacity={0}
      border={1.5}
      className="h-full"
    >
      <div className="relative h-full p-6 sm:p-8 md:p-10  bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Ambient Glow in background */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20  blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Send a Message
            </h3>
            <p className="text-sm text-paragraph mt-1">
              Fill out the form below and I’ll get back to you shortly.
            </p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
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
                placeholder="tm.fuad05@example.com"
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
            <ButtonPrimary disabled={loading} w="full" sw="full">
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full! animate-spin" />
              ) : (
                <>
                  <span>Send Message</span>
                  <MdSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </HoverLight>
  );
}
