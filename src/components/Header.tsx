'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { getPersonalInfo } from '@/utils/data';
import { WalletConnectButton } from './WalletConnectButton';
import { cn } from '@/utils/cn';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'About', href: '/about' },
  { name: 'Web3', href: '/web3' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const personalInfo = getPersonalInfo();
  const isWeb3Enabled = process.env.NEXT_PUBLIC_WEB3_ENABLED === 'true';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-autography text-2xl text-white tracking-wide">
            {personalInfo.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
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
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'w-5 h-0.5 bg-white transition-all duration-300 ease-in-out',
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
                )}
              />
              <span
                className={cn(
                  'w-5 h-0.5 bg-white transition-all duration-300 ease-in-out',
                  mobileMenuOpen ? 'opacity-0' : 'mb-1'
                )}
              />
              <span
                className={cn(
                  'w-5 h-0.5 bg-white transition-all duration-300 ease-in-out',
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 z-50 md:hidden">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-sky-500 py-2 px-4 rounded-lg',
                      pathname === item.href
                        ? 'text-sky-500 bg-sky-500/10'
                        : 'text-slate-300 hover:bg-slate-800'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
