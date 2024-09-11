import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "MCA",
    location: "Birla Institute of Technology,Mesra",
    description:"Completed 3-year Master’s degree program in Computer Applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Internship",
    location: "NielsenIQ,Pune",
    description:
    "Completed a 6-month internship focused on migrating some key modules from Sencha to ReactJS.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022",
  },
  {
    title: "Frontend Engineer",
    location: "NielsenIQ,Pune",
    description:
      "Currently working as a full-time employee, where I have contributed to building the UI for the iPSRO and Arthur modules in the CDAR platform.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "C",
  "C++",
  "Node.js",
  "Git",
  "Tailwind",
  "Kendo React UI",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Jenkins"
] as const;
