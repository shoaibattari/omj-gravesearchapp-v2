import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMJ graveyard search app",
  description:
    "this app is a OMJ graveyard searching app for multiple dimension",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" max-w-[1520px] mx-auto p-0 m-0 ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
