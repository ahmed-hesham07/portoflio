import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import MotionProvider from '@/components/providers/MotionProvider';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import './globals.css';

const autography = localFont({
  src: '../../font/Autography.otf',
  variable: '--font-autography',
  display: 'swap',
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Ahmed Seddik — Software Engineer | B2B Platforms | Applied ML',
  description:
    'Portfolio of Ahmed Seddik — software engineer building B2B platforms across backend, frontend, desktop, and mobile, with applied ML. Based in Alexandria, Egypt. Building since April 2024.',
  keywords: [
    'software engineer',
    'B2B platforms',
    'applied ML',
    'full-stack developer',
    'Next.js',
    'FastAPI',
    'computer vision',
    'Alexandria Egypt',
    'remote developer',
  ],
  authors: [{ name: 'Ahmed Seddik', url: 'https://ahmedseddik.dev' }],
  openGraph: {
    title: 'Ahmed Seddik — Software Engineer | B2B Platforms | Applied ML',
    description:
      'Building B2B platforms across backend, frontend, desktop, and mobile — with applied ML. Since April 2024.',
    url: 'https://ahmedseddik.dev',
    siteName: 'Ahmed Seddik Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Seddik — Software Engineer | B2B Platforms | Applied ML',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} ${autography.variable}`}
    >
      <body className="text-primary antialiased">
        <AnimatedBackground />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
