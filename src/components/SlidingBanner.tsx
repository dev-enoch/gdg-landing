"use client";

import React from "react";
import Image from "next/image";
import devfestLogo from "../../public/images/logo.png"; // Replace with your actual logo

const SlidingBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent flex items-center justify-center py-0 my-0">
      <div className="relative w-full flex flex-col items-center justify-center py-20 sm:py-24 md:py-28">
        {/* Top stripe */}
        <div className="absolute w-[160%] bg-[#fbbc04] overflow-hidden flex items-center justify-center top-1/2 -translate-y-[55%] h-16 sm:h-20 md:h-24 rotate-down">
          <div className="flex whitespace-nowrap text-black text-lg sm:text-xl md:text-2xl tracking-tight animate-slide-right">
            <BannerContent />
            <BannerContent />
            <BannerContent />
          </div>
        </div>

        {/* Bottom stripe */}
        <div className="absolute w-[160%] bg-[#fbbc04] overflow-hidden flex items-center justify-center top-1/2 -translate-y-[45%] h-16 sm:h-20 md:h-24 rotate-up">
          <div className="flex whitespace-nowrap text-black text-lg sm:text-xl md:text-2xl tracking-tight animate-slide-left">
            <BannerContent />
            <BannerContent />
            <BannerContent />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-left {
          display: flex;
          animation: slide-left 25s linear infinite;
        }

        .animate-slide-right {
          display: flex;
          animation: slide-right 25s linear infinite;
        }

        /* Base rotation for desktop */
        .rotate-up {
          transform: rotate(-6deg);
        }
        .rotate-down {
          transform: rotate(6deg);
        }

        /* More rotation on smaller screens */
        @media (max-width: 1024px) {
          .rotate-up {
            transform: rotate(-7deg);
          }
          .rotate-down {
            transform: rotate(7deg);
          }
        }

        @media (max-width: 768px) {
          .rotate-up {
            transform: rotate(-9deg);
          }
          .rotate-down {
            transform: rotate(9deg);
          }
        }

        @media (max-width: 480px) {
          .rotate-up {
            transform: rotate(-11deg);
          }
          .rotate-down {
            transform: rotate(11deg);
          }
        }
      `}</style>
    </section>
  );
};

const BannerContent: React.FC = () => {
  return (
    <span className="px-12 sm:px-16 flex items-center gap-6 sm:gap-8 md:gap-10">
      FOMO IS REAL HERE
      <span className="text-white text-4xl sm:text-5xl leading-none">*</span>
      <Image
        src={devfestLogo}
        alt="DevFest"
        className="h-8 sm:h-10 md:h-12 w-auto object-contain"
      />
      <span className="font-extrabold">DevFest</span>
      <span className="px-3 sm:px-4 py-1 bg-white border border-black rounded-full text-sm sm:text-base md:text-lg font-medium">
        2025
      </span>
      <span className="text-white text-4xl sm:text-5xl leading-none">*</span>I
      JUST WANT MATCH & SWAGS
      <span className="text-white text-4xl sm:text-5xl leading-none">*</span>
      🎁 GET GIVEAWAYS
    </span>
  );
};

export default SlidingBanner;
