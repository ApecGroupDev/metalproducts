import Footer from '@/components/footer_bg_redshade';
import Header from '@/components/header';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-transparent bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
      <Footer />
    </div>
  );
}