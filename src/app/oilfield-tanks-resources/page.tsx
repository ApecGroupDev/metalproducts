import React from 'react';
import Hero from './sections/hero';
import Resources from './sections/resources';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oil-Water Separators Built to Last – USA Made",
  description: "Discover premium oil-water separators made in the USA, ideal for industrial and commercial applications. Ships nationwide.",
  alternates: {
    canonical: 'https://www.metalproductsusa.com/oil-and-water-separator',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <Resources/>
    </div>
  );
};

export default Home;