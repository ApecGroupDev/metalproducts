import React from 'react';
import Hero from '@/app/home/sections/hero';
import History from '@/app/home/sections/history';
import Resources from '@/app/home/sections/resources';
import HomePageLayout from './layouts/homepageLayout';

const Home: React.FC = () => {
  return (
    <HomePageLayout>
      <div className='flex flex-col'>
        {/* Sections */}
        <Hero />
        <History />
        <Resources />
      </div>
    </HomePageLayout>
  );
};

export default Home;