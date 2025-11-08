import React from 'react';
import { Metadata } from 'next';
import Hero_About from './sections/hero_about';
import Timeline_About from './sections/timeline_about';
import Commitment_About from './sections/commitment_about';
import CTA from '../contact/sections/cta';
import FAQ_About from './sections/faq_about';

export const metadata: Metadata = {
  title: "About Metal Products USA – Tank Manufacturers",
  description: "Learn about Metal Products USA, trusted tank manufacturers with decades of experience in custom industrial tank solutions.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/about',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero_About />
      <Timeline_About />
      <Commitment_About />
      <CTA />
      <FAQ_About />
    </div>
  );
};

export default Home;