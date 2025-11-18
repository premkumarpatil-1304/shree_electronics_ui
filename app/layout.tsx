import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-richBlack">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
