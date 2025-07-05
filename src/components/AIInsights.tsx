
import React, { useRef, useEffect, useState } from 'react';
import { TrendingUp, Target, Users, Lightbulb } from 'lucide-react';

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
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO Performance',
      value: '94%',
      description: 'Current optimization score',
      trend: '+12% this month',
      color: 'from-green-400 to-emerald-500',
      counter: 'seo',
      target: 94,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Conversion Rate',
      value: '8.2%',
      description: 'AI-optimized conversions',
      trend: '+2.4% improvement',
      color: 'from-blue-400 to-cyan-500',
      counter: 'conversion',
      target: 8.2,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Engagement',
      value: '4.3m',
      description: 'Average session duration',
      trend: '+18% increase',
      color: 'from-purple-400 to-pink-500',
      counter: 'engagement',
      target: 4.3,
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'AI Suggestions',
      value: '23',
      description: 'Active optimizations',
      trend: 'Live monitoring',
      color: 'from-yellow-400 to-orange-500',
      counter: 'suggestions',
      target: 23,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
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
    <section id="ai-insights" className="py-20 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics and machine learning insights driving continuous optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 transform-gpu`}>
                {insight.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {insight.counter === 'seo' ? `${Math.round(counters.seo)}%` :
                 insight.counter === 'conversion' ? `${counters.conversion.toFixed(1)}%` :
                 insight.counter === 'engagement' ? `${counters.engagement.toFixed(1)}m` :
                 Math.round(counters.suggestions)}
              </h3>
              <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">
                {insight.description}
              </p>
              <p className="text-sm text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">
                {insight.trend}
              </p>
            </div>
          ))}
        </div>

        <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Lightbulb className="w-6 h-6 mr-3 text-yellow-400 animate-pulse" />
            Latest AI Recommendations
          </h3>
          <div className="space-y-4">
            {[
              {
                color: 'bg-green-400',
                title: 'Optimize meta descriptions for better click-through rates',
                description: 'Potential 15% improvement in organic traffic'
              },
              {
                color: 'bg-blue-400',
                title: 'Implement lazy loading for images below the fold',
                description: 'Expected 0.8s reduction in page load time'
              },
              {
                color: 'bg-purple-400',
                title: 'Add structured data markup for better search visibility',
                description: 'Improve rich snippet appearance in search results'
              }
            ].map((rec, index) => (
              <div 
                key={index}
                className={`flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className={`w-2 h-2 ${rec.color} rounded-full mt-2 flex-shrink-0 animate-pulse`}></div>
                <div>
                  <p className="text-white font-medium hover:text-purple-300 transition-colors duration-300">
                    {rec.title}
                  </p>
                  <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
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
