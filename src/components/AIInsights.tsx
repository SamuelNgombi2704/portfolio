
import React from 'react';
import { TrendingUp, Target, Users, Lightbulb } from 'lucide-react';

export const AIInsights = () => {
  const insights = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'SEO Performance',
      value: '94%',
      description: 'Current optimization score',
      trend: '+12% this month',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Conversion Rate',
      value: '8.2%',
      description: 'AI-optimized conversions',
      trend: '+2.4% improvement',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Engagement',
      value: '4.3m',
      description: 'Average session duration',
      trend: '+18% increase',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'AI Suggestions',
      value: '23',
      description: 'Active optimizations',
      trend: 'Live monitoring',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="ai-insights" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI-Powered Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time analytics and machine learning insights driving continuous optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4`}>
                {insight.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{insight.value}</h3>
              <p className="text-gray-300 mb-2">{insight.description}</p>
              <p className="text-sm text-green-400 font-semibold">{insight.trend}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" />
            Latest AI Recommendations
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-medium">Optimize meta descriptions for better click-through rates</p>
                <p className="text-gray-400 text-sm">Potential 15% improvement in organic traffic</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-medium">Implement lazy loading for images below the fold</p>
                <p className="text-gray-400 text-sm">Expected 0.8s reduction in page load time</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-white font-medium">Add structured data markup for better search visibility</p>
                <p className="text-gray-400 text-sm">Improve rich snippet appearance in search results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
