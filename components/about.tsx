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
        My Ikigai as long as I can remember was always to help people out,{" "}
        may that be clients who need advices from things that I've learnt the hard way,{" "}
        or be products that needs my tech expertise{" "}
        or be younger developers who need advices, guidance to advance their career.{" "}
        </p>
      <p>
        On this journey I created tech ventures and tried to scale them to become{" "}
        <span className="font-medium">globally recognized</span>{" "}
        companies. Apart from that I have also worked in multiple{" "}
        <span className="font-medium">Startups & Enterprise Companies</span>.{" "}
        With <span className="font-medium">Clients, Dev Teams and Professionals</span>{" "}
        across the globe starting from{" "}
        <span className="italic"> Sri Lanka, Indonesia, UK, Australia</span>{" "}
        and most recently the{" "}
        <span className="italic"> DACH Region (Europe).</span>
      </p>
      <p>
        If you feel my experience is valueble to you or your team as{" "}
        <span className="font-medium">Founder or a Recruiter</span>{" "}
        feel free to reach out to me. Let's discuss,{" "}
        <span className="italic">how I can help...</span>.
      </p>
    </motion.section>
  );
}
