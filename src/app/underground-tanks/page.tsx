import React from 'react';
import Hero from '@/app/underground-tanks/sections/hero';
import Main from './sections/main';
import PDFs from './sections/pdfs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Underground Storage Tanks Built for Industry",
  description: "Get heavy-duty underground storage tanks that meet EPA standards and perform in the toughest environments.",
  alternates: {
    canonical: 'https://www.metalproductsusa.com/underground-tanks',
  },
};

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