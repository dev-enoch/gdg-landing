import AboutDevfest from "@/components/AboutDevfest";
import DPGenerator from "@/components/DPGenerator";
import Expectation from "@/components/Expectation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToRegister from "@/components/HowToRegister";
import NavBar from "@/components/NavBar";
import Partners from "@/components/Partners";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import Venue from "@/components/Venue";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 pt-10 sm:pt-12 lg:pt-14">
      <NavBar />
      <Hero />
      <Venue />
      <Expectation />

      <div className="w-full">
        <Image
          src="/images/DF25-KeyArt-Horizontal.png"
          alt="DevFest Brand banner"
          className="w-full h-auto object-cover"
          height={175}
          width={1436}
          loading="lazy"
        />
      </div>

      <Speakers />
      <Partners />
      <AboutDevfest />
      <Tickets />
      <DPGenerator />
      <HowToRegister />
      <Footer />
    </main>
  );
}

export default Page;
