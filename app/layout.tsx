import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import OnchainProviders from "../config/OnchainProviders";
import NavBar from "@/components/NavBar";
import { Wallet } from "@coinbase/onchainkit/wallet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BondX",
  description: "bondx.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="h-screen flex flex-col justify-between">
          <OnchainProviders>{children}</OnchainProviders>
          <Footer />
        </div>
      </body>
    </html>
  );
}
