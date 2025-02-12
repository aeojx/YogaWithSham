import React from 'react';
import { Menu, Instagram } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-serif text-emerald-800">Yoga with Sham</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-emerald-900 hover:text-emerald-700">Home</a>
              <a href="#about" className="text-emerald-900 hover:text-emerald-700">About</a>
              <a href="#services" className="text-emerald-900 hover:text-emerald-700">Services</a>
              <a href="#classes" className="text-emerald-900 hover:text-emerald-700">Classes</a>
              <a href="#contact" className="text-emerald-900 hover:text-emerald-700">Contact</a>
              <a 
                href="https://instagram.com/yogawithsham" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-900 hover:text-emerald-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-emerald-900 hover:text-emerald-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}