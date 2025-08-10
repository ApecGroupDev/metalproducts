// components/layouts/HomePageLayout.tsx

import Header from '@/components/header';
import Footer from '@/components/footer_bg_redshade';

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
      <Footer />
    </div>
  );
}
