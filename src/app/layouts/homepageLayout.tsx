import Header from '@/components/header';
import FooterNew from '@/components/footerNew';

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
      <FooterNew />
    </div>
  );
}
