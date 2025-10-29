"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const socialIcons = [
    {
      href: "https://facebook.com/GDGmaiduguri/",
      src: "/images/fb-icon.png",
      alt: "Facebook",
    },
    {
      href: "https://instagram.com/gdgmaiduguri/",
      src: "/images/instagram_icon.png",
      alt: "Instagram",
    },
    {
      href: "https://twitter.com/gdgmaiduguri",
      src: "/images/x_icon.png",
      alt: "X",
    },
    {
      href: "https://www.youtube.com/@gdgmaiduguri9692",
      src: "/images/youtube_icon.png",
      alt: "YouTube",
    },
  ];

  return (
    <footer className="p-4 flex flex-col gap-4 overflow-x-hidden">
      <motion.div
        className="flex items-center gap-2 whitespace-nowrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/images/logo.png"
          alt="GDG logo"
          width={35}
          height={35}
          className="w-8 sm:w-10 md:w-12 h-auto"
          loading="lazy"
          priority={false}
        />
        <span className="text-lg sm:text-2xl md:text-3xl font-semibold">
          GDG Maiduguri
        </span>
      </motion.div>

      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative w-[200px] sm:w-[300px] md:w-[500px] lg:w-[700px] aspect-[3/2]">
          <Image
            src="/images/5th-anniversary.png"
            alt="5th anniversary"
            fill
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 500px, 700px"
            className="object-contain"
            loading="lazy"
            priority={false}
          />
        </div>
      </motion.div>

      <motion.div
        className="flex flex-nowrap justify-between items-center text-[10px] sm:text-xs md:text-sm w-full whitespace-nowrap"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>Copyright © 2025 Devfest Maiduguri</p>
        <div className="flex gap-3">
          {socialIcons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link href={icon.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="w-4 sm:w-6 md:w-8 h-auto"
                  loading="lazy"
                  priority={false}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
