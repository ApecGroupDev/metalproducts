import React from 'react';
import Hero from '@/app/home/sections/hero';
import History from './sections/history';
import Resources from './sections/resources';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <History />
      <Resources />
    </div>
  );
};

export default Home;