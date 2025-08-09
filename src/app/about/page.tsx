import React from 'react';
import Hero from './sections/hero';
import Timeline from './sections/timeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Metal Products USA – Tank Manufacturers",
  description: "Learn about Metal Products USA, trusted tank manufacturers with decades of experience in custom industrial tank solutions.",
  alternates: {
    canonical: 'https://www.metalproductsusa.com/about',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <Timeline />
    </div>
  );
};

export default Home;