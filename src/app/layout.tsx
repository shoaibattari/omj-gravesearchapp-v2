import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/ui/Navbar";
import Footer from "./Components/ui/Footer";
import { Metadata } from "next";
import { AuthProvider } from "../app/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMJ graveyard search app",
  description:
    "this app is a OMJ graveyard searching app for Okhai memon jamat all graveyard data searching app for name wise, khundi wise and graveyard wise ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="  max-w-[1520px] mx-autobg-gradient-to-r bg-primary to-secondary">
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
