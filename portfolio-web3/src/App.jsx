import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Web3Section from './components/Web3Section';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 dark:bg-gray-900 text-white dark:text-white">
      <Navbar />
      <DarkModeToggle />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Web3Section />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
