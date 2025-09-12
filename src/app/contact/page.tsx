import React from 'react';
import Hero from './sections/hero';
import MainContact from './sections/main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Talk to Trusted Tank Manufacturers – Contact Us",
  description: "Need a tank built to spec? Contact Metal Products USA today for expert support and fast response times.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/contact',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <MainContact/>
    </div>
  );
};

export default Home;