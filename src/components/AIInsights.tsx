
import React, { useRef, useEffect, useState } from 'react';
import { TrendingUp, Target, Users, Lightbulb, Zap, Star } from 'lucide-react';

export const AIInsights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    seo: 0,
    conversion: 0,
    engagement: 0,
    suggestions: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const insights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: 'SEO POWER',
      value: '94%',
      description: 'OPTIMIZATION SCORE',
      trend: '+12% THIS MONTH',
      bgColor: 'bg-yellow-400',
      borderColor: 'border-black',
      textColor: 'text-black',
      counter: 'seo',
      target: 94,
    },
    {
      icon: <Target className="w-8 h-8 text-black" />,
      title: 'CONVERSION',
      value: '8.2%',
      description: 'AI-OPTIMIZED RATE',
      trend: '+2.4% BOOST',
      bgColor: 'bg-pink-500',
      borderColor: 'border-white',
      textColor: 'text-white',
      counter: 'conversion',
      target: 8.2,
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: 'ENGAGEMENT',
      value: '4.3m',
      description: 'SESSION DURATION',
      trend: '+18% INCREASE',
      bgColor: 'bg-cyan-400',
      borderColor: 'border-black',
      textColor: 'text-black',
      counter: 'engagement',
      target: 4.3,
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-black" />,
      title: 'AI MAGIC',
      value: '23',
      description: 'ACTIVE OPTIMIZATIONS',
      trend: 'LIVE MONITORING',
      bgColor: 'bg-lime-400',
      borderColor: 'border-black',
      textColor: 'text-black',
      counter: 'suggestions',
      target: 23,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          insights.forEach((insight, index) => {
            setTimeout(() => {
              const duration = 2000;
              const steps = 60;
              const increment = insight.target / steps;
              let current = 0;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= insight.target) {
                  current = insight.target;
                  clearInterval(timer);
                }
                setCounters(prev => ({
                  ...prev,
                  [insight.counter]: current
                }));
              }, duration / steps);
            }, index * 200);
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
    <section id="ai-insights" className="py-24 px-6 relative" ref={sectionRef}>
      {/* Brutalist background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-32 w-16 h-40 bg-yellow-400 rotate-12 opacity-50" />
        <div className="absolute bottom-40 left-20 w-28 h-8 bg-pink-500 skew-x-12 opacity-60" />
        <Zap className="absolute top-1/3 left-1/4 w-12 h-12 text-cyan-400 opacity-40 animate-bounce" />
        <Star className="absolute bottom-1/4 right-1/4 w-10 h-10 text-lime-400 opacity-50 animate-spin" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 brutalist-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            AI INSIGHTS
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 font-bold max-w-4xl mx-auto">
            <span className="text-yellow-400 font-black">REAL-TIME ANALYTICS</span> and machine learning insights 
            driving <span className="text-pink-500 font-black">CONTINUOUS OPTIMIZATION</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className={`p-6 border-4 ${insight.borderColor} ${insight.bgColor} transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:-translate-y-4 group cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: '8px 8px 0px rgba(0,0,0,0.8)',
              }}
            >
              <div className={`p-3 border-2 border-black ${insight.textColor === 'text-black' ? 'bg-white' : 'bg-black'} mb-4 group-hover:rotate-12 group-hover:animate-bounce transition-transform duration-300 inline-block`}>
                {insight.icon}
              </div>
              <h3 className={`text-2xl md:text-3xl font-black ${insight.textColor} mb-2 group-hover:animate-glitch uppercase tracking-wide`}>
                {insight.counter === 'seo' ? `${Math.round(counters.seo)}%` :
                 insight.counter === 'conversion' ? `${counters.conversion.toFixed(1)}%` :
                 insight.counter === 'engagement' ? `${counters.engagement.toFixed(1)}m` :
                 Math.round(counters.suggestions)}
              </h3>
              <p className={`${insight.textColor} font-black text-sm mb-2 uppercase tracking-wide`}>
                {insight.description}
              </p>
              <p className={`${insight.textColor} text-xs font-bold uppercase tracking-wider opacity-80`}>
                {insight.trend}
              </p>
            </div>
          ))}
        </div>

        <div className={`p-8 border-4 border-white bg-black transition-all duration-500 transform hover:scale-[1.02] hover:rotate-1 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} 
        style={{ 
          transitionDelay: '600ms',
          boxShadow: '12px 12px 0px rgba(255,255,255,0.3)',
        }}>
          <h3 className="text-3xl font-black text-white mb-8 flex items-center uppercase tracking-wide">
            <div className="p-2 bg-yellow-400 border-2 border-white mr-4 animate-pulse">
              <Lightbulb className="w-6 h-6 text-black" />
            </div>
            LATEST AI RECOMMENDATIONS
          </h3>
          <div className="space-y-6">
            {[
              {
                color: 'bg-yellow-400',
                title: 'OPTIMIZE META DESCRIPTIONS FOR BETTER CTR',
                description: 'POTENTIAL 15% IMPROVEMENT IN ORGANIC TRAFFIC'
              },
              {
                color: 'bg-cyan-400',
                title: 'IMPLEMENT LAZY LOADING FOR IMAGES',
                description: 'EXPECTED 0.8S REDUCTION IN PAGE LOAD TIME'
              },
              {
                color: 'bg-pink-500',
                title: 'ADD STRUCTURED DATA MARKUP',
                description: 'IMPROVE RICH SNIPPET APPEARANCE IN SEARCH'
              }
            ].map((rec, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-6 p-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-[1.02] hover:rotate-1 group ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className={`w-4 h-4 ${rec.color} border-2 border-white mt-1 flex-shrink-0 animate-pulse group-hover:rotate-45 transition-transform duration-300`}></div>
                <div>
                  <p className="text-white font-black text-lg uppercase tracking-wide group-hover:text-black transition-colors duration-300">
                    {rec.title}
                  </p>
                  <p className="text-gray-300 font-bold text-sm uppercase tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                    {rec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
