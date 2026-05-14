import type { Project } from "../types";

export const formulaProjects: Project[] = [
  {
    title: "DBMS",
    description:
      "Distributed battery management system for the Texas A&M Formula Electric race car. Manages lithium-ion cells using TI BQ79616 ICs interfaced with an STM32 over UART and CAN.",
    techStack: ["C", "STM32", "CAN", "UART"],
    githubUrls: [
      { label: "Firmware", url: "https://github.com/tamuev/DBMS2" },
      { label: "WatchBMS", url: "https://github.com/tamuev/watch-bms" },
    ],
  },
  {
    title: "RoadLink",
    description:
      "Live telemetry system for the Texas A&M Formula Electric race car. Pairs STM32 firmware with a Quectel EG25-G cellular modem to stream thousands of CAN frames per second over TCP to an AWS backend for real-time Grafana dashboards.",
    techStack: ["C", "STM32", "CAN", "AWS", "Grafana"],
    githubUrls: [
      { label: "Firmware", url: "https://github.com/tamuev/RoadLink2" },
    ],
  },
  {
    title: "PitLink",
    description:
      "Custom CAN-to-Ethernet bridge board built to replace the Raspberry Pi in the pit. An STM32 reads dual CAN buses and broadcasts frames over TCP to multiple clients via a W5500 Ethernet controller, with bidirectional forwarding for pit-side commands.",
    techStack: ["C", "STM32", "CAN", "SPI", "TCP"],
    githubUrls: [
      { label: "Firmware", url: "https://github.com/tamuev/PitLink" },
    ],
  },
  {
    title: "TRACK",
    description:
      "Senior capstone project, 1st place in section. Raspberry Pi telemetry platform built for SAE teams to capture CAN data, render a real-time onboard dashboard at 60 FPS, and sync configuration through a cloud-connected web interface.",
    techStack: ["C++", "Python", "React", "TypeScript", "Raspberry Pi", "Firebase"],
    githubUrls: [
      { label: "Embedded", url: "https://github.com/evilspoon13/track-embedded" },
      { label: "Web", url: "https://github.com/evilspoon13/track-web" },
    ],
  },
];

export const personalProjects: Project[] = [
  {
    title: "Constellation",
    description:
      "1st place, Compute & Cloud Challenge at TAMUhack 2026. An AI-native IDE for HPC that replaces terminal workflows with a visual execution graph and natural language interface for parallel workloads on AWS Batch.",
    techStack: ["Next.js", "TypeScript", "React", "AWS Batch", "EC2", "S3", "Gemini", "Firebase"],
    githubUrls: [
      { label: "Source", url: "https://github.com/aathul-raj/constellation" },
    ],
  },
  {
    title: "Aggie Finals",
    description:
      "Website for Texas A&M students to find their final exam date and time. Fetches real-time class data from the Howdy API and lets users save their exam schedule.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "TypeScript", "Java"],
    githubUrls: [
      { label: "Source", url: "https://github.com/evilspoon13/aggie-finals" },
    ],
  },
  {
    title: "Aggie Study",
    description:
      "Study platform for Texas A&M students to access past exams and study materials in one place.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "JavaScript", "Java"],
    githubUrls: [
      { label: "Frontend", url: "https://github.com/evilspoon13/AggieStudyFrontEnd" },
      { label: "Backend", url: "https://github.com/evilspoon13/AggieStudyBackEnd" },
    ],
  },
];
