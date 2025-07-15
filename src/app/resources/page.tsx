import React from 'react';
import Hero from './sections/hero';
import Resources from './sections/resources';

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