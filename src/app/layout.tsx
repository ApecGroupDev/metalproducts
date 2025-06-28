import '../styles/globals.css';
import { Raleway } from 'next/font/google';
import ScrollToTopButton from '@/components/scrollToTop';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose the weights you need
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata = {
  title: 'Metal Products USA',
  description: 'Metal Products USA Website',
  icons: {
    icon: '/images/logos/Logo_MPC_Main_Only.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} text-gray-800`}>
      <head>
        {/* Google Search Console */}
        <meta
          name=""
          content=""
        />
      </head>
      <body className="min-h-screen">
        {/* Render children */}
        <div className="max-w-[2560px] mx-auto">
          {children}
        </div>
        <ScrollToTopButton />
      </body>
    </html>
  );
}