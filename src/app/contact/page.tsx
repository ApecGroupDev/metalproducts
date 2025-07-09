import React from 'react';
import Hero from './sections/hero';
import MainContact from './sections/main';

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