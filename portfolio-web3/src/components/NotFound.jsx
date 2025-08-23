import React from 'react';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
    <a href="/" className="text-blue-400 hover:underline">Go Home</a>
  </div>
);

export default NotFound;
