export interface Certifications {
  img: string;
  title: string;
  platform: string;
  issueDate: string;
  credentialID: string;
  status: string;
  url: string;
  color: string;
}

export const certifications: Certifications[] = [
  {
    img: "/images/certificates/phcertificate.png",
    title: "Complete Web Development Bootcamp",
    platform: "Programming Hero",
    issueDate: "March 2025",
    credentialID: "WEB10-1326",
    status: "Verified",
    url: "https://drive.google.com/file/d/1s-mWpWBd0ye3GZDquGplWA9KUK_Vk07C/view?usp=drive_link",
    color: "from-blue-500 to-cyan-500",
  },
  {
    img: "/images/certificates/10minschoolcertificate.png",
    title: "MS Word Expert Certification",
    platform: "10 Minute School",
    issueDate: "October 2023",
    credentialID: "",
    status: "Verified",
    url: "https://drive.google.com/file/d/16fXLF7v-oYXDXBRsDz50arMJUgzkMIal/view?usp=drive_link",
    color: "from-purple-500 to-pink-500",
  },
];
