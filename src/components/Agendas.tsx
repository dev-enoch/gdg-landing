"use client";

import React from "react";
import { motion } from "framer-motion";

type AgendaItem = {
  time: string;
  duration: string;
  session: string;
  moderator?: string;
  isHeader?: boolean;
};

const AgendaRow = ({
  time,
  duration,
  session,
  moderator,
  isHeader,
  index,
  total,
}: AgendaItem & { index: number; total: number }) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <motion.div
      className={`grid grid-cols-4 gap-2 px-4 py-3 text-sm sm:text-base ${
        isHeader || isFirst
          ? "bg-[#F6B819] font-bold rounded-t-xl"
          : "bg-[#FFFAF2]"
      } ${!isLast ? "border-b border-[#F6B819]" : ""}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>{time}</div>
      <div>{duration}</div>
      <div>{session}</div>
      <div>{moderator || ""}</div>
    </motion.div>
  );
};

function Agendas() {
  const agendas: AgendaItem[] = [
    {
      time: "Time",
      duration: "Duration",
      session: "Session",
      moderator: "Moderator",
      isHeader: true,
    },
    {
      time: "8:30 AM - 9:30 AM",
      duration: "60 min",
      session: "Check-in & Seating",
      moderator: "Host",
    },
    {
      time: "9:30 AM - 9:40 AM",
      duration: "10 min",
      session: "Welcome & Opening Remarks",
      moderator: "Host",
    },
    {
      time: "9:40 AM - 9:50 AM",
      duration: "10 min",
      session: "Partner Appreciation",
      moderator: "Host",
    },
    {
      time: "9:50 AM - 10:00 AM",
      duration: "10 min",
      session: "GDG Journey",
      moderator: "Usman Fori",
    },
    {
      time: "10:00 AM - 10:10 AM",
      duration: "10 min",
      session: "Keynote",
      moderator: "BITCDA",
    },
    {
      time: "10:20 AM - 10:40 AM",
      duration: "20 min",
      session: "Design (Inclusive Design in the African Context)",
      moderator: "Fauziya Mohammed",
    },
    {
      time: "10:40 AM - 11:00 AM",
      duration: "20 min",
      session: "Beyond the Grind: Staying Human in Tech",
      moderator: "S. A. Yusuf",
    },
    {
      time: "11:05 AM - 11:30 AM",
      duration: "25 min",
      session: "Gemma: Building a MaaS",
      moderator: "Rashid Mudasiru",
    },
    {
      time: "11:30 AM - 11:55 AM",
      duration: "25 min",
      session: "Become a GenAI Expert",
      moderator: "Saheed Adewumi",
    },
    {
      time: "12:40 PM - 1:00 PM",
      duration: "20 min",
      session: "Panel: Staying Human in Tech",
    },
    {
      time: "1:15 PM - 1:35 PM",
      duration: "20 min",
      session: "WTM Session (Panel)",
      moderator: "Alheri",
    },
    {
      time: "2:05 PM - 2:35 PM",
      duration: "30 min",
      session: "Networking Session",
    },
    {
      time: "2:35 PM - 2:45 PM",
      duration: "10 min",
      session: "Closing Remark",
      moderator: "Host",
    },
  ];

  return (
    <motion.section
      id="agenda"
      className="w-full py-12 px-6 md:px-12 lg:px-20 space-y-6 text-center "
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
        The highlight sessions that will define your DevFest experience.
      </motion.p>

      <div className="w-full text-left rounded-xl overflow-hidden shadow-md">
        {agendas.map((agenda, index) => (
          <AgendaRow
            key={index}
            {...agenda}
            index={index}
            total={agendas.length}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Agendas;
