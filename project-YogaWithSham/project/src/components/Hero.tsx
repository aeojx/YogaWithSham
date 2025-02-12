import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/GfK1HSS1/yoga-sham-1.jpg"
          alt="Yoga with Sham - Peaceful yoga practice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 min-h-screen flex items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Flow with ease, breathe with intention
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join me on a journey of self-discovery through mindful movement and conscious breathing
          </p>
          <div className="space-x-4">
            <a
              href="#classes"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Book a Class
            </a>
            <a
              href="#about"
              className="inline-block bg-white/20 text-white px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}