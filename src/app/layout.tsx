
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Cormorant_Garamond } from "next/font/google";
import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/BookingModal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "The Blue Lake, Igatpuri | Lakeside Resort",
  description:
    "A serene lakeside resort in Murambi, Igatpuri, where nature's calm meets refined comfort.",
  verification: {
    google: "cwk_S12joArt0ON48RbBQbSf5mZQ5Lq2e5agyKZrWFY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={cormorant.variable}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2HKW7967Z3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-2HKW7967Z3');
          `}
        </Script>

        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","zbn7elk4so");`}
        </Script>
      </body>
    </html>
  );
}
