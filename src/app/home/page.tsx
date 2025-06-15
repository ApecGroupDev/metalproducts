import React from 'react';
import Hero from '@/app/home/sections/hero';
import History from './sections/history';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <History />
    </div>
  );
};

export default Home;