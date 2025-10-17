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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I’m <span className="font-medium">Joel John</span>, a passionate{" "}
        <span className="font-medium">graphics designer</span> with a love for
        creativity, color, and clean visual storytelling. I began my creative
        journey shortly after earning a degree in{" "}
        <span className="font-medium">Visual Communication</span> and have since
        specialized in creating{" "}
        <span className="font-medium">brand identities, digital art, and
        marketing designs</span> that make lasting impressions.{" "}
        <span className="italic">My favorite part of design</span> is the
        process of turning an abstract idea into something visually powerful and
        emotionally engaging.
      </p>

      <p>
        <span className="italic">When I’m not designing</span>, I enjoy
        exploring new design trends, sketching creative concepts, and
        experimenting with colors. Outside of art, I love{" "}
        <span className="font-medium">photography, music, and learning new
        creative tools</span> that help me grow as an artist. My goal is to keep
        creating visuals that not only look great but also{" "}
        <span className="underline">connect with people</span> on a deeper level.
      </p>
    </motion.section>
  );
}
