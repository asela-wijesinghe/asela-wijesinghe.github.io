"use client";

import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	const { theme } = useTheme();

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
			<SectionHeading>Contact me</SectionHeading>
			<p className="mb-6">
				You are almost there to reach out to me. If you are a prospective{" "}
				<span className="font-semibold capitalize">client</span> or a{" "}
				<span className="font-semibold capitalize">recruiter</span> I am always
				open to new opportunities and collaborations. Write to me directly via
				email on <br></br>
				<a
					className="underline italic font-medium"
					href="mailto:asela.wijesinghe1993@gmail.com"
					target="_blank"
				>
					asela.wijesinghe1993@gmail.com
				</a>
			</p>

      <div 	style={{
					background:
					theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
					boxShadow: "none",
					border: "1px solid rgba(0, 0, 0, 0.05)",
					padding: "1.3rem 2rem",
				}}>
			<span
				className="italic font-semibold capitalize"
			>
				Special Offer for Young Professionals:
			</span>
			<p className="italic mt-3">
				"As someone who once navigated the early stages of their career without
				much guidance, I understand the importance of mentorship and support.
				If you're a young professional seeking advice or direction, I'm here to
				help. Book a personalized 1-on-1 virtual consultation with me using{" "}
				<a
					className="underline capitalize font-medium"
					href="https://calendly.com/asela-wijesinghe1993/30min"
					target="_blank"
				>
					My Calender Link
				</a>. Let's discuss any career-related challenges or questions you may have.
				Please provide a brief description of the reason for the meeting so I
				can tailor our session accordingly."
			</p>
      </div>
		</motion.section>
	);
}
