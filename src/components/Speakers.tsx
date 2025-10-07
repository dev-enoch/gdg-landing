import Image from "next/image";
import React from "react";
import { Twitter, Linkedin } from "lucide-react";
import ForiImage from "../../public/images/fori-image.png";

const SpeakerRow = ({
  name,
  role,
  socials,
  index,
  total,
}: {
  name: string;
  role: string;
  socials: string[];
  index: number;
  total: number;
}) => {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <div
      className={`flex items-center justify-between flex-wrap md:flex-nowrap px-4 py-4 ${
        isFirst ? "bg-[#F6B819] rounded-t-xl" : "bg-white"
      } ${!isLast ? "border-b border-[#F6B819]" : ""}`}
    >
      {/* Left: Name and Role */}
      <div className="flex flex-col md:flex-row md:items-center flex-grow md:space-x-8">
        <div className="md:flex-1">
          <h3 className="font-bold text-base md:text-lg leading-tight">
            {name}
          </h3>
        </div>
        <div className="md:flex-[2] mt-1 md:mt-0">
          <p className="text-sm text-gray-700 leading-tight">{role}</p>
        </div>
      </div>

      {/* Right: Social Icons (aligned with text even on mobile) */}
      <div className="flex items-center space-x-3 ml-auto mt-3 md:mt-0">
        {socials.map((social) => {
          const icon = social.includes("twitter") ? (
            <Twitter size={18} />
          ) : social.includes("linkedin") ? (
            <Linkedin size={18} />
          ) : null;
          return (
            <a
              key={social}
              href={social}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#428EFF] transition-colors"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

function Speakers() {
  const speakers = [
    {
      name: "Usman Fori",
      role: "Product Manager at GDG Maiduguri",
      socials: [
        "https://twitter.com/usmanfori",
        "https://linkedin.com/in/usmanfori",
      ],
    },
    {
      name: "Yusuf Adam",
      role: "Product Manager at DevConnect",
      socials: [
        "https://twitter.com/yusufadam",
        "https://linkedin.com/in/yusufadam",
      ],
    },
    {
      name: "Queenex Phil",
      role: "Developer Relations Specialist at GDG Maiduguri",
      socials: [
        "https://twitter.com/queenexphil",
        "https://linkedin.com/in/queenexphil",
      ],
    },
    {
      name: "Maryam Bukar",
      role: "Software Engineer at NorthTech Hub",
      socials: [
        "https://twitter.com/maryambukar",
        "https://linkedin.com/in/maryambukar",
      ],
    },
    {
      name: "Ali Goni",
      role: "UI/UX Designer at Crevix Technologies",
      socials: [
        "https://twitter.com/aligoni",
        "https://linkedin.com/in/aligoni",
      ],
    },
    {
      name: "Abdullahi Modu",
      role: "Backend Developer at Cloud360",
      socials: [
        "https://twitter.com/abdullahimodu",
        "https://linkedin.com/in/abdullahimodu",
      ],
    },
    {
      name: "Zainab Kyari",
      role: "Data Analyst at TechAid Africa",
      socials: [
        "https://twitter.com/zainabkyari",
        "https://linkedin.com/in/zainabkyari",
      ],
    },
    {
      name: "Mohammed Umar",
      role: "AI Engineer at Bornu Innovation Lab",
      socials: [
        "https://twitter.com/mohammedumar",
        "https://linkedin.com/in/mohammedumar",
      ],
    },
  ];

  return (
    <section
      id="speakers"
      className="w-full py-12 px-6 md:px-12 lg:px-20 space-y-6 text-center"
    >
      <h2 className="text-2xl md:text-4xl font-bold">Featured Speakers</h2>
      <p className="text-base md:text-lg md:max-w-[60%] mx-auto">
        We&apos;ve raised the bar this year with our impressive lineup of
        speakers, each prepared to share valuable insights on different aspects
        of the tech community.
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            src={ForiImage}
            alt="Fori Image"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Speaker List */}
        <div className="w-full md:w-[60%] text-left rounded-xl overflow-hidden">
          {speakers.map((speaker, index) => (
            <SpeakerRow
              key={speaker.name}
              name={speaker.name}
              role={speaker.role}
              socials={speaker.socials}
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
