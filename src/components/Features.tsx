import React from 'react';
import { Zap, Shield, Clock, Cpu } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Get results in seconds with our advanced processing pipeline'
  },
  {
    icon: Shield,
    title: 'Reliable Detection',
    description: 'Industry-leading accuracy in identifying AI-generated content'
  },
  {
    icon: Clock,
    title: 'Real-time Processing',
    description: 'Process videos as they are uploaded with no waiting time'
  },
  {
    icon: Cpu,
    title: 'Advanced AI',
    description: 'Powered by state-of-the-art machine learning models'
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <feature.icon className="w-8 h-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}