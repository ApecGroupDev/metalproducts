import React from 'react';
import Hero from '@/app/about/sections/hero';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
    </div>
  );
};

export default Home;