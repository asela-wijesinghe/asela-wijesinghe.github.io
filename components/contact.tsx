"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

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

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Reach out to me directly via email on{" "}
        <a className="underline font-medium" href="mailto:asela.wijesinghe1993@gmail.com" target="_blank">
          asela.wijesinghe1993@gmail.com
        </a>{" "}if you are a client or a recruiter to get us started!!!
      </p>
      <br/>
      <p className="italic">
        "Also here is something special if you are still a <span className="font-medium">youngster</span>,
        <br />
        When I was begining my career I didn't have anyone to look up to and ask things when I am not sure if i am on correct path or not.
        I always had to experiment every step of my way. But if you need my{" "}
        <span className="font-medium">help/advices for any career issue</span>{" "}
        you might hav and if you think if it is something I can help with then
        let me ask you to book a 1-on-1 consultation with me.
        Here is{" "}
        <a className="underline font-medium" href="https://calendly.com/asela-wijesinghe1993/30min" target="_blank">
        My Calender Link
        </a>.
        <br />
        Please let me know the reason for the meeting in the description so I can roughly prepare myself for the meeting."
      </p>

      {/* <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */}
    </motion.section>
  );
}
