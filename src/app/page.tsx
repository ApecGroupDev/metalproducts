import React from 'react';
import Hero from '@/app/home/sections/hero';
import History from '@/app/home/sections/history';
import Resources from '@/app/home/sections/resources';
import HomePageLayout from './layouts/homepageLayout';
import type { Metadata } from 'next'
import AboutSection from './home/sections/about';
import WhyChooseSection from './home/sections/whyChoose';
import FAQTrust from './home/sections/faqtrust';
import FAQSection from './home/sections/faqsection';
import ContactCTA from './home/sections/cta';

export const metadata: Metadata = {
  title: 'Top Tank Manufacturers | Metal Products USA',
  description: 'Explore USA-made industrial storage tanks from Metal Products USA—trusted manufacturers serving energy, agriculture, fuel, and commercial industries.',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
};

const Home: React.FC = () => {
  return (
    <HomePageLayout>
      <div className='flex flex-col'>
        {/* Sections */}
        <Hero />
        <AboutSection />
        <History />
        <WhyChooseSection />
        <Resources />
        <FAQTrust />
        <FAQSection />
        <ContactCTA />
      </div>
    </HomePageLayout>
  );
};

export default Home;