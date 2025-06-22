import React from 'react';
import Hero from '@/app/underground-tanks/sections/hero';
import Main from './sections/main';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <Main />
    </div>
  );
};

export default Home;