"use client";

import React, { useState, useEffect, forwardRef } from "react";
import Image from "next/image";

import Logo from "@/assets/group-logo.svg";
import Castle from "@/assets/castle.svg";
import Shape from "@/assets/shape.svg";
import Globe from "@/assets/globe.svg";
import LogoYear from "@/assets/DF25-Logo.svg";
import Anniversary from "@/assets/Anniversary.svg";
import LocationIcon from "@/assets/location.svg";
import Sponsors from "@/assets/sponsors.svg";
import Usman from "@/assets/usman.png";

type Props = {
  tag?: string;
  name?: string;
  image?: string | null;
};

type ImageScale = {
  width: number;
  height: number;
  x: number;
  y: number;
};

const TARGET_WIDTH = 250;
const TARGET_HEIGHT = 290;

function PhotoBoardInner(
  { tag, name, image }: Props,
  ref: React.Ref<HTMLDivElement>
) {
  const [imageScale, setImageScale] = useState<ImageScale>({
    width: TARGET_WIDTH,
    height: TARGET_HEIGHT,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (!image) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = image;

    img.onload = () => {
      const imgWidth = img.width;
      const imgHeight = img.height;
      const imgAspect = imgWidth / imgHeight;
      const targetAspect = TARGET_WIDTH / TARGET_HEIGHT;

      let scaledWidth = TARGET_WIDTH;
      let scaledHeight = TARGET_HEIGHT;
      let offsetX = 0;
      let offsetY = 0;

      if (imgAspect > targetAspect) {
        scaledHeight = TARGET_HEIGHT;
        scaledWidth = imgWidth * (TARGET_HEIGHT / imgHeight);
        offsetX = -(scaledWidth - TARGET_WIDTH) / 2;
      } else {
        scaledWidth = TARGET_WIDTH;
        scaledHeight = imgHeight * (TARGET_WIDTH / imgWidth);
        offsetY = -(scaledHeight - TARGET_HEIGHT) / 2;
      }

      const portraitBias = imgAspect < 0.7 ? 0.05 : 0.01;
      offsetY -= (scaledHeight - TARGET_HEIGHT) * portraitBias;

      setImageScale({
        width: scaledWidth,
        height: scaledHeight,
        x: offsetX,
        y: offsetY,
      });
    };
  }, [image]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full p-3 md:p-6">
        <div className="bg-[#FFFDEB] w-full h-full rounded-3xl flex flex-col justify-between">
          {/* Top section */}
          <div>
            <div className="flex justify-between items-start">
              <Image
                src={Logo}
                alt="devfest-maiduguri"
                className="w-20 sm:w-24"
              />
              <Image src={Castle} alt="castle" className="w-28 sm:w-36" />
            </div>

            <div className="flex items-center justify-between gap-4 sm:gap-6 mt-2">
              {/* Left text area */}
              <div className="flex flex-col justify-center gap-3 sm:gap-4 flex-none">
                {/* Tag shape */}
                <div className="relative w-[120px] sm:w-[160px] md:w-[180px]">
                  <Image src={Shape} alt="shape" className="w-full h-auto" />
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[10px] sm:text-sm md:text-base font-medium font-poppins">
                    {tag || "{Tag Hook Here}"}
                  </span>
                </div>

                {/* Name container */}
                <div
                  className="relative flex flex-col items-center justify-center bg-[#F9AB00] text-black font-poppins font-medium text-center"
                  style={{
                    width: "clamp(130px, 20vw, 197px)",
                    height: "clamp(75px, 12vw, 115px)",
                    borderRadius: "clamp(20px, 5vw, 32px)",
                  }}
                >
                  <span className="text-[10px] sm:text-sm md:text-base">
                    {name || "{First Name Here}"}
                  </span>
                  <span className="font-bold text-[10px] sm:text-sm md:text-base">
                    I WILL BE THERE
                  </span>
                </div>
              </div>

              {/* Attendee image fills remaining width */}
              <div className="flex-1 flex justify-end">
                {image ? (
                  <svg
                    viewBox="0 0 250 250"
                    className="bg-white rounded-[clamp(12px,3vw,22px)] w-full max-w-[250px] aspect-square"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="image-clip">
                        <rect x="0" y="0" width="250" height="250" rx="22" />
                      </clipPath>
                    </defs>
                    <image
                      href={image}
                      width="250"
                      height="250"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#image-clip)"
                      crossOrigin="anonymous"
                    />
                  </svg>
                ) : (
                  <Image
                    src={Usman}
                    alt="attendee"
                    className="bg-white rounded-[clamp(12px,3vw,22px)] w-full max-w-[250px] aspect-square object-cover object-center"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Middle section */}
          <div>
            <div className="flex items-center gap-2 sm:gap-[10px] pt-4 sm:pt-[10px]">
              <Image
                src={LogoYear}
                alt="devfest-logo"
                className="w-24 sm:w-32 md:w-36"
              />
              <div className="flex items-baseline gap-1 sm:gap-[6px]">
                <Image
                  src={Globe}
                  alt="globe"
                  className="w-[1em] h-[1em] align-baseline"
                />
                <p className="font-josef text-[12px] sm:text-[18px] font-semibold text-black lowercase leading-none">
                  www.gdgmaiduguri.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 mt-3 flex-nowrap">
              <Image
                src={Anniversary}
                alt="anniversary"
                className="w-16 sm:w-24 md:w-28 flex-shrink-0"
              />
              <div className="flex flex-col gap-1">
                <p className="bg-[#F6B819] rounded-3xl px-2 sm:px-3 py-[4px] sm:py-[6px] text-black text-[8px] sm:text-[10px] md:text-xs font-coolvetica text-center whitespace-nowrap">
                  22nd November, 2025 | 9:00am
                </p>
                <p className="bg-black rounded-3xl px-2 sm:px-3 py-[4px] sm:py-[6px] text-white text-[8px] sm:text-[10px] md:text-xs font-semibold font-josef capitalize flex items-center gap-1 whitespace-nowrap">
                  <Image
                    src={LocationIcon}
                    alt="location"
                    className="w-3 sm:w-4 flex-shrink-0"
                  />
                  Borno State Hotel Conference Hall, Maiduguri
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center">
            <Image src={Sponsors} alt="sponsors" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const PhotoBoard = forwardRef<HTMLDivElement, Props>(PhotoBoardInner);
PhotoBoard.displayName = "PhotoBoard";

export default PhotoBoard;
