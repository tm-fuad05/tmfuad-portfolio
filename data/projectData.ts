export type ProjectCards = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  live: string;
  github: string;
};

export const projectCards = [
  {
    id: 1,
    image: "/images/fitrack.png",
    title: "FitRack",
    description:
      " The Fitness Tracker Web Application is a MERN stack platform designed for fitness enthusiasts, trainers, and administrators. It features user authentication, role-based dashboards, trainer booking, Stripe payments, and a dynamic forum. Users can explore trainers, book sessions, track fitness goals, and engage in discussions. Trainers manage available slots, while admins oversee trainer applications, payments, and analytics. The platform includes a testimonial system, newsletter subscription, and a structured membership system with different tiers. With a modern UI, real-time updates, and secure authentication, this app delivers a seamless fitness management experience.",
    date: "06-DEC-2024",
    live: "https://fit-rack-88a09.web.app/",
    github: "https://github.com/tm-fuad05/fitrack-client",
  },
  {
    id: 2,
    image: "/images/pastportals.png",
    title: "PastPortals",
    description:
      "This web application allows users to track, manage, and interact with historical artifacts. Users can log in, add artifacts, and like artifacts while exploring detailed information about each item. The platform features dynamic authentication, private routes, and a user-friendly interface with smooth navigation, notifications, and loading states. The artifact management system supports CRUD operations, and users can see their contributions and liked artifacts.",
    date: "09-NOV-2024",
    live: "https://assignment-11-22249.web.app/",
    github: "https://github.com/tm-fuad05/past-portals-client",
  },
  {
    id: 3,
    image: "/images/visorix.png",
    title: "Visorix",
    description:
      "The Visa Navigator is a comprehensive web application designed to simplify the process of checking visa requirements, applying for visas, and tracking visa applications. It offers a user-friendly interface with features such as secure authentication (email/password and Google login), protected routes, and dynamic pages. Users can manage visa details, apply for visas, and track their applications through a personalized dashboard. The app supports CRUD operations for adding and updating visa information, with real-time notifications for successful actions. ",
    date: "29-OCT-2024",
    live: "https://visa-navigator-c69e7.web.app/",
    github: "https://github.com/tm-fuad05/Visa-Navigator-client",
  },
];
