"use client";

import Image from "next/image";
import React from "react";

import partner1 from "../../public/images/partners/partner1.png";
import partner2 from "../../public/images/partners/partner2.png";
import partner3 from "../../public/images/partners/partner3.png";
import partner4 from "../../public/images/partners/partner4.png";
import partner5 from "../../public/images/partners/partner5.png";
import partner6 from "../../public/images/partners/partner6.png";
import partner7 from "../../public/images/partners/partner7.png";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];

function Partners() {
  return (
    <section
      id="sponsors"
      className="w-full text-center space-y-4 overflow-hidden"
    >
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
        Partners & Sponsors
      </h2>
      <p className="text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[60%] mx-auto">
        We&apos;re proud to be supported by organizations that make DevFest
        Maiduguri 2025 possible.
      </p>

      <div className="relative w-full pt-2 overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 px-6">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-16 w-auto object-contain"
                priority={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Partners;
