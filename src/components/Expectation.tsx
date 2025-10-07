import React from "react";
import Image from "next/image";

import exp1 from "../../public/images/exp-1.png";
import exp2 from "../../public/images/exp-2.png";
import exp3 from "../../public/images/exp-3.png";
import exp4 from "../../public/images/exp-4.png";
import exp5 from "../../public/images/exp-5.png";

function Expectation() {
  const exps = [exp1, exp2, exp3, exp4, exp5];

  return (
    <section id="agenda" className="w-full text-center space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
        What to Expect at DevFest
        <br />
        Maiduguri 2025
      </h2>

      <p className="text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[60%] mx-auto">
        Discover inspiring talks, hands-on workshops, and opportunities to
        connect with developers, designers, and tech enthusiasts.
      </p>

      <div className="flex flex-wrap justify-center gap-6 px-2 md:px-0">
        {exps.map((exp, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-[45%] sm:w-[40%] md:w-[28%] lg:w-[26%]"
          >
            <Image
              src={exp}
              alt={`expectation-${i + 1}`}
              className="w-full h-auto object-contain"
              loading="lazy"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
              priority={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expectation;
