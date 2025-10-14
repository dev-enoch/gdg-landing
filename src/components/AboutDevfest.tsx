import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImg from "../../public/images/about.png";

function AboutDevfest() {
  return (
    <section
      id="about"
      className="relative w-full text-center text-white overflow-hidden"
    >
      <Image
        src={aboutImg}
        alt="About DevFest Maiduguri 2025"
        fill
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-16">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
          About DevFest Maiduguri 2025
        </h2>

        <p className="text-sm sm:text-base md:text-lg max-w-[80%] md:max-w-[60%] mx-auto">
          DevFest Maiduguri is part of Google Developers Group&apos;s global
          festival of tech, bringing developers, designers, and innovators
          together to learn, build, and celebrate technology. This year marks
          our 5th Anniversary, and we&apos;re making it bigger and better than
          ever.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
            <Link
              href="https://gdg.community.dev/e/mzbnsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#F9AB00] text-white rounded-full inline-block"
            >
              Join the Celebration 🥳
            </Link>
          </div>

          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
            <button className="px-6 py-2 bg-transparent text-white rounded-full">
              View Throwback Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDevfest;
