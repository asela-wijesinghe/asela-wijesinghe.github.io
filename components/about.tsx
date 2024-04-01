"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My <span className="font-bold">IKIGAI</span> as long as I can remember was always to help build tech ventures,{" "}
        whether it's providing hard-earned insights to <span className="italic underline capitalize">clients</span>,{" "}
        lending my technical expertise to <span className="italic underline capitalize">products</span>{" "}
        or guiding young <span className="italic underline capitalize">developers</span> to elevate their careers.{" "}
        </p>
      <p className="mb-3">
      Along this path, I've spearheaded tech ventures aiming for global recognition,
      contributed to various startups and enterprise companies,
      and collaborated with <span className="italic underline capitalize">Dev teams</span> and <span className="italic underline capitalize">professionals worldwide</span> from Sri Lanka and Indonesia to the UK, Australia, and extensively in the Europe.

      If my journey resonates with you, or if you're a  <span className="italic underline capitalize">founder</span> or <span className="italic underline capitalize">recruiter</span> seeking value from my experiences,
      I'm here. </p>
      <p > <span className="font-medium capitalize ">Let's explore how I can contribute to your success?</span>
      </p>
    </motion.section>
  );
}

