import { Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center space-y-5 px-4 pt-16 bg-[#428EFF] text-white text-center overflow-hidden">
      {/* Event Date Button */}
      <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
        <button className="px-6 py-2 bg-[#428EFF] text-white rounded-full text-sm sm:text-base">
          20th Nov, 2025 | 9:00 AM - 2:00 PM
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        DevFest
        <br />
        Maiduguri 2025
      </h1>

      {/* Connect · Learn · Innovate */}
      <p className="text-sm sm:text-base md:text-lg flex items-center justify-center gap-2">
        <span>Connect</span>
        <span className="text-xl leading-none">·</span>
        <span>Learn</span>
        <span className="text-xl leading-none">·</span>
        <span>Innovate</span>
      </p>

      {/* CTA Button */}
      <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px]">
        <Link
          href="https://gdg.community.dev/e/mzbnsy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-[#F9AB00] text-white rounded-full font-semibold text-sm sm:text-base"
        >
          <Ticket size={18} />
          Get your free tickets
        </Link>
      </div>

      {/* Decorative Row */}
      <div className="w-full flex items-end justify-center mt-6 sm:mt-8">
        <div className="flex items-end justify-center gap-3 flex-nowrap">
          {/* Left Star */}
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

          {/* Mural */}
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

          {/* Right Star */}
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
      </div>
    </section>
  );
}

export default Hero;
