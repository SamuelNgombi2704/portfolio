
import React from 'react';
import { Code, Zap, Brain } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who combines traditional web development with cutting-edge AI and machine learning 
            to create intelligent, self-optimizing applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Full-Stack Development</h3>
            <p className="text-gray-300">
              Expertise in TypeScript, React, Node.js, and Python to build scalable, maintainable applications.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">AI & Machine Learning</h3>
            <p className="text-gray-300">
              Custom ML models for SEO optimization, user behavior analysis, and intelligent content management.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Performance Optimization</h3>
            <p className="text-gray-300">
              AI-driven performance monitoring and automatic optimization for lightning-fast user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
