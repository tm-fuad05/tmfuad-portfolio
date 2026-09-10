export interface ProjectCard {
  id: number;
  image: string[];
  title: string;
  description: string;
  keyHighlights?: string[];
  problemItSolves?: string;
  howIdeaStarted?: string;
  processing?: boolean;
  tags: string[];
  date: string;
  live: string;
  githubClient: string;
  githubServer?: string;
}

export const projectCards: ProjectCard[] = [
  {
    id: 2,
    image: [
      "/images/fitrack/1.png",
      "/images/fitrack/2.png",
      "/images/fitrack/3.png",
      "/images/fitrack/4.png",
    ],
    title: "FitRack",
    description:
      "The Fitness Tracker Web Application is a MERN stack platform designed for fitness enthusiasts, trainers, and administrators. It features user authentication, role-based dashboards, trainer booking, Stripe payments, and a dynamic forum.",
    keyHighlights: [
      "Role-based dashboard for Users, Trainers & Admins.",
      "Stripe payment integration for trainer slot booking.",
      "Real-time fitness goal tracking & dynamic forum discussions.",
      "Structured membership system with multiple tiers.",
      "Newsletter subscription & user testimonial system.",
      "Secure authentication powered by Firebase & JWT.",
    ],
    problemItSolves:
      "Managing fitness sessions, booking qualified trainers, and tracking personal goals usually requires multiple fragmented tools. FitRack unifies goal tracking, trainer booking, community support, and payment management into one single platform.",
    howIdeaStarted:
      "Fitness enthusiasts often struggle to find verified trainers and manage their workout schedules seamlessly. I wanted to build a end-to-end platform where clients and certified trainers could interact, schedule sessions, and handle payments effortlessly.",
    tags: [
      "React",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Firebase",
      "JWT",
      "Stripe",
    ],
    date: "06-DEC-2024",
    live: "https://fitrackbd.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/fitrack-client",
    githubServer: "https://github.com/tm-fuad05/fitrack-server",
  },
  {
    id: 3,
    image: [
      "/images/pastportals/1.png",
      "/images/pastportals/2.png",
      "/images/pastportals/3.png",
    ],
    title: "PastPortals",
    description:
      "This web application allows users to track, manage, and interact with historical artifacts. Users can log in, add artifacts, and like artifacts while exploring detailed information about each item.",
    keyHighlights: [
      "Full CRUD operations for historical artifact management.",
      "Interactive artifact liking and saved collection system.",
      "Dynamic authentication & protected private routes.",
      "Real-time notifications, modal states & smooth loading animations.",
      "User-contributed artifact showcase & history timeline.",
      "Optimized database queries for fast search and filtering.",
    ],
    problemItSolves:
      "Historical data and rare artifacts are often buried across scattered online archives. PastPortals provides a centralized, crowd-sourced digital museum where history buffs can catalog, preserve, and explore artifact history together.",
    howIdeaStarted:
      "My passion for history inspired me to create a web portal where community members could archive forgotten historical artifacts and discuss their historical context with enthusiasts worldwide.",
    tags: ["React", "Express", "MongoDB", "Firebase", "JWT"],
    date: "09-NOV-2024",
    live: "https://pastportalsbd.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/past-portals-client",
    githubServer: "https://github.com/tm-fuad05/past-portals-server",
  },
  {
    id: 4,
    image: ["/images/logiclab/1.png", "/images/logiclab/2.png"],
    title: "LogicLab.",
    description:
      "LogicLab is a comprehensive React & JavaScript logic showcase engineered to demonstrate essential web development patterns, custom hook architectures, and frontend algorithms.",
    keyHighlights: [
      "Interactive playground for frontend algorithms & custom hooks.",
      "Real-time search filtering, debouncing & throttling demos.",
      "Intersection Observer & DOM visibility tracking examples.",
      "Form validation handlers with dynamic state management.",
      "Clean UI built with React 19 and TypeScript strict mode.",
      "One-click code snippet viewing and execution sandbox.",
    ],
    problemItSolves:
      "Developers often search for clean, well-tested implementations of complex UI logic like debounced inputs, virtual scrolling, and state persistence. LogicLab provides interactive, production-ready reference implementations.",
    howIdeaStarted:
      "While building complex client apps, I repeatedly noticed common UI pattern challenges. I created LogicLab to benchmark, refine, and document high-performance React logic patterns in one reusable repository.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    date: "27-AUG-2026",
    live: "https://mylogiclab.vercel.app",
    githubClient: "https://github.com/tm-fuad05/LogicLab",
  },
  {
    id: 5,
    image: ["/images/devtech.png"],
    title: "DevTech Ltd.",
    description:
      "A specialized digital agency driven by a collaborative team of developers and UI/UX designers. We design and engineer end-to-end web applications, dynamic digital products, and high-converting user interfaces.",
    keyHighlights: [
      "High-converting digital agency hero & showcase sections.",
      "Smooth GSAP scroll animations & micro-interactions.",
      "Modern dark theme styled with Shadcn UI & Tailwind CSS.",
      "Full Next.js SSR performance optimization for speed.",
      "Responsive layout tailored across all mobile and desktop screens.",
      "Integrated contact workflow and lead capture form.",
    ],
    problemItSolves:
      "Businesses often struggle to communicate complex technical agency capabilities effectively. DevTech Ltd provides an engaging visual showcase that builds trust and highlights core digital solutions instantly.",
    howIdeaStarted:
      "To showcase our software agency's capability in building high-end web products, we crafted a visually captivating portfolio website with fluid animations and modern design standards.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "GSAP", "TypeScript"],
    date: "17-FEB-2026",
    live: "https://www.devtechltd.xyz/",
    githubClient: "https://github.com/tm-fuad05/devtech_agency_client",
  },
  {
    id: 6,
    image: [
      "/images/lingobingo/1.png",
      "/images/lingobingo/2.png",
      "/images/lingobingo/3.png",
    ],
    title: "Lingo Bingo",
    description:
      "Lingo Bingo is an engaging vocabulary-building web application built with React and Tailwind CSS. The app focuses on providing learners with a smooth, intuitive, and visually appealing experience.",
    keyHighlights: [
      "Gamified language learning & vocabulary building lessons.",
      "Interactive pronunciation audio support & instant quizzes.",
      "Progress tracking per lesson with visual score badges.",
      "Firebase authentication for personalized user sessions.",
      "Responsive, colorful UI tailored for engaged learning.",
      "Custom vocabulary filters by difficulty and category.",
    ],
    problemItSolves:
      "Traditional vocabulary learning apps feel repetitive and uninspiring. Lingo Bingo gamifies daily word practice with audio, quizzes, and visual progress tracking to make language acquisition fun.",
    howIdeaStarted:
      "Learning new languages requires consistent practice. I wanted to build a lightweight web application that allows learners to practice vocabulary interactively anytime on mobile or web.",
    tags: ["React", "Tailwind CSS", "Firebase", "Audio API"],
    date: "20-AUG-2024",
    live: "https://lingo-bingo-seven.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/Lingo-Bingo",
  },
  {
    id: 7,
    image: [
      "/images/visorix/1.png",
      "/images/visorix/2.png",
      "/images/visorix/3.png",
    ],
    title: "Visorix",
    description:
      "The Visa Navigator is a comprehensive web application designed to simplify the process of checking visa requirements, applying for visas, and tracking visa applications.",
    keyHighlights: [
      "Visa requirement lookup & eligibility criteria search.",
      "Online visa application submission and status tracking dashboard.",
      "Full CRUD operations for managing global visa listings.",
      "Secure Google & Email/Password authentication.",
      "Real-time alert notifications for status changes.",
      "Protected user dashboard for managing applications.",
    ],
    problemItSolves:
      "Navigating visa requirements and application statuses across different countries is often confusing and tedious. Visorix consolidates visa details, requirements, and application tracking in one place.",
    howIdeaStarted:
      "Travelers often face confusion regarding visa requirements and application updates. Visorix was created to provide a streamlined, user-friendly portal for exploring international visa policies and tracking applications.",
    tags: ["React", "Express", "MongoDB", "Firebase"],
    date: "29-OCT-2024",
    live: "https://visorix.vercel.app/",
    githubClient: "https://github.com/tm-fuad05/Visa-Navigator-client",
    githubServer: "https://github.com/tm-fuad05/Visa-Navigator-Server",
  },
];
