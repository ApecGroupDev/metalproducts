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
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[#f7f4f0]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-[#f7f4f0]/80 backdrop-blur-sm"
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

        .hd-display { font-family: 'Oswald', sans-serif; }
        .hd-mono { font-family: 'Space Mono', monospace; }

        .hd-nav-link {
          position: relative;
          letter-spacing: 0.12em;
        }
        .hd-nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c62931;
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hd-nav-link:hover::after,
        .hd-nav-link.active::after {
          width: 100%;
        }

        .hd-dropdown-item {
          position: relative;
          padding-left: 1rem;
          border-left: 2px solid transparent;
          transition: all 0.2s ease;
        }
        .hd-dropdown-item:hover,
        .hd-dropdown-item.active {
          border-left-color: #c62931;
          background: rgba(198, 41, 49, 0.05);
        }
      `}</style>

      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-[#c62931] via-[#c62931] to-[#c62931]/30" />

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between max-w-[1440px] mx-auto px-8 lg:px-16 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logos/Logo_MPC_Main.png"
            alt="Metal Products USA Logo"
            width={230}
            height={70}
            className="h-12 lg:h-14 w-auto transition-all duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 lg:gap-12">
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
                  <Link
                    href={path}
                    className={`hd-display hd-nav-link flex items-center gap-1.5 text-sm lg:text-[15px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isTanksActive
                        ? "text-[#c62931]"
                        : "text-[#1a1a1a] hover:text-[#c62931]"
                    } ${isTanksActive ? "active" : ""}`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        tanksDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Dropdown Panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60 transition-all duration-200 ${
                      tanksDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#f7f4f0] border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden">
                      <div className="py-2">
                        {tankDropdownLinks.map(({ label, path }) => {
                          const isItemActive = pathname.startsWith(path);
                          return (
                            <Link
                              key={path}
                              href={path}
                              className={`hd-dropdown-item hd-display block px-5 py-3 text-sm font-medium uppercase tracking-[0.1em] transition-all duration-200 ${
                                isItemActive
                                  ? "active text-[#c62931]"
                                  : "text-[#1a1a1a] hover:text-[#c62931]"
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
                className={`hd-display hd-nav-link text-sm lg:text-[15px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#c62931] active"
                    : "text-[#1a1a1a] hover:text-[#c62931]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hd-mono ml-4 px-5 py-2.5 bg-[#c62931] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#a82228] transition-colors duration-300"
          >
            Get Quote
          </Link>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-3">
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
          className="relative w-8 h-8 flex items-center justify-center text-[#c62931] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f7f4f0] border-t border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-6 px-6">
          {navLinks.map(({ label, path, hasDropdown }) => {
            const isActive =
              path === "/" ? pathname === "/" : pathname.startsWith(path);

            if (hasDropdown) {
              return (
                <div key={path} className="border-b border-black/5 py-4">
                  <button
                    onClick={() => setMobileTanksOpen(!mobileTanksOpen)}
                    className={`hd-display flex items-center justify-between w-full uppercase text-base font-medium tracking-[0.15em] transition-colors duration-300 ${
                      isTanksActive ? "text-[#c62931]" : "text-[#1a1a1a]"
                    }`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileTanksOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`flex flex-col mt-3 ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      mobileTanksOpen
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
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
                          className={`hd-display text-sm font-medium uppercase tracking-[0.1em] pl-3 py-2 border-l-2 transition-all duration-200 ${
                            isItemActive
                              ? "text-[#c62931] border-[#c62931]"
                              : "text-[#555] border-transparent hover:text-[#c62931] hover:border-[#c62931]/50"
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
                className={`hd-display border-b border-black/5 py-4 uppercase text-base font-medium tracking-[0.15em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#c62931]"
                    : "text-[#1a1a1a] hover:text-[#c62931]"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hd-mono mt-6 py-3 bg-[#c62931] text-white text-center text-xs tracking-[0.2em] uppercase hover:bg-[#a82228] transition-colors duration-300"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
