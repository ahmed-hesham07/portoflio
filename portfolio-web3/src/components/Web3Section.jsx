import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ethers } from 'ethers';

const Web3Section = () => {
  const [wallet, setWallet] = useState(null);
  const [unlocked, setUnlocked] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setWallet(accounts[0]);
        setUnlocked(true);
      } catch (err) {
        alert('Wallet connection failed.');
      }
    } else {
      alert('MetaMask not detected.');
    }
  };

  return (
    <section className="py-16 px-4 md:px-16" id="web3">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Web3 Section</h2>
        <p className="mb-4">Showcasing my interest in Web3 technology. Connect your wallet to unlock exclusive content (project demos, downloadable reports).</p>
        {!wallet ? (
          <button onClick={connectWallet} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow">Connect Wallet</button>
        ) : (
          <div className="mb-4">
            <span className="font-semibold">Connected Wallet:</span> <span className="text-green-400">{wallet}</span>
          </div>
        )}
        {unlocked && (
          <div className="bg-gray-800 rounded-lg p-6 mt-4 shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">Exclusive Content</h3>
            <ul className="list-disc ml-6 text-sm">
              <li><a href="/assets/Ahmed_Seddik_Report.pdf" download className="text-blue-400 hover:underline">Download Engineering Report</a></li>
              <li><a href="#" className="text-blue-400 hover:underline" rel="noopener noreferrer">Project Demo (coming soon)</a></li>
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Web3Section;
