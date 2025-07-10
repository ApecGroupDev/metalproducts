"use client";

import React from "react";
import ContactPageForm from "@/components/contactForm";

const MainContact: React.FC = () => {
  return (
    <div className='bg-transparent flex flex-col items-center scrn-600:justify-center h-auto '>
      <div className='grid mx-4 scrn-600:grid-cols-2 scrn-350:max-w-xs scrn-400:max-w-sm scrn-600:max-w-xl scrn-700:max-w-2xl scrn-850:max-w-3xl scrn-1000:max-w-4xl scrn-1200:max-w-5xl scrn-1400:max-w-6xl scrn-1500:max-w-7xl scrn-1700:max-w-8xl scrn-2000:max-w-9xl scrn-600:gap-x-6 scrn-750:gap-x-10 scrn-1200:gap-x-24 scrn-800:pt-0 scrn-900:pt-0 scrn-1000:pt-0 scrn-1500:pt-24'>
        <div className='h-auto space-y-3 scrn-400:space-y-3 scrn-450:space-y-3 scrn-500:space-y-4 scrn-550:space-y-4 scrn-600:space-y-4 scrn-1200:space-y-12 scrn-400:pt-8 scrn-450:pt-8 scrn-500:pt-4 scrn-600:pt-16 scrn-750:pt-8 scrn-1000:pt-20 scrn-1600:pt-32'>
          <span className='text-[#c62931] font-semibold text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2000:text-5xl'>
            Let’s Talk — We’ve Been Building Trust Since 1941
          </span>
          <p className="text-gray-800 text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2000:text-5xl">
            If you're working on a fueling project — whether it's a new gas station, an upgrade, or environmental compliance — you’ve come to the right place.
          </p>
          <p className="text-gray-900 text-sm scrn-500:text-base scrn-800:text-xl scrn-1500:text-3xl scrn-1700:text-4xl scrn-1900:text-4xl scrn-2000:text-5xl">
            We’ve been manufacturing tanks and separators for over <span className="text-red-600 font-medium">80 years</span>, serving everyone from small contractors
            to major brands like <span className="text-red-600 font-medium">Shell</span>, <span className="text-red-600 font-medium">Texaco</span>,
            <span className="text-red-600 font-medium">Amoco</span>, and <span className="text-red-600 font-medium">QuikTrip</span>.
          </p>
        </div>
        <div className='relative rounded-3xl shadow-2xl mt-6 scrn-400:mt-6 scrn-450:mt-6 scrn-500:mt-8 scrn-550:mt-8 scrn-750:mt-0'>
          <div className='absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl z-0'></div>
          <div className='relative z-10 p-4 scrn-800:p-8 scrn-900:p-10 scrn-1000:p-12 scrn-1250:p-16 scrn-1500:p-24'>
            <span className='text-red-600 font-medium scrn-300:text-base scrn-500:text-xl scrn-600:text-xl scrn-750:text-lg scrn-800:text-lg scrn-900:text-xl scrn-1000:text-xl scrn-1250:text-2xl scrn-1500:text-3xl scrn-1700:text-3xl scrn-1900:text-4xl scrn-2000:text-4xl'>
              FOR MORE INFORMATION
            </span>
            <ContactPageForm />
          </div>
        </div>
        <p className='space-x-2 font-semibold text-nowrap hidden text-transparent pt-6 scrn-400:pt-6 scrn-450:pt-12 scrn-500:pt-8 scrn-550:pt-8 scrn-600:pt-24 scrn-700:pt-20 scrn-750:pt-16 scrn-800:pt-8 scrn-850:pt-8 scrn-900:pt-12 scrn-950:pt-16 scrn-1000:pt-28 scrn-1200:pt-28 scrn-1300:pt-40 scrn-1350:pt-48 scrn-1400:pt-56 scrn-1450:pt-64 scrn-1500:pt-40 scrn-1600:pt-48 scrn-1800:pt-64 scrn-1900:pt-72 scrn-2400:pt-96'>
          <span className='scrn-300:text-2xl scrn-450:text-3xl scrn-600:text-4xl scrn-700:text-5xl scrn-750:text-4xl scrn-800:text-4xl scrn-850:text-5xl scrn-900:text-5xl scrn-1000:text-6xl scrn-1250:text-7xl scrn-1500:text-8xl scrn-1700:text-8xl scrn-1900:text-8xl scrn-2000:text-9xl'>
          </span>
          <span className='scrn-300:text-base scrn-450:text-xl scrn-600:text-2xl scrn-750:text-3xl scrn-800:text-3xl scrn-900:text-3xl scrn-1000:text-4xl scrn-1200:text-5xl scrn-1500:text-5xl scrn-1700:text-6xl scrn-1900:text-6xl scrn-2000:text-7xl'>
          </span>
        </p>
      </div>
      {/* Google Maps Section */}
      <div className="w-full mt-12 px-4 scrn-600:px-10 scrn-800:px-20">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-4 scrn-600:text-2xl scrn-1000:text-3xl">
          Find Us on Google Maps
        </h2>
        <div className="w-4/5 mx-auto h-[300px] scrn-600:h-[400px] scrn-1000:h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8249.398695663318!2d-84.07398252633338!3d34.05086149163947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f597a14f929c43%3A0x571bf2f1a4b46a31!2sMetal%20Products%20Inc!5e1!3m2!1sen!2sph!4v1752131936533!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainContact;