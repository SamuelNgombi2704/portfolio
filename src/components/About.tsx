
import React, { useRef, useEffect, useState } from 'react';
import { Code, Zap, Brain } from 'lucide-react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Full-Stack Development',
      description: 'Expertise in TypeScript, React, Node.js, and Python to build scalable, maintainable applications.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI & Machine Learning',
      description: 'Custom ML models for SEO optimization, user behavior analysis, and intelligent content management.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Performance Optimization',
      description: 'AI-driven performance monitoring and automatic optimization for lightning-fast user experiences.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who combines traditional web development with cutting-edge AI and machine learning 
            to create intelligent, self-optimizing applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div 
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 transform-gpu`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
