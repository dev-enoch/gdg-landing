"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

function Donation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("5334194558");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy account number:", err);
    }
  };

  return (
    <section className="w-full text-center py-10 px-4 sm:px-6 md:px-8 space-y-6">
      <motion.h2
        className="text-xl sm:text-2xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Support the Event
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[60%] mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Your donation helps cover logistics, materials, and other costs for this
        event. Every contribution keeps the experience valuable and accessible
        to everyone.
      </motion.p>

      <motion.div
        className="pt-4 flex flex-col items-center gap-3 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-base sm:text-lg font-medium">
          Account Name: <span className="font-semibold">Usman Fori</span>
        </p>
        <p className="text-base sm:text-lg font-medium">
          Bank: <span className="font-semibold">Fidelity Bank</span>
        </p>
        <p className="text-base sm:text-lg font-medium flex items-center justify-center gap-2">
          Account Number: <span className="font-semibold">5334194558</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#F9AB00] text-white text-sm font-medium hover:bg-[#ffc340] transition-colors cursor-pointer"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </p>
      </motion.div>
    </section>
  );
}

export default Donation;
