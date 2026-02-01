"use client";
import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";
import { certifications } from "@/data/certificationData";
// React icons
import { SlBadge } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";

const Certification = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="certifications"
      className="section"
    >
      <SectionTitle
        title={"Certifications"}
        subtitle={
          "Industry-recognized certifications that validate my technical skills and continuous learning"
        }
        icon={<SlBadge className="text-white text-4xl lg:text-5xl" />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 lg:px-16 mb-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-2 border-white/20 rounded-3xl transition-transform duration-300 relative group group"
          >
            <figure className="relative group">
              <div className="relative w-full h-60 md:h-72 rounded-t-2xl overflow-hidden">
                <Image
                  fill
                  src={cert.img}
                  alt={cert.title}
                  className="rounded-t-lg group-hover:scale-107 duration-300"
                />
              </div>
              <div className="absolute right-2 top-2 px-2 py-1 rounded-full flex justify-center bg-green-500/95 gap-1 text-white text-xs font-semibold group-hover:animate-pulse">
                <MdOutlineVerified size={15} />
                <p>{cert.status}</p>
              </div>
            </figure>
            {/* Card Body */}
            <div className="flex flex-col gap-3 h-full p-3">
              {/* Title & Platform */}
              <div className="flex flex-col gap-1 text-white">
                <h2 className="text-lg font-semibold">{cert.title}</h2>
                <h5 className="text-sm">
                  By{" "}
                  <span className="font-semibold text-purple-400">
                    {cert.platform}
                  </span>
                </h5>
              </div>
              {/* Date & ID */}
              <div className="flex gap-3 w-full text-white grow">
                {/* Issue Date */}
                <div className="flex items-center bg-white/10 backdrop-blur-lg p-3 rounded-lg w-1/2">
                  <MdOutlineDateRange className="inline-block mr-2 text-lg text-purple-400" />
                  <div className="leading-relaxed">
                    <p className="text-paragraph text-xs ">Issue Date</p>
                    <h6 className="font-medium text-sm">{cert.issueDate}</h6>
                  </div>
                </div>
                {/* Credential ID */}
                {cert.credentialID && (
                  <div className="flex items-center bg-white/10 backdrop-blur-lg p-3 rounded-lg w-1/2">
                    <GrNotes className="inline-block mr-2 text-md text-green-400" />
                    <div className="leading-relaxed">
                      <p className="text-paragraph text-xs ">Credential ID</p>
                      <h6 className="font-medium text-sm">
                        {cert.credentialID}
                      </h6>
                    </div>
                  </div>
                )}
              </div>
              {/* View Credentials */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-to-br from-primary to-secondary shadow-lg shadow-blue-500/20 text-white hover:from-secondary hover:to-primary transition duration-300 rounded-lg px-4 py-2 font-semibold cursor-pointer flex items-center justify-center gap-2"
              >
                View Credential{" "}
                <HiMiniArrowTopRightOnSquare className="text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certification;
