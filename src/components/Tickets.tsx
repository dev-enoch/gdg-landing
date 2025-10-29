"use client";

import React from "react";
import { Ticket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ticketImg from "../../public/images/devfest-ticket.png";

function Tickets() {
  return (
    <section className="w-full text-center py-8 space-y-4">
      <motion.h2
        className="text-xl sm:text-2xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get Your Tickets
      </motion.h2>

      <motion.p
        className="text-sm sm:text-base md:text-lg max-w-[80%] md:max-w-[60%] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Secure your spot at DevFest Maiduguri 2025 and be part of the biggest
        tech celebration in the city. Limited seats available.
      </motion.p>

      {/* Ticket Image with Wiggle Animation */}
      <motion.div
        className="flex justify-center pt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={ticketImg}
          alt="DevFest Ticket"
          width={600}
          height={300}
          className="wiggle w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto"
          priority={false}
        />
      </motion.div>

      <motion.div
        className="pt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
          <Link
            href="https://gdg.community.dev/e/mzbnsy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-[#F9AB00] text-white rounded-full font-semibold"
          >
            <Ticket size={18} />
            Get your free tickets
          </Link>
        </div>
      </motion.div>

      {/* Wiggle Animation Styles */}
      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(5deg);
          }
          30% {
            transform: rotate(-5deg);
          }
          45% {
            transform: rotate(3deg);
          }
          60% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(2deg);
          }
          90% {
            transform: rotate(-2deg);
          }
        }

        .wiggle {
          animation: wiggle 1s ease-in-out infinite;
          animation-delay: 0s;
          animation-duration: 2s;
        }
      `}</style>
    </section>
  );
}

export default Tickets;
