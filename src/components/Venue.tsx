"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

function Venue() {
  return (
    <motion.section
      id="venue"
      className="px-6 py-12 text-center space-y-6 rounded-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f2937]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Venue
      </motion.h2>

      <motion.p
        className="max-w-[90%] md:max-w-[60%] mx-auto text-base sm:text-lg md:text-xl text-[#374151] leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Borno State Hotel Conference Hall
        <br />
        Off Lafiya Road, Behind GRA Police Station, Maiduguri
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <a
          href="https://maps.app.goo.gl/dppd5m9U4ipAKr3C6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#428EFF] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-[#3778d9] transition-colors"
        >
          <MapPin size={18} />
          View Directions on Google Maps
        </a>
      </motion.div>

      <motion.div
        className="mt-6 w-full flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <iframe
          title="DevFest Maiduguri Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.18916739230326!2d13.147995146227974!3d11.818020214086657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f0c955b2375%3A0x3563a25b3dc6adc1!2sState%20Hotel!5e1!3m2!1sen!2sng!4v1761819023874!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="max-w-[90%] md:max-w-[70%]"
        ></iframe>
      </motion.div>
    </motion.section>
  );
}

export default Venue;
