import React from 'react';
import { Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-emerald-900 mb-12">Connect with Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <a
              href="mailto:shamkheirbek@gmail.com"
              className="flex items-center justify-center space-x-2 text-emerald-800 hover:text-emerald-600"
            >
              <Mail className="w-5 h-5" />
              <span>shamkheirbek@gmail.com</span>
            </a>
            <div className="flex items-center justify-center space-x-2">
              <Instagram className="w-5 h-5 text-emerald-800" />
              <a
                href="https://instagram.com/yogawithsham"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-emerald-600"
              >
                @yogawithsham
              </a>
            </div>
            <a
              href="https://instagram.com/yogawithsham"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}