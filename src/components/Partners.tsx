import Image from "next/image";
import React from "react";
import sponsors from "../../public/images/sponsors.png";

function Partners() {
  return (
    <section id="sponsors" className="w-full text-center space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
        Partners & Sponsors
      </h2>
      <p className="text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[60%] mx-auto">
        We&apos;re proud to be supported by organizations that make DevFest
        Maiduguri 2025 possible.
      </p>
      <div className="relative w-full pt-2">
        <Image
          src={sponsors}
          alt="DevFest sponsors"
          className="w-full h-auto object-contain"
          priority={false}
          loading="lazy"
          sizes="100vw"
        />
      </div>
    </section>
  );
}

export default Partners;
