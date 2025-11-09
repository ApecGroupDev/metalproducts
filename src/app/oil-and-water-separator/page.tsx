import React from 'react';
import { Metadata } from 'next';
import Hero_Separator from './sections/hero_separator';
import Intro_Separator from './sections/intro_separator';
import Choose_Separator from './sections/choose_separator';
import Features_Separator from './sections/features_separator';
import Benefits_Separator from './sections/benefits_separator';
import CTA from '../contact/sections/cta';
import PDFs_Separator from './sections/pdfs_separator';
import Concerns_Separator from './sections/concerns_separator';
import Trust_Separator from './sections/trust_separator';
import FAQ_Separator from './sections/faq_separator';

export const metadata: Metadata = {
  title: "Oil-Water Separators Built to Last – USA Made",
  description: "Discover premium oil-water separators made in the USA, ideal for industrial and commercial applications. Ships nationwide.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/oil-and-water-separator',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero_Separator />
      <Intro_Separator />
      <Choose_Separator />
      <Features_Separator />
      <Benefits_Separator />
      <CTA />
      <PDFs_Separator />
      <Concerns_Separator />
      <Trust_Separator />
      <FAQ_Separator />
    </div>
  );
};

export default Home; 