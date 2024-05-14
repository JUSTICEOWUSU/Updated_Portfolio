import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JUSTICE | Web developer",
  description: "Front-end developer | Back-end developer | Fullstack developer",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-blue-200 text-black">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
