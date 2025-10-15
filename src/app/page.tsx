import AboutDevfest from "@/components/AboutDevfest";
import DPGenerator from "@/components/DPGenerator";
import Expectation from "@/components/Expectation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToRegister from "@/components/HowToRegister";
import NavBar from "@/components/NavBar";
import Partners from "@/components/Partners";
import SlidingBanner from "@/components/SlidingBanner";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import Venue from "@/components/Venue";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col pt-10 sm:pt-10 md:pt-12 lg:pt-14">
      <NavBar />
      <div className="flex flex-col">
        <Hero />
      </div>
      <SlidingBanner />

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <Venue />
        <Expectation />

        <Image
          src="/images/DF25-KeyArt-Horizontal.png"
          alt="DevFest Brand banner"
          className="w-full h-auto object-cover"
          height={175}
          width={1436}
          loading="lazy"
        />

        <Speakers />
        <Partners />
        <AboutDevfest />
        <Tickets />
        <DPGenerator />
        <HowToRegister />
        <Footer />
      </div>
    </main>
  );
}

export default Page;
