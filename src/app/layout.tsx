import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blue Lake, Igatpuri | Lakeside Resort",
  description:
    "A serene lakeside resort in Murambi, Igatpuri, where nature's calm meets refined comfort.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
