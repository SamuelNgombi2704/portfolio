
import React, { useRef, useEffect, useState } from 'react';
import { Code, Zap, Brain, Star } from 'lucide-react';

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
      icon: <Code className="w-10 h-10 text-black" />,
      title: 'FULL-STACK DEV',
      description: 'TypeScript, React, Node.js & Python for SCALABLE applications that actually work.',
      bgColor: 'bg-yellow-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
    {
      icon: <Brain className="w-10 h-10 text-black" />,
      title: 'AI & ML WIZARD',
      description: 'Custom ML models for SEO optimization and intelligent content that thinks for itself.',
      bgColor: 'bg-pink-500',
      borderColor: 'border-white',
      textColor: 'text-white',
    },
    {
      icon: <Zap className="w-10 h-10 text-black" />,
      title: 'PERFORMANCE BEAST',
      description: 'AI-driven optimization for LIGHTNING-FAST experiences that make users smile.',
      bgColor: 'bg-cyan-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative" ref={sectionRef}>
      {/* Brutalist background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-lime-400 rotate-45 opacity-40" />
        <div className="absolute bottom-32 right-16 w-32 h-8 bg-pink-500 skew-x-12 opacity-50" />
        <Star className="absolute top-1/2 left-20 w-12 h-12 text-yellow-400 opacity-60 animate-spin" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 brutalist-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            ABOUT ME
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-bold">
              I'm a <span className="text-yellow-400 font-black">PASSIONATE DEVELOPER</span> who combines traditional web development 
              with <span className="text-pink-500 font-black">CUTTING-EDGE AI</span> to create intelligent, 
              self-optimizing applications that deliver <span className="text-cyan-400 font-black">EXCEPTIONAL EXPERIENCES</span>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 border-4 ${feature.borderColor} ${feature.bgColor} transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:-translate-y-4 group cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                boxShadow: '12px 12px 0px rgba(0,0,0,0.8)',
              }}
            >
              <div className="flex items-center justify-center mb-6 group-hover:animate-bounce">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-black mb-4 ${feature.textColor} uppercase tracking-wider text-center group-hover:animate-glitch`}>
                {feature.title}
              </h3>
              <p className={`${feature.textColor} font-semibold leading-relaxed text-center`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
