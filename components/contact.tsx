"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 mb-8 dark:text-white/80">
        Reach out to me directly via email, call, or WhatsApp.
      </p>

      <div className="flex justify-center gap-6 text-3xl text-gray-600 dark:text-white/80">
        <a
          href="mailto:joeljohn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+2348086011383"
          className="hover:text-green-500 transition-colors"
        >
          <FaPhoneAlt />
        </a>

        <a
          href="https://wa.me/2348086011383"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition-colors"
        >
          <FaWhatsapp />
        </a>
      </div>
    </motion.section>
  );
}
