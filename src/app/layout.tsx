import type { Metadata } from "next";
import "./globals.css";
import AnimatedBg from "./components/ui/animatedBg";
import { Inter } from 'next/font/google';
import BlobityCursor from "./components/ui/blobityCursor";
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

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
      <body className={`${inter.className} relative text-white overflow-x-hidden cursor-none`}>
        <AnimatedBg />
        <BlobityCursor />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
