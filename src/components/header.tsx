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

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`max-w-[2560px] fixed top-0 w-full z-30 transition-transform duration-300 ${isVisible ? "top-0" : "top-full"
        }`}
    >
      {/* Mobile Header */}
      <div className='scrn-900:hidden container min-w-full relative flex items-center py-4'>

        {/* left Logo */}
        <div className='absolute pt-10 ps-4 inset-0 flex items-center'>
          <Link href="/">
            <Image
              src="/images/logos/Logo_MPC_Main.png"
              alt="Logo"
              width={1315}
              height={1206}
              className='h-10 w-auto'
            />
          </Link>
        </div>

        {/* Menu Button (Right) */}
        <button
          className='absolute right-4 top-10 transform -translate-y-1/2 text-[#c62931] focus:outline-none z-20' onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-5xl">×</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

        {/* Mobile Navigation */}
        <nav
          className={`text-white absolute left-0 right-0 top-20 bg-white/30 backdrop-blur-md p-6 rounded-md z-10 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          {["/home", "/about", "/resources", "/contact"].map(
            (path) => (
              <Link
                key={path}
                href={path}
                className={`block text-lg font-medium tracking-widest text-gray-800 hover:text-[#c62931] py-2 ${pathname.startsWith(path) ? "text-[#c62931]" : ""
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Desktop Header - 3 Grid Layout */}
      <div className='hidden scrn-900:grid grid-cols-2 items-center me-12 scrn-900:p-2 scrn-1000:p-4 scrn-1900:p-6'>
        {/* Left: Logo */}
        <div className='flex items-center'>
          <Link href="/">
            <Image
              src="/images/logos/Logo_MPC_Main.png"
              alt="Logo"
              width={1315}
              height={1206}
              className='w-auto scrn-750:h-16 scrn-1000:h-12 scrn-1250:h-20'
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className='flex z-10 justify-end scrn-900:space-x-12 scrn-1000:space-x-16 scrn-1900:space-x-24 font-semibold'>

          {["/home", "/about", "/contact"].map((path) => (
            <Link
              key={path}
              href={path}
              className={`capitalize scrn-750:text-xs scrn-1000:text-sm scrn-1900:text-xl text-gray-800 hover:text-[#c62931] transition-colors duration-200 relative ${pathname.startsWith(path) ? "text-red-800" : ""}`}
            >
              {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              {pathname.startsWith(path) && (
                <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-[#c62931]' />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
