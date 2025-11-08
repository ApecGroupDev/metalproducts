import React from 'react';
import { Metadata } from 'next';
import Hero_Underground from './sections/hero_underground';
import Choose_Underground from './sections/choose_underground';
import Features_Underground from './sections/features_underground';
import Benefits_Underground from './sections/benefits_underground';
import Concerns_Underground from './sections/concerns_underground';
import Trust_Underground from './sections/trust_underground';
import PDFs_Underground from './sections/pdfs_underground';
import CTA from '../contact/sections/cta';
import FAQ_Underground from './sections/faq_underground';

export const metadata: Metadata = {
  title: "Underground Storage Tanks Built for Industry",
  description: "Get heavy-duty underground storage tanks that meet EPA standards and perform in the toughest environments.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/underground-tanks',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero_Underground />
      <Choose_Underground />
      <Features_Underground />
      <Benefits_Underground />
      <CTA />
      <PDFs_Underground />
      <Concerns_Underground />
      <Trust_Underground />
      <FAQ_Underground />
    </div>
  );
};

export default Home;