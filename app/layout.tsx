import { Viga, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";

const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-viga",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${viga.variable} ${inter.variable}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}