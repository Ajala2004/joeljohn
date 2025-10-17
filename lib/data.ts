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
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started Graphics Design Journey",
    location: "Nigeria",
    description:
      "I began my creative journey learning the basics of graphic design — exploring colors, typography, and visual storytelling.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Freelance Graphics Designer",
    location: "Nigeria",
    description:
      "I worked with individuals and small brands to create logos, flyers, and digital designs that reflect their unique identity and vision.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Lead Designer at FroshX",
    location: "Remote",
    description:
      "Currently designing under FroshX — creating brand identities, marketing visuals, and digital artworks that stand out. I’m open to collaborations and design projects worldwide.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
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
  "Adobe Photoshop",
  "Adobe Illustrator",
  "CorelDRAW",
  "Figma",
  "Adobe XD",
  "Canva",
  "Logo Design",
  "Brand Identity",
  "Typography",
  "Photo Manipulation",
  "Color Theory",
  "Digital Illustration",
  "Layout Design",
  "Social Media Design",
  "Poster Design",
  "UI/UX Design",
  "Creative Direction",
  "Motion Graphics",
  "Visual Storytelling",
] as const;
