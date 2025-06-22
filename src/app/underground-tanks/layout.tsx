import Footer from '@/components/footer';
import Header from '@/components/header';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white bg-cover bg-top bg-no-repeat min-h-screen'>
      <Header />
      <div className='w-full'>{children}</div>
      <Footer />
    </div>
  );
}