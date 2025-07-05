
import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Brain, Zap, Database, Star } from 'lucide-react';

export const Projects = () => {
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

  const projects = [
    {
      title: 'AI-POWERED E-COMMERCE',
      description: 'Full-stack e-commerce solution with ML-driven product recommendations and dynamic pricing optimization that ACTUALLY WORKS.',
      technologies: ['TypeScript', 'React', 'Python', 'TensorFlow', 'PostgreSQL'],
      features: ['Real-time analytics', 'AI recommendations', 'Auto-scaling'],
      icon: <Brain className="w-8 h-8 text-black" />,
      github: 'https://github.com',
      live: 'https://example.com',
      bgColor: 'bg-yellow-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
    {
      title: 'SMART SEO OPTIMIZER',
      description: 'Custom ML model that analyzes website content and automatically generates SEO improvements that BOOST your rankings.',
      technologies: ['Python', 'FastAPI', 'React', 'OpenAI API', 'MongoDB'],
      features: ['Auto SEO generation', 'Content analysis', 'Performance tracking'],
      icon: <Zap className="w-8 h-8 text-black" />,
      github: 'https://github.com',
      live: 'https://example.com',
      bgColor: 'bg-pink-500',
      borderColor: 'border-white',
      textColor: 'text-white',
    },
    {
      title: 'REAL-TIME ANALYTICS',
      description: 'Interactive dashboard with live data visualization and AI-powered insights for business intelligence that DRIVES results.',
      technologies: ['TypeScript', 'D3.js', 'Node.js', 'WebSockets', 'Redis'],
      features: ['Real-time data', 'Interactive charts', 'Predictive analytics'],
      icon: <Database className="w-8 h-8 text-black" />,
      github: 'https://github.com',
      live: 'https://example.com',
      bgColor: 'bg-cyan-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative" ref={sectionRef}>
      {/* Brutalist background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-16 w-20 h-20 bg-lime-400 rotate-45 opacity-50" />
        <div className="absolute bottom-32 right-20 w-32 h-6 bg-yellow-400 skew-x-12 opacity-60" />
        <Star className="absolute top-1/2 right-10 w-14 h-14 text-pink-500 opacity-40 animate-spin" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 brutalist-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            PROJECTS
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-bold max-w-4xl mx-auto">
            <span className="text-yellow-400 font-black">INNOVATIVE SOLUTIONS</span> that blend traditional development 
            with <span className="text-pink-500 font-black">AI INTELLIGENCE</span>
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className={`p-10 border-4 ${project.borderColor} ${project.bgColor} transition-all duration-500 transform hover:scale-[1.02] hover:rotate-1 hover:-translate-y-4 group cursor-pointer`}
                style={{ 
                  boxShadow: '16px 16px 0px rgba(0,0,0,0.8)',
                }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`p-4 border-4 border-black ${project.textColor === 'text-black' ? 'bg-white' : 'bg-black'} mr-6 group-hover:rotate-12 group-hover:animate-bounce transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className={`text-3xl md:text-4xl font-black ${project.textColor} uppercase tracking-wider group-hover:animate-glitch`}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className={`${project.textColor} text-lg md:text-xl font-bold mb-8 leading-relaxed`}>
                  {project.description}
                </p>
                
                <div className="mb-8">
                  <h4 className={`${project.textColor} font-black text-xl mb-4 uppercase tracking-wide`}>
                    KEY FEATURES:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`p-3 border-2 border-black ${project.textColor === 'text-black' ? 'bg-white' : 'bg-black'} hover:rotate-2 hover:scale-105 transition-all duration-300 transform-gpu`}>
                        <span className={`${project.textColor === 'text-black' ? 'text-black' : 'text-white'} font-bold text-sm uppercase tracking-wide`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-4 py-2 border-2 border-black font-black text-sm uppercase tracking-wide hover:rotate-2 hover:scale-105 transition-all duration-300 transform-gpu ${
                        project.textColor === 'text-black' ? 'bg-black text-white' : 'bg-white text-black'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-6 py-3 border-4 border-black font-black text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-2 transform-gpu ${
                      project.textColor === 'text-black' ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                  >
                    <Github className="w-5 h-5 mr-3" />
                    CODE
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-lime-400 border-4 border-black text-black font-black text-lg uppercase tracking-wide hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:rotate-2 transform-gpu"
                    style={{ boxShadow: '6px 6px 0px rgba(0,0,0,0.8)' }}
                  >
                    <ExternalLink className="w-5 h-5 mr-3" />
                    LIVE DEMO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
