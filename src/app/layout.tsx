import type { Metadata } from "next";
import "./globals.css";
import AnimatedBg from "./components/ui/animatedBg";
import { Inter } from 'next/font/google';
import BlobityCursor from "./components/ui/blobityCursor";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Saahil's Portfolio",
  description: "Modern Portfolio by Saahil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} relative text-white overflow-x-hidden cursor-none`}>
        <AnimatedBg />
        <BlobityCursor />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
