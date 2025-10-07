"use client";

import React from "react";

const DevFestBanner = () => {
  return (
    <div className="relative w-full bg-yellow-400 py-8 overflow-hidden">
      {/* Background lines or accents */}
      <div className="absolute top-0 left-0 w-full h-2 bg-white opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white opacity-50"></div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left side: FOMO text */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            FOMO IS REAL HERE
          </h1>
          <p className="text-xl md:text-2xl text-white">
            I JUST WANT MATCH & SWAGS *
          </p>
        </div>

        {/* Center: DevFest logo and title */}
        <div className="flex flex-col items-center">
          {/* Google Dev square - using inline SVG for simplicity */}
          <div className="mb-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="0" width="20" height="20" fill="#4285F4" />
              <rect x="20" y="0" width="20" height="20" fill="#34A853" />
              <rect x="0" y="20" width="20" height="20" fill="#FBBC05" />
              <rect x="20" y="20" width="20" height="20" fill="#EA4335" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            DevFest 2025 *
          </h2>
        </div>

        {/* Right side: Giveaways */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl md:text-2xl text-white">GET</span>
            <span className="text-2xl">↑</span>
            <span className="text-2xl">🎁</span>
          </div>
          <p className="text-xl md:text-2xl text-white">GIVEAWAYS</p>
        </div>
      </div>

      {/* Decorative stars or accents */}
      <div className="absolute top-4 right-4 text-white text-2xl opacity-75">
        *
      </div>
      <div className="absolute bottom-4 left-4 text-white text-2xl opacity-75">
        *
      </div>
    </div>
  );
};

export default DevFestBanner;
