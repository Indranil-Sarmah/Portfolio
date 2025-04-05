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
      className="mb-28 max-w-[45rem] text-center leading-normal sm:leading-8 sm:mb-40 scroll-mt-28 text-sm"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="block sm:hidden h-20"></div>

      <SectionHeading>About me</SectionHeading>

      <div>
        <p className="mb-3 text-justify sm:text-center">
          After graduating with a degree in <span className="font-medium">Computer Science</span>, I discovered my true passion lies in <span className="font-medium">web development</span>. <br />
          <br className="block sm:hidden" />
          Developing sites allows me to explore my <span className="underline">creativity</span>, turning ideas into dynamic, interactive experiences. <br />
          <br className="block sm:hidden" />
          While I <span className="underline">love</span> working with <span className="font-medium">ReactJS</span>, I’m currently expanding my expertise by mastering <span className="font-medium">Next.js</span>, enhancing both the performance and versatility of my projects. <br />
          <br className="block sm:hidden" />
          I’m always <span className="underline">eager to sharpen my skills</span> and <span className="underline">excited to embrace emerging technologies</span>.
        </p>

        <p className="text-justify sm:text-center">
          <span>When I’m not coding</span>, I enjoy <span className="underline">watching movies</span> or <span className="underline">pushing my limits at the gym</span>. <br />
          <br className="block sm:hidden" />
          I’m also passionate about <span className="font-medium">learning new things on YouTube</span>. <br />
          <br className="block sm:hidden" />
          Lately, I’ve been diving into the world of <span className="font-medium">options trading in the Indian stock market</span>—a fascinating challenge that keeps me curious.
        </p>
      </div>
    </motion.section>



  );
}
