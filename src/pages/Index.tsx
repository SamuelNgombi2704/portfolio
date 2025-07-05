
import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { AIInsights } from '../components/AIInsights';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Brutalist geometric shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rotate-45 opacity-80 animate-pulse" />
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-cyan-400 rounded-full opacity-70 animate-bounce" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-8 bg-pink-500 skew-x-12 opacity-60" />
        <div className="absolute bottom-20 right-1/4 w-16 h-40 bg-lime-400 rotate-12 opacity-75" />
      </div>
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIInsights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
