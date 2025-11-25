import Link from 'next/link';
import Header from '@/components/header';
import FooterNew from '@/components/footerNew';

export default function NotFound() {
  return (
    <div className='flex flex-col bg-[#e3e3e3] min-h-screen justify-between'>
      <Header />
      <div className='relative z-20'>
        <div className='relative flex flex-col items-center justify-center md:justify-normal lg:justify-center bg-[#e3e3e3]'>

          {/*  Text Section */}
          <div className='text-center z-40 mt-40 sm:mt-32 lg:mt-20 xl:mt-24'>
            <p className='text-gray-800 px-4 flex flex-col'>
              <span className='text-gray-800 text-9xl md:text-10xl lg:font-extrabold lg:text-gray-900 lg:text-12xl xl:text-[16rem]'>404</span> <br />
              <span className='text-red-600 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl'>Page Not Found</span> <br />
              <span className='text-xl md:text-2xl'>The page you&apos;re looking for does not exist.</span>
            </p>
            <Link
              href="/"
              className='mt-6 tracking-wide inline-block px-4 py-1 rounded-2xl outline outline-red-600 text-gray-700 text-lg 2xl:text-2xl hover:text-white hover:bg-red-600 hover:scale-105 transform transition duration-300'
            >
              RETURN TO HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
      <FooterNew />
    </div>
  );
}
