import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      className="fixed top-6 right-6 bg-gray-800 text-white px-3 py-2 rounded-full shadow hover:bg-gray-700 z-50"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
