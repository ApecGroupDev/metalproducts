"use client";

import React from "react";

const GoogleMaps: React.FC = () => {
  return (
    <div className='items-center w-full mx-auto h-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 my-20'>
      {/* Google Maps Section */}
      <h2 className='text-center text-4xl font-semibold uppercase text-gray-800 mb-4'>
        Find Us on Google Maps
      </h2>
      <div className='h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl w-full'>
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
  );
};

export default GoogleMaps;