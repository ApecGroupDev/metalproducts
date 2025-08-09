import React from 'react';
import Hero from './sections/hero';
import Main from './sections/main';
import PDFs from './sections/pdfs';
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
      <Main />
      <PDFs />
    </div>
  );
};

export default Home;