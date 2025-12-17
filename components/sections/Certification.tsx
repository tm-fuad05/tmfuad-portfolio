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
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
      id="certifications"
      className="section"
    >
      <SectionTitle
        title={"Certifications"}
        subtitle={
          "Industry-recognized certifications that validate my technical skills and continuous learning"
        }
        icon={
          <SlBadge className="text-white text-6xl p-3 rounded-2xl bg-linear-to-t from-secondary/90 to-primary" />
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-10 lg:px-16 mb-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-3 shadow-[0_0_8px_#7c3aed,0_0_10px_#7c3aed] rounded-lg hover:scale-103 transition-transform duration-300 relative group"
          >
            <figure className="relative">
              <div className="relative w-full h-60 md:h-72 rounded-lg">
                <Image
                  fill
                  src={cert.img}
                  alt={cert.title}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute right-2 top-2 px-2 py-1 rounded-full flex justify-center bg-green-500/95 gap-1 text-white text-xs font-semibold">
                <MdOutlineVerified size={15} />
                <p>{cert.status}</p>
              </div>
            </figure>

            <div className="flex flex-col gap-2 h-full">
              {/* Title & Platform */}
              <div className="flex flex-col gap-1 text-white">
                <h2 className="text-lg font-semibold">{cert.title}</h2>
                <h5 className="text-sm">
                  By <span className="font-semibold">{cert.platform}</span>
                </h5>
              </div>
              {/* Date & ID */}
              <div className="bg-[#162035] rounded-lg p-2 flex flex-col gap-3 w-full text-white grow">
                {/* Issue Date */}
                <div className="flex items-start">
                  <MdOutlineDateRange className="inline-block mr-2 text-lg" />
                  <div className="text-xs leading-relaxed">
                    <p className="text-paragraph">Issue Date</p>
                    <h6 className="font-medium">{cert.issueDate}</h6>
                  </div>
                </div>
                {/* Credential ID */}
                {cert.credentialID && (
                  <div className="flex items-start">
                    <GrNotes className="inline-block mr-2 text-md" />
                    <div className="text-xs leading-relaxed">
                      <p className="text-paragraph">Credential ID</p>
                      <h6 className="font-medium">{cert.credentialID}</h6>
                    </div>
                  </div>
                )}
              </div>
              {/* View Credentials */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-to-l from-primary to-secondary backdrop-blur-2xl rounded-lg hover:scale-[102%] w-full py-3 flex gap-2 items-center justify-center text-sm font-semibold transition-all duration-200 cursor-pointer text-white"
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
