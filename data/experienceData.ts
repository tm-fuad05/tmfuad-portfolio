import {
  Database,
  Server,
  Code2,
  Layers,
  Cloud,
  Shield,
  LucideIcon,
} from "lucide-react";

export type Expertise = {
  icon: LucideIcon;
  title: string;
  description: string;
};
``;

export const expertise: Expertise[] = [
  {
    icon: Code2,
    title: "React.js",
    description:
      "Building interactive and performant user interfaces with modern React patterns, hooks, and component architecture.",
  },
  {
    icon: Server,
    title: "Node.js & Express",
    description:
      "Developing scalable backend services with efficient API design, middleware integration, and real-time capabilities.",
  },
  {
    icon: Database,
    title: "MongoDB",
    description:
      "Managing NoSQL databases with advanced aggregation pipelines, indexing strategies, and data modeling.",
  },
  {
    icon: Layers,
    title: "Full-Stack Integration",
    description:
      "Seamlessly connecting frontend and backend systems with state management and efficient data flow.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on cloud platforms with containerization and scalable infrastructure.",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    description:
      "Implementing secure authentication systems with JWT, OAuth, and best practices for data protection.",
  },
];
