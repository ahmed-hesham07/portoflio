'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPersonalInfo } from '@/utils/data';
import { WalletConnectButton } from './WalletConnectButton';
import { cn } from '@/utils/cn';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const personalInfo = getPersonalInfo();
  const isWeb3Enabled = process.env.NEXT_PUBLIC_WEB3_ENABLED === 'true';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-autography text-2xl text-white tracking-wide">
            {personalInfo.shortName}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-sky-500',
                pathname === item.href
                  ? 'text-sky-500'
                  : 'text-slate-300'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {isWeb3Enabled && <WalletConnectButton />}
        </div>
      </div>
    </header>
  );
}
