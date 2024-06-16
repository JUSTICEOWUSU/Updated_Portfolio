import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

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
    <html lang="en" className="bg-blue-200 text-black ">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
