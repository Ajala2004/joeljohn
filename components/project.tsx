"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  images,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="mb-20 sm:mb-28 last:mb-0"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg p-6 sm:p-10 text-center transition hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-700 dark:text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="flex flex-wrap justify-center gap-2 mb-8">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] text-white text-[0.7rem] px-3 py-1 uppercase tracking-wider rounded-full dark:text-white/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={img}
                alt={`Design ${index + 1}`}
                width={400}
                height={300}
                quality={95}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
