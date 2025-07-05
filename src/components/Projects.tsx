
import React from 'react';
import { ExternalLink, Github, Brain, Zap, Database } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Full-stack e-commerce solution with ML-driven product recommendations and dynamic pricing optimization.',
      technologies: ['TypeScript', 'React', 'Python', 'TensorFlow', 'PostgreSQL'],
      features: ['Real-time analytics', 'AI recommendations', 'Auto-scaling'],
      icon: <Brain className="w-6 h-6" />,
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=400'
    },
    {
      title: 'Smart SEO Optimization Tool',
      description: 'Custom ML model that analyzes website content and automatically generates SEO improvements and meta tags.',
      technologies: ['Python', 'FastAPI', 'React', 'OpenAI API', 'MongoDB'],
      features: ['Auto SEO generation', 'Content analysis', 'Performance tracking'],
      icon: <Zap className="w-6 h-6" />,
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard with live data visualization and AI-powered insights for business intelligence.',
      technologies: ['TypeScript', 'D3.js', 'Node.js', 'WebSockets', 'Redis'],
      features: ['Real-time data', 'Interactive charts', 'Predictive analytics'],
      icon: <Database className="w-6 h-6" />,
      github: 'https://github.com',
      live: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400'
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend traditional development with AI and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl shadow-2xl"
                />
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-purple-400 font-semibold mb-2">Key Features:</h4>
                    <ul className="text-gray-300 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 rounded-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
