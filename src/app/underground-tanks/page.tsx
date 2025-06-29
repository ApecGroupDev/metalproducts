import React from 'react';
import Hero from '@/app/underground-tanks/sections/hero';
import Main from './sections/main';
import PDFs from './sections/pdfs';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero />
      <Main />
      <PDFs/>
    </div>
  );
};

export default Home;