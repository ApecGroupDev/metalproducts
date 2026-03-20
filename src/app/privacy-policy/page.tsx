import React from 'react';
import { Metadata } from 'next';
import PrivacyHero from './sections/hero_privacy';
import PrivacyContent from './sections/main_privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Metal Products USA',
  description:
    'Learn how Metal Products USA collects, uses, and protects your personal information when you visit our website.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.metalproductsusa.com/privacy-policy',
  },
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default PrivacyPolicyPage;