import React from 'react';

const classes = [
  {
    title: 'Beginner-Friendly Yoga',
    description: 'Perfect for those starting their yoga journey. Learn fundamental poses and breathing techniques.',
    duration: '60 mins',
    level: 'Beginner'
  },
  {
    title: 'Conscious Breathing',
    description: 'Explore various pranayama techniques to enhance your breath awareness and energy flow.',
    duration: '45 mins',
    level: 'All Levels'
  },
  {
    title: 'Meditation Sessions',
    description: 'Guided meditation practices to cultivate mindfulness and inner peace.',
    duration: '30 mins',
    level: 'All Levels'
  },
  {
    title: 'Chakra Workshops',
    description: 'Deep dive into the energy centers of the body through specific poses and meditation.',
    duration: '90 mins',
    level: 'Intermediate'
  },
  {
    title: 'Corporate Wellness',
    description: 'Tailored programs for workplace wellness, including stress management and desk yoga.',
    duration: 'Custom',
    level: 'All Levels'
  }
];

export default function Classes() {
  return (
    <section id="classes" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-emerald-900 mb-12">Class Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{classItem.title}</h3>
                <p className="text-emerald-700 mb-4">{classItem.description}</p>
                <div className="flex justify-between text-sm text-emerald-600">
                  <span>{classItem.duration}</span>
                  <span>{classItem.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}