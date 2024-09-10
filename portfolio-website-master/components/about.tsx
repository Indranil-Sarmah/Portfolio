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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
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

        After graduating in <span className="font-medium">Computer Science</span>, I found my interest for <span className="font-medium">web development</span>. <br />Developing websites allows my <span className="underline">creativity</span> to flow by turning my ideas into interactive experiences.
        <br />
        Every time I visit a site, I can't help but analyze, "How it is built ?" ending up doing CNTRL+SHIFT+I
        <br />
        <br />
        Although, I <span className="underline">love</span> working with <span className="font-medium">ReactJS</span>, but currently expanding my expertise by learning <span className="font-medium">Next.js</span>, enhancing both the performance and versatility of my projects. 
        I’m always <span className="underline">keen on improving my skills</span> and <span className="underline">excited to explore new technologies</span> as they emerge.
      </p>

      <p>
        <span>When I'm not coding</span>, I enjoy playing&nbsp;
        <span className="underline">mobile games</span>,<span className="underline">watching movies</span>, and <span className="underline">hitting the GYM</span>.
        <br />I also enjoy
        <span className="font-medium"> learning new things from YouTube</span>.
        <br />Currently, I am learning about Options trading in Indian Stock Market.
      </p>
    </motion.section>
  );
}
