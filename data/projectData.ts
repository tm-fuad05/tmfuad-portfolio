export interface ProjectCard {
  id: number;
  image: string;
  title: string;
  description: string;
  processing?: boolean;
  tags: string[];
  date: string;
  live: string;
  githubClient: string;
  githubServer?: string;
}

export const projectCards: ProjectCard[] = [
  // {
  //   id: 1,
  //   image: "/images/vintax.png",
  //   title: "Vintax",
  //   description:
  //     "Vintax is a high-end, bilingual e-commerce destination that redefines modern fashion retail through a futuristic Blue-Indigo aesthetic and a seamless, high-performance interface. Built with Next.js 15, the platform features an immersive Glassmorphic UI, mega-typography, and sophisticated role-based access for Admins, Designers, and Members. Integrating secure Stripe payments, real-time data synchronization, and a community-driven fashion forum, Vintax provides a fluid, no-refresh shopping experience that perfectly blends luxury style with cutting-edge digital innovation.",
  //   processing: true,
  //   tags: ["Next.Js", "Postgres", "Prisma", "Zustand", "BetterAuth"],
  //   date: "12-APR-2026",
  //   live: "https://vintax.vercel.app/",
  //   githubClient: "https://github.com/tm-fuad05/vintax",
  // },
  {
    id: 2,
    image: "/images/fitrack.png",
    title: "FitRack",
    description:
      " The Fitness Tracker Web Application is a MERN stack platform designed for fitness enthusiasts, trainers, and administrators. It features user authentication, role-based dashboards, trainer booking, Stripe payments, and a dynamic forum. Users can explore trainers, book sessions, track fitness goals, and engage in discussions. Trainers manage available slots, while admins oversee trainer applications, payments, and analytics. The platform includes a testimonial system, newsletter subscription, and a structured membership system with different tiers. With a modern UI, real-time updates, and secure authentication, this app delivers a seamless fitness management experience.",
    tags: ["React", "Express", "MongoDB", "Firebase"],
    date: "06-DEC-2024",
    live: "https://fitrackbd.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/fitrack-client",
    githubServer: "https://github.com/tm-fuad05/fitrack-server",
  },
  {
    id: 3,
    image: "/images/pastportals.png",
    title: "PastPortals",
    description:
      "This web application allows users to track, manage, and interact with historical artifacts. Users can log in, add artifacts, and like artifacts while exploring detailed information about each item. The platform features dynamic authentication, private routes, and a user-friendly interface with smooth navigation, notifications, and loading states. The artifact management system supports CRUD operations, and users can see their contributions and liked artifacts.",
    tags: ["React", "Express", "MongoDB", "Firebase"],
    date: "09-NOV-2024",
    live: "https://pastportalsbd.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/past-portals-client",
    githubServer: "https://github.com/tm-fuad05/past-portals-server",
  },
  {
    id: 4,
    image: "/images/logiclab-dark.png",
    title: "LogicLab.",
    description:
      "LogicLab is a comprehensive React & JavaScript logic showcase engineered to demonstrate essential web development patterns, custom hook architectures, and frontend algorithms. Built with React 19 and TypeScript, it serves as an interactive playground highlighting real-world UI logic—including dynamic data filtering, asynchronous event throttling/debouncing, DOM visibility observers, form validation handlers, and state persistence mechanisms.",
    tags: ["React", "Tailwind CSS"],
    date: "27-AUG-2026",
    live: "https://mylogiclab.vercel.app",
    githubClient: "https://github.com/tm-fuad05/LogicLab",
  },
  {
    id: 5,
    image: "/images/devtech.png",
    title: "DevTech Ltd.",
    description:
      "A specialized digital agency driven by a collaborative team of developers and UI/UX designers. We design and engineer end-to-end web applications, dynamic digital products, and high-converting user interfaces, helping businesses transform complex ideas into impactful online experiences.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn", "GSAP"],
    date: "17-FEB-2026",
    live: "https://www.devtechltd.xyz/",
    githubClient: "https://github.com/tm-fuad05/devtech_agency_client",
  },
  {
    id: 6,
    image: "/images/bingo.png",
    title: "Lingo Bingo",
    description:
      "Lingo Bingo is an engaging vocabulary-building web application built with React and Tailwind CSS. The app focuses on providing learners with a smooth, intuitive, and visually appealing experience while maintaining robust user authentication and state management.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    date: "20-AUG-2024",
    live: "https://lingo-bingo-seven.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/Lingo-Bingo",
  },
  {
    id: 7,
    image: "/images/visorix.png",
    title: "Visorix",
    description:
      "The Visa Navigator is a comprehensive web application designed to simplify the process of checking visa requirements, applying for visas, and tracking visa applications. It offers a user-friendly interface with features such as secure authentication (email/password and Google login), protected routes, and dynamic pages. Users can manage visa details, apply for visas, and track their applications through a personalized dashboard. The app supports CRUD operations for adding and updating visa information, with real-time notifications for successful actions. ",
    tags: ["React", "Express", "MongoDB", "Firebase"],
    date: "29-OCT-2024",
    live: "https://visorix.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/Visa-Navigator-client",
    githubServer: "https://github.com/tm-fuad05/Visa-Navigator-Server",
  },
];
