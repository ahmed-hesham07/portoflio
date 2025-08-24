"use client";
import React from 'react';
import Layout from './Layout';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Layout>
      <main className="pt-16">{children}</main>
    </Layout>
  );
};

export default PageWrapper;

