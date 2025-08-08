import '../styles/globals.css';
import { Raleway } from 'next/font/google';
import { Metadata } from 'next';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose the weights you need
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Metal Products Company',
  description: 'Metal Products Company is a premier tank manufacturer building dependable and durable tanks. We manufacture single-wall and double-wall aboveground tanks, Plasteel Elutron, Flameshield and Firegaurd tanks, as well as oil-water separators.  Metal Products specializes in building storage tanks for retail, commercial, and government fueling facilities.',
  icons: {
    icon: '/images/logos/Logo_MPC_Main_Only.png',
  },
  metadataBase: new URL('https://www.metalproductsusa.com'),
  alternates: {
    canonical: '/',
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
      <body className="min-h-screen bg-[#efefef]">
        {/* Render children */}
        <div className="max-w-[2560px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}