"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import exp1 from "../../public/images/exp-1.png";
import exp2 from "../../public/images/exp-2.png";
import exp3 from "../../public/images/exp-3.png";
import exp4 from "../../public/images/exp-4.png";
import exp5 from "../../public/images/exp-5.png";

function Expectation() {
  const exps = [exp1, exp2, exp3, exp4, exp5];

  return (
    <motion.section
      id="agenda"
      className="w-full text-center space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        What to Expect at DevFest
        <br />
        Maiduguri 2025
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[60%] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Discover inspiring talks, hands-on workshops, and opportunities to
        connect with developers, designers, and tech enthusiasts.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 px-2 md:px-0">
        {exps.map((exp, i) => (
          <motion.div
            key={i}
            className="flex justify-center items-center w-[45%] sm:w-[40%] md:w-[28%] lg:w-[26%]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={exp}
              alt={`expectation-${i + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
              priority={false}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Expectation;
