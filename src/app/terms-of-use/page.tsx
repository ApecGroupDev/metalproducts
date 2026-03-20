import React from 'react';
import { Metadata } from 'next';
import TermsHero from './sections/hero_terms';
import TermsContent from './sections/main_terms';
import TermsOfUseSchema from '@/components/schema/TermsSchema';

export const metadata: Metadata = {
  title: 'Terms of Use | Metal Products USA',
  description:
    'Review the Terms of Use governing your access to and use of the Metal Products USA website.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/terms-of-use',
  },
};

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <TermsOfUseSchema />
      <TermsHero />
      <TermsContent />
    </div>
  );
};

export default TermsOfUsePage;