'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface Web3ProviderProps {
  children: React.ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps) {
  // Disable Web3 by default to prevent configuration errors
  const isWeb3Enabled = process.env.NEXT_PUBLIC_WEB3_ENABLED === 'true';

  if (!isWeb3Enabled) {
    return <>{children}</>;
  }

  // Only load Wagmi when Web3 is explicitly enabled
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
