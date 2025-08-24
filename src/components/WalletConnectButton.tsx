'use client';

import { Wallet } from 'lucide-react';
import { Button } from './ui/Button';

export function WalletConnectButton() {
  // Placeholder component when Web3 is disabled
  const isWeb3Enabled = process.env.NEXT_PUBLIC_WEB3_ENABLED === 'true';
  
  if (!isWeb3Enabled) {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className="flex items-center space-x-2 opacity-50"
        title="Web3 functionality is currently disabled"
      >
        <Wallet className="h-4 w-4" />
        <span className="hidden sm:inline">Connect Wallet</span>
      </Button>
    );
  }

  // When Web3 is enabled, you would import and use wagmi hooks here
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        console.log('Web3 connection would be handled here');
      }}
      className="flex items-center space-x-2"
    >
      <Wallet className="h-4 w-4" />
      <span className="hidden sm:inline">Connect Wallet</span>
    </Button>
  );
}
