import { Viga, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";
import PageLoader from "../components/PageLoader";
import { Metadata } from "next";

const viga = Viga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-viga",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agency-site-lac.vercel.app/"),

  title: {
    default: "OrivianSoft | Web, App, AI Automation & SEO Agency",
    template: "%s | OrivianSoft",
  },

  description:
    "OrivianSoft is a digital agency specializing in web development, mobile app development, AI automation, SEO, and modern digital solutions.",

  keywords: [
    "OrivianSoft",
    "web development agency",
    "app development agency",
    "AI automation agency",
    "SEO agency",
    "software development company",
    "web design agency",
    "mobile app development",
    "AI automation",
    "SEO services",
  ],

  authors: [{ name: "OrivianSoft" }],
  creator: "OrivianSoft",
  publisher: "OrivianSoft",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agency-site-lac.vercel.app/",
    siteName: "OrivianSoft",
    title: "OrivianSoft | Web, App, AI Automation & SEO Agency",
    description:
      "We build modern websites, mobile apps, AI automation systems, and SEO strategies that help businesses grow.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OrivianSoft - Digital Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OrivianSoft | Digital Agency",
    description:
      "Web Development, App Development, AI Automation & SEO solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${viga.variable} ${inter.variable}`}>
        <PageLoader></PageLoader>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}