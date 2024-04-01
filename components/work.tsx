"use client";

import { workData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Review from "./review";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Work() {
	const { ref } = useSectionInView("Work");

	return (
			 <motion.section
    	id="work"
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
			<SectionHeading>My Work</SectionHeading>
 			<p className=" mb-4">
      Here are some of my most recent projects I contributed and technologies I've worked with:
			</p>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{workData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
			<p className=" mt-6">
      What my customers say about my work:
			</p>
			<Review />
		</motion.section>
	);
}