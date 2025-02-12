import React from 'react';
import { Users, User, Building2, Brain, Wind, Flower2 as Lotus, Heart } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Private Sessions',
    description: 'One-on-one personalized yoga instruction tailored to your needs and goals.'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Join our community in energizing group sessions for all skill levels.'
  },
  {
    icon: Building2,
    title: 'Corporate Wellness',
    description: 'Bring wellness to your workplace with customized corporate programs.'
  },
  {
    icon: Brain,
    title: 'Meditation Guidance',
    description: 'Learn techniques to quiet the mind and find inner peace.'
  },
  {
    icon: Wind,
    title: 'Breathwork Instruction',
    description: 'Master the art of conscious breathing for enhanced wellbeing.'
  },
  {
    icon: Lotus,
    title: 'Chakra Activation',
    description: 'Balance and align your energy centers through focused practice.'
  },
  {
    icon: Heart,
    title: 'Wellbeing Coaching',
    description: 'Holistic guidance for achieving balance in body, mind, and spirit.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-emerald-900 mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-emerald-50 rounded-lg hover:shadow-lg transition-shadow">
              <service.icon className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">{service.title}</h3>
              <p className="text-emerald-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}