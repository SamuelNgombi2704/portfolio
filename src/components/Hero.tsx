
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Zap } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Brutalist animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-20 blur-2xl animate-brutalist-bounce"
          style={{
            transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 50}px) rotate(45deg)`,
            transition: 'transform 0.5s ease-out',
            top: '10%',
            left: '20%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400 to-lime-400 opacity-15 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -80}px, ${mousePosition.y * -60}px) rotate(-30deg)`,
            transition: 'transform 0.8s ease-out',
            bottom: '15%',
            right: '15%',
          }}
        />
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        <div className="mb-12">
          {/* Brutalist glitch effect title */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in relative">
            <span 
              className="brutalist-text bg-gradient-to-r from-white via-yellow-300 to-cyan-300 bg-clip-text text-transparent hover:animate-glitch inline-block cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out',
              }}
            >
              CREATIVE
            </span>
            <br />
            <span 
              className="brutalist-text bg-gradient-to-r from-pink-400 via-purple-400 to-lime-400 bg-clip-text text-transparent hover:animate-glitch inline-block cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * -8}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out',
              }}
            >
              DEVELOPER
            </span>
          </h1>
          
          <div className="relative inline-block">
            <p className="text-xl md:text-3xl text-gray-200 mb-12 leading-relaxed animate-fade-in delay-200 font-bold tracking-wide">
              Building <span className="text-yellow-400 font-black">BOLD</span> digital experiences with{' '}
              <span className="text-cyan-400 font-black">AI-POWERED</span> optimization
            </p>
            <Zap className="absolute -right-8 -top-2 w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
        </div>
        
        {/* Brutalist social links */}
        <div className="flex justify-center space-x-8 mb-16 animate-fade-in delay-300">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black border-4 border-white brutalist-shadow hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 transform-gpu group"
          >
            <Github className="w-8 h-8 group-hover:animate-glitch" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black border-4 border-white brutalist-shadow hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 transform-gpu group"
          >
            <Linkedin className="w-8 h-8 group-hover:animate-glitch" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-4 bg-black border-4 border-white brutalist-shadow hover:bg-pink-400 hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 transform-gpu group"
          >
            <Mail className="w-8 h-8 group-hover:animate-glitch" />
          </a>
        </div>

        {/* Brutalist CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-500">
          <a
            href="#projects"
            className="px-10 py-4 bg-yellow-400 text-black font-black text-lg border-4 border-black brutalist-shadow hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-2 transform-gpu uppercase tracking-wider"
          >
            VIEW MY WORK
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-transparent border-4 border-cyan-400 text-cyan-400 font-black text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 hover:-translate-y-2 transform-gpu uppercase tracking-wider brutalist-shadow"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Brutalist arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-yellow-400 hover:text-pink-400 transition-colors duration-300 animate-pulse" />
      </div>
    </section>
  );
};
