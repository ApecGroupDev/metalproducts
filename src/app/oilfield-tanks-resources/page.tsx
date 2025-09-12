import React from 'react';
import Hero from './sections/hero';
import Resources from './sections/resources';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reliable Oilfield Tanks for Storage & Safety",
  description: "Find oilfield tanks made for secure storage and environmental safety. Designed to handle demanding oilfield conditions.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/oilfield-tanks-resources',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <Resources />
    </div>
  );
};

export default Home;