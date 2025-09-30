import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Ahmed Hesham Ismail Seddik - Software Engineer & Data Scientist',
    template: '%s | Ahmed Hesham Ismail Seddik'
  },
  description: 'Software Engineer & Data Scientist specializing in AI, machine learning, and engineering software. Building intelligent solutions at the intersection of technology and industry standards.',
  keywords: [
    'Ahmed Hesham Ismail Seddik',
    'Software Engineer',
    'Data Scientist',
    'AI Engineer',
    'Machine Learning',
    'Python Developer',
    'Engineering Software',
    'Portfolio',
    'Alexandria, Egypt'
  ],
  authors: [{ name: 'Ahmed Hesham Ismail Seddik' }],
  creator: 'Ahmed Hesham Ismail Seddik',
  publisher: 'Ahmed Hesham Ismail Seddik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahmedseddik.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmedseddik.tech',
    title: 'Ahmed Hesham Ismail Seddik - Software Engineer & Data Scientist',
    description: 'Software Engineer & Data Scientist specializing in AI, machine learning, and engineering software.',
    siteName: 'Ahmed Hesham Ismail Seddik Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Hesham Ismail Seddik - Software Engineer & Data Scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Hesham Ismail Seddik - Software Engineer & Data Scientist',
    description: 'Software Engineer & Data Scientist specializing in AI, machine learning, and engineering software.',
    images: ['/og-image.jpg'],
    creator: '@ahmedhesham07',
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
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
