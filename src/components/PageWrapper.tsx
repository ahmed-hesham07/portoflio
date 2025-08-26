"use client";
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <main className="pt-16">{children}</main>
  );
};

export default PageWrapper;

