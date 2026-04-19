import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'Ahmed Hesham — AI/ML Engineer & Full-Stack Developer',
  description:
    'Portfolio of Ahmed Hesham — building production AI systems, full-stack platforms, and offline-first applications. Based in Alexandria, Egypt. Open to remote roles.',
  keywords: [
    'AI engineer',
    'ML engineer',
    'full-stack developer',
    'Next.js',
    'FastAPI',
    'computer vision',
    'Alexandria Egypt',
    'remote developer',
  ],
  authors: [{ name: 'Ahmed Hesham', url: 'https://ahmedseddik.dev' }],
  openGraph: {
    title: 'Ahmed Hesham — AI/ML Engineer & Full-Stack Developer',
    description:
      'Building production AI systems, full-stack platforms, and offline-first applications.',
    url: 'https://ahmedseddik.dev',
    siteName: 'Ahmed Hesham Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Hesham — AI/ML Engineer & Full-Stack Developer',
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
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="bg-background text-primary antialiased">{children}</body>
    </html>
  );
}
