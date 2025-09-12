import React from 'react';
import Hero from './sections/hero';
import Main from './sections/main';
import PDFs from './sections/pdfs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Above Ground Gas Tanks – Industrial Strength",
  description: "Get high-quality above ground gas tanks made for tough jobs. Corrosion-resistant, secure, and easy to maintain.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/above-ground-tank',
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