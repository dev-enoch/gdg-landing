"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ForiImage from "../../public/images/fori-image.png";

const AgendaRow = ({
  session,
  host,
  isHeader,
  index,
  total,
}: {
  session: string;
  host?: string;
  isHeader?: boolean;
  index: number;
  total: number;
}) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <motion.div
      className={`flex items-center justify-between px-4 py-4 ${
        isHeader || isFirst ? "bg-[#F6B819] font-bold rounded-t-xl" : "bg-white"
      } ${!isLast ? "border-b border-[#F6B819]" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>{session}</div>
      <div>{host || ""}</div>
    </motion.div>
  );
};

function Agendas() {
  const agendas = [
    { session: "Session", host: "Host", isHeader: true },
    { session: "Check-in & Seating", host: "Usman Fori" },
    { session: "Welcome & Opening Remarks", host: "Usman Fori" },
    {
      session: "Design (Inclusive Design in the African Context)",
      host: "Zeeyah",
    },
    { session: "Mental Health (Tech Burnout is Real)", host: "Yusuf" },
    { session: "GDE Session 1", host: "Rashid" },
    { session: "Panel: Staying Human in Tech", host: "" },
    { session: "Kahoot! Icebreaker", host: "" },
    { session: "WTM Session", host: "" },
    { session: "Sponsor Lightning Demos", host: "" },
  ];

  return (
    <motion.section
      id="agenda"
      className="w-full py-12 px-6 md:px-12 lg:px-20 space-y-6 text-center"
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
        Event Agenda
      </motion.h2>

      <motion.p
        className="text-base md:text-lg md:max-w-[60%] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Explore the key sessions of the day. Each segment is designed to engage,
        educate, and inspire.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        <motion.div
          className="w-full md:w-[40%] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={ForiImage}
            alt="Fori Image"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </motion.div>

        <div className="w-full md:w-[60%] text-left rounded-xl overflow-hidden">
          {agendas.map((agenda, index) => (
            <AgendaRow
              key={index}
              session={agenda.session}
              host={agenda.host}
              isHeader={agenda.isHeader}
              index={index}
              total={agendas.length}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Agendas;
