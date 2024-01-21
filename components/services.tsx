"use client";

import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "./service";
import SectionHeading from "./section-heading";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <section ref={ref} id="services" className="scroll-mt-28 mb-28">
      <SectionHeading>My services</SectionHeading>
      <div>
        {servicesData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
