import React from 'react';
import { Metadata } from 'next';
import Hero_AboveGround from './sections/hero_aboveground';
import Intro_AboveGround from './sections/intro_aboveground';
import Choose_AboveGround from './sections/choose_aboveground';
import Features_AboveGround from './sections/features_aboveground';
import Benefits_AboveGround from './sections/benefits_aboveground';
import CTA from '../contact/sections/cta';
import Concerns_AboveGround from './sections/concerns_aboveground';
import Trust_AboveGround from './sections/trust_aboveground';
import FAQ_AboveGround from './sections/faq_aboveground';

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
      <Hero_AboveGround />
      <Intro_AboveGround />
      <Choose_AboveGround />
      <Features_AboveGround />
      <Benefits_AboveGround />
      <CTA />
      <Concerns_AboveGround />
      <Trust_AboveGround />
      <FAQ_AboveGround />
    </div>
  );
};

export default Home;