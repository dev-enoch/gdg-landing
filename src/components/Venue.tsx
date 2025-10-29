"use client";

import React from "react";
import { motion } from "framer-motion";

function Venue() {
  return (
    <motion.section
      id="venue"
      className="px-4 py-8 sm:py-10 md:py-12 text-center space-y-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Venue
      </motion.h2>

      <motion.p
        className="max-w-[80%] md:max-w-[60%] mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Borno State Hotel Conference Hall, Off Lafiya Road, Behind GRA Police
        Station, Maiduguri
      </motion.p>
    </motion.section>
  );
}

export default Venue;
