import img1 from "@/public/1.png";
import img2 from "@/public/2.png";
import img3 from "@/public/3.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCrown, FaReact, FaRocket } from "react-icons/fa";

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
    name: "Services",
    hash: "#services",
  },
  {
    name: "Highlights",
    hash: "#highlights",
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
    title: "Senior Software Developer",
    location: "ReDem GmbH, Linz, Austria 🇦🇹",
    description:
      "Survey Data Cleaning Web Platform & Highly Available API (Vue.js | Node.js | GraphQL | AWS) | Responsible for the Product Architecture | Plan Technical Vision and Enhance Dev Processes | Delivering features as Full-Stack Developer",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Current",
  },
  {
    title: "Co-Founder & Director of Technology",
    location: "Nichelabs (Pvt) Ltd, Sri Lanka 🇱🇰 🇦🇹",
    description:
      " Delivered dozens of web & mobile applications using modern JS techstack | Design Product/AWS Architectures | Handle Estimations, Billing, Risks and work with Clients | Grooming dev teams | Delivering project features as Full-Stack Developer",
        icon: React.createElement(FaRocket),
    date: "2021 - 2023",
  },
  {
    title: " Senior Software Engineer",
    location: "Mitra Innovations, Sri Lanka 🇱🇰 🇦🇺 🇬🇧 🇮🇩",
    description:
      "Delivered Multiple Applications based on React and React Native | Leading teams to meet project goals | Convert Legacy codebases to Modern Stack | Helping with Project Estimations and Pre-Sales",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: " Software Engineer",
    location: "Calcey Technologies, LLC, Sri Lanka 🇱🇰 🇦🇺",
    description:
      "Specialized in React and React Native | Leading team to meet project goals | Specialized in React and React Native projects | Helping with Project Estimations and Pre-Sales",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Much more work history...",
    location: "My Startup Legacy 🇱🇰",
    description:
      "Been part of 4+ Startups | Groomed to become a Tech Founder | Co-Founded multiple ventures eventually became failures |  Worked with Local and International clients | Awarded as a Finalist GSEA - Student Entreprenuer | Multiple Global Winners - Social Robotic Competitions in UK & Spain | Achieved 2nd Class - BSc (Specilaized) in Computer Science amidts my other unique commitments",
    icon: React.createElement(FaCrown),
    date: "2015 - 2020",
  },
] as const;

export const servicesData = [

  {
    title: "Tech Startup Consulting",
    description:
      "You struggle to get your tech product to market, scale it up, or how you structure your tech team then this is for you.",
    tags: ["1-1 Consulting", "Product Planning", "Structuring"],
    imageUrl: img1,
  },
  {
    title: "CTO as a-Service",
    description:
      "Need a CTO but can't afford one or don't need one full-time? I can plan and guide your team to execute the visions you want to achieve",
    tags: ["Architecture", "Team Building", "Technical Vision"],
    imageUrl: img2,
  },
  {
    title: "Freelance Developement",
    description:
      "Best for small to medium sized projects. I can help you build your MVP, add features to your existing product, or improve performance.",
    tags: ["MVPs", "Features", "Performance Improvements"],
    imageUrl: img3,
  },
] as const;

export const highlightsData = [
  "JavaScript",
  "Vue.js",
  "React",
  "Redux",
  "AWS",
  "Express",
  "Node.js",
  "MongoDB",
  "GraphQL",
  "SCSS",
  "MySQL",
  "Git",
] as const;
