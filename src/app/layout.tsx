import '../styles/globals.css';
import { Raleway } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose the weights you need
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Top Tank Manufacturers | Metal Products USA',
  description: 'Explore USA-made industrial storage tanks from Metal Products USA—trusted manufacturers serving energy, agriculture, fuel, and commercial industries.',
  robots: 'index, follow',
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
          name="google-site-verification"
          content="ab17f-mm4AqpK64XXFbo8c1RFFRPUqDxVcIQ4YVOI80"
        />
      </head>
      <body className="min-h-screen bg-[#efefef]">
        {/* Render children */}
        <div className="max-w-[2560px] mx-auto">
          {children}
        </div>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5Y0YVX1DPN"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5Y0YVX1DPN');
          `}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}