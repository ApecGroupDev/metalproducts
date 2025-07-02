"use client";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className='text-white text-3xl font-black rounded-full px-5 py-3 hover:scale-150'
    >
      <FaArrowUpLong/>
    </button>
  );
};

export default ScrollToTopButton;
