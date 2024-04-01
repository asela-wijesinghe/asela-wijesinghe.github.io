import revImg1 from "@/public/florian.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Review() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className="group mb-3 sm:mb-8 last:mb-0 mt-5 center-content"
		>
			<div className=" mb-3 flex items-center justify-center">
				<Image src={revImg1} alt="Florian Kogl"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-29 w-29 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
			</div>
			<h4 className="capitalize font-bold">Florian Kogl</h4>
			<p className="capitalize font-semibold">Founder/CEO @ReDem GMbH🇦🇹</p>
			<p className="italic p-4">
				"Since initiating our collaboration with Asela in 2021, initially as a
				freelancer, we have consistently experienced a high level of
				professionalism and quality in his work. This led us to offer Asela a
				full-time role as a Senior Software Engineer. Asela has since become an
				integral and highly valued member of our technical team in Austria. "
			</p>
		</motion.div>
	);
}
