import type { Metadata } from "next";
import Web3Section from "../../components/Web3Section";
import PageWrapper from "../../components/PageWrapper";

export const metadata: Metadata = {
  title: "Web3 Access | Ahmed Hesham - Exclusive Content",
  description: "Connect your Web3 wallet to unlock premium content, project demos, and exclusive resources from Ahmed Hesham's quantum engineering portfolio.",
  keywords: [
    "Ahmed Hesham",
    "Web3",
    "Exclusive Content",
    "Wallet Connection",
    "Premium Access",
    "Project Demos",
    "Technical Resources",
    "Blockchain Integration"
  ],
  openGraph: {
    title: "Web3 Exclusive Access | Ahmed Hesham",
    description: "Connect your wallet to unlock premium content and project demonstrations.",
    url: "https://ahmed-hesham.dev/web3",
  },
};

export default function Web3Page() {
  return (
    <PageWrapper>
      <Web3Section />
    </PageWrapper>
  );
}
