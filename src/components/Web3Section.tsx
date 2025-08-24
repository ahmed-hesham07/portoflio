"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExclusiveContent {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'demo' | 'code' | 'video';
  icon: string;
  link: string;
  size?: string;
}

const Web3Section = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const exclusiveContent: ExclusiveContent[] = [
    {
      id: 'vessel-guard-demo',
      title: 'Vessel Guard Live Demo',
      description: 'Interactive demo of the pressure vessel integrity assessment tool',
      type: 'demo',
      icon: '🔧',
      link: '/demos/vessel-guard',
    },
    {
      id: 'ai-ml-whitepaper',
      title: 'AI in Engineering Whitepaper',
      description: 'Comprehensive research on AI applications in structural engineering',
      type: 'pdf',
      icon: '📄',
      link: '/papers/ai-engineering-whitepaper.pdf',
      size: '2.5 MB'
    },
    {
      id: 'automation-toolkit',
      title: 'Engineering Automation Toolkit',
      description: 'Python scripts and tools for engineering calculations and automation',
      type: 'code',
      icon: '💻',
      link: 'https://github.com/ahmed-hesham07/engineering-toolkit',
    },
    {
      id: 'case-study-video',
      title: 'Real Project Case Studies',
      description: 'Behind-the-scenes look at major projects and problem-solving approaches',
      type: 'video',
      icon: '🎥',
      link: '/videos/case-studies',
    }
  ];

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock wallet address with deterministic generation
      const mockAddress = '0x742d35Cc6634C0532925a3b8D' + Date.now().toString(36).substr(-9);
      setAddress(mockAddress);
      setIsConnected(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setUnlocked(false);
  };

  const handleUnlock = () => {
    if (isConnected) {
      setUnlocked(true);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const getTypeColor = (type: ExclusiveContent['type']) => {
    const colors = {
      pdf: 'from-red-500 to-red-600',
      demo: 'from-blue-500 to-blue-600',
      code: 'from-green-500 to-green-600',
      video: 'from-purple-500 to-purple-600',
    };
    return colors[type];
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Web3</span> Exclusive Access
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Connect your wallet to unlock premium content, project demos, and exclusive resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Connection Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl text-white">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Wallet Connection
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {!isConnected 
                    ? "Connect your Web3 wallet to access exclusive content"
                    : "Wallet connected successfully!"
                  }
                </p>
              </div>

              {!isConnected ? (
                <div className="space-y-4">
                  <motion.button
                    onClick={handleConnect}
                    disabled={isConnecting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: isConnecting ? 1 : 1.02 }}
                    whileTap={{ scale: isConnecting ? 1 : 0.98 }}
                  >
                    {isConnecting ? (
                      <>
                        <div className="spinner mr-2" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        🦊 Connect Wallet
                      </>
                    )}
                  </motion.button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Supported wallets:
                    </p>
                    <div className="flex justify-center space-x-4">
                      <span className="text-2xl" title="MetaMask">🦊</span>
                      <span className="text-2xl" title="WalletConnect">🔗</span>
                      <span className="text-2xl" title="Coinbase">🔵</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          Connected Address
                        </p>
                        <p className="text-green-800 dark:text-green-200 font-mono">
                          {address && formatAddress(address)}
                        </p>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      onClick={handleUnlock}
                      disabled={unlocked}
                      className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: unlocked ? 1 : 1.02 }}
                      whileTap={{ scale: unlocked ? 1 : 0.98 }}
                    >
                      {unlocked ? '🔓 Content Unlocked' : '🔐 Unlock Content'}
                    </motion.button>
                    
                    <motion.button
                      onClick={handleDisconnect}
                      className="btn-secondary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Disconnect
                    </motion.button>
                  </div>
                </div>
              )}
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800"
            >
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                🎁 What's Inside?
              </h4>
              <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Interactive project demonstrations
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Exclusive technical whitepapers
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Open-source code repositories
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Behind-the-scenes case studies
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Exclusive Content Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Exclusive Content
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <AnimatePresence>
                {exclusiveContent.map((content, index) => (
                  <motion.div
                    key={content.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                      unlocked
                        ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg cursor-pointer'
                        : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 opacity-75'
                    }`}
                    whileHover={unlocked ? { y: -2 } : {}}
                  >
                    {!unlocked && (
                      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-2 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">🔒</span>
                          </div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Connect wallet to unlock
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getTypeColor(content.type)}`}>
                          <span className="text-white text-xl">{content.icon}</span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {content.title}
                            </h4>
                            {content.size && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                {content.size}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            {content.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                              {content.type}
                            </span>
                            {unlocked && (
                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ x: 5 }}
                              >
                                <span className="text-blue-600 dark:text-blue-400">→</span>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {unlocked && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300"
                        onClick={() => window.open(content.link, '_blank')}
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {unlocked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800"
              >
                <div className="text-4xl mb-2">🎉</div>
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  All Content Unlocked!
                </h4>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  You now have access to all exclusive resources. Enjoy exploring!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;
