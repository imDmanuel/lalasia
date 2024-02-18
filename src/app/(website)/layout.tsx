import "swiper/css";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../../components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lalasia | Home",
  description: "For your high quality furnitures",
  themeColor: "#518581",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
