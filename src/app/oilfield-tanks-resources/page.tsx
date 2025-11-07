import React from 'react';
import { Metadata } from 'next';
import Hero_OTR from './sections/hero_OTR';
import Intro_OTR from './sections/intro_OTR';
import Features_OTR from './sections/features_OTR';
import Benefits_OTR from './sections/benefits_OTR';
import CTA from '../contact/sections/cta';
import Resources from '../home/sections/resources';
import Trust_OTR from './sections/trust_OTR';
import FAQ_OTR from './sections/faq_OTR';

export const metadata: Metadata = {
  title: "Reliable Oilfield Tanks for Storage & Safety",
  description: "Find oilfield tanks made for secure storage and environmental safety. Designed to handle demanding oilfield conditions.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/oilfield-tanks-resources',
  },
};

const Home: React.FC = () => {
  return (
    <div className='flex flex-col'>
      {/* Sections */}
      <Hero_OTR />
      <Intro_OTR />
      <Features_OTR />
      <Benefits_OTR />
      <Resources />
      <CTA />
      <Trust_OTR />
      <FAQ_OTR />
    </div>
  );
};

export default Home;