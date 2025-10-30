"use client";

import { Ticket, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    {
      name: "Agenda",
      href: "#agenda",
    },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
    { name: "Venue", href: "#venue" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-black fixed top-0 left-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Image
            src="/images/logo.png"
            alt="GDG logo"
            width={30}
            height={30}
            className="w-8 sm:w-9 h-auto"
            loading="lazy"
          />
          <span className="text-lg sm:text-xl text-black font-normal">
            GDG Maiduguri
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-black font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={"_self"}
              rel={undefined}
              className="hover:text-[#428EFF] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px] whitespace-nowrap">
            <Link
              href="https://gdg.community.dev/e/mzbnsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-[#F9AB00] text-white rounded-full font-semibold text-sm whitespace-nowrap"
            >
              <Ticket size={16} />
              Get Tickets
            </Link>
          </div>
        </div>

        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`lg:hidden fixed top-[60px] left-0 w-full bg-white border-t border-black transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4 py-6 text-black">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={"_self"}
              rel={undefined}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium hover:text-[#428EFF] transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="relative inline-block rounded-full bg-gradient-to-r from-[#428EFF] to-[#E74436] p-[2px] whitespace-nowrap">
            <Link
              href="https://gdg.community.dev/e/mzbnsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#F9AB00] text-white rounded-full font-semibold text-sm whitespace-nowrap"
            >
              <Ticket size={16} />
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
