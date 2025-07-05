
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-yellow-400 font-black">
              SAMUEL NGOMBI
            </div>
            <p className="text-gray-400">
              Prêt à concrétiser vos projets numériques avec des solutions innovantes et des idées boostées par l’IA.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/SamuelNgombi2704"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-ngombi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="mailto:samuelngombi.work@gmail.com"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
