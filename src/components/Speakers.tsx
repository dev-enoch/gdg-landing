"use client";

import React from "react";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";
import ForiImage from "../../public/images/fori-image.png";

type Speaker = {
  name: string;
  role: string;
  socials: string[];
};

type SpeakerRowProps = Speaker & {
  index: number;
  total: number;
};

const SpeakerRow = ({ name, role, socials, index, total }: SpeakerRowProps) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div
      className={`flex items-center justify-between flex-wrap md:flex-nowrap px-4 py-4 ${
        isFirst ? "bg-[#F6B819] font-bold rounded-t-xl" : "bg-[#FFFAF2]"
      } ${!isLast ? "border-b border-[#F6B819]" : ""}`}
    >
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-base md:text-lg leading-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm text-gray-700 mt-1">{role}</p>
      </div>

      <div className="flex items-center space-x-3 mt-3 md:mt-0">
        {socials.map((social) => {
          const Icon = social.includes("twitter")
            ? Twitter
            : social.includes("linkedin")
            ? Linkedin
            : null;
          return (
            Icon && (
              <a
                key={social}
                href={social}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#428EFF] transition-colors"
              >
                <Icon size={18} />
              </a>
            )
          );
        })}
      </div>
    </div>
  );
};

function Speakers() {
  const speakers: Speaker[] = [
    {
      name: "Usman Fori",
      role: "GDG Organizer | Product Manager",
      socials: [
        "https://twitter.com/usmanfori",
        "https://linkedin.com/in/usmanfori",
      ],
    },
    {
      name: "S. A. Yusuf",
      role: "Founder, DevConnect | Speaker on Human Sustainability in Tech",
      socials: [
        "https://twitter.com/yusufadam",
        "https://linkedin.com/in/yusufadam",
      ],
    },
    {
      name: "Fauziya Mohammed",
      role: "Product Designer | Inclusive Design Advocate",
      socials: [
        "https://twitter.com/fauziya",
        "https://linkedin.com/in/fauziyamohammed",
      ],
    },
    {
      name: "Rashid Mudasiru",
      role: "Software Engineer | Gemma & MaaS Expert",
      socials: [
        "https://twitter.com/rashidmudasiru",
        "https://linkedin.com/in/rashidmudasiru",
      ],
    },
    {
      name: "Saheed Adewumi",
      role: "Google Developer Expert | GenAI Specialist",
      socials: [
        "https://twitter.com/saheed",
        "https://linkedin.com/in/saheedadewumi",
      ],
    },
    {
      name: "Alheri",
      role: "WTM Ambassador | Women in Tech Leader",
      socials: ["https://twitter.com/alheri", "https://linkedin.com/in/alheri"],
    },
  ];

  return (
    <section
      id="speakers"
      className="w-full py-12 px-6 md:px-12 lg:px-20 space-y-6 text-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold">Speakers</h2>
      <p className="text-base md:text-lg md:max-w-[60%] mx-auto">
        Meet the voices shaping DevFest Maiduguri 2025. Each speaker brings
        unique expertise and insight to the stage.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            src={ForiImage}
            alt="Fori Image"
            className="w-full max-w-[400px] h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-[60%] text-left rounded-xl overflow-hidden shadow-md">
          {speakers.map((speaker, index) => (
            <SpeakerRow
              key={speaker.name}
              {...speaker}
              index={index}
              total={speakers.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
