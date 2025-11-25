'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/contact') {
      // If already on the contact page, just scroll smoothly
      const target = document.getElementById('ContactPageForm');
      if (target) {
        const yOffset = -200;
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // If on another page, go to /contact and include a hash in the URL
      router.push('/contact#ContactPageForm');
    }
  };

  React.useEffect(() => {
    // When on the contact page and hash exists, scroll automatically
    if (pathname === '/contact' && window.location.hash === '#ContactPageForm') {
      const target = document.getElementById('ContactPageForm');
      if (target) {
        setTimeout(() => {
          const yOffset = -200;
          const y =
            target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 400); // small delay to ensure DOM is ready
      }
    }
  }, [pathname]);

  return (
    <section className="relative bg-gradient-to-b from-[#111] via-[#161616] to-[#1A1A1A] text-white py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-10 text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-[#c62931] mb-4 tracking-tight"
        >
          Let’s Get Started
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl lg:max-w-3xl mb-10"
        >
          Your project deserves tanks built with experience and engineered for performance.
          Let’s talk:
        </motion.p>

        {/* Contact Info */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Phone className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base sm:text-lg font-semibold">770-945-8383</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <Mail className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base sm:text-lg font-semibold">sales@metalproductsusa.com</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <MapPin className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base sm:text-lg font-semibold">
              725 Main Street, Suwanee, GA 30024, USA
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <a
            href="/contact#ContactPageForm"
            onClick={handleSmoothScroll}
            className="group bg-[#c62931] hover:bg-[#a91f27] px-6 py-3 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 transition-all"
          >
            Fill Out Our Contact Form
            <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto lg:mx-0 italic"
        >
          Thank you for considering{' '}
          <span className="text-white font-semibold">Metal Products USA</span> — where expertise
          meets reliability, and your tank project is our priority.
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
