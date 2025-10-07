import Image from "next/image";
import React from "react";

function HowToRegister() {
  return (
    <div className="p-4 space-y-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold">How to Register</h2>
      <p className="md:max-w-[60%] md:w-full md:mx-auto">
        Joining the Devfest is simple! Just follow these quick steps to secure
        your spot.
      </p>

      <div className="flex justify-center">
        <Image
          src="/images/register.png"
          width={800}
          height={600}
          alt="How to Register"
          className="w-full md:max-w-[80%] h-auto object-contain"
          loading="lazy"
          priority={false}
        />
      </div>
    </div>
  );
}

export default HowToRegister;
