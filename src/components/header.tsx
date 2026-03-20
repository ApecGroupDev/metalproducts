"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const tankDropdownLinks = [
  { label: "Above Ground Tanks", path: "/above-ground-tanks" },
  { label: "Underground Tanks", path: "/underground-tanks" },
  { label: "Oil & Water Separator", path: "/oil-and-water-separator" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [tanksDropdownOpen, setTanksDropdownOpen] = useState(false);
  const [mobileTanksOpen, setMobileTanksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTanksDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "TANKS", path: "/oilfield-tanks-resources", hasDropdown: true },
    { label: "RESOURCES", path: "/resources" },
    { label: "CONTACT", path: "/contact" },
  ];

  const isTanksActive =
    pathname.startsWith("/oilfield-tanks-resources") ||
    tankDropdownLinks.some((l) => pathname.startsWith(l.path));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-[0_1px_6px_rgba(0,0,0,0.08)]`}
    >
      {/* Subtle red accent bar */}
      <div className="h-[2px] bg-gradient-to-r from-[#c62931] via-[#c62931]/70 to-transparent" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between max-w-[2560px] mx-auto px-8 lg:px-16 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/Logo_MPC_Main.png"
            alt="Metal Products USA Logo"
            width={230}
            height={70}
            className="h-14 lg:h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-10 lg:space-x-14 font-medium tracking-wide">
          {navLinks.map(({ label, path, hasDropdown }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            if (hasDropdown) {
              return (
                <div
                  key={path}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setTanksDropdownOpen(true)}
                  onMouseLeave={() => setTanksDropdownOpen(false)}
                >
                  {/* Tanks trigger */}
                  <Link
                    href={path}
                    className={`relative flex items-center gap-1 uppercase text-sm lg:text-base transition-all duration-300 ${isTanksActive
                      ? "text-[#c62931]"
                      : "text-[#111] hover:text-[#c62931]"
                      }`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${tanksDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                    {isTanksActive && (
                      <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[#c62931] rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown Panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-56 transition-all duration-200 ${tanksDropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <div className="bg-gray-100 border border-gray-100 rounded-xl shadow-xl overflow-hidden">
                      <div className="py-2">
                        {tankDropdownLinks.map(({ label, path }) => {
                          const isItemActive = pathname.startsWith(path);
                          return (
                            <Link
                              key={path}
                              href={path}
                              className={`block px-5 py-3 text-sm font-medium transition-all duration-200 ${isItemActive
                                ? "text-[#c62931] bg-red-50"
                                : "text-[#111] hover:text-[#c62931] hover:bg-red-100"
                                }`}
                            >
                              {label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={path}
                href={path}
                className={`relative uppercase text-sm lg:text-base transition-all duration-300 ${isActive
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
      <div className="md:hidden flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-md">
        <Link href="/">
          <Image
            src="/images/logos/Logo_MPC_Main.png"
            alt="Metal Products USA Logo"
            width={180}
            height={60}
            className="h-10 w-auto"
          />
        </Link>

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
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ${isOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0 pointer-events-none"
          } origin-top`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map(({ label, path, hasDropdown }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            if (hasDropdown) {
              return (
                <div key={path} className="flex flex-col items-center w-full">
                  {/* Tanks toggle row */}
                  <button
                    onClick={() => setMobileTanksOpen(!mobileTanksOpen)}
                    className={`flex items-center gap-1 uppercase text-lg font-medium tracking-wider transition-colors duration-300 ${isTanksActive ? "text-[#c62931]" : "text-[#111]"
                      }`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobileTanksOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Mobile sub-links */}
                  <div
                    className={`flex flex-col items-center space-y-2 overflow-hidden transition-all duration-300 ${mobileTanksOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    {tankDropdownLinks.map(({ label, path }) => {
                      const isItemActive = pathname.startsWith(path);
                      return (
                        <Link
                          key={path}
                          href={path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileTanksOpen(false);
                          }}
                          className={`text-base font-medium transition-colors duration-200 ${isItemActive
                            ? "text-[#c62931]"
                            : "text-gray-500 hover:text-[#c62931]"
                            }`}
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`uppercase text-lg font-medium tracking-wider transition-colors duration-300 ${isActive ? "text-[#c62931]" : "text-[#111] hover:text-[#c62931]"
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