
import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
      icon: <Code className="w-8 h-8 text-black" />,
      bgColor: 'bg-yellow-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'PostgreSQL', level: 75 },
      ],
      icon: <Database className="w-8 h-8 text-black" />,
      bgColor: 'bg-pink-500',
      borderColor: 'border-white',
      textColor: 'text-white',
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenAI API', level: 90 },
      ],
      icon: <Brain className="w-8 h-8 text-black" />,
      bgColor: 'bg-cyan-400',
      borderColor: 'border-black',
      textColor: 'text-black',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [`${categoryIndex}-${skillIndex}`]: skill.level
                }));
              }, (categoryIndex * 300) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 relative" ref={sectionRef}>
      {/* Brutalist background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-16 h-32 bg-lime-400 rotate-12 opacity-60" />
        <div className="absolute bottom-20 left-10 w-24 h-8 bg-pink-500 skew-y-12 opacity-70" />
        <Zap className="absolute top-1/3 right-1/3 w-10 h-10 text-yellow-400 opacity-50 animate-spin" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 brutalist-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            SKILLS
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-bold max-w-4xl mx-auto">
            A <span className="text-yellow-400 font-black">POWERFUL ARSENAL</span> of technologies for building 
            <span className="text-pink-500 font-black"> INTELLIGENT</span> applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`p-8 border-4 ${category.borderColor} ${category.bgColor} transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:-translate-y-4 group cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${categoryIndex * 200}ms`,
                boxShadow: '12px 12px 0px rgba(0,0,0,0.8)',
              }}
            >
              <div className="flex items-center justify-center mb-6 group-hover:animate-bounce">
                {category.icon}
              </div>
              <h3 className={`text-2xl font-black mb-6 ${category.textColor} uppercase tracking-wider text-center group-hover:animate-glitch`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const skillKey = `${categoryIndex}-${skillIndex}`;
                  const animatedLevel = animatedSkills[skillKey] || 0;
                  
                  return (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className={`${category.textColor} font-black text-sm uppercase tracking-wide group-hover/skill:animate-glitch`}>
                          {skill.name}
                        </span>
                        <span className={`${category.textColor} font-black text-sm`}>
                          {Math.round(animatedLevel)}%
                        </span>
                      </div>
                      <div className={`w-full ${category.textColor === 'text-black' ? 'bg-black' : 'bg-white'} h-4 border-2 border-black`}>
                        <div
                          className={`${category.textColor === 'text-black' ? 'bg-white' : 'bg-black'} h-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${animatedLevel}%` }}
                        >
                          <div className="absolute inset-0 animate-pulse opacity-50"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
