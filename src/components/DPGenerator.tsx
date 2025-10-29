"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import dpImage from "../../public/images/dp-generator.png";

function DPGenerator() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/eventdp");
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-20 gap-10">
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
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
          DevFest DP Generator
        </motion.h2>

        <motion.p
          className="text-base md:text-lg max-w-[90%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Show your excitement! Generate your custom DevFest Maiduguri 2025
          display picture and share it on social media to spread the vibe.
        </motion.p>

        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
            <button
              onClick={handleNavigate}
              className="px-6 py-2 bg-[#F9AB00] text-white rounded-full font-semibold"
            >
              Generate DP Now 🥳
            </button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full max-w-[678px]">
          <Image
            src={dpImage}
            alt="DevFest DP Generator"
            className="w-full h-auto object-contain"
            priority={false}
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default DPGenerator;
