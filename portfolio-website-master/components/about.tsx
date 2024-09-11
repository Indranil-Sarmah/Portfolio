"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-sm"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="block sm:hidden h-20">
      </div>
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        dummy commit
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}

        After graduating in <span className="font-medium">Computer Science</span>, I found my interest lie towards<span className="font-medium"> web development</span>. <br />Developing sites allows me to explore the <span className="underline">creativity</span> by turning my ideas into interactive experiences.
        <br />
        Although, I <span className="underline">love</span> working with <span className="font-medium">ReactJS</span>, but currently expanding my knowledge by learning <span className="font-medium">Next.js</span>,enhancing both the performance and versatility of my projects.
        I’m always <span className="underline">keen on improving my skills</span> and <span className="underline">excited to explore new technologies</span> as they emerge.
      </p>

      <p>
        <span>In my free time away from coding</span>, I enjoy <span className="underline">watching movies</span>, OR <span className="underline"> working out at the gym</span>.
        <br />I also enjoy
        <span className="font-medium"> learning new things from YouTube</span>.
        <br />Currently, learning about Options trading in Indian Stock Market.
      </p>
    </motion.section>
  );
}
