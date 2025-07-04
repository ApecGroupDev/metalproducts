import React from 'react';
import Hero from './sections/hero';
import Timeline from './sections/timeline';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <Timeline/>
    </div>
  );
};

export default Home;