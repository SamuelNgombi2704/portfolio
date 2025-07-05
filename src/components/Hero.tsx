
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
            transition: 'transform 0.5s ease-out',
            top: '20%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            transition: 'transform 0.8s ease-out',
            bottom: '20%',
            right: '10%',
          }}
        />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span 
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block"
              style={{
                transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              Creative Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in delay-200">
            Building exceptional digital experiences with cutting-edge technology and AI-powered optimization
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-300">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 transform-gpu"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 transform-gpu"
          >
            <Linkedin className="w-6 h-6 text-gray-300" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 transform-gpu"
          >
            <Mail className="w-6 h-6 text-gray-300" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform-gpu"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-purple-400 rounded-lg font-semibold text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform-gpu"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors duration-300" />
      </div>
    </section>
  );
};
