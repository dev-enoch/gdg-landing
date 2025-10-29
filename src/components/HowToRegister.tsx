"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function HowToRegister() {
  return (
    <motion.div
      className="p-4 space-y-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-2xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        How to Register
      </motion.h2>

      <motion.p
        className="md:max-w-[60%] md:w-full md:mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Joining the Devfest is simple! Just follow these quick steps to secure
        your spot.
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/register.png"
          width={800}
          height={600}
          alt="How to Register"
          className="w-full md:max-w-[80%] h-auto object-contain"
          loading="lazy"
          priority={false}
        />
      </motion.div>
    </motion.div>
  );
}

export default HowToRegister;
