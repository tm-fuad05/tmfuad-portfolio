"use client";

import { useRef, useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, LucideIcon } from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import SendMsg from "./SendMsg";
import ContactInfo from "./ContactInfo";

export interface SocialIcon {
  icon: LucideIcon;
  href: string;
}

export interface Status {
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
            <SendMsg
              form={form}
              handleSubmit={handleSubmit}
              loading={loading}
              status={status}
            />

            {/* ================= Contact Information Card ================= */}
            <ContactInfo icons={icons} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
