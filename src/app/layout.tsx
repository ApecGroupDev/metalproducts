import "../styles/globals.css";
import {
  Raleway,
  Oswald,
  Space_Mono,
  Libre_Baskerville,
} from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Header from "@/components/header";
import FooterNew from "@/components/footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.metalproductsusa.com"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${oswald.variable} ${spaceMono.variable} ${libreBaskerville.variable} text-gray-800`}
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="ab17f-mm4AqpK64XXFbo8c1RFFRPUqDxVcIQ4YVOI80"
        />
      </head>
      <body className="min-h-screen bg-[#efefef]">
        <Header />
        {/* Render children */}
        <div className="max-w-[2560px] mx-auto">{children}</div>
        <FooterNew />
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
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
