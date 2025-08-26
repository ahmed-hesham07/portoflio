"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Skills', href: '/skills' },
    { name: 'Web3', href: '/web3' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className={dark ? 'dark bg-cyber-darker text-white' : 'bg-slate-50 text-cyber-darker'}>
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass backdrop-blur-xl shadow-cyber border-b border-neon-blue/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link href="/" className="relative">
                <h1 className="text-2xl font-bold gradient-text font-cyber tracking-wider">
                  ◊ AHMED_HESHAM
                </h1>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-gradient opacity-60"></div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link 
                      href={item.href}
                      className={`relative transition-all duration-300 font-cyber tracking-wide group ${
                        isActive 
                          ? 'text-neon-blue' 
                          : 'text-gray-300 hover:text-neon-blue'
                      }`}
                    >
                      <span className="cyber-text text-xs absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {`0${index + 1}`}
                      </span>
                      {item.name.toUpperCase()}
                      <div className={`absolute -bottom-1 left-0 h-0.5 bg-neon-blue transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Theme Toggle */}
              <motion.button
                className="p-3 rounded-xl bg-cyber-light border border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300"
                onClick={() => setDark(!dark)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                <div className="neon-text text-lg">
                  {dark ? '◐' : '◑'}
                </div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                className="p-2 rounded-xl bg-cyber-light border border-neon-purple/30"
                onClick={() => setDark(!dark)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                <div className="neon-text">
                  {dark ? '◐' : '◑'}
                </div>
              </motion.button>
              
              <motion.button
                className="p-2 rounded-xl bg-cyber-light border border-neon-blue/30 hover:border-neon-blue"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    className="w-full h-0.5 bg-neon-blue mb-1"
                    animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-neon-blue mb-1"
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-neon-blue"
                    animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden glass backdrop-blur-xl border-t border-neon-blue/20"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link 
                          href={item.href}
                          className={`block px-4 py-3 hover:text-neon-blue hover:bg-cyber-light rounded-xl transition-all duration-300 font-cyber tracking-wide border hover:border-neon-blue/30 ${
                            isActive 
                              ? 'text-neon-blue bg-cyber-light border-neon-blue/30' 
                              : 'text-gray-300 border-transparent'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="cyber-text text-xs mr-2">
                            {`0${index + 1}`}
                          </span>
                          {item.name.toUpperCase()}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-cyber-dark border-t border-neon-blue/20 py-12 relative overflow-hidden">
        {/* Cyber grid background */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Ambient glow effects */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-neon-purple rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-neon-green rounded-full opacity-5 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 gradient-text font-cyber tracking-wider">
                ◊ AHMED_HESHAM
              </h3>
              <p className="text-gray-400 mb-4 font-cyber text-sm">
                Quantum Data Architect • AI Engineer • Robotic Systems Designer
              </p>
              <div className="cyber-text text-xs mb-4">
                {'> status: online'}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/ahmed-hesham07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-cyber-light border border-neon-blue/30 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="neon-text">⟨⟩</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ahmed-hesham07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-cyber-light border border-neon-purple/30 hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateZ: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-neon-purple">🔗</span>
                </motion.a>
                <motion.a
                  href="mailto:ahmed.hesham0762@gmail.com"
                  className="p-2 rounded-xl bg-cyber-light border border-neon-green/30 hover:border-neon-green hover:shadow-neon-green transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-neon-green">📡</span>
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 cyber-text font-cyber tracking-wider">
                {'> NAVIGATION_LINKS'}
              </h3>
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-400 hover:text-neon-blue transition-all duration-300 font-cyber tracking-wide group"
                    >
                      <span className="cyber-text text-xs mr-2 opacity-60 group-hover:opacity-100">
                        {`0${index + 1}`}
                      </span>
                      {item.name.toUpperCase()}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4 matrix-text font-mono-cyber">
                {'> ESTABLISH_CONNECTION'}
              </h3>
              <p className="text-gray-400 mb-4 font-cyber text-sm">
                Ready to build the future together?
              </p>
              <div className="cyber-text text-xs mb-4">
                {'> connection_status: awaiting_handshake'}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  <span className="mr-2">📡</span>
                  INITIATE_CONTACT
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="border-t border-neon-blue/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="cyber-text text-sm mb-4 md:mb-0">
                {'> system_info: AHMED_HESHAM_OS_v2024.1.0'}
              </div>
              <div className="text-gray-500 text-sm font-cyber">
                &copy; {new Date().getFullYear()} All neural pathways reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
