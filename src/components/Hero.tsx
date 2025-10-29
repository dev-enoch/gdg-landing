"use client";

import { Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center space-y-5 px-4 pt-16 bg-[#428EFF] text-white text-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button className="px-6 py-2 bg-[#428EFF] text-white rounded-full text-sm sm:text-base">
          22nd Nov, 2025 | 9:00 AM - 2:45 PM
        </button>
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        DevFest
        <br />
        Maiduguri 2025
      </motion.h1>

      <motion.p
        className="text-sm sm:text-base md:text-lg flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Connect</span>
        <span className="text-xl leading-none">·</span>
        <span>Learn</span>
        <span className="text-xl leading-none">·</span>
        <span>Innovate</span>
      </motion.p>

      <motion.div
        className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          href="https://gdg.community.dev/e/mzbnsy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-[#F9AB00] text-white rounded-full font-semibold text-sm sm:text-base"
        >
          <Ticket size={18} />
          Get your free tickets
        </Link>
      </motion.div>

      <motion.div
        className="w-full flex items-end justify-center mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-end justify-center gap-3 flex-nowrap">
          <div className="pb-2 flex-shrink-0">
            <Image
              src="/images/star.png"
              alt="left star"
              width={120}
              height={120}
              className="object-contain h-[12vw] sm:h-[10vw] md:h-[8vw] w-auto"
              loading="lazy"
            />
          </div>

          <div className="flex justify-center items-end flex-shrink">
            <Image
              src="/images/mural.png"
              alt="mural"
              width={600}
              height={300}
              className="object-contain h-[12vw] sm:h-[10vw] md:h-[8vw] w-auto"
              loading="lazy"
            />
          </div>

          <div className="pb-2 flex-shrink-0">
            <Image
              src="/images/star.png"
              alt="right star"
              width={120}
              height={120}
              className="object-contain h-[12vw] sm:h-[10vw] md:h-[8vw] w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
