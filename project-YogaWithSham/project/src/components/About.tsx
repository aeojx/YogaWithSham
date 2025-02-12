import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://i.ibb.co/2rNPyRr/yoga-sham-2.jpg"
              alt="Yoga with Sham - Mindful practice"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-emerald-900 mb-6">About Sham</h2>
            <p className="text-emerald-800 mb-6">
              With over 10 years of dedicated yoga practice and teaching experience since 2021, 
              I bring a wealth of knowledge and passion to every session. My journey includes 
              completing an intensive certification program in Bali (2023) and becoming a 
              registered Yoga Alliance US teacher. I offer a transformative mind, body, and soul 
              experience that goes beyond traditional yoga practice, helping you discover inner 
              peace and balance in all aspects of life.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <span className="block w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <p>10+ years of yoga practice</p>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <span className="block w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <p>Teaching since 2021</p>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <span className="block w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <p>Certified in Bali (2023)</p>
              </div>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <span className="block w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
                <p>Registered Yoga Alliance US teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}