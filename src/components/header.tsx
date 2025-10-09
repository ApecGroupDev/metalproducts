"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "RESOURCES", path: "/oilfield-tanks-resources" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-[0_1px_6px_rgba(0,0,0,0.08)]`}
    >
      {/* Subtle red accent bar */}
      <div className="h-[2px] bg-gradient-to-r from-[#c62931] via-[#c62931]/70 to-transparent" />

      {/* Desktop Header */}
      <div className="hidden scrn-750:flex items-center justify-between max-w-[1440px] mx-auto px-8 scrn-1000:px-16 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/Logo_MPC_Main.png"
            alt="Metal Products USA Logo"
            width={230}
            height={70}
            className="h-14 scrn-1000:h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-10 scrn-1000:space-x-14 font-medium tracking-wide">
          {navLinks.map(({ label, path }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);
            return (
              <Link
                key={path}
                href={path}
                className={`relative uppercase text-sm scrn-1000:text-base transition-all duration-300 ${isActive
                    ? "text-[#c62931]"
                    : "text-[#111] hover:text-[#c62931]"
                  }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[#c62931] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="scrn-750:hidden flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-md">
        <Link href="/">
          <Image
            src="/images/logos/Logo_MPC_Main.png"
            alt="Metal Products USA Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu Button */}
        <button
          className="text-[#c62931] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <span className="text-4xl font-light">&times;</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`scrn-750:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ${isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
          } origin-top`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map(({ label, path }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);
            return (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`uppercase text-lg font-medium tracking-wider transition-colors duration-300 ${isActive
                    ? "text-[#c62931]"
                    : "text-[#111] hover:text-[#c62931]"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
