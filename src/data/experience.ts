import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    company: "T-Mobile",
    role: "Software Engineer",
    location: "Bellevue, WA / Remote",
    dateRange: "May 2025 – Present",
    logo: "/logos/tmobile.webp",
    summary:
      "Started on the Legal Technology team, building a platform to streamline communication between T-Mobile legal agents and law enforcement. Now on Helix, helping solve customer issues proactively using aggregated T-Mobile data and LLMs.",
    techStack: ["Java", "Spring Boot", "React", "Angular", "TypeScript", "Kafka", "RabbitMQ", "Kubernetes"],
  },
  {
    company: "Texas A&M Formula SAE Electric",
    role: "Embedded Software Engineer",
    location: "College Station, TX",
    dateRange: "Apr 2025 – Jun 2026",
    logo: "/logos/formulae.svg",
    summary:
      "Built embedded software for a formula style electric race car. Worked on the distributed battery management system, the live telemetry system, and other vehicle firmware.",
    techStack: ["C", "C++", "STM32", "CAN", "UART", "SPI"],
    link: { label: "View projects →", href: "#formula-sae" },
  },
  {
    company: "RoviSys",
    role: "Software Engineer Co-Op",
    location: "Houston, TX",
    dateRange: "Aug 2024 – Dec 2024",
    logo: "/logos/rovisys.jpg",
    summary:
      "Oil and gas division. Engineered industrial data management solutions and HMI screens for oil and gas facilities.",
    techStack: ["Python", "REST APIs"],
  },
  {
    company: "University of Technology of Compiègne",
    role: "Research Intern",
    location: "Compiègne, France",
    dateRange: "May 2024 – Aug 2024",
    logo: "/logos/utc.avif",
    summary:
      "Researched and implemented machine learning algorithms for autonomous systems and computer vision applications.",
    techStack: ["Python", "PyTorch", "NVIDIA Jetson"],
  },
];
