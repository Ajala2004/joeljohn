import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact,FaPalette } from "react-icons/fa";
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
    title: "Senior Graphic Designer at Country Links",
    location: "Nigeria",
    description:
      "I began as an apprentice from 2019 to 2021, where I was rigorously trained in layout, color, and typography. After years of hands-on experience, I became a Senior Graphic Designer, leading a creative team and delivering quality designs to over 500 satisfied clients.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - Present",
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
    title: "Founder & Lead Designer at Primez Visualz",
    location: "Nigeria",
    description:
      "I founded Primez Visualz in 2024 — a design brand focused on creativity, excellence, and client satisfaction. I’ve created 100+ flyers, posters, banners, and ad designs for clients across digital platforms, managing communications and revisions to ensure every project aligns perfectly with each brand’s identity.",
    icon: React.createElement(FaPalette),
    date: "2024 - Present",
  },
] as const;



export const projectsData = [
  {
    title: "Creative Showcase",
    description: "A collection of my graphic design works — from branding to promotional visuals, each crafted with creativity and precision.",
    tags: ["Logo Design", "Branding", "Flyers", "Social Media"],
    images: [
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
      "/7.jpg",
      "/8.jpg",
      "/9.jpg",
      "/10.jpg",
      "/11.jpg",
      "/12.jpg",
    ],
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
