import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Web3Provider } from '@/components/Web3Provider';
import { Header } from '@/components/Header';
import { getPersonalInfo } from '@/utils/data';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const personalInfo = getPersonalInfo();

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.shortName} – Software Engineer & Data Scientist`,
    template: `%s | ${personalInfo.shortName}`,
  },
  description: personalInfo.tagline,
  keywords: [
    "Ahmed Hesham",
    "Ahmed Seddik",
    "Data Scientist",
    "Software Engineer", 
    "Machine Learning",
    "AI Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Engineering Software",
    "ASME",
    "Fitness-For-Service"
  ],
  authors: [{ name: personalInfo.name, url: `https://${personalInfo.domain}` }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  metadataBase: new URL(`https://${personalInfo.domain}`),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${personalInfo.domain}`,
    title: `${personalInfo.shortName} – Software Engineer & Data Scientist`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.shortName} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Software Engineer & Data Scientist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.shortName} – Software Engineer & Data Scientist`,
    description: personalInfo.tagline,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        <Web3Provider>
          <div className="min-h-screen bg-slate-950 text-white">
            <Header />
            <main>{children}</main>
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}
